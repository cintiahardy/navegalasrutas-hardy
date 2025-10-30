function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1">
          © 2025 <strong>Mercado Modelo</strong> — Todos los derechos reservados
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-light" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-light" aria-label="WhatsApp">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
