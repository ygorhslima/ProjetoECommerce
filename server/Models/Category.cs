using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    /// <summary>
    /// Representa a tabela de categorias de produtos no banco de dados.
    /// </summary>
    [Table("categories")]
    public class Category
    {
        /// <summary>
        /// Identificador único da categoria (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Nome da categoria de produtos.
        /// </summary>
        [Required(ErrorMessage = "name is required")]
        [Column("name")]
        public string Name { get; set; } = "";

        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}