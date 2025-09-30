import React, { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount((c) => Math.min(c + 1, stock));
  const dec = () => setCount((c) => Math.max(c - 1, 1));

  return (
    <div className="item-count" style={{ display: "flex", gap: ".6rem", alignItems: "center" }}>
      <button onClick={dec} className="btn">-</button>
      <span style={{ minWidth: 28, textAlign: "center" }}>{count}</span>
      <button onClick={inc} className="btn">+</button>
      <button
        onClick={() => onAdd && onAdd(count)}
        className="btn"
        style={{ marginLeft: ".8rem" }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
