namespace Menu4MyFellas.Api.DTOs.Product;

public class ReadProductDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Ingredients { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string CategoryName { get; set; } = string.Empty;
}
