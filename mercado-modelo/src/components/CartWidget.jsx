import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <NavLink to="/cart" className="btn btn-outline-danger position-relative" style={{ fontSize: "1.2rem" }}>
      🛒
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </NavLink>
  );
}

