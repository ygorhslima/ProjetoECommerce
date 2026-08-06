import './style.css'
import { Outlet } from "react-router-dom";
import Header from "../Header";
import SidebarLayout from "../SidebarLayout";
import { useState } from "react";
import Footer from '../Footer';

export default function SidebarWrapper() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const onToggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="layout-wrapper">
      <SidebarLayout isOpen={isSidebarOpen}/>
      <div className="wrapper">
        <Header onToggleMenu={onToggleMenu}/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
}
