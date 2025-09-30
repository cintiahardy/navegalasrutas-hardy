
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

import Ofertas from "./pages/Ofertas.jsx";
import Recetas from "./pages/Recetas.jsx";
import Sucursales from "./pages/Sucursales.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        
        <Route
          path="/"
          element={<ItemListContainer greeting="LO NATURAL HACE BIEN" subtitle="Bienvenidos a Mercado Modelo" />}
        />

        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

        <Route path="/detalle/:productoId" element={<ItemDetailContainer />} />

        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "2rem" }}>404 - Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
