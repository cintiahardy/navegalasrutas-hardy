import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/ofertas", label: "Ofertas" },
    { path: "/recetas", label: "Recetas" },
    { path: "/sucursales", label: "Sucursales" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/contacto", label: "Contacto" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFD600" }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-dark" to="/">Mercado Modelo</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink to={path} className={({ isActive }) => "nav-link " + (isActive ? "fw-bold text-danger" : "")}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
