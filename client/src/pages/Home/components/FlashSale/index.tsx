import './style.css'
import { FcFlashOn } from "react-icons/fc";
import { PRODUCTS } from "../../../../fakeDB";

export default function FlashSale() {
  return (
    <section className='flash-sale-container'>
      <header>
        <span>
          <FcFlashOn fontSize={30} />
          Flash Sale
        </span>
        <p>
          Termina em: <span>05</span>:<span>37</span>:<span>26</span>
        </p>
        <a href="">ver todos</a>
      </header>
      <article className="list-products-flash-sale">
        {PRODUCTS.map((el) => (
          <div className="card" key={el.id}>
            <div className="image">
              <img src={el.image} alt={el.name} />
            </div>
            <div className="info">
              <p className="name">{el.name}</p>
              <div className="prices">
                <span className="price">R${el.price}</span>
                <span className="original-price">R${el.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
