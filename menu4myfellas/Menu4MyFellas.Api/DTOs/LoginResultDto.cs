namespace Menu4MyFellas.Api.DTOs;

public class LoginResultDto
{
    public string Token { get; set; } = string.Empty;
    public string BusinessName { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
}
