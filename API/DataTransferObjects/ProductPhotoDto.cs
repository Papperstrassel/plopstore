using Microsoft.AspNetCore.Http;

namespace API.DataTransferObjects
{
    public class ProductPhotoDto
    {
        public IFormFile Photo { get; set; }
        
    }
}