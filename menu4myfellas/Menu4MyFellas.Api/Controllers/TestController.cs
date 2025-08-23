using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Menu4MyFellas.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    /// <summary>
    /// Public route to test API. 
    /// Dont needs authentication.
    /// </summary>
    /// <returns>Sucess message</returns>
    /// <response code="200">Sucessful message</response>
    [HttpGet("public")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Public() => Ok("Este endpoint é público.");

    /// <summary>
    /// private route protected by jwt authentication.
    /// </summary>
    /// <returns>Unauthorized Access message</returns>
    /// <response code="200">Authorized With Jwt</response>
    /// <response code="401">Not Authorized(with or without jwt)</response>
    // [Authorize]
    [HttpGet("private")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public IActionResult Private() => Ok("Este endpoint é protegido por JWT.");
}
