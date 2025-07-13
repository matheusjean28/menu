using Menu4MyFellas.Api.DTOs.InputData;
using Menu4MyFellas.Api;
using Menu4MyFellas.Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Menu4MyFellas.Api.Entities;

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
        var products = await _context.Products
            .Include(p => p.Category)
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

        var category = await _context.Categories
            .FirstOrDefaultAsync(c => c.Id == dto.CategoryId && c.ClientId == clientId);

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

    private Guid GetClientId()
    {
        var clientId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Guid.Parse(clientId!);
    }
}
