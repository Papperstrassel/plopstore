using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace API.DataTransferObjects
{
    public class ProductCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string ShortDescription { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string TechnicalDescription { get; set; }

        [Required]
        [RegularExpression(@"^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$", 
            ErrorMessage = "Price must be a decimal (e.g 20.30)")]
        public decimal Price { get; set; }

        //[Required]
        public string PictureUrl { get; set; }
        
        public IFormFile file { get; set; }

        [Required]
        public int ProductTypeId { get; set; }

        [Required]
        public int ProductBrandId { get; set; }

        [Required]
         public int ProductSKU { get; set; }

         [Required]
         public int ProductRatingScore { get; set; }

        [Required]
         public int NumberOfRatings { get; set; }


    }
}