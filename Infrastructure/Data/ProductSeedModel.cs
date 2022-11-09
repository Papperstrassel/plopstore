using System;

namespace Infrastructure.Data
{
    public class ProductSeedModel
    {
        public string Name { get; set; }

        public string ShortDescription { get; set; }
        public string Description { get; set; }

        public string TechnicalDescription { get; set; }

        public string PictureUrl { get; set; }
        public Decimal Price { get; set; }

        public int ProductTypeId { get; set; }

        public int ProductBrandId { get; set; }

        public int ProductSKU { get; set; }

        public int ProductRatingScore { get; set; }

        public int NumberOfRatings { get; set; }
    }
}