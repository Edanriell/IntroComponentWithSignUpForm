using Server.Dto;

namespace Server.Interfaces;

public interface IUserRepository
{
	Task<IResult> GetAllUsers();
	Task<IResult> CreateNewUser(CreateNewUserRequestDto request);
	Task<IResult> UpdateUser(UpdateUserRequestDto       request);
	Task<IResult> DeleteUser(DeleteUserRequestDto       request);
}