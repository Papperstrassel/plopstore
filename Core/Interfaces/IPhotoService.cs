using System.Threading.Tasks;
using CloudinaryDotNet.Actions;
using Core.Entities;
using Microsoft.AspNetCore.Http;

namespace Core.Interfaces
{
    public interface IPhotoService
    {
         Task<Photo> AddImageAsync(IFormFile file);
         Task<DeletionResult> DeleteImageAsync(string publicId);
      
    }
}