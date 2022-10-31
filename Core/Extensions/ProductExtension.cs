using System.Collections.Generic;
using System.Linq;
using Core.Entities;

namespace Core.Extensions
{
    public static class ProductExtension
    {
        public static IQueryable<Product> Filter(this IQueryable<Product> query, List<int> brandIds, List<int> typeIds)
        {
            var brandIdList = new List<int>();
            var typeIdList = new List<int>();

            if(brandIds.Count > 0)
            {
                brandIdList.AddRange(brandIds);
            }
            if(typeIds.Count > 0)
            {
                typeIdList.AddRange(typeIds);
            }

            query = query.Where(p => brandIdList.Count == 0 || brandIdList.Contains(p.ProductBrandId));
            query = query.Where(p => typeIdList.Count == 0 || typeIdList.Contains(p.ProductTypeId));

            return query;
        }
    }
}