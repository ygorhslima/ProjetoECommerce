using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    /// <summary>
    /// Representa um item no carrinho de compras do usuário no banco de dados.
    /// </summary>
    [Table("cart_items")]
    public class CartItem
    {
        /// <summary>
        /// Identificador único do item no carrinho (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Identificador do usuário proprietário do carrinho (Chave Estrangeira).
        /// </summary>
        [Column("user_id")]
        public int UserId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o usuário associado ao carrinho.
        /// </summary>
        [ForeignKey(nameof(UserId))]
        public User? User { get; set; }

        /// <summary>
        /// Identificador do produto adicionado ao carrinho (Chave Estrangeira).
        /// </summary>
        [Column("product_id")]
        public int ProductId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o produto associado ao item.
        /// </summary>
        [ForeignKey(nameof(ProductId))]
        public Product? Product { get; set; }

        /// <summary>
        /// Quantidade selecionada do produto no carrinho.
        /// </summary>
        [Column("quantity")]
        public int Quantity { get; set; }
    }
}