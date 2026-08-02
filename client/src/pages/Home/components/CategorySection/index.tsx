import "./style.css";
import {CATEGORIES} from '../../../../fakeDB'
export default function CategorySection() {
  return (
    <section className="category">
      {CATEGORIES.map((el, index)=>(
        <div key={index} className="category-item">
          <div className="icon">{el.icon}</div>
          <p>{el.name}</p>
        </div>
      ))}
    </section>
  );
}
