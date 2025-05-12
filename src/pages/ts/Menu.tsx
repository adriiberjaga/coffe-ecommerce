import BannerMenu from "../../components/ts/BannerMenu";
import MenuProducts from "../../content/MenuProducts";

export default function Menu() {
  return (
    <div>
        <BannerMenu />
        <section className="menu-section">
      <div className="menu-categories">
        <button className="menu-category-button active">Todos</button>
        <button className="menu-category-button">En grano</button>
        <button className="menu-category-button">Molido</button>
        <button className="menu-category-button">Cápsulas</button>
        <button className="menu-category-button">Accesorios</button>
      </div>

      <div className="menu-products">
        
        {MenuProducts.map((product, index) => (
          <div key={index} className="menu-product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h5 className="product-name">{product.title}</h5>
            <p className="product-price">{product.price}</p>
            <button className="product-button">Ver más</button>
          </div>
        ))}

      </div>
    </section>
    </div>
  )
}
