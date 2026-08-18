using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("categories")]
    public class Category
    {
        [Key]
        [Column("id")]
        public int Id {get;set;}

        [Required(ErrorMessage = "name is required")]
        [Column("name")]
        public string Name {get;set;} = "";
    }
}