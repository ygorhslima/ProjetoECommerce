using Microsoft.AspNetCore.Mvc;

namespace server.Features.cartItem;

[ApiController]
[Route("api/[controller]")]
public class CartItemController(ICartItemService cartItemService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CartItemReadDto>>> GetAll()
    {
        var cartItems = await cartItemService.GetAllAsync();
        return Ok(cartItems);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<CartItemReadDto>> GetById(int id)
    {
        var cartItem = await cartItemService.GetByIdAsync(id);
        if (cartItem is null) return NotFound();

        return Ok(cartItem);
    }

    [HttpPost]
    public async Task<ActionResult<CartItemReadDto>> Create([FromBody] CartItemCreateDto dto)
    {
        var createdCartItem = await cartItemService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = createdCartItem.Id }, createdCartItem);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] CartItemUpdateDto dto)
    {
        var success = await cartItemService.UpdateAsync(id, dto);
        if (!success) return NotFound();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await cartItemService.DeleteAsync(id);
        if (!success) return NotFound();

        return NoContent();
    }
}
