using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Menu4MyFellas.Api.Data;
using Menu4MyFellas.Api.DTOs;
using Menu4MyFellas.Api.Entities;
using Menu4MyFellas.Api.Auth;
using System.Security.Cryptography;
using System.Text;
using Menu4MyFellas.Api.DTOs.InputData;

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
    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDTO dto)
    {
        var client = await _dbContext.Clients.FirstOrDefaultAsync(c => c.Email == dto.Email);
        if (client == null)
            return NotFound(new { message = "Client not found" });

        // gera token temporário
        var token = Guid.NewGuid().ToString();
        client.PasswordResetToken = token;
        client.TokenExpiration = DateTime.UtcNow.AddHours(1);

        await _dbContext.SaveChangesAsync();

        // normalmente enviaria por email, mas aqui retorna em JSON
        return Ok(new
        {
            message = "Password reset token generated.",
            token
        });
    }

    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto dto)
    {
        var client = await _dbContext.Clients
            .FirstOrDefaultAsync(c => c.PasswordResetToken == dto.Token);

        if (client == null || client.TokenExpiration < DateTime.UtcNow)
            return BadRequest(new { message = "Invalid or expired token." });

        client.PasswordHash = HashPassword(dto.NewPassword);
        client.PasswordResetToken = null;
        client.TokenExpiration = null;

        await _dbContext.SaveChangesAsync();

        return Ok(new { message = "Password reset successful." });
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
