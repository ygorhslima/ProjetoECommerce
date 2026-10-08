using server.Models;

namespace server.Features.orderItem;

public static class OrderItemMappingExtensions
{
    public static OrderItemReadDto ToRead(this OrderItem orderItem) =>
        new(orderItem.Id, orderItem.OrderId, orderItem.ProductId, orderItem.Price, orderItem.Quantity);

    public static OrderItem ToCreate(this OrderItemCreateDto dto) => new()
    {
        OrderId = dto.OrderId,
        ProductId = dto.ProductId,
        Price = dto.Price,
        Quantity = dto.Quantity
    };

    public static void ToUpdate(this OrderItem orderItem, OrderItemUpdateDto dto)
    {
        orderItem.OrderId = dto.OrderId;
        orderItem.ProductId = dto.ProductId;
        orderItem.Price = dto.Price;
        orderItem.Quantity = dto.Quantity;
    }
}
