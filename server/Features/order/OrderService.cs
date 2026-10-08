using Microsoft.EntityFrameworkCore;
using server.Data;

namespace server.Features.order;

public class OrderService(AppDbContext context) : IOrderService
{
    public async Task<OrderReadDto> CreateAsync(OrderCreateDto dto)
    {
        var order = dto.ToCreate();
        context.Orders.Add(order);
        await context.SaveChangesAsync();
        return order.ToRead();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var rowsAffected = await context.Orders
            .Where(order => order.Id == id)
            .ExecuteDeleteAsync();

        return rowsAffected > 0;
    }

    public async Task<IEnumerable<OrderReadDto>> GetAllAsync()
    {
        return await context.Orders
            .AsNoTracking()
            .Select(order => order.ToRead())
            .ToListAsync();
    }

    public async Task<OrderReadDto?> GetByIdAsync(int id)
    {
        return await context.Orders
            .AsNoTracking()
            .Where(order => order.Id == id)
            .Select(order => order.ToRead())
            .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateAsync(int id, OrderUpdateDto dto)
    {
        var existingOrder = await context.Orders.FindAsync(id);
        if (existingOrder is null) return false;

        existingOrder.ToUpdate(dto);
        await context.SaveChangesAsync();
        return true;
    }
}
