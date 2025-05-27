import "../css/ProductDetail.css";
import Products from "../../content/MenuProducts";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();

  const product = Products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="productDetailMain">Producto no encontrado</div>;
  }
  return (
    <div className="productDetailMain">
      <div className="productDetailMain-content">
        <Link to="/menu">
          <button>back</button>
        </Link>
        <div className="productDetail-card">
          <img
            src={product?.image || "/default-image.jpg"}
            alt={product?.title}
            className="productDetail-image"
          />
          <div className="productDetail-info">
            <h2 className="productDetail-name">{product?.title}</h2>
            <p className="productDetail-description">{product?.description}</p>
            {product?.price && (
              <p className="productDetail-price">{product.price} €</p>
            )}
            <button
              onClick={() => addToCart(product)}
              className="productDetail-button"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
