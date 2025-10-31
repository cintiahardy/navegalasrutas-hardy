// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // usamos Firestore
import { getDatabase } from "firebase/database"; // opcional si querés Realtime DB también

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "mercado-modelo-cintia.firebaseapp.com",
  databaseURL: "https://mercado-modelo-cintia-default-rtdb.firebaseio.com",
  projectId: "mercado-modelo-cintia",
  storageBucket: "mercado-modelo-cintia.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos las instancias
export const db = getFirestore(app);
export const realtimeDB = getDatabase(app);
