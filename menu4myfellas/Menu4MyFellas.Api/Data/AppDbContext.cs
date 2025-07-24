using Microsoft.EntityFrameworkCore;
using Menu4MyFellas.Api.Entities;
using Menu4MyFellas.Api.Entities.Products;

namespace Menu4MyFellas.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) {}

    public DbSet<Client> Clients => Set<Client>();
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Relations and constraints
        modelBuilder.Entity<Client>()
            .HasIndex(c => c.Slug)
            .IsUnique();

        modelBuilder.Entity<Product>()
            .HasOne(p => p.Client)
            .WithMany(c => c.Products)
            .HasForeignKey(p => p.ClientId);

        modelBuilder.Entity<Category>()
            .HasOne(c => c.Client)
            .WithMany(c => c.Categories)
            .HasForeignKey(c => c.ClientId);

        modelBuilder.Entity<Order>()
            .HasOne(o => o.Client)
            .WithMany(c => c.Orders)
            .HasForeignKey(o => o.ClientId);

        modelBuilder.Entity<OrderItem>()
            .HasOne(i => i.Order)
            .WithMany(o => o.Items)
            .HasForeignKey(i => i.OrderId);

        modelBuilder.Entity<OrderItem>()
            .HasOne(i => i.Product)
            .WithMany()
            .HasForeignKey(i => i.ProductId);
    }
}
