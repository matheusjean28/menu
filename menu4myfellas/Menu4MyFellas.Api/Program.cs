using Menu4MyFellas.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// use o EF Core with SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=menu4myfellas.db"));

//auth b4

var app = builder.Build();

app.MapControllers();
app.Run();
