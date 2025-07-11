namespace Menu4MyFellas.Api.Entities
{
    public class Product
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Ingredients { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;

        public Guid CategoryId { get; set; }
        public Category Category { get; set; } = null!;

        public Guid ClientId { get; set; }
        public Client Client { get; set; } = null!;
    }
}
