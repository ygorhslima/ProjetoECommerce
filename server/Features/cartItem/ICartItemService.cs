namespace server.Features.cartItem;

public interface ICartItemService
{
    Task<IEnumerable<CartItemReadDto>> GetAllAsync();
    Task<CartItemReadDto?> GetByIdAsync(int id);
    Task<CartItemReadDto> CreateAsync(CartItemCreateDto dto);
    Task<bool> UpdateAsync(int id, CartItemUpdateDto dto);
    Task<bool> DeleteAsync(int id);
}
