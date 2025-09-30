import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/mockProducts";

function ItemListContainer({ greeting, subtitle }) {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductsByCategory(categoriaId).then((res) => setProducts(res));
    } else {
      getProducts().then((res) => setProducts(res));
    }
  }, [categoriaId]);

  return (
    <section className="container my-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-success">MERCADO MODELO</h1>
        <h2 className="text-secondary">{greeting}</h2>
        {subtitle && <p className="text-muted">{subtitle}</p>}
      </div>

      {/* Lista de productos */}
      <div className="row">
        {products.map((prod) => (
          <div key={prod.id} className="col-md-3 mb-4">
            <div className="card h-100 border-0 shadow-lg rounded-4">
              <img
                src={prod.imagen}
                className="card-img-top rounded-top-4"
                alt={prod.nombre}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title text-success fw-bold">
                  {prod.nombre}
                </h5>
                <p className="card-text fs-5 fw-semibold text-dark">
                  ${prod.precio}
                </p>
                <Link
                  to={`/detalle/${prod.id}`}
                  className="btn btn-success fw-bold mt-2"
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;

