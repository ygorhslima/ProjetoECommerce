import { useEffect } from "react";
import { BsBagDash, BsDash, BsPlus, BsTrash, BsX } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import "./style.css";

interface PropsCart {
  onClose: () => void;
}

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function CartComponent({ onClose }: PropsCart) {
  const { items, itemCount, subtotal, decreaseQuantity, addProduct, removeProduct } = useCart();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="cart-modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="cart"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <header className="cart-header">
          <h2 id="cart-title">Meu Carrinho ({itemCount})</h2>
          <button className="cart-close" type="button" onClick={onClose} aria-label="Fechar carrinho">
            <BsX aria-hidden="true" />
          </button>
        </header>

        <section className="cart-section" aria-label="Produtos no carrinho">
          {items.length === 0 ? (
            <div className="cart-empty">
              <BsBagDash aria-hidden="true" />
              <h3>Carrinho vazio</h3>
              <p>Adicione produtos para continuar</p>
            </div>
          ) : (
            <ul className="cart-items">
              {items.map(({ product, quantity }) => (
                <li className="cart-item" key={product.id}>
                  <img className="cart-item-image" src={product.imageUrl} alt={product.name} />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{product.name}</p>
                    <p className="cart-item-price">{currency.format(product.price)}</p>
                    <div className="cart-item-controls">
                      <div className="quantity-control" aria-label={`Quantidade: ${quantity}`}>
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(product.id)}
                          disabled={quantity <= 1}
                          aria-label={`Diminuir quantidade de ${product.name}`}
                        >
                          <BsDash aria-hidden="true" />
                        </button>
                        <span aria-live="polite">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => addProduct(product)}
                          aria-label={`Aumentar quantidade de ${product.name}`}
                        >
                          <BsPlus aria-hidden="true" />
                        </button>
                      </div>
                      <button
                        className="cart-item-remove"
                        type="button"
                        onClick={() => removeProduct(product.id)}
                        aria-label={`Remover ${product.name} do carrinho`}
                      >
                        <BsTrash aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <footer className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal:</span>
            <strong>{currency.format(subtotal)}</strong>
          </div>
          <div className="cart-actions">
            <button className="btn-finalizar-compra" type="button" disabled={items.length === 0}>
              Finalizar Compra
            </button>
            <button className="btn-continuar-comprando" type="button" onClick={onClose}>
              Continuar Comprando
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}
