using server.Data;
using server.Interfaces;
using server.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.AddECommerceDb();

builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();
app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();
app.MigrateDb();
app.Run();