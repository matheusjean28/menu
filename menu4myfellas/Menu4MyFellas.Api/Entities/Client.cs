using Menu4MyFellas.Api.Entities.Products;

namespace Menu4MyFellas.Api.Entities
{
    public class Client
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string BusinessName { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty; //  subdomínio
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;

        public ICollection<Product> Products { get; set; } = new List<Product>();
        public ICollection<Category> Categories { get; set; } = new List<Category>();
        public ICollection<Order> Orders { get; set; } = new List<Order>();
    }
}
