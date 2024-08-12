using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;

namespace Server.Repositories;

public class UserRepository(ApplicationDbContext context) : IUserRepository
{
	public async Task<IResult> GetAllUsers()
	{
		var query = await context.Users.AsNoTracking().ToListAsync();

		var recordCount = query.Count;

		if (recordCount == 0)
			return TypedResults.NotFound("No User Emails has been found.");

		return TypedResults.Ok(
			new GetAllUsersResponseDto<User>
			{
				Data        = query,
				RecordCount = recordCount
			});
	}

	public async Task<IResult> CreateNewUser(CreateNewUserRequestDto request)
	{
		var validationResults = new List<ValidationResult>();
		var validationContext = new ValidationContext(request);

		var isValid = Validator.TryValidateObject(request, validationContext, validationResults, true);

		if (!isValid)
		{
			var errors = validationResults
			   .GroupBy(v => v.MemberNames.FirstOrDefault())
			   .ToDictionary(
						g => g.Key ?? "General",
						g => g.Select(v => v.ErrorMessage).ToArray()
					);

			return TypedResults.BadRequest(new { Errors = errors });
		}

		var isEmailRegistered = await context.Users.FirstOrDefaultAsync(email => email.Email == request.Email);

		if (isEmailRegistered is not null)
			return TypedResults.BadRequest($"User with email {request.Email} is already registered.");

		var entity = new User
					 {
						 FirstName = request.FirstName,
						 LastName  = request.LastName,
						 Email     = request.Email,
						 Password  = request.Password
					 };

		await context.Users.AddAsync(entity);

		await context.SaveChangesAsync();

		return TypedResults.Ok($"User {request.FirstName} {request.LastName} has been registered successfully.");
	}

	public async Task<IResult> UpdateUser(UpdateUserRequestDto request)
	{
		var entity = await context.Users.FindAsync(request.UserId);

		if (entity is null)
			return TypedResults.BadRequest($"User with Id: {request.UserId} is not found.");

		if (!string.IsNullOrWhiteSpace(request.FirstName))
			entity.FirstName = request.FirstName;

		if (!string.IsNullOrWhiteSpace(request.LastName))
			entity.LastName = request.LastName;

		if (!string.IsNullOrWhiteSpace(request.Email))
			entity.Email = request.Email;

		if (!string.IsNullOrWhiteSpace(request.Password))
			entity.Password = request.Password;

		context.Users.Update(entity);

		await context.SaveChangesAsync();

		return TypedResults.NoContent();
	}

	public async Task<IResult> DeleteUser(DeleteUserRequestDto request)
	{
		var entity = await context.Users.FindAsync(request.UserId);

		if (entity is null)
			return TypedResults.BadRequest($"User with Id: {request.UserId} is not found.");

		context.Users.Remove(entity);

		await context.SaveChangesAsync();

		return TypedResults.NoContent();
	}
}