namespace server.Features.orderItem;

public interface IOrderItemService
{
    Task<IEnumerable<OrderItemReadDto>> GetAllAsync();
    Task<OrderItemReadDto?> GetByIdAsync(int id);
    Task<OrderItemReadDto> CreateAsync(OrderItemCreateDto dto);
    Task<bool> UpdateAsync(int id, OrderItemUpdateDto dto);
    Task<bool> DeleteAsync(int id);
}
