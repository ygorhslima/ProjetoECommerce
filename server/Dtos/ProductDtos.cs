using System.ComponentModel.DataAnnotations;
namespace server.Dtos;

public record ProductReadDto(
    int Id,
    int CategoryId,
    string Name,
    decimal Price,
    decimal OriginalPrice,
    string ImageUrl,
    int Rating,
    int ReviewsCount,
    int SoldCount,
    string Badge
);

public record ProductCreateDto(
    [Required] int CategoryId,
    [Required] string Name,
    [Required] decimal Price,
    [Required] decimal OriginalPrice,
    string? ImageUrl,
    [Required] int Rating,
    [Required] int ReviewsCount,
    [Required] int SoldCount,
    [Required] string Badge
);

public record ProductUpdateDto(
    [Required] int CategoryId,
    [Required] string Name,
    [Required] decimal Price,
    [Required] decimal OriginalPrice,
    string? ImageUrl,
    [Required] int Rating,
    [Required] int ReviewsCount,
    [Required] int SoldCount,
    [Required] string Badge
);

public record ProductDeleteDto(
    [Required] int CategoryId,
    [Required] string Name,
    [Required] decimal Price,
    [Required] decimal OriginalPrice,
    string? ImageUrl,
    [Required] int Rating,
    [Required] int ReviewsCount,
    [Required] int SoldCount,
    [Required] string Badge
);