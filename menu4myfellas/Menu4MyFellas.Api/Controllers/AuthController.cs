using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Menu4MyFellas.Api.Data;
using Menu4MyFellas.Api.DTOs;
using Menu4MyFellas.Api.Entities;
using Menu4MyFellas.Api.Auth;
using System.Security.Cryptography;
using System.Text;

namespace Menu4MyFellas.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _dbContext;
    private readonly TokenService _tokenService;

    public AuthController(AppDbContext dbContext, TokenService tokenService)
    {
        _dbContext = dbContext;
        _tokenService = tokenService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterClientDto dto)
    {
        if (await _dbContext.Clients.AnyAsync(c => c.Email == dto.Email))
            return BadRequest("Email already registered.");

        if (await _dbContext.Clients.AnyAsync(c => c.Slug == dto.Slug))
            return BadRequest("Slug already taken.");



        var client = new Client
        {
            BusinessName = dto.BusinessName,
            Email = dto.Email,
            Slug = dto.Slug,
            PasswordHash = HashPassword(dto.Password)
        };

        _dbContext.Clients.Add(client);
        var _defaultCategory = new Category
        {
            Id = Guid.NewGuid(),
            Name = "Others",
            ClientId = client.Id,
        };
        _dbContext.Categories.Add(_defaultCategory);

        await _dbContext.SaveChangesAsync();

        return Ok(new { Message = "Registration successful" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var client = await _dbContext.Clients.FirstOrDefaultAsync(c => c.Email == dto.Email);
        if (client == null || !VerifyPassword(dto.Password, client.PasswordHash))
            return Unauthorized("Invalid email or password.");

        var token = _tokenService.GenerateToken(client);

        return Ok(new LoginResultDto
        {
            Token = token,
            BusinessName = client.BusinessName,
            Slug = client.Slug
        });
    }

    private string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(hashedBytes);
    }

    private bool VerifyPassword(string password, string storedHash)
    {
        var hashOfInput = HashPassword(password);
        return hashOfInput == storedHash;
    }
}
