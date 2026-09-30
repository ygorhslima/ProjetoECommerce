using server.Models;

namespace server.Features.category
{
    public static class CategoryMappingExtensions
    {
        public static CategoryReadDto ToRead(this Category category) => new (category.Id,category.Name);

        public static Category ToCreate(this CategoryCreateDto dto) => new(){Name = dto.Name};

        public static void ToUpdate(this Category category, CategoryUpdateDto dto) => category.Name = dto.Name;
    }
}