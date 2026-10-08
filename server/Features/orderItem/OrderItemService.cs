using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.Features.orderItem;

public class OrderItemService(AppDbContext context) : IOrderItemService
{
    public async Task<OrderItemReadDto> CreateAsync(OrderItemCreateDto dto)
    {
        var orderItem = dto.ToCreate();
        context.OrderItems.Add(orderItem);
        await context.SaveChangesAsync();
        return orderItem.ToRead();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var rowsAffected = await context.OrderItems
            .Where(orderItem => orderItem.Id == id)
            .ExecuteDeleteAsync();

        return rowsAffected > 0;
    }

    public async Task<IEnumerable<OrderItemReadDto>> GetAllAsync()
    {
        return await context.OrderItems
            .AsNoTracking()
            .Select(orderItem => orderItem.ToRead())
            .ToListAsync();
    }

    public async Task<OrderItemReadDto?> GetByIdAsync(int id)
    {
        return await context.OrderItems
            .AsNoTracking()
            .Where(orderItem => orderItem.Id == id)
            .Select(orderItem => orderItem.ToRead())
            .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateAsync(int id, OrderItemUpdateDto dto)
    {
        var existingOrderItem = await context.OrderItems.FindAsync(id);
        if (existingOrderItem is null) return false;

        existingOrderItem.ToUpdate(dto);
        await context.SaveChangesAsync();
        return true;
    }
}
