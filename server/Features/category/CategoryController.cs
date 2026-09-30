
using Microsoft.AspNetCore.Mvc;
using server.Features.category;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController(ICategoryService CategoryService) : ControllerBase
    {
         [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryReadDto>>> GetAll()
        {
            var categorys = await CategoryService.GetAllAsync();
            return Ok(categorys);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<CategoryReadDto>> GetById(int id)
        {
            var category = await CategoryService.GetByIdAsync(id);
            if (category is null) return NotFound();
            return Ok(category);
        }

        [HttpPost]
        public async Task<ActionResult<CategoryReadDto>> Create([FromBody] CategoryCreateDto dto)
        {
            var createdCategory = await CategoryService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = createdCategory.Id }, createdCategory);
        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] CategoryUpdateDto dto)
        {
            var success = await CategoryService.UpdateAsync(id, dto);
            if (!success) return NotFound();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var success = await CategoryService.DeleteAsync(id);
            if (!success) return NotFound();
            return NoContent();
        }
    }
}