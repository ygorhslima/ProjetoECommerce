using server.Models;

namespace server.Features.order;

public static class OrderMappingExtensions
{
    public static OrderReadDto ToRead(this Order order) =>
        new(order.Id, order.UserId, order.TotalAmount, order.Status, order.CreatedAt);

    public static Order ToCreate(this OrderCreateDto dto) => new()
    {
        UserId = dto.UserId,
        TotalAmount = dto.TotalAmount,
        Status = dto.Status,
        CreatedAt = DateTime.UtcNow
    };

    public static void ToUpdate(this Order order, OrderUpdateDto dto)
    {
        order.UserId = dto.UserId;
        order.TotalAmount = dto.TotalAmount;
        order.Status = dto.Status;
    }
}
