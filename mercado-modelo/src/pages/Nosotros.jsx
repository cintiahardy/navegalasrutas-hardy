// src/pages/Nosotros.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Nosotros = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Contenido principal */}
      <main className="container py-4 animate-fadeInUp">
        <h1 className="text-center">Sobre Nosotros</h1>
        <p className="lead text-center">
          Una empresa familiar con pasión por lo natural
        </p>

        <div className="row my-4">
          <div className="col-md-6 text-center">
            <img
              src="/img/305613219_1058558434948878_1147101941343499501_n.jpg"
              alt="Frutas"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "70%",
                border: "3px solid #ffffff",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p>
              <strong>Mercado Modelo</strong> nació en el año{" "}
              <strong>1998</strong> como un emprendimiento familiar, dirigido por
              sus propios dueños. A lo largo de los años, se ha consolidado como
              un referente en la venta de frutas y verduras frescas. Actualmente,
              contamos con <strong>4 sucursales</strong> especializadas en
              ofrecer calidad, variedad y atención personalizada.
            </p>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-md-6">
            <h4>Misión</h4>
            <p>
              Ofrecer productos frescos y saludables a precios justos, promoviendo
              una alimentación consciente y de calidad para toda la comunidad.
            </p>
          </div>
          <div className="col-md-6">
            <h4>Visión</h4>
            <p>
              Ser el mercado líder en frutas y verduras de la región, reconocido
              por su compromiso con lo natural y la atención al cliente.
            </p>
          </div>
        </div>

        {/* Línea de tiempo */}
        <section className="timeline my-5">
          <h2 className="text-center mb-4">Nuestra Historia</h2>
          <div className="timeline-container">
            <div className="timeline-item left">
              <div className="content shadow-sm">
                <h5>1998</h5>
                <p>Nace Mercado Modelo en un pequeño local del centro.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="content shadow-sm">
                <h5>2005</h5>
                <p>Apertura de la segunda sucursal en Barrio Norte.</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="content shadow-sm">
                <h5>2012</h5>
                <p>Se inaugura la tercera sucursal en la zona sur.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="content shadow-sm">
                <h5>2021</h5>
                <p>
                  Cuarta sucursal abierta en el Parque Industrial, con atención
                  mayorista.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/543482332865"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
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

export default Nosotros;
