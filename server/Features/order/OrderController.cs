using Microsoft.AspNetCore.Mvc;

namespace server.Features.order;

[ApiController]
[Route("api/[controller]")]
public class OrderController(IOrderService orderService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<OrderReadDto>>> GetAll()
    {
        var orders = await orderService.GetAllAsync();
        return Ok(orders);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<OrderReadDto>> GetById(int id)
    {
        var order = await orderService.GetByIdAsync(id);
        if (order is null) return NotFound();

        return Ok(order);
    }

    [HttpPost]
    public async Task<ActionResult<OrderReadDto>> Create([FromBody] OrderCreateDto dto)
    {
        var createdOrder = await orderService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = createdOrder.Id }, createdOrder);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] OrderUpdateDto dto)
    {
        var success = await orderService.UpdateAsync(id, dto);
        if (!success) return NotFound();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var success = await orderService.DeleteAsync(id);
        if (!success) return NotFound();

        return NoContent();
    }
}
