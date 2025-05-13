import { useState } from "react";
import BannerMenu from "../../components/ts/BannerMenu";
import MenuProducts from "../../content/MenuProducts";
import '../css/Menu.css';

export default function Menu() {
  const [category, setCategory] = useState('todos');
  const [order, setOrder] = useState('ordenar');

  const filteredProducts = category === 'todos'
    ? MenuProducts
    : MenuProducts.filter(product => product.category.toLowerCase() === category);

  const orderProducts = (products: any) => {
    if (order === 'menor') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (order === 'mayor') {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const orderedFilteredProducts = orderProducts(filteredProducts);

  return (
    <div>
      <BannerMenu />
      <section className="menu-section">
        <div className="menu-categories">
          <select title={order} name={order} value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="ordenar">Ordenar por:</option>
            <option value="normal">Más comprados</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
          </select>

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
          {orderedFilteredProducts.map((product: any, index: number) => (
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
