import "../css/Header.css";
import logo from "../../assets/images/logoo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartIcon } from "../../content/utilities";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalCart, setModalCart] = useState(false);
  // no scroll con el menu abierto
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
  }, [isMenuOpen]);
  //no scroll en pop up
  useEffect(() => {
    if (modalCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [modalCart]);

  return (
    <>
      {modalCart && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Tu carrito</h2>
            {/* Aquí puedes renderizar el contenido del carrito */}
            <button onClick={() => setModalCart(false)}>Cerrar</button>
          </div>
        </div>
      )}
      <header className="header-header">
        <div>
          <img className="header-logo" src={logo} alt="logo" />
        </div>
        <button
          className="header-burger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </NavLink>{" "}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            Menú
          </NavLink>
          <button
            title="cart"
            className="iconCart"
            onClick={() => {
              setIsMenuOpen(false);
              setModalCart(true);
            }}
          >
            <CartIcon />
          </button>
        </nav>
      </header>
    </>
  );
}
