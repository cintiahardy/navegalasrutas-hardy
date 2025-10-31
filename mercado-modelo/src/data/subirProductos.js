// src/data/subirProductos.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";
import productos from "./productos";

export async function subirProductos() {
  try {
    const productosRef = collection(db, "productos");
    for (const prod of productos) {
      await addDoc(productosRef, prod);
    }
    console.log("✅ Productos subidos correctamente a Firebase");
  } catch (error) {
    console.error("❌ Error al subir productos:", error);
  }
}
