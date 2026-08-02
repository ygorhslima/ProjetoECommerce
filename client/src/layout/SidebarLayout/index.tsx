import { Link } from "react-router-dom";
import "./style.css";
import { CATEGORIES } from "../../fakeDB";

interface PropsSidebarLayout{
    isOpen: boolean    
}

export default function SidebarLayout({isOpen}: PropsSidebarLayout) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="dropdown-content">
        <div className="view-books">
          <Link to={"#"} className="link-sidebar">
            Todas as categorias
          </Link>
        </div>
        {CATEGORIES.map((el) => (
          <div className="links-categories" key={el.id}>
            <Link to={`${"#"}/${el.id}`} className="link-sidebar">
              {el.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
