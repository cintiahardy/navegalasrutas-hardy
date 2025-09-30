import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/mockProducts"; 
import ItemCount from "./ItemCount"; 

function ItemDetailContainer() {
  const { productoId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(productoId).then((prod) => {
      setProduct(prod);
      setLoading(false);
    });
  }, [productoId]);

  if (loading) {
    return <p className="text-center my-5">Cargando producto...</p>;
  }

  if (!product) {
    return (
      <p className="text-center my-5 text-danger">
        Producto no encontrado.
        <br />
        <Link to="/" className="btn btn-link mt-2">
          Volver al inicio
        </Link>
      </p>
    );
  }

  return (
    <section className="container my-5">
      <div className="row">
        {/* Imagen del producto */}
        <div className="col-md-6">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Detalles del producto */}
        <div className="col-md-6">
          <h2 className="text-success fw-bold">{product.nombre}</h2>
          <p className="fs-4">${product.precio}</p>
          <p>{product.detalle}</p>

          {/* Contador para agregar al carrito */}
          <ItemCount
            stock={10}
            initial={1}
            onAdd={(qty) => alert(`Agregaste ${qty} unidades al carrito.`)}
          />

          <Link to="/" className="btn btn-secondary mt-3">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ItemDetailContainer;

