using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams productParams)
            : base(x =>
                (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains 
                (productParams.Search) || x.ProductBrand.Name.ToLower().Contains(productParams.Search) || x.ShortDescription.ToLower().Contains(productParams.Search)
                || x.ProductType.Name.ToLower().Contains(productParams.Search)) 
                &&
                ((productParams.BrandIds.Count == 0) || productParams.BrandIds.Contains(x.ProductBrandId)) && 
                ((productParams.TypeIds.Count == 0) || productParams.TypeIds.Contains(x.ProductTypeId))
            )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            AddOrderBy(x => x.Name);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1),
                productParams.PageSize);

            if(!string.IsNullOrEmpty(productParams.Sort))
            {
                switch (productParams.Sort)
                {
                    case "priceAscending":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDescending":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(n => n.Name);
                        break;
                       
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}
