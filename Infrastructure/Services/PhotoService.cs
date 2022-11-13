using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Services
{
    public class PhotoService : IPhotoService
    {
        private readonly Cloudinary _cloudinary;

        public PhotoService(IConfiguration config)
        {
            var acc = new Account
            (
                config["CloudinarySettings:CloudName"],
                config["CloudinarySettings:ApiKey"],
                config["CloudinarySettings:ApiSecret"]
            );

            _cloudinary = new Cloudinary(acc);
        }

        public async Task<Photo> AddImageAsync(IFormFile file)
        {
            var uploadResult = new ImageUploadResult();

            var photo = new Photo();

            if(file.Length > 0)
            {
                using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream)
                };
                uploadResult = await _cloudinary.UploadAsync(uploadParams);

                photo.FileName = uploadResult.OriginalFilename;
                photo.PictureUrl = uploadResult.SecureUrl.ToString();
                photo.PublicId = uploadResult.PublicId;

                return photo;
            }

            return null;
        }

        public async Task<DeletionResult> DeleteImageAsync(string publicId)
        {
           var deleteParams = new DeletionParams(publicId);

           var result = await _cloudinary.DestroyAsync(deleteParams);

           return result;
        }
    }
}