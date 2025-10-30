import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList.jsx";
import { getProducts as getMockProducts, getProductsByCategory as getMockByCategory } from "../data/mockProducts.js";

// Import firebase optional
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import firebaseApp from "../firebase/config.js";

export default function ItemListContainer() {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Try Firestore first (if configured)
    try {
      const db = getFirestore(firebaseApp);
      const prodCol = collection(db, "products");
      const q = categoriaId ? query(prodCol, where("categoria", "==", categoriaId)) : prodCol;
      getDocs(q)
        .then((snap) => {
          if (!snap.empty) {
            const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
            setProducts(arr);
            setLoading(false);
          } else {
            // fallback to mock
            if (categoriaId) {
              getMockByCategory(categoriaId).then((res) => { setProducts(res); setLoading(false); });
            } else {
              getMockProducts().then((res) => { setProducts(res); setLoading(false); });
            }
          }
        })
        .catch(() => {
          // fallback to mock
          if (categoriaId) {
            getMockByCategory(categoriaId).then((res) => { setProducts(res); setLoading(false); });
          } else {
            getMockProducts().then((res) => { setProducts(res); setLoading(false); });
          }
        });
    } catch (err) {
      // fallback to mock (if firebase not set)
      if (categoriaId) {
        getMockByCategory(categoriaId).then((res) => { setProducts(res); setLoading(false); });
      } else {
        getMockProducts().then((res) => { setProducts(res); setLoading(false); });
      }
    }
  }, [categoriaId]);

  if (loading) return <p className="text-center my-5">Cargando productos...</p>;

  return (
    <section>
      <div className="text-center mb-4">
        <h1 className="fw-bold display-4 text-success">MERCADO MODELO</h1>
        <p className="text-muted">Lo natural hace bien</p>
      </div>

      <ProductList products={products} />
    </section>
  );
}


