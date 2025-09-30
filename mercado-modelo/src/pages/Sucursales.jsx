// src/pages/Sucursales.jsx
import React from "react";

function Sucursales() {
  return (
    <div style={{ background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)" }}>
      <main className="container py-5">
        <h1 className="text-center mb-5 text-black">Nuestras Sucursales</h1>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Sucursal 1 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title">Casa Central</h4>
                <p className="card-text">
                  📍{" "}
                  <a
                    href="https://maps.app.goo.gl/gxZLnxsKJfemh4EQ9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </p>
                <p className="card-text">
                  🕒 Lunes a sábados de 7 a 13 y de 16 a 21 hs
                </p>
              </div>
            </div>
          </div>

          {/* Sucursal 2 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title">La Feria</h4>
                <p className="card-text">
                  📍{" "}
                  <a
                    href="https://maps.app.goo.gl/Aa7TUEBp2apwNrGy9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </p>
                <p className="card-text">
                  🕒 Lunes a viernes de 7 a 13 y de 16 a 20 hs | Sábados de 8 a
                  12 hs
                </p>
              </div>
            </div>
          </div>

          {/* Sucursal 3 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title">Noreste</h4>
                <p className="card-text">
                  📍{" "}
                  <a
                    href="https://maps.app.goo.gl/HTi8UARvrQV2oeJw5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </p>
                <p className="card-text">
                  🕒 Lunes a viernes de 8 a 13 y de 16 a 20 hs
                </p>
              </div>
            </div>
          </div>

          {/* Sucursal 4 */}
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h4 className="card-title">El Mercadito</h4>
                <p className="card-text">
                  📍{" "}
                  <a
                    href="https://maps.app.goo.gl/yzwYC92z4MLHkq9C6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </p>
                <p className="card-text">
                  🕒 Lunes a viernes de 8 a 13 hs y de 16 a 20:30 hs
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/543482332865"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn position-fixed d-flex align-items-center justify-content-center"
        style={{
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "30px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: "1000",
          textDecoration: "none",
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Footer */}
      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">© 2025 Mercado Modelo - Todos los derechos reservados.</p>
        <p>También podés encontrarnos en:</p>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" title="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://wa.me/543482332865" target="_blank" rel="noreferrer" title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </footer>
    </div>
  );
}

export default Sucursales;
