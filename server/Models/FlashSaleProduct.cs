using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    /// <summary>
    /// Representa a associação de um produto a uma oferta relâmpago (Flash Sale) no banco de dados.
    /// </summary>
    [Table("flashsale_products")]
    public class FlashSaleProduct
    {
        /// <summary>
        /// Identificador único da oferta relâmpago do produto (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Identificador do produto cadastrado na oferta (Chave Estrangeira).
        /// </summary>
        [Required]
        [Column("product_id")]
        public int ProductId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o produto associado.
        /// </summary>
        [ForeignKey(nameof(ProductId))]
        public Product? Product { get; set; }

        /// <summary>
        /// Preço promocional com desconto aplicado durante o período da oferta.
        /// </summary>
        [Required]
        [Precision(18,2)]
        [Column("discount_price")]
        [Range(0.01, 9999999.99, ErrorMessage = "O preço promocional deve ser maior que zero.")]
        public decimal DiscountPrice { get; set; }

        /// <summary>
        /// Data e hora de início da oferta relâmpago.
        /// </summary>
        [Required]
        [Column("start_time")]
        public DateTime StartTime { get; set; }

        /// <summary>
        /// Data e hora de término da oferta relâmpago.
        /// </summary>
        [Required]
        [Column("end_time")]
        public DateTime EndTime { get; set; }
    }
}