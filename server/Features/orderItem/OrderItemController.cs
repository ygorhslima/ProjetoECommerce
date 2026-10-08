using Microsoft.AspNetCore.Mvc;

namespace server.Features.orderItem;

[ApiController]
[Route("api/[controller]")]
public class OrderItemController(IOrderItemService orderItemService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<OrderItemReadDto>>> GetAll()
    {
        var orderItems = await orderItemService.GetAllAsync();
        return Ok(orderItems);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<OrderItemReadDto>> GetById(int id)
    {
        var orderItem = await orderItemService.GetByIdAsync(id);
        if (orderItem is null) return NotFound();

        return Ok(orderItem);
    }

    [HttpPost]
    public async Task<ActionResult<OrderItemReadDto>> Create([FromBody] OrderItemCreateDto dto)
    {
        var createdOrderItem = await orderItemService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = createdOrderItem.Id }, createdOrderItem);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] OrderItemUpdateDto dto)
    {
        var success = await orderItemService.UpdateAsync(id, dto);
        if (!success) return NotFound();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await orderItemService.DeleteAsync(id);
        if (!success) return NotFound();

        return NoContent();
    }
}
