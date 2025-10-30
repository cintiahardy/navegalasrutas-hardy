import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (!cart) return null;

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-success mb-4">Tu carrito está vacío 🛒</h3>
        <Link to="/" className="btn btn-outline-success">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success mb-4">🛍️ Tu Carrito de Compras</h2>
      <div className="table-responsive shadow rounded bg-white p-2">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-success">
            <tr>
              <th>Producto</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={prod.imagen} alt={prod.nombre} style={{ width: "60px", borderRadius: "8px", marginRight: "10px" }} />
                    {prod.nombre}
                  </div>
                </td>
                <td>${prod.precio.toFixed(2)}</td>
                <td>{prod.cantidad}</td>
                <td>${(prod.precio * prod.cantidad).toFixed(2)}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(prod.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4 className="fw-bold text-success">Total: ${totalPrice.toFixed(2)}</h4>
        <div>
          <button className="btn btn-outline-danger me-2" onClick={clearCart}>Vaciar Carrito</button>
          <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
        </div>
      </div>
    </div>
  );
}

