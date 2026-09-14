using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    /// <summary>
    /// Representa um item individual pertencente a um pedido no banco de dados.
    /// </summary>
    [Table("order_items")]
    public class OrderItem
    {
        /// <summary>
        /// Identificador único do item do pedido (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Identificador do pedido ao qual este item pertence (Chave Estrangeira).
        /// </summary>
        [Column("order_id")]
        public int OrderId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o pedido associado.
        /// </summary>
        [ForeignKey(nameof(OrderId))]
        public Order? Order { get; set; }

        /// <summary>
        /// Identificador do produto associado a este item (Chave Estrangeira).
        /// </summary>
        [Column("product_id")]
        public int ProductId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o produto associado.
        /// </summary>
        [ForeignKey(nameof(ProductId))]
        public Product? Product { get; set; }

        /// <summary>
        /// Preço unitário do produto no momento da compra.
        /// </summary>
        [Required]
        [Column("price")]
        [Precision(18, 2)]
        public decimal Price { get; set; }

        /// <summary>
        /// Quantidade comprada do produto neste item.
        /// </summary>
        [Required]
        [Column("quantity")]
        public int Quantity { get; set; }
    }
}