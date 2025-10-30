import React from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products = [] }) {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.imagen} alt={p.nombre} />
          <div className="p-3">
            <h3 className="text-success fw-bold">{p.nombre}</h3>
            <p className="product-price">${p.precio}</p>
            <div className="product-actions">
              <Link to={`/detalle/${p.id}`} className="btn btn-success">Ver detalle</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
