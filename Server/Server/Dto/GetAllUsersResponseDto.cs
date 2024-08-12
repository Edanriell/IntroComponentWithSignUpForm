namespace Server.Dto;

public class GetAllUsersResponseDto<T>
{
	public List<T> Data        { get; set; } = null!;
	public int     RecordCount { get; set; }
}