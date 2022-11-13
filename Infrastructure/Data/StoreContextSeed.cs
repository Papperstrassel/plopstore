
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                if (!context.ProductBrands.Any())
                {
                    var brandsData = 
                        File.ReadAllText(path + @"/Data/SeedData/Brands.json");

                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach(var item in brands)
                    {
                        context.ProductBrands.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.ProductTypes.Any())
                {
                    var typesData =
                        File.ReadAllText(path + @"/Data/SeedData/Types.json");

                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach (var item in types)
                    {
                        context.ProductTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

             

                if (!context.Products.Any())
                {
                    var productsData =
                        File.ReadAllText(path + @"/Data/SeedData/Products.json");

                    var products = JsonSerializer.Deserialize<List<ProductSeedModel>>(productsData);

                    foreach (var item in products)
                    {
                        var pictureFileName = item.PictureUrl.Substring(16);
                        var product = new Product
                        {
                            Name = item.Name,
                            ShortDescription = item.ShortDescription,
                            Description = item.Description,
                            TechnicalDescription = item.TechnicalDescription,
                            Price = item.Price,
                            ProductTypeId = item.ProductTypeId,
                            ProductBrandId = item.ProductBrandId,
                            ProductSKU = item.ProductSKU,
                            ProductRatingScore = item.ProductRatingScore,
                            NumberOfRatings = item.NumberOfRatings
                        };
                        product.AddPhoto(item.PictureUrl, pictureFileName, "Seed product image id");
                        context.Products.Add(product);
                    }

                    await context.SaveChangesAsync();
                }



                if (!context.DeliveryMethods.Any())
                {
                    var dmData =
                        File.ReadAllText(path + @"/Data/SeedData/Delivery.json");

                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

                    foreach (var item in methods)
                    {
                        context.DeliveryMethods.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            
            catch(Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}
