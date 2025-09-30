import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/ofertas", label: "Ofertas" },
    { path: "/recetas", label: "Recetas" },
    { path: "/sucursales", label: "Sucursales" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow-sm">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Mercado Modelo
        </NavLink>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active fw-bold text-danger" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

