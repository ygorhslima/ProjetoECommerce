using System.ComponentModel.DataAnnotations;

namespace server.Features.order;

public record OrderReadDto(int Id, int UserId, decimal TotalAmount, string Status, DateTime CreatedAt);

public record OrderCreateDto(
    [Range(1, int.MaxValue)] int UserId,
    [Range(0, double.MaxValue)] decimal TotalAmount,
    [Required] string Status
);

public record OrderUpdateDto(
    [Range(1, int.MaxValue)] int UserId,
    [Range(0, double.MaxValue)] decimal TotalAmount,
    [Required] string Status
);
