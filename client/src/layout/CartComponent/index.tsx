import { BsX } from "react-icons/bs";
import './style.css';
import { useState } from "react";
import FlashSale from "../../pages/Home/components/FlashSale";

// 1. Defina a interface para as props
interface PropsCart {
    onClose: () => void;
}

export default function CartComponent({ onClose }: PropsCart) {
    const valor: number = 0;
    const [isEmpty, setIsEmpty] = useState(true);

    return (
        <div className="cart-modal">
            <div className="cart">
                <header className="cart-header">
                    <h3>Meu carrinho (0)</h3>
                    {/* 2. Conecte a função de fechar */}
                    <button onClick={onClose}><BsX fontSize={30}/></button>
                </header>
                <section className="cart-section">
                    {isEmpty ? (
                        <FlashSale/>
                    ) : (
                        <>
                            <h4>Carrinho vazio</h4>
                            <p>Adicione produtos para continuar</p>
                        </>
                    )}
                </section>
                <footer className="cart-footer">
                    <div className="value">
                        <p>subtotal: </p>
                        <span>R${valor.toFixed(2)}</span>
                    </div>
                    <div className="actions">
                        <button className="btn-finalizar-compra">Finalizar Compra</button>
                        <button onClick={onClose}>Continuar Comprando</button>
                    </div>
                </footer>
            </div>
        </div>
    );
}