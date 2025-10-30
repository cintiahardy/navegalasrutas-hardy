import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById as getMockById } from "../data/mockProducts.js";
import ItemCount from "./ItemCount.jsx";
import { CartContext } from "../context/CartContext.jsx";

// optional Firestore
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from "../firebase/config.js";

export default function ItemDetailContainer() {
  const { productoId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    try {
      const db = getFirestore(firebaseApp);
      const ref = doc(db, "products", productoId);
      getDoc(ref)
        .then((snap) => {
          if (snap.exists()) {
            setProduct({ id: snap.id, ...snap.data() });
            setLoading(false);
          } else {
            getMockById(productoId).then((p) => { setProduct(p); setLoading(false); });
          }
        })
        .catch(() => {
          getMockById(productoId).then((p) => { setProduct(p); setLoading(false); });
        });
    } catch {
      getMockById(productoId).then((p) => { setProduct(p); setLoading(false); });
    }
  }, [productoId]);

  if (loading) return <p className="text-center my-5">Cargando producto...</p>;
  if (!product) return (
    <p className="text-center my-5 text-danger">
      Producto no encontrado.
      <br />
      <Link to="/" className="btn btn-link mt-2">Volver al inicio</Link>
    </p>
  );

  const handleAdd = (qty) => {
    addToCart(product, qty);
  };

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imagen} alt={product.nombre} className="img-fluid rounded" style={{ maxHeight: "400px", objectFit: "cover" }} />
        </div>
        <div className="col-md-6">
          <h2 className="text-success fw-bold">{product.nombre}</h2>
          <p className="fs-4">${product.precio}</p>
          <p>{product.detalle}</p>

          <ItemCount stock={20} initial={1} onAdd={handleAdd} />

          <Link to="/" className="btn btn-secondary mt-3">Volver al catálogo</Link>
        </div>
      </div>
    </section>
  );
}



