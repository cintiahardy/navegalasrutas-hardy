import React, { useEffect, useState } from "react";
import { getProducts } from "../data/mockProducts";
import ItemCount from "./ItemCount";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProductos(data));
  }, []);

  const handleAdd = (cantidad, nombre) => {
    if (cantidad > 0) {
      console.log(`✅ Agregado ${cantidad} x ${nombre} al carrito`);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛍️ Nuestros Productos</h2>
      <div className="row">
        {productos.map((prod) => (
          <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm d-flex flex-column justify-content-between">
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text text-muted">{prod.detalle}</p>
                <p className="card-text fw-bold fs-5">${prod.precio}</p>
                <ItemCount
                  stock={20}
                  onAdd={(cantidad) => handleAdd(cantidad, prod.nombre)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
