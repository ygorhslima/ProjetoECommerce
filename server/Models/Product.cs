using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    /// <summary>
    /// Representa a tabela de produtos no banco de dados.
    /// </summary>
    [Table("products")]
    public class Product
    {
        /// <summary>
        /// Identificador único do produto (Chave Primária).
        /// </summary>
        [Key]
        [Column("id")]
        public int Id { get; set; }

        /// <summary>
        /// Identificador da categoria à qual o produto pertence (Chave Estrangeira).
        /// </summary>
        [Column("category_id")]
        public int CategoryId { get; set; }

        /// <summary>
        /// Propriedade de navegação para a categoria associada.
        /// </summary>
        [ForeignKey(nameof(CategoryId))]
        public Category? Category { get; set; }

        /// <summary>
        /// Nome do produto.
        /// </summary>
        [Required]
        [Column("name")]
        public string Name { get; set; } = "";

        /// <summary>
        /// Preço atual de venda do produto.
        /// </summary>
        [Required]
        [Column("price")]
        public decimal Price { get; set; }

        /// <summary>
        /// Preço original do produto antes de eventuais descontos.
        /// </summary>
        [Required]
        [Column("original_price")]
        public decimal OriginalPrice { get; set; }

        /// <summary>
        /// URL ou caminho para a imagem principal do produto.
        /// </summary>
        [Column("image_url")]
        public string ImageUrl { get; set; } = "";

        /// <summary>
        /// Nota ou pontuação média do produto (ex: de 1 a 5 estrelas).
        /// </summary>
        [Required]
        [Column("rating")]
        public int Rating { get; set; }

        /// <summary>
        /// Quantidade total de avaliações ou comentários recebidos.
        /// </summary>
        [Column("reviews_count")]
        public int ReviewsCount { get; set; }

        /// <summary>
        /// Quantidade total de unidades vendidas.
        /// </summary>
        [Column("sold_count")]
        public int SoldCount { get; set; }

        /// <summary>
        /// Selo ou tag em destaque do produto (ex: "Oferta", "Mais Vendido", "Novo").
        /// </summary>
        [Column("badge")]
        public string Badge { get; set; } = "";
    }
}