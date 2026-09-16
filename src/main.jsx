import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./assets/styles.css";
 // StrictMode untuk Mengece Apakah ada error
 // BrowserRouter Membuat Pindah halaman tanpa reload
 // AuthProvider untuk memberitahu Seluruh Halaman bahwa orang ini Udah login Atau Belum
 // <App /> Si React manggil app untuk Di jalankan
createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <App />
  </AuthProvider>
  </BrowserRouter>
  </StrictMode>
);
