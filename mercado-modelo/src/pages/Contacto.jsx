// src/pages/Contacto.jsx
import React from "react";

function Contacto() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      <main className="container my-5">
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center">
          ¿Querés hacer un pedido, consulta o sugerencia? ¡Escribinos!
        </p>

        {/* Formulario */}
        <form action="#" method="post" className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="mensaje"
              className="form-control"
              rows="5"
              placeholder="Escribí tu mensaje..."
              required
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Enviar mensaje
            </button>
          </div>
        </form>

        {/* Redes sociales */}
        <div className="text-center mt-5">
          <p>También podés encontrarnos en:</p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            title="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            title="Facebook"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            title="TikTok"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
          <a
            href="https://wa.me/543482332865"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
      </main>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/543482332865"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25d366",
          color: "white",
          fontSize: "30px",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
          transition: "background-color 0.3s ease",
          textDecoration: "none",
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Footer */}
      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">© 2025 Mercado Modelo - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Contacto;
