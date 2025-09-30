// src/pages/Recetas.jsx
import React from "react";

function Recetas() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)",
        minHeight: "100vh",
      }}
    >
      <main className="container text-center py-5">
        <h2 className="text-black">Receta saludable recomendada</h2>
        <p className="lead text-black">
          Descubrí esta receta fresca y natural de Paulina Cocina:
        </p>

        {/* Video de YouTube */}
        <div className="video-receta d-flex justify-content-center my-4">
          <iframe
            src="https://www.youtube.com/embed/G3JfV4BCuwg"
            title="21 ENSALADAS que NO SON lechuga y tomate - Paulina Cocina"
            frameBorder="0"
            allowFullScreen
            style={{ width: "80%", height: "450px", borderRadius: "12px" }}
          ></iframe>
        </div>

        <h3 className="mb-4 text-black">Otras recetas saludables</h3>

        {/* Cards de recetas */}
        <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
          <div className="col">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src="img/pexels-polina-tankilevitch-3872373.jpg"
                className="card-img-top"
                alt="Ensalada de quinoa"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">
                  Ensalada de quinoa y vegetales
                </h5>
                <p className="card-text">
                  Una mezcla nutritiva con quinoa, tomate, pepino, y hierbas frescas.
                  Ideal para un almuerzo ligero y lleno de energía.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src="img/pexels-ifreestock-616833.jpg"
                className="card-img-top"
                alt="Smoothie verde"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">Smoothie verde detox</h5>
                <p className="card-text">
                  Refrescante batido con espinaca, manzana, pepino y limón para depurar
                  y revitalizar tu cuerpo.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src="img/pexels-chantal-lenting-18393851-11906476.jpg"
                className="card-img-top"
                alt="Wrap vegetal"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">Wrap de vegetales y hummus</h5>
                <p className="card-text">
                  Una opción rápida y deliciosa con hummus, zanahoria rallada, lechuga y
                  tomate en una tortilla integral.
                </p>
              </div>
            </div>
          </div>

          {/* Nuevas recetas */}
          <div className="col">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src="img/pexels-n-voitkevich-5605574.jpg"
                className="card-img-top"
                alt="Sopa cremosa de calabaza"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">Sopa cremosa de calabaza</h5>
                <p className="card-text">
                  Un plato reconfortante y nutritivo con calabaza, cebolla y un toque de
                  crema para los días frescos.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src="img/pexels-janetrangdoan-1132047.jpg"
                className="card-img-top"
                alt="Bowl de frutas frescas"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">Bowl de frutas frescas</h5>
                <p className="card-text">
                  Una combinación colorida de frutas de temporada que aporta vitaminas y
                  frescura para comenzar el día.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src="img/pexels-janetrangdoan-769969.jpg"
                className="card-img-top"
                alt="Pasta integral con verduras"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">
                  Pasta integral con verduras salteadas
                </h5>
                <p className="card-text">
                  Un plato saludable con pasta integral, pimientos, calabacín y tomate,
                  salteados con ajo y especias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/5493482332865"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "30px",
          textAlign: "center",
          lineHeight: "60px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: 1000,
          transition: "transform 0.3s ease",
          textDecoration: "none",
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Footer */}
      <footer className="text-center py-4 bg-warning mt-5">
        <p className="mb-0">© 2025 Mercado Modelo - Todos los derechos reservados.</p>
        <p>También podés encontrarnos en:</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram mx-2"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f mx-2"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok mx-2"></i>
        </a>
        <a href="https://wa.me/543482332865" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp mx-2"></i>
        </a>
      </footer>
    </div>
  );
}

export default Recetas;
