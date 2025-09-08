import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-success bg-success p-3">
    <a className="navbar-brand fw-bold text-white" href="#">
      Mercado Modelo 🍎🥦
    </a>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Frutas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Verduras</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Contacto</a>
      </li>
    </ul>
    <CartWidget />
  </nav>
);

export default NavBar;
