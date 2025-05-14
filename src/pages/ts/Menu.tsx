import { useState } from "react";
import BannerMenu from "../../components/ts/BannerMenu";
import MenuProducts from "../../content/MenuProducts";
import "../css/Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  window.scrollTo(0, 0);
  // esta linea hace que al viajar desde la home, la página
  // lleve al usuario al top 0

  const [category, setCategory] = useState("todos");
  const [order, setOrder] = useState("ordenar");

  const filteredProducts =
    category === "todos"
      ? MenuProducts
      : MenuProducts.filter(
          (product) => product.category.toLowerCase() === category
        );

  const orderProducts = (products: any) => {
    if (order === "all") {
      return products;
    } else if (order === "menor") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (order === "mayor") {
      return [...products].sort((a, b) => b.price - a.price);
    } else if (order === "populares") {
      return [...products].sort((a, b) => a.quantity - b.quantity).slice(0, 5); // no funiona, en realidad pone primero los quantity mas bajos
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
          <select
            title={order}
            name={order}
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option disabled hidden value="ordenar">
              Ordenar por:
            </option>
            <option value="all">Todos</option>
            <option value="populares">Más comprados</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
          </select>

          {["todos", "en grano", "molido", "cápsulas", "accesorios"].map(
            (cat) => (
              <button
                key={cat}
                className={`menu-category-button ${
                  category === cat ? "active" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="menu-products">
          {orderedFilteredProducts.map((product: any, index: number) => (
            <div key={index} className="menu-product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h5 className="product-name">{product.title}</h5>
              <p className="product-price">{product.price} €</p>
              <Link to={`/menu/${product.id}`}>
                <button className="product-button">Ver más</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
