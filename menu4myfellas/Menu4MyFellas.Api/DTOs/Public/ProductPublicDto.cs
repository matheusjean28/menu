namespace Menu4MyFellas.Api.DTOs.Public
{
    public class ProductPublicDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public string Ingredients { get; set; } = string.Empty;
        public string? Category { get; set; }
    }

}
