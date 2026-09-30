
using server.Models;

namespace server.Features.user;

public static class UserMappingExtensions
{
    public static UserReadDto ToRead(this User user) => new(user.Id, user.Name, user.Email, user.PhoneNumber);

    public static User ToCreate(this UserCreateDto dto)
    {
        return new()
        {
            Name = dto.Name,
            Email = dto.Email,
            PhoneNumber = dto.PhoneNumber,
            PasswordHash = dto.PasswordHash
        };
    }

    public static void ToUpdate(this User user, UserUpdateDto dto)
    {
        user.Name = dto.Name;
        user.Email = dto.Email;
        user.PhoneNumber = dto.PhoneNumber;
    }
}