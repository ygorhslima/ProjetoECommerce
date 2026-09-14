using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    /// <summary>
    /// Representa a tabela de produtos favoritados no banco de dados.
    /// </summary>
    [Table("favorites")]
    public class Favorite
    {
        /// <summary>
        /// Identificador único do registro de favorito (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Identificador do produto marcado como favorito (Chave Estrangeira).
        /// </summary>
        [Column("product_id")]
        [Required]
        public int ProductId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o produto favoritado.
        /// </summary>
        [ForeignKey(nameof(ProductId))]
        public Product? Product { get; set; }
    }
}