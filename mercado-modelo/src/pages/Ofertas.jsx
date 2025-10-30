// src/pages/Ofertas.jsx
import React from "react";

const Ofertas = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      <main className="container my-5">
        <div className="text-center mb-4">
          <h2>Ofertas de la Semana</h2>
          <p>Aprovechá nuestras promociones saludables y frescas.</p>
        </div>

        <section className="row g-4 justify-content-center">
          {[
            { img: "/img/pexels-maria-m-1070886292-31156147.jpg", nombre: "Veggie Mix", precio: "$990" },
            { img: "/img/imagenesensalada1.png.jpg", nombre: "Ensalada Completa", precio: "$890" },
            { img: "/img/pexels-angele-j-35172-128391.jpg", nombre: "Mix de Verduras", precio: "$750" },
            { img: "/img/pexels-janetrangdoan-1132047.jpg", nombre: "Pack de Frutas Frescas", precio: "$1200" },
            { img: "/img/pexels-alisha-mishra-579430-1346347.jpg", nombre: "Jugo Natural Detox", precio: "$700" },
            { img: "/img/pexels-diego-romero-471613950-19087691.jpg", nombre: "Ensalada César Vegana", precio: "$980" },
          ].map((oferta, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="tarjeta-oferta" style={{ animationDelay: `${i * 0.2}s` }}>
                <img src={oferta.img} alt={oferta.nombre} />
                <h4>{oferta.nombre}</h4>
                <p>{oferta.precio}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <a href="https://wa.me/543482332865" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">© 2025 Mercado Modelo - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Ofertas;

