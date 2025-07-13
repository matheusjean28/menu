using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Menu4MyFellas.Api.Entities.Products
{
	public class Product
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public decimal Price { get; set; }

    public string Ingredients { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;

    [Required]
    public Guid CategoryId { get; set; }

    [ForeignKey("CategoryId")]
    public Category Category { get; set; }

    [Required]
    public Guid ClientId { get; set; }

    [ForeignKey("ClientId")]
    public Client Client { get; set; }
}

}