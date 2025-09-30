import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  if (!producto) return null;

  return (
    <div
      className="item-detail card"
      style={{
        padding: "1.2rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          width: 220,
          height: 160,
          objectFit: "cover",
          borderRadius: 8,
        }}
      />

      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: ".5rem" }}>{producto.nombre}</h2>
        <p style={{ marginBottom: ".6rem" }}>{producto.descripcion}</p>
        <p style={{ fontWeight: 700, marginBottom: ".6rem" }}>
          Precio: ${producto.precio}
        </p>

        {/* Contador de cantidad */}
        <ItemCount
          stock={20}
          initial={1}
          onAdd={(cantidad) => {
            console.log(
              `Agregar ${cantidad} unidades de ${producto.nombre} al carrito`
            );
          }}
        />
      </div>
    </div>
  );
}
