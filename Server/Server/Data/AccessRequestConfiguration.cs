using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Entities;

namespace Server.Data;

public class AccessRequestConfiguration : IEntityTypeConfiguration<User>
{
	public void Configure(EntityTypeBuilder<User> builder)
	{
		builder.ToTable("Users");
		builder.HasKey(user => user.Id);
		builder.Property(user => user.Id)
		   .HasColumnName(nameof(User.Id))
		   .HasColumnType("uuid")
		   .HasDefaultValueSql("uuid_generate_v4()");
		builder.Property(user => user.FirstName)
		   .HasColumnName(nameof(User.FirstName))
		   .HasColumnType("varchar")
		   .HasMaxLength(18)
		   .IsRequired();
		builder.Property(user => user.LastName)
		   .HasColumnName(nameof(User.LastName))
		   .HasColumnType("varchar")
		   .HasMaxLength(32)
		   .IsRequired();
		builder.Property(user => user.Email)
		   .HasColumnName(nameof(User.Email))
		   .HasColumnType("varchar")
		   .HasMaxLength(64)
		   .IsRequired();
		builder.Property(user => user.Password)
		   .HasColumnName(nameof(User.Password))
		   .HasColumnType("varchar")
		   .HasMaxLength(36)
		   .IsRequired();
	}
}