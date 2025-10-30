// src/pages/Recetas.jsx
import React from "react";

function Recetas() {
  const recetas = [
    { nombre: "Ensalada Mediterránea", desc: "Tomates, aceitunas, rúcula y queso feta con aceite de oliva." },
    { nombre: "Smoothie Verde Detox", desc: "Espinaca, kiwi, banana y jugo de limón." },
    { nombre: "Salteado de Verduras", desc: "Zanahoria, brócoli, zapallito y salsa de soja." },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      <main className="container my-5">
        <h2 className="text-center mb-4">Recetas Saludables</h2>
        <div className="row g-4">
          {recetas.map((receta, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{receta.nombre}</h5>
                  <p className="card-text">{receta.desc}</p>
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

export default Recetas;
