using System.ComponentModel.DataAnnotations;

namespace Server.Dto;

public sealed record CreateNewUserRequestDto
{
	[Required(ErrorMessage = "First name is required.")]
	[MinLength(4, ErrorMessage = "First name must be at least 4 characters.")]
	[MaxLength(18, ErrorMessage = "First name cannot exceed 18 characters.")]
	public string FirstName { get; init; } = string.Empty;

	[Required(ErrorMessage = "Last name is required.")]
	[MinLength(4, ErrorMessage = "Last name must be at least 4 characters.")]
	[MaxLength(32, ErrorMessage = "Last name cannot exceed 32 characters.")]
	public string LastName { get; init; } = string.Empty;

	[Required(ErrorMessage = "Email address is required.")]
	[EmailAddress(ErrorMessage = "Invalid email address format.")]
	public string Email { get; init; } = string.Empty;

	[Required(ErrorMessage = "Password is required.")]
	[MaxLength(36, ErrorMessage = "Password cannot exceed 36 characters.")]
	[RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$",
		ErrorMessage =
			"Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.")]
	public string Password { get; init; } = string.Empty;
}