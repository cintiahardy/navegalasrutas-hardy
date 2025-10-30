// src/firebase/config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Si no querés usar Firebase ahora, devolvemos un objeto mínimo para no romper imports
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (err) {
  // ignore if already initialized or config missing
  app = {};
}

export default app;
