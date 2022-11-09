using API.DataTransferObjects;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductsToReturnDto, string>
    {
        private readonly IConfiguration _config;
        public ProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(Product source, ProductsToReturnDto destination, string destMember,
        ResolutionContext context)
        {
            var photo = source.Photos.FirstOrDefault(x => x.IsMain);

            if(photo != null)
            {
                return _config["ApiUrl"] + photo.PictureUrl;
            }

            return _config["ApiUrl"] + "images/products/placeholder.png";
        }
    }
}
