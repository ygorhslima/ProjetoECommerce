using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.Features.product
{
    public class ProductService(AppDbContext context) : IProductService
    {
        public async Task<ProductReadDto> CreateAsync(ProductCreateDto dto)
        {
            var product = dto.ToCreate();
            context.Products.Add(product);
            await context.SaveChangesAsync();
            return product.ToRead();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var rowsAffected = await context.Products
            .Where(p => p.Id == id)
            .ExecuteDeleteAsync();

            return rowsAffected > 0;
        }

        public async Task<IEnumerable<ProductReadDto>> GetAllAsync()
        {
            return await context.Products
            .AsNoTracking()
            .Select(p=> p.ToRead())
            .ToListAsync();
        }

        public async Task<ProductReadDto?> GetByIdAsync(int id)
        {
             return await context.Products
            .AsNoTracking()
            .Where(p => p.Id == id)
            .Select(p => p.ToRead())
            .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateAsync(int id, ProductUpdateDto dto)
        {
            var existingProduct = await context.Products.FindAsync(id);
            if(existingProduct is null) return false;

            existingProduct.ToUpdate(dto);
            await context.SaveChangesAsync();

            return true;
        }
    }
}