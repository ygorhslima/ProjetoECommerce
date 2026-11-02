import './style.css'
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from '../Footer';
import CartComponent from '../CartComponent';
import { useCart } from "../../context/CartContext";

export default function SidebarWrapper() {
  const { isCartOpen, toggleCart, closeCart } = useCart();

  return (
    <div className="layout-wrapper">
      <div className="wrapper">
        <Header onToggleCartComponent={toggleCart}/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
      {isCartOpen && <CartComponent onClose={closeCart} />}
    </div>
  );
}
