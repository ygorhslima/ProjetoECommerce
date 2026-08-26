using System.ComponentModel.DataAnnotations;

namespace server.Dtos;

public record UserReadDto(
    int Id,
    string Name,
    string Email,
    string PhoneNumber
);

public record UserCreateDto(
    [Required] string Name,

    [Required][EmailAddress(ErrorMessage = "Email inválido")] string Email,

    [Required]
    [StringLength(17, MinimumLength = 17, ErrorMessage = "O telefone deve ter exatamente 17 caracteres")]
    [RegularExpression(@"^\+\d{2}\s\d{2}\s\d{5}-\d{4}$", ErrorMessage = "O telefone deve estar no formato +55 81 99999-8888")]
    string PhoneNumber,
    [Required] string PasswordHash
);

public record UserUpdateDto(
    [Required] string Name,
    [Required][EmailAddress(ErrorMessage = "Email inválido")] string Email,
    
    [Required]
    [StringLength(17, MinimumLength = 17, ErrorMessage = "O telefone deve ter exatamente 17 caracteres")]
    [RegularExpression(@"^\+\d{2}\s\d{2}\s\d{5}-\d{4}$", ErrorMessage = "O telefone deve estar no formato +55 81 99999-8888")]
    string PhoneNumber
);
