// src/data/subirProductos.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js"; // 👈 ahora con .js
import productos from "./productos.js";

const subirProductos = async () => {
  try {
    const productosCollection = collection(db, "productos");

    for (const producto of productos) {
      await addDoc(productosCollection, producto);
      console.log(`✅ Producto agregado: ${producto.nombre}`);
    }

    console.log("🎉 Todos los productos fueron cargados correctamente.");
  } catch (error) {
    console.error("❌ Error al subir los productos:", error);
  }
};

subirProductos();

