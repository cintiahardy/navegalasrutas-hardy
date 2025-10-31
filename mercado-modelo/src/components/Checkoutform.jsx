import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Confetti from "react-confetti";

// ✅ Importa Firestore correctamente
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config.js";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.nombre || !buyer.email || !buyer.telefono) {
      alert("Por favor completá todos los campos.");
      return;
    }

    const order = {
      buyer,
      items: cart.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        precio: p.precio,
        cantidad: p.cantidad,
      })),
      total: totalPrice,
      createdAt: serverTimestamp(),
    };

    setLoading(true);

    try {
      const ordersCol = collection(db, "orders");
      const docRef = await addDoc(ordersCol, order);
      setOrderId(docRef.id);
      setSuccess(true);
      clearCart();
    } catch (err) {
      console.error("❌ Error al guardar la orden en Firestore:", err);
      alert("Ocurrió un error al procesar la compra. Intenta de nuevo.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 7000);
    }
  };

  if (success) {
    return (
      <div className="container text-center mt-5">
        <Confetti colors={["#2ecc71", "#27ae60", "#a3e635"]} />
        <div
          className="p-5 rounded shadow"
          style={{ background: "linear-gradient(135deg,#dff7e0,#e9ffec)" }}
        >
          <h1 className="text-success fw-bold">✅ ¡Compra exitosa!</h1>
          <p>
            Gracias <strong>{buyer.nombre}</strong> — tu orden fue procesada.
          </p>
          <p>
            Número de orden:{" "}
            <strong className="text-success">{orderId}</strong>
          </p>
          <p className="text-muted">Te llegará un email con los detalles.</p>
          <div className="mt-3">
            <a className="btn btn-success" href="/">
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow"
        style={{ width: "100%", maxWidth: 540, background: "white" }}
      >
        <h2 className="text-center text-success mb-4">Finalizar Compra</h2>

        <div className="mb-3">
          <label className="form-label">Nombre y Apellido</label>
          <input
            name="nombre"
            className="form-control"
            value={buyer.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={buyer.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            name="telefono"
            className="form-control"
            value={buyer.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <strong className="text-success">
            Total: ${totalPrice.toFixed(2)}
          </strong>
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Procesando..." : "Confirmar compra"}
          </button>
        </div>
      </form>
    </div>
  );
}
