import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ProductCard({ producto }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.detalle}</Card.Text>
        <h5 className="text-success">${producto.precio}</h5>
        <Button variant="success" className="w-100">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}
