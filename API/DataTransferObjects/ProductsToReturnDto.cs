using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DataTransferObjects
{
    public class ProductsToReturnDto
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string TechnicalDescription { get; set; }
        public Decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }

        public string productSKU { get; set; }

        public int NumberOfRatings { get; set; }
        public int ProductRatingScore { get; set; }
    }
}
