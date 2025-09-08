import React from "react";

const ItemListContainer = ({ greeting, subtitle }) => (
  <header className="text-center mt-5">
    <h1 className="fw-bold">{greeting}</h1>
    {subtitle && <p className="lead">{subtitle}</p>}
  </header>
);

export default ItemListContainer;
