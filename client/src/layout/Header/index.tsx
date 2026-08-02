import './style.css';

import { IoMdPerson } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdSearch } from 'react-icons/md';
import ButtonHamburger from '../ButtonHamburger';

interface PropsHeader{
    onToggleMenu: () => void;
}
export default function Header({onToggleMenu}:PropsHeader){
    return (
        <header className='header'>
            <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                <ButtonHamburger onClick={onToggleMenu}/>
                <div className='logo'>
                    <div>
                        <RiShoppingBag4Fill fontSize={30} id='logo-icon'/>
                    </div>
                    <h1>ShopTech</h1> 
                </div>
            </div>

            <div className='container-input'>
                <input type="text" placeholder="Buscar produtos, marcas e muito mais" />
                <button><MdSearch fontSize={14}/></button>
            </div>

            <div className='links-header'>
                <a href='#' className='link'>
                    <MdFavoriteBorder className='icons'/>
                    <p>Favoritos</p>
                </a>
                <button className='link'>
                    <MdOutlineShoppingBag className='icons'/>
                    <p>Carrinho</p>
                </button>
            </div>
        </header>
    )
}