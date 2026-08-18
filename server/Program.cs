using server.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.AddECommerceDb();

var app = builder.Build();
app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();
app.MigrateDb();
app.Run();
