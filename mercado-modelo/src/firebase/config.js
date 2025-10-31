// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu app Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAo_LgDOAt2psbHniYlccT21ZWyM_cY07Q",
  authDomain: "mercado-modelo-cintia.firebaseapp.com",
  projectId: "mercado-modelo-cintia",
  storageBucket: "mercado-modelo-cintia.firebasestorage.app",
  messagingSenderId: "285865652649",
  appId: "1:285865652649:web:7b18a37101b1f1c8a054b8",
  measurementId: "G-3D54XNZZ86"
};

// Inicializamos Firebase y Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
