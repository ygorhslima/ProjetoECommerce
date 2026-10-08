using System.ComponentModel.DataAnnotations;

namespace server.Features.cartItem;

public record CartItemReadDto(int Id, int UserId, int ProductId, int Quantity);

public record CartItemCreateDto(
    [Range(1, int.MaxValue)] int UserId,
    [Range(1, int.MaxValue)] int ProductId,
    [Range(1, int.MaxValue)] int Quantity
);

public record CartItemUpdateDto(
    [Range(1, int.MaxValue)] int UserId,
    [Range(1, int.MaxValue)] int ProductId,
    [Range(1, int.MaxValue)] int Quantity
);
