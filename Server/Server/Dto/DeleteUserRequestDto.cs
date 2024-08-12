using System.ComponentModel.DataAnnotations;

namespace Server.Dto;

public class DeleteUserRequestDto
{
	[Required(ErrorMessage = "User ID is required.")]
	public Guid UserId { get; set; }
}