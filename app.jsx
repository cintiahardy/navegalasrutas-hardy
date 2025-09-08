import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CarouselHome from "./components/CarouselHome";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CarouselHome />
      <ItemListContainer
        greeting="¡Bienvenidos a Mercado Modelo!"
        subtitle="Tu frutería y verdulería de confianza 🍏🥕"
      />
      <Footer />
    </>
  );
}

export default App;

