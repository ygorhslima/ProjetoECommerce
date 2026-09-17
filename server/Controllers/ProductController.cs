using Microsoft.AspNetCore.Mvc;
using server.Dtos;
using server.Interfaces;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController(IProductService productService) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductReadDto>>> GetAll()
        {
            var products = await productService.GetAllAsync();
            return Ok(products);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductReadDto>> GetById(int id)
        {
            var product = await productService.GetByIdAsync(id);
            if (product is null) return NotFound();
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<ProductReadDto>> Create([FromBody] ProductCreateDto dto)
        {
            var createdProduct = await productService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = createdProduct.Id }, createdProduct);
        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] ProductUpdateDto dto)
        {
            var success = await productService.UpdateAsync(id, dto);
            if (!success) return NotFound();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var success = await productService.DeleteAsync(id);
            if (!success) return NotFound();
            return NoContent();
        }
    }
}