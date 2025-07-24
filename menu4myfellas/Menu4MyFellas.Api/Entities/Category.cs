using Menu4MyFellas.Api.Entities.Products;
using System.Text.Json.Serialization;

namespace Menu4MyFellas.Api.Entities
{
    public class Category
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public string Name { get; set; } = string.Empty;

        public Guid ClientId { get; set; }

        [JsonIgnore]
        public Client Client { get; set; } = null!;

        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
