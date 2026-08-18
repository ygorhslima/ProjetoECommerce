using Microsoft.EntityFrameworkCore;

namespace server.Data
{
    public static class DataExtensions
    {
        public static void MigrateDb(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            dbContext.Database.Migrate();
        }

        public static void AddECommerceDb(this WebApplicationBuilder builder)
        {
            var connString = builder.Configuration.GetConnectionString("ECommerce")
            ?? throw new InvalidOperationException("Connection string 'ECommerce' não foi encontrada no appsettings.json.");
            
            builder.Services.AddDbContext<AppDbContext>(options =>
                 options.UseMySql(connString, ServerVersion.AutoDetect(connString))
                        .UseSnakeCaseNamingConvention()
            );
        }
    }
}
