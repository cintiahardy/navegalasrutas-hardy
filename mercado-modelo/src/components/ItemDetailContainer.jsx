// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById as getMockById } from "../data/mockProducts.js";
import ItemCount from "./ItemCount.jsx";
import { CartContext } from "../context/CartContext.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js"; // ✅ esta es la forma correcta

export default function ItemDetailContainer() {
  const { productoId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    // Buscamos el producto en Firestore
    const fetchProduct = async () => {
      try {
        const ref = doc(db, "productos", productoId);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setProduct({ id: snap.id, ...snap.data() });
        } else {
          // Si no está en Firestore, lo buscamos en mockProducts
          const mock = await getMockById(productoId);
          setProduct(mock);
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productoId]);

  if (loading) return <p className="text-center my-5">Cargando producto...</p>;

  if (!product)
    return (
      <p className="text-center my-5 text-danger">
        Producto no encontrado.
        <br />
        <Link to="/" className="btn btn-link mt-2">
          Volver al inicio
        </Link>
      </p>
    );

  const handleAdd = (qty) => {
    addToCart(product, qty);
  };

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-success fw-bold">{product.nombre}</h2>
          <p className="fs-4">${product.precio}</p>
          <p>{product.detalle}</p>

          <ItemCount stock={20} initial={1} onAdd={handleAdd} />

          <Link to="/" className="btn btn-secondary mt-3">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}



