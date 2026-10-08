import { BsBagDash, BsX } from "react-icons/bs";
import './style.css';
import { useState } from "react";

interface PropsCart {
    onClose: () => void;
}

export default function CartComponent({ onClose }: PropsCart) {
    const valor: number = 0;
    const [isEmpty, setIsEmpty] = useState(false);

    return (
        <div className="cart-modal">
            <div className="cart">
                <header className="cart-header">
                    <h3>Meu carrinho (0)</h3>
                    {/* 2. Conecte a função de fechar */}
                    <button onClick={onClose}><BsX fontSize={40}/></button>
                </header>
                <section className="cart-section">
                    {isEmpty ? (
                       <>
                       
                       </>
                    ) : (
                        <div>
                            <BsBagDash fontSize={60}/>
                            <h4>Carrinho vazio</h4>
                            <p>Adicione produtos para continuar</p>
                        </div>
                    )}
                </section>
                <footer className="cart-footer">
                    <div className="value">
                        <p>subtotal: </p>
                        <span>R${valor.toFixed(2)}</span>
                    </div>
                    <div className="actions">
                        <button className="btn-finalizar-compra">Finalizar Compra</button>
                        <button className="btn-continuar-comprando" onClick={onClose}>Continuar Comprando</button>
                    </div>
                </footer>
            </div>
        </div>
    );
}