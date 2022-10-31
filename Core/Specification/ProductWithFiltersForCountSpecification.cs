using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams productParams)
            : base(x =>
                (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains 
                (productParams.Search) || x.ProductBrand.Name.ToLower().Contains(productParams.Search) || x.ShortDescription.ToLower().Contains(productParams.Search)
                || x.ProductType.Name.ToLower().Contains(productParams.Search)) 
                &&
                ((productParams.BrandIds.Count == 0) || productParams.BrandIds.Contains(x.ProductBrandId)) && 
                ((productParams.TypeIds.Count == 0) || productParams.TypeIds.Contains(x.ProductTypeId))
            )
        {

        }
    }
}
