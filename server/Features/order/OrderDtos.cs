using System.ComponentModel.DataAnnotations;

namespace server.Features.order;

public record OrderReadDto(
    int Id,
    int UserId,
    int? ProductId,
    int Quantity,
    decimal TotalAmount,
    string Status,
    DateTime CreatedAt
);

public record OrderCreateDto(
    [Range(1, int.MaxValue)] int UserId,
    [Range(1, int.MaxValue)] int ProductId,
    [Range(1, int.MaxValue)] int Quantity,
    [Range(0, double.MaxValue)] decimal TotalAmount,
    [Required] string Status
);

public record OrderUpdateDto(
    [Range(1, int.MaxValue)] int UserId,
    [Range(1, int.MaxValue)] int ProductId,
    [Range(1, int.MaxValue)] int Quantity,
    [Range(0, double.MaxValue)] decimal TotalAmount,
    [Required] string Status
);
