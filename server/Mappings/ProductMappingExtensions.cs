using server.Dtos;
using server.Models;

namespace server.Mappings
{
    public static class ProductMappingExtensions
    {
        public static ProductReadDto ToRead(this Product product) => new(
            product.Id,
            product.CategoryId,
            product.Name,
            product.Price,
            product.OriginalPrice,
            product.ImageUrl,
            product.Rating,
            product.ReviewsCount,
            product.SoldCount,
            product.Badge
        );

        public static Product ToCreate(this ProductCreateDto dto)
        {
            return new()
            {
                CategoryId = dto.CategoryId,
                Name = dto.Name,
                Price = dto.Price,
                OriginalPrice = dto.OriginalPrice,
                Rating = dto.Rating,
                ReviewsCount = dto.ReviewsCount,
                SoldCount = dto.SoldCount,
                Badge = dto.Badge
            };
        }
        public static void ToUpdate(this Product product, ProductUpdateDto dto)
        {
            product.CategoryId = dto.CategoryId;
            product.Name = dto.Name;
            product.Price = dto.Price;
            product.OriginalPrice = dto.OriginalPrice;
            product.Rating = dto.Rating;
            product.ReviewsCount = dto.ReviewsCount;
            product.SoldCount = dto.SoldCount;
            product.Badge = dto.Badge;
        }
    }
}