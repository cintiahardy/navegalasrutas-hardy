import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    if (!item || cantidad <= 0) return;
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      setCart(cart.map((p) => (p.id === item.id ? { ...p, cantidad: p.cantidad + cantidad } : p)));
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, p) => acc + (p.cantidad || 0), 0);
  const totalPrice = cart.reduce((acc, p) => acc + (p.cantidad || 0) * (p.precio || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

