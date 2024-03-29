﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace Core.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }

        public string ShortDescription { get; set; }
        public string Description { get; set; }

        public string TechnicalDescription { get; set; }
        public Decimal Price { get; set; }
        public ProductType ProductType { get; set; }

        public int ProductTypeId { get; set; }
        public ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }

        public int ProductSKU { get; set; }

        public int ProductRatingScore { get; set; }

        public int NumberOfRatings { get; set; }

        private readonly List<Photo> _photos = new List<Photo>();
        public IReadOnlyList<Photo> Photos => _photos.AsReadOnly();


        public void AddPhoto(string pictureUrl, string fileName, string publicId , bool isMain = false)
        {
            var photo = new Photo
            {
                FileName = fileName,
                PictureUrl = pictureUrl,
                PublicId = publicId
            };

            if (_photos.Count == 0)
            {
                photo.IsMain = true;
            }

            _photos.Add(photo);
        }

        public void RemovePhoto(int id)
        {
            var photo = _photos.Find(x => x.Id == id);
            _photos.Remove(photo);
        }

         public void SetMainPhoto(int id)
        {
            var currentMain = _photos.SingleOrDefault(item => item.IsMain);
            foreach (var item in _photos.Where(item => item.IsMain))
            {
                item.IsMain = false;
            }
            
            var photo = _photos.Find(x => x.Id == id);
            if (photo != null)
            {
                photo.IsMain = true;
                if (currentMain != null)
                {
                    currentMain.IsMain = false;
                } 
            }
        }
    }
}
