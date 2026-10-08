using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.Features.cartItem;

public class CartItemService(AppDbContext context) : ICartItemService
{
    public async Task<CartItemReadDto> CreateAsync(CartItemCreateDto dto)
    {
        var cartItem = dto.ToCreate();
        context.CartItems.Add(cartItem);
        await context.SaveChangesAsync();
        return cartItem.ToRead();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var rowsAffected = await context.CartItems
            .Where(cartItem => cartItem.Id == id)
            .ExecuteDeleteAsync();

        return rowsAffected > 0;
    }

    public async Task<IEnumerable<CartItemReadDto>> GetAllAsync()
    {
        return await context.CartItems
            .AsNoTracking()
            .Select(cartItem => cartItem.ToRead())
            .ToListAsync();
    }

    public async Task<CartItemReadDto?> GetByIdAsync(int id)
    {
        return await context.CartItems
            .AsNoTracking()
            .Where(cartItem => cartItem.Id == id)
            .Select(cartItem => cartItem.ToRead())
            .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateAsync(int id, CartItemUpdateDto dto)
    {
        var existingCartItem = await context.CartItems.FindAsync(id);
        if (existingCartItem is null) return false;

        existingCartItem.ToUpdate(dto);
        await context.SaveChangesAsync();
        return true;
    }
}
