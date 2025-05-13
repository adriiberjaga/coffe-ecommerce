import { useState } from "react";
import BannerMenu from "../../components/ts/BannerMenu";
import MenuProducts from "../../content/MenuProducts";
import '../css/Menu.css';

export default function Menu() {
  const [category, setCategory] = useState('todos');

  const filteredProducts = category === 'todos'
    ? MenuProducts
    : MenuProducts.filter(product => product.category.toLowerCase() === category);

  return (
    <div>
      <BannerMenu />
      <section className="menu-section">
        <div className="menu-categories">
          {['todos', 'en grano', 'molido', 'cápsulas', 'accesorios'].map((cat) => (
            <button
              key={cat}
              className={`menu-category-button ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-products">
          {filteredProducts.map((product, index) => (
            <div key={index} className="menu-product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h5 className="product-name">{product.title}</h5>
              <p className="product-price">{product.price} €</p>
              <button className="product-button">Ver más</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
