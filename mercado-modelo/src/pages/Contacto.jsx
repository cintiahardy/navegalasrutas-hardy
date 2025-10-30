import React from "react";

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ ¡Mensaje enviado! Responderemos pronto.");
    e.target.reset();
  };

  return (
    <div style={{ background: "linear-gradient(135deg,#f8ffae,#43c6ac)", minHeight: "80vh", paddingBottom: "40px" }}>
      <main className="container my-5">
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center">¿Querés hacer un pedido o consulta? ¡Escribinos!</p>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 600 }}>
          <input className="form-control mb-3" placeholder="Nombre" required />
          <input className="form-control mb-3" placeholder="Email" type="email" required />
          <textarea className="form-control mb-3" placeholder="Mensaje" rows="5" required />
          <div className="d-grid"><button className="btn btn-success">Enviar</button></div>
        </form>
      </main>
      <a href="https://wa.me/543482332865" className="whatsapp-btn" target="_blank" rel="noreferrer">📱</a>
      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">© 2025 Mercado Modelo - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
