using System.ComponentModel.DataAnnotations;

namespace server.Features.orderItem;

public record OrderItemReadDto(int Id, int OrderId, int ProductId, decimal Price, int Quantity);

public record OrderItemCreateDto(
    [Range(1, int.MaxValue)] int OrderId,
    [Range(1, int.MaxValue)] int ProductId,
    [Range(0, double.MaxValue)] decimal Price,
    [Range(1, int.MaxValue)] int Quantity
);

public record OrderItemUpdateDto(
    [Range(1, int.MaxValue)] int OrderId,
    [Range(1, int.MaxValue)] int ProductId,
    [Range(0, double.MaxValue)] decimal Price,
    [Range(1, int.MaxValue)] int Quantity
);
