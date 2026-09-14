using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    /// <summary>
    /// Representa a tabela de usuários no banco de dados.
    /// </summary>
    [Table("users")]
    [Index(nameof(PasswordHash), IsUnique = true)]
    public class User
    {
        /// <summary>
        /// Identificador único do usuário (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Nome completo do usuário.
        /// </summary>
        [Required]
        [Column("name")]
        [StringLength(255)]
        public string Name { get; set; } = "";

        /// <summary>
        /// Endereço de e-mail do usuário utilizado para autenticação e contato.
        /// </summary>
        [Required]
        [Column("email")]
        [EmailAddress(ErrorMessage = "Email inválido, tente novamente")]
        [StringLength(320)]
        public string Email { get; set; } = "";

        /// <summary>
        /// Número de telefone do usuário no formato especificado (+55 99 99999-8888).
        /// </summary>
        [Required]
        [Column("phone_number")]
        [StringLength(17, MinimumLength = 17, ErrorMessage = "O telefone deve ter exatamente 17 caracteres")]
        [RegularExpression(@"^\+\d{2}\s\d{2}\s\d{5}-\d{4}$", ErrorMessage = "O telefone deve estar no formato +55 81 99999-8888")]
        public string PhoneNumber { get; set; } = "";

        /// <summary>
        /// Hash criptográfico da senha do usuário para autenticação segura.
        /// </summary>
        [Required]
        [Column("password_hash")]
        public string PasswordHash { get; set; } = ""; 
    }
}