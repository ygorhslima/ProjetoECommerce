using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("products")]
    public class Product
    {
        [Key]
        [Column("id")]
        public int Id {get;set;}
        
        [Column("category_id")]
        public int CategoryId {get;set;}
        
        [ForeignKey(nameof(CategoryId))]
        public Category? Category {get;set;}

        [Required]
        [Column("name")]
        public string Name {get;set;} = "";
        
        [Required]
        [Column("price")]
        public decimal Price {get;set;}
        
        [Required]
        [Column("original_price")]
        public decimal OriginalPrice {get;set;}

        [Column("image_url")]
        public string ImageUrl {get;set;} = "";

        [Required]
        [Column("rating")]
        public int Rating {get;set;}
    
        [Column("reviews_count")]
        public int ReviewsCount {get;set;}
        
        [Column("sold_count")]
        public int SoldCount {get;set;}
        
        [Column("badge")]
        public string Badge {get;set;} = "";
    }
}