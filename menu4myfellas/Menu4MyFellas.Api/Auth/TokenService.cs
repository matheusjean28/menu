using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Menu4MyFellas.Api.Entities;

namespace Menu4MyFellas.Api.Auth;

public class TokenService
{
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config)
    {
        _config = config;
    }

    public string GenerateToken(Client client)
    {
     var claims = new[]
{
    new Claim(JwtRegisteredClaimNames.Sub, client.Id.ToString()),
    new Claim(ClaimTypes.NameIdentifier, client.Id.ToString()), // ← ESSA LINHA É NECESSÁRIA
    new Claim("slug", client.Slug),
    new Claim(JwtRegisteredClaimNames.Email, client.Email),
    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
};


        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Issuer"],
            claims: claims,
            expires: DateTime.UtcNow.AddDays(7),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
