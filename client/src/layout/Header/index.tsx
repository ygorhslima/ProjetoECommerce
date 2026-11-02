import './style.css';
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdSearch } from 'react-icons/md';
import { useSearch } from '../../context/SearchContext';
import { RiShoppingBag4Fill } from 'react-icons/ri';
import { useCart } from '../../context/CartContext';

interface PropsHeader{
    onToggleCartComponent: () => void;
}

export default function Header(props:PropsHeader){
    const {setSearchTerm} = useSearch();
    const {itemCount} = useCart();

    return (
        <>
            <header className='header'>
                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <div className='logo'>
                        <div>
                            <RiShoppingBag4Fill fontSize={30} id='logo-icon'/>
                        </div>
                        <h1>ShopTech</h1> 
                    </div>
                </div>

                <div className='container-input'>
                    <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar produtos, marcas e muito mais" />
                    <button><MdSearch fontSize={14}/></button>
                </div>

                <div className='actions-header'>
                    <button className='btn-action'>
                        <MdFavoriteBorder className='icons'/>
                        <p>Favoritos</p>
                    </button>
                    <button className='btn-action' onClick={props.onToggleCartComponent}>
                        <span className="cart-action-icon">
                            <MdOutlineShoppingBag className='icons'/>
                            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
                        </span>
                        <p>Carrinho</p>
                    </button>
                </div>
            </header>
        </>
    )
}