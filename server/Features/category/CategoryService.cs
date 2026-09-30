using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.Features.category
{
    public class CategoryService(AppDbContext context) : ICategoryService
    {
        public async Task<CategoryReadDto> CreateAsync(CategoryCreateDto dto)
        {
            var category = dto.ToCreate();
            context.Categories.Add(category);
            await context.SaveChangesAsync();
            return category.ToRead();
        }

        public async Task<bool> DeleteAsync(int id)
        {
             var rowsAffected = await context.Categories
            .Where(c => c.Id == id)
            .ExecuteDeleteAsync();

            return rowsAffected > 0;
        }

        public async Task<IEnumerable<CategoryReadDto>> GetAllAsync()
        {
            return await context.Categories
            .AsNoTracking()
            .Select(c => c.ToRead())
            .ToListAsync();
        }

        public async Task<CategoryReadDto?> GetByIdAsync(int id)
        {
            return await context.Categories
            .AsNoTracking()
            .Where(c => c.Id == id)
            .Select(c => c.ToRead())
            .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateAsync(int id, CategoryUpdateDto dto)
        {
            var existingCategory = await context.Categories.FindAsync(id);
            if(existingCategory is null) return false;

            existingCategory.ToUpdate(dto);
            await context.SaveChangesAsync();

            return true;
        }
    }
}