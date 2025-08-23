using System.Security.Claims;
using Menu4MyFellas.Api.Data;
using Menu4MyFellas.Api.DTOs.InputData;
using Menu4MyFellas.Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Menu4MyFellas.Api.Controllers.CategoryController;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly AppDbContext _context;

    public CategoryController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
        var clientId = GetClientId();

        var categories = await _context.Categories.Where(c => c.ClientId == clientId).ToListAsync();

        return Ok(categories.Select(c => new { c.Id, c.Name }));
    }

    [HttpPost]
    public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryDto dto)
    {
        var clientId = GetClientId();

        var category = new Category { Name = dto.Name, ClientId = clientId };

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCategories), new { id = category.Id }, category);
    }

    private Guid GetClientId()
    {
        var clientId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Guid.Parse(clientId!);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCategory(Guid id, [FromBody] CreateCategoryDto dto)
    {
        var clientId = GetClientId();
        var category = await _context.Categories.FirstOrDefaultAsync(c =>
            c.Id == id && c.ClientId == clientId
        );

        if (category == null)
            return NotFound();

        category.Name = dto.Name;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
public async Task<IActionResult> DeleteCategory(Guid id)
{
    var clientId = GetClientId();
    var category = await _context.Categories
        .Include(c => c.Products)
        .FirstOrDefaultAsync(c => c.Id == id && c.ClientId == clientId);

    if (category == null) return NotFound();
    if (category.Products.Any())
        return BadRequest("A categoria contém produtos e não pode ser excluída.");

    _context.Categories.Remove(category);
    await _context.SaveChangesAsync();

    return NoContent();
}

}
