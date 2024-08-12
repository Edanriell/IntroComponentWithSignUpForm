using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Interfaces;
using Server.Routing;

namespace Server.Endpoints;

public class AccessRequestsEndpoints
{
	public class AccessRequests : IEndpointRouteHandler
	{
		public void MapEndpoints(IEndpointRouteBuilder app)
		{
			app.MapGet("/api/users", GetAllUsers);
			app.MapPost("/api/users/new", CreateNewUser);
			app.MapPut("/api/users/update/{id}", UpdateUser);
			app.MapDelete("/api/users/delete/{id}", DeleteUser);
		}

		private async Task<IResult> GetAllUsers(IUserRepository userRepository)
		{
			return await userRepository.GetAllUsers();
		}

		private async Task<IResult> CreateNewUser([FromBody] CreateNewUserRequestDto request,
												  IUserRepository                    userRepository)
		{
			return await userRepository.CreateNewUser(request);
		}

		private async Task<IResult> UpdateUser([FromBody] UpdateUserRequestDto request,
											   IUserRepository                 userRepository)
		{
			return await userRepository.UpdateUser(request);
		}

		private async Task<IResult> DeleteUser([FromBody] DeleteUserRequestDto request,
											   IUserRepository                 userRepository)
		{
			return await userRepository.DeleteUser(request);
		}
	}
}