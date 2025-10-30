import React, { useState } from "react";

export default function CheckoutForm({ onConfirm }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !telefono) {
      setError("Por favor completá todos los campos.");
      return;
    }

    setError("");
    const userData = {
      nombre,
      email,
      telefono,
    };
    onConfirm(userData);
  };

  return (
    <div
      className="checkout-form-container"
      style={{
        background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
        padding: "2rem",
        borderRadius: "20px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "2rem auto",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          color: "#2e7d32",
          marginBottom: "1.5rem",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Finalizá tu compra
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          style={inputStyle}
        />

        {error && (
          <p
            style={{
              color: "red",
              fontWeight: "600",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#43a047",
            color: "white",
            border: "none",
            padding: "0.75rem",
            borderRadius: "30px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#388e3c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#43a047")}
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "8px",
  border: "1px solid #a5d6a7",
  outline: "none",
  fontSize: "1rem",
  width: "100%",
  transition: "0.2s ease",
};

