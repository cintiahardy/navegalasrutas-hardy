// src/pages/Ofertas.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Ofertas = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Contenido principal */}
      <main className="container my-5">
        <div className="text-center mb-4">
          <h2>Ofertas de la Semana</h2>
          <p>Aprovechá nuestras promociones saludables y frescas.</p>
        </div>

        <section className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="tarjeta-oferta" style={{ animationDelay: "0s" }}>
              <img
                src="/img/pexels-maria-m-1070886292-31156147.jpg"
                alt="Veggie Mix"
              />
              <h4>Veggie Mix</h4>
              <p>$990 - Ideal para tus almuerzos</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="tarjeta-oferta" style={{ animationDelay: "0.2s" }}>
              <img
                src="/img/imagenesensalada1.png.jpg"
                alt="Ensalada Completa"
              />
              <h4>Ensalada Completa</h4>
              <p>$890 - Con proteína vegetal</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="tarjeta-oferta" style={{ animationDelay: "0.4s" }}>
              <img
                src="/img/pexels-angele-j-35172-128391.jpg"
                alt="Mix de Verduras"
              />
              <h4>Mix de Verduras</h4>
              <p>$750 - Ideal para cocinar al wok</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="tarjeta-oferta" style={{ animationDelay: "0.6s" }}>
              <img
                src="/img/pexels-janetrangdoan-1132047.jpg"
                alt="Pack de Frutas"
              />
              <h4>Pack de Frutas Frescas</h4>
              <p>$1200 - Variedad para toda la semana</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="tarjeta-oferta" style={{ animationDelay: "0.8s" }}>
              <img
                src="/img/pexels-alisha-mishra-579430-1346347.jpg"
                alt="Jugo Natural Detox"
              />
              <h4>Jugo Natural Detox</h4>
              <p>$700 - Refrescante y saludable</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="tarjeta-oferta" style={{ animationDelay: "1s" }}>
              <img
                src="/img/pexels-diego-romero-471613950-19087691.jpg"
                alt="Ensalada César Vegana"
              />
              <h4>Ensalada César Vegana</h4>
              <p>$980 - Con aderezo casero</p>
            </div>
          </div>
        </section>
      </main>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/543482332865"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        title="¡Escribinos por WhatsApp!"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Footer */}
      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">
          © 2025 Mercado Modelo - Todos los derechos reservados.
        </p>
        <p>También podés encontrarnos en:</p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok"
        >
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          href="https://wa.me/543482332865"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </footer>
    </div>
  );
};

export default Ofertas;

