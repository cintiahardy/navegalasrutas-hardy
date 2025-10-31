// src/components/ItemListContainer.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const productosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al cargar productos desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Cargando productos...</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text text-muted">{producto.detalle}</p>
                <p className="fw-bold">${producto.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;


