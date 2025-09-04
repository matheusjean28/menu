namespace Menu4MyFellas.Api.DTOs.InputData
{
	public class ResetPasswordDto
{
    public string Token { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
}

}