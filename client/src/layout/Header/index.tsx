import './style.css';
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdSearch } from 'react-icons/md';
import ButtonHamburger from '../ButtonHamburger';

interface PropsHeader{
    onToggleMenu: () => void;
    onToggleCartComponent: () => void;
}

export default function Header(props:PropsHeader){
    return (
        <>
            <header className='header'>
                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <div className='logo'>
                        <ButtonHamburger onClick={props.onToggleMenu}/>
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

                <div className='actions-header'>
                    <button className='btn-action'>
                        <MdFavoriteBorder className='icons'/>
                        <p>Favoritos</p>
                    </button>
                    <button className='btn-action' onClick={props.onToggleCartComponent}>
                        <MdOutlineShoppingBag className='icons'/>
                        <p>Carrinho</p>
                    </button>
                </div>
            </header>
        </>
    )
}