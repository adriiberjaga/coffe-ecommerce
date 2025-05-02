import "../css/Header.css";
import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-header">
      <div>
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <button className="header-burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 'X' : '☰'}
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
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setIsMenuOpen(false)}
        >
          Contáctanos
        </NavLink>
      </nav>
    </header>
  );
}
