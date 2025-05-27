import { useCart } from "./CartContext";

export default function CartContent() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.amount} x {item.price} €
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p>Total: {total.toFixed(2)} €</p>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}
