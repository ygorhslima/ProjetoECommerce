using server.Data;
using server.Features.category;
using server.Features.cartItem;
using server.Features.order;
using server.Features.orderItem;
using server.Features.product;
using server.Features.user;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.AddECommerceDb();

// 1. Registrar o serviço de CORS e definir a política
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173") // Substitua pelas URLs do seu frontend
              .AllowAnyHeader()
              .AllowAnyMethod();
              // .AllowCredentials(); // Descomente caso seu frontend envie cookies ou JWT via credenciais
    });
});

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IOrderItemService, OrderItemService>();
builder.Services.AddScoped<ICartItemService, CartItemService>();

var app = builder.Build();

// 2. Aplicar o middleware de CORS
app.UseCors("AllowFrontend");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MigrateDb();

app.Run();