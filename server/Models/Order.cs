using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("orders")]
    public class Order
    {
        [Key]
        [Column("id")]
        public int Id {get;set;}
        
        [Required]
        [Column("user_id")]
        public int UserId {get;set;}
        
        [ForeignKey(nameof(UserId))]
        public User? User {get;set;}

        [Required]
        [Column("total_amount")]
        public decimal TotalAmount {get;set;}
        
        [Required]
        [Column("status")]
        public string Status {get;set;} = "";
    
        [Column("created_at")]
        public DateTime CreatedAt {get;set;}
    }
}