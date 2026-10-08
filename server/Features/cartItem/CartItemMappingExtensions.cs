using server.Models;

namespace server.Features.cartItem;

public static class CartItemMappingExtensions
{
    public static CartItemReadDto ToRead(this CartItem cartItem) =>
        new(cartItem.Id, cartItem.UserId, cartItem.ProductId, cartItem.Quantity);

    public static CartItem ToCreate(this CartItemCreateDto dto) => new()
    {
        UserId = dto.UserId,
        ProductId = dto.ProductId,
        Quantity = dto.Quantity
    };

    public static void ToUpdate(this CartItem cartItem, CartItemUpdateDto dto)
    {
        cartItem.UserId = dto.UserId;
        cartItem.ProductId = dto.ProductId;
        cartItem.Quantity = dto.Quantity;
    }
}
