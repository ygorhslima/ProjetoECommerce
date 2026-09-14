using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    /// <summary>
    /// Representa a tabela de pedidos no banco de dados.
    /// </summary>
    [Table("orders")]
    public class Order
    {
        /// <summary>
        /// Identificador único do pedido (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Identificador do usuário que realizou o pedido (Chave Estrangeira).
        /// </summary>
        [Required]
        [Column("user_id")]
        public int UserId { get; set; }

        /// <summary>
        /// Propriedade de navegação para o usuário associado ao pedido.
        /// </summary>
        [ForeignKey(nameof(UserId))]
        public User? User { get; set; }

        /// <summary>
        /// Valor total acumulado do pedido.
        /// </summary>
        [Required]
        [Column("total_amount")]
        [Precision(18, 2)]
        public decimal TotalAmount { get; set; }

        /// <summary>
        /// Status atual do processamento do pedido (ex: "Pendente", "Pago", "Enviado").
        /// </summary>
        [Required]
        [Column("status")]
        public string Status { get; set; } = "";

        /// <summary>
        /// Data e hora de criação do registro do pedido.
        /// </summary>
        [Column("created_at")]
        public DateTime CreatedAt { get; set; }

        /// <summary>
        /// Coleção de itens pertencentes a este pedido (Relacionamento 1-N).
        /// </summary>
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}