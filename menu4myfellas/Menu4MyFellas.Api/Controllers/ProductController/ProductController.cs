using System.Security.Claims;
using Menu4MyFellas.Api;
using Menu4MyFellas.Api.Data;
using Menu4MyFellas.Api.DTOs.InputData;
using Menu4MyFellas.Api.Entities;
using Menu4MyFellas.Api.Entities.Products;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Menu4MyFellas.Api.Controllers.ProductController;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductController(AppDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Retorna todos os produtos do cliente autenticado.
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var clientId = GetClientId();
        var products = await _context
            .Products.Include(p => p.Category)
            .Where(p => p.ClientId == clientId)
            .ToListAsync();

        var result = products.Select(p => new
        {
            p.Id,
            p.Name,
            p.Price,
            p.Ingredients,
            p.ImageUrl,
            CategoryName = p.Category.Name
        });

        return Ok(result);
    }

    /// <summary>
    /// Cadastra um novo produto para o cliente autenticado.
    /// </summary>
    [HttpPost]
    public async Task<IActionResult> CreateProduct([FromBody] CreateProductDto dto)
    {
        var clientId = GetClientId();

        var category = await _context.Categories.FirstOrDefaultAsync(c =>
            c.Id == dto.CategoryId && c.ClientId == clientId
        );

        if (category == null)
            return BadRequest("Categoria inválida ou não pertence ao cliente.");

        var product = new Product
        {
            Name = dto.Name,
            Price = dto.Price,
            Ingredients = dto.Ingredients,
            ImageUrl = dto.ImageUrl,
            CategoryId = dto.CategoryId,
            ClientId = clientId
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProducts), new { id = product.Id }, product);
    }

    [HttpPut("{id}")] //update product by id
    public async Task<IActionResult> UpdateProduct(Guid id, [FromBody] CreateProductDto dto)
    {
        var clientId = GetClientId();
        var product = await _context.Products.FirstOrDefaultAsync(p =>
            p.Id == id && p.ClientId == clientId
        );

        if (product == null)
            return NotFound();

        product.Name = dto.Name;
        product.Price = dto.Price;
        product.Ingredients = dto.Ingredients;
        product.ImageUrl = dto.ImageUrl;
        product.CategoryId = dto.CategoryId;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]//delete product by id
    public async Task<IActionResult> DeleteProduct(Guid id)
    {
        var clientId = GetClientId();
        var product = await _context.Products.FirstOrDefaultAsync(p =>
            p.Id == id && p.ClientId == clientId
        );

        if (product == null)
            return NotFound();

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private Guid GetClientId()
    {
        var clientId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Guid.Parse(clientId!);
    }
}
