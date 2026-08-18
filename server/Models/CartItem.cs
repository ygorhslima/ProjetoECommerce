using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("cart_items")]
    public class CartItem
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }
        
        [ForeignKey(nameof(UserId))]
        public User? User { get; set; }

        [Column("product_id")]
        public int ProductId { get; set; }
        
        [ForeignKey(nameof(ProductId))]
        public Product? Product { get; set; }

        [Column("quantity")]
        public int Quantity { get; set; }
    }
}