import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
          alt="Frutas frescas"
        />
        <Carousel.Caption>
          <h3>Frutas frescas</h3>
          <p>Las mejores manzanas, bananas y cítricos de estación 🍊🍎🍌</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"
          alt="Verduras frescas"
        />
        <Carousel.Caption>
          <h3>Verduras de calidad</h3>
          <p>Hortalizas recién cosechadas, directo a tu mesa 🥦🥕</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg"
          alt="Ofertas especiales"
        />
        <Carousel.Caption>
          <h3>Ofertas imperdibles</h3>
          <p>Aprovechá nuestros descuentos semanales 💰</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
