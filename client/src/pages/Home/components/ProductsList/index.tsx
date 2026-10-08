import "./style.css";
import { BsHeart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../../context/SearchContext";
import useProduct from "../../../../hooks/useProduct";

export default function ProductsList() {
  const { idCategory } = useParams<{ idCategory?: string }>();
  const { searchTerm } = useSearch();
  const { products, loading, error } = useProduct(searchTerm, idCategory);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Não foi possível carregar os produtos: {error.message}</p>;
  }

  return (
    <section className="product-list-container">
      <article className="product-list-grid">
        {products.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          products.map((el) => (
            <div className="card" key={el.id}>
              <div className="image">
                <button className="btn_add_favorite_item">
                  <BsHeart />
                </button>
                <img src={el.imageUrl} alt={el.name} />
                <button className="btn_add_cart"> + Adicionar ao carrinho</button>
              </div>
              <div className="info">
                <p className="name">{el.name}</p>
                <div className="prices">
                  <span className="price">R${el.price.toFixed(2)}</span>
                  <span className="original-price">R${el.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </article>
    </section>
  );
}
