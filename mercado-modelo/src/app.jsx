import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import ProductList from "./components/ProductList.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";

// Páginas
import Contacto from "./pages/Contacto.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Recetas from "./pages/Recetas.jsx";
import Sucursales from "./pages/Sucursales.jsx";
import Nosotros from "./pages/Nosotros.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:productoId" element={<ItemDetailContainer />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "2rem" }}>404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </>
  );
}


