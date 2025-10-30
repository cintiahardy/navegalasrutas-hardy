import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselHome() {
  return (
    <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1576402187878-974f70c890a5"
            className="d-block w-100"
            alt="Frutas frescas"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
            <h3>Frutas frescas todos los días</h3>
            <p>Calidad y sabor directo del campo a tu mesa</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            className="d-block w-100"
            alt="Verduras orgánicas"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
            <h3>Verduras 100% naturales</h3>
            <p>De nuestras huertas al mercado</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1604908176997-3bb90a4d4a7b"
            className="d-block w-100"
            alt="Mercado Modelo"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
            <h3>Mercado Modelo</h3>
            <p>Lo natural hace bien 🌱</p>
          </div>
        </div>
      </div>

      {/* Controles del carrusel */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default CarouselHome;
