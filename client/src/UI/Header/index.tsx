import './style.css';

import { IoMdPerson } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdSearch } from 'react-icons/md';

export default function Header(){
    return (
        <header>
            <div className='logo'>
                <div>
                    <RiShoppingBag4Fill fontSize={30} id='logo-icon'/>
                </div>
                <h1>ShopTech</h1> 
            </div>

            <div className='container-input'>
                <input type="text" placeholder="Buscar produtos, marcas e muito mais" />
                <button><MdSearch fontSize={14}/></button>
            </div>

            <div className='links-header'>    
                <a href='#' className='link'>
                    <IoMdPerson className='icons'/>
                    <p>Entrar</p>
                </a>

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