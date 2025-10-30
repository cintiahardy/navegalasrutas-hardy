import React, { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const inc = () => setCount((c) => Math.min(c + 1, stock));
  const dec = () => setCount((c) => Math.max(c - 1, 1));

  const handleAdd = () => {
    if (count <= 0 || count > stock) return;
    onAdd && onAdd(count);
    setAdded(true);
  };

  if (added) {
    return (
      <div className="mt-3">
        <div className="alert alert-success">✅ Agregado al carrito</div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <button onClick={dec} className="btn btn-outline-secondary">-</button>
      <div style={{ minWidth: 36, textAlign: "center" }}>{count}</div>
      <button onClick={inc} className="btn btn-outline-secondary">+</button>

      <button onClick={handleAdd} className="btn btn-success" style={{ marginLeft: 12 }}>
        Agregar al carrito
      </button>
    </div>
  );
}

