import './style.css'
import { Outlet } from "react-router-dom";
import Header from "../Header";
import SidebarLayout from "../SidebarLayout";
import { useState } from "react";
import Footer from '../Footer';
import CartComponent from '../CartComponent';

export default function SidebarWrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCartComponent, setIsCartComponent] = useState(false);

  const onToggleMenu = () => setIsSidebarOpen(!isSidebarOpen);
  const onToggleCartComponent = () => setIsCartComponent(!isCartComponent);
  return (
    <div className="layout-wrapper">
      <SidebarLayout isOpen={isSidebarOpen}/>
      <div className="wrapper">
        <Header onToggleMenu={onToggleMenu} onToggleCartComponent={onToggleCartComponent}/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
      {isCartComponent && <CartComponent onClose={onToggleCartComponent} />}
    </div>
  );
}
