import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function GuestRoute({ children }) {
    const { user } = useAuth(); //Ngecek Apakah user Sudah Login Atau belem
    return user ? <Navigate to="/dashboard" replace /> : children; // Kalau ternyata Udah Login langsung di buang Ke Halaman dashboard kalau Belum Login masuk Ke bagian children atau pindah ke halaman Login
}

export default GuestRoute;



// Kata ai useAuth adalah Sebuah Custom Hook yang Dibuat Sebagai Jalan Pintas Untuk Mengakses AuthContext menggunakan useContext
