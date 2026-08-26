using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Dtos;
using server.Interfaces;
using server.Mappings;

namespace server.Services
{
    public class UserService(AppDbContext context) : IUserService
    {
        public async Task<UserReadDto> CreateAsync(UserCreateDto dto)
        {
            var user = dto.ToCreate();
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user.ToRead();
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var rowsAffected = await context.Users
            .Where(u => u.Id == id)
            .ExecuteDeleteAsync();

            return rowsAffected > 0;
        }

        public async Task<IEnumerable<UserReadDto>> GetAllAsync()
        {
            return await context.Users
            .AsNoTracking()
            .Select(u => u.ToRead())
            .ToListAsync();
        }

        public async Task<UserReadDto?> GetByIdAsync(int id)
        {
            return await context.Users
            .AsNoTracking()
            .Where(u => u.Id == id)
            .Select(u => u.ToRead())
            .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateAsync(int id, UserUpdateDto dto)
        {
            var existingUser = await context.Users.FindAsync(id);
            if(existingUser is null) return false;

            existingUser.ToUpdate(dto);
            await context.SaveChangesAsync();

            return true;
        }
    }
}