using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    [Table("users")]
    [Index(nameof(PasswordHash), IsUnique = true)]
    public class User
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        
        [Required]
        [Column("name")]
        public string Name { get; set; } = "";
        
        [Required]
        [Column("email")]
        [EmailAddress(ErrorMessage = "Email inválido, tente novamente")]
        public string Email { get; set; } = "";

        [Required]
        [Column("phone_number")]
        [StringLength(17, MinimumLength = 17, ErrorMessage = "O telefone deve ter exatamente 17 caracteres")]
        [RegularExpression(@"^\+\d{2}\s\d{2}\s\d{5}-\d{4}$", ErrorMessage = "O telefone deve estar no formato +55 81 99999-8888")]
        public string PhoneNumber { get; set; } = "";

        [Required]
        [Column("password_hash")]
        public string PasswordHash { get; set; } = ""; 
    }
}