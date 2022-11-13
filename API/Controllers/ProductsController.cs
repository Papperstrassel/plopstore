
using API.DataTransferObjects;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IPhotoService _photoService;

        public ProductsController(IUnitOfWork unitOfWork, IMapper mapper, IPhotoService photoService)
        {
           _unitOfWork = unitOfWork;
            _mapper = mapper;
            _photoService = photoService;
        }
        
        //[Cached(600)]
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductsToReturnDto>>> GetProducts(
            [FromQuery]ProductSpecParams productParams)
        {
            
            var spec = new ProductsWithTypesAndBrandsSpecification(productParams);

            var countSpec = new ProductWithFiltersForCountSpecification(productParams);

            var totalItems = await _unitOfWork.Repository<Product>().CountAsync(countSpec);

            var products = await _unitOfWork.Repository<Product>().ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductsToReturnDto>>(products);

            return Ok(new Pagination<ProductsToReturnDto>(productParams.PageIndex,
                productParams.PageSize, totalItems, data));
        
        }

        [Cached(600)]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductsToReturnDto>> GetProduct(int id)
        {

            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpecification(spec);

            if(product == null)
            {
                return NotFound(new ApiResponse(404));
            }

            return _mapper.Map<Product, ProductsToReturnDto>(product);
        }

        [Cached(600)]
        [HttpGet("Brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            //Old way of returning products.
            //var productBrand = await _repo.GetProductBrandAsync();
            //return Ok(productBrand);

            return Ok(await _unitOfWork.Repository<ProductBrand>().ListAllAsync());
        }
        
        [Cached(600)]
        [HttpGet("Types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            //Old way of returning products. 
            //var productTypes = await _repo.GetProductTypeAsync();
            //return  Ok(productTypes);

            return Ok(await _unitOfWork.Repository<ProductType>().ListAllAsync());
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductsToReturnDto>> CreateProduct(ProductCreateDto productToCreate)
        {
            var product = _mapper.Map<ProductCreateDto, Product>(productToCreate);
      

            _unitOfWork.Repository<Product>().Add(product);

            var result = await _unitOfWork.Complete();

            if(result <= 0)
            {
                return BadRequest(new ApiResponse(400, "Problem creating product."));
            }

            return _mapper.Map<Product, ProductsToReturnDto>(product);
        }

        [HttpPut("{id}/photo")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductsToReturnDto>> AddProductPhoto(int id, [FromForm]ProductPhotoDto photoDto)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpecification(spec);

            if(photoDto.Photo.Length > 0)
            {
                var photo = await _photoService.AddImageAsync(photoDto.Photo);

                if(photo != null)
                {
                    product.AddPhoto(photo.PictureUrl, photo.FileName, photo.PublicId);

                    _unitOfWork.Repository<Product>().Update(product);

                    var result = await _unitOfWork.Complete();

                    if(result <= 0)
                    {
                        return BadRequest(new ApiResponse(400, "Problem adding photo"));
                    }
                }
                else
                {
                    return BadRequest(new ApiResponse(400, "Problem saving photo."));
                }
            }

            return _mapper.Map<Product, ProductsToReturnDto>(product);
        }

        [HttpDelete("{id}/photo/{photoId}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeleteProductPhoto(int id, int photoId)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpecification(spec);

            var photo = product.Photos.SingleOrDefault(x => x.Id == photoId);

            if(photo != null)
            {
                if(photo.IsMain)
                {
                    return BadRequest(new ApiResponse(400, "You cannot delete the main photo"));
                }
                await _photoService.DeleteImageAsync(photo.PublicId);
            }
            else 
            {
                return BadRequest(new ApiResponse(400, "Photo does not exist"));
            }

            product.RemovePhoto(photoId);

            _unitOfWork.Repository<Product>().Update(product);

            var result = await _unitOfWork.Complete();

            if(result <= 0)
            {
                return BadRequest(new ApiResponse(400, "Problem adding photo product."));
            }

            return Ok();
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductsToReturnDto>> UpdateProduct(int id, ProductCreateDto productToUpdate)
        {
            var product = await _unitOfWork.Repository<Product>().GetByIdAsync(id);

            _mapper.Map(productToUpdate, product);

            _unitOfWork.Repository<Product>().Update(product);

            var result = await _unitOfWork.Complete();

            if(result <= 0)
            {
                return BadRequest(new ApiResponse(400, "Problem updating product."));
            }

            return _mapper.Map<Product, ProductsToReturnDto>(product);
        }

        [HttpPost("{id}/photo/{photoId}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductsToReturnDto>> SetMainPhoto(int id, int photoId)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpecification(spec);

            if(product.Photos.All(x => x.Id != photoId))
            {
                return NotFound();
            }

            product.SetMainPhoto(photoId);

            _unitOfWork.Repository<Product>().Update(product);

            var result = await _unitOfWork.Complete();

            if(result <= 0)
            {
                return BadRequest(new ApiResponse(400, "Problem adding photo."));
            }

            return _mapper.Map<Product, ProductsToReturnDto>(product);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var product = await _unitOfWork.Repository<Product>().GetByIdAsync(id);

            _unitOfWork.Repository<Product>().Delete(product);

            var result = await _unitOfWork.Complete();

            if(result <= 0)
            {
                return BadRequest(new ApiResponse(400, "problem deleting product."));
            }

            return Ok();
        }
    }
}
