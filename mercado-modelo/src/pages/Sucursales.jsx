// src/pages/Sucursales.jsx
import React from "react";

function Sucursales() {
  const sucursales = [
    { nombre: "Sucursal Centro", direccion: "Calle 123, Centro", telefono: "3482-332865" },
    { nombre: "Sucursal Norte", direccion: "Av. Libertad 456", telefono: "3482-332866" },
    { nombre: "Sucursal Sur", direccion: "Ruta 8 Km 12", telefono: "3482-332867" },
    { nombre: "Sucursal Oeste", direccion: "Bv. Belgrano 789", telefono: "3482-332868" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      <main className="container my-5">
        <h2 className="text-center mb-4">Nuestras Sucursales</h2>
        <div className="row g-4">
          {sucursales.map((suc, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{suc.nombre}</h5>
                  <p className="card-text">{suc.direccion}</p>
                  <p className="card-text fw-bold">{suc.telefono}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <a href="https://wa.me/543482332865" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <i className="fab fa-whatsapp"></i>
      </a>

      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">© 2025 Mercado Modelo - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Sucursales;

