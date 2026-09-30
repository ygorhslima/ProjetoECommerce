namespace server.Features.category;

public record CategoryReadDto(int Id,string Name);
public record CategoryCreateDto(string Name);
public record CategoryUpdateDto(string Name);