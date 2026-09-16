import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
    const { user } = useAuth();  //untuk Mengecek Apakah Si Orang Udah Punya Untuk Masuk Ataw belum Anjay
    const location = useLocation(); // Mencatat Halaman Mana Yang mau Di masukin Si Orang

    if (!user) {  // jika User Belum Login Akan Di pakas Ke login make navigate to = "/login"
        return <Navigate to="/login" state={{ from: location }} replace />;
    }  // intinyamah kalau Ada Orang yang mau nerobos ke dashboard atau profile make /dashboard atau /login akan di tendang kelogin
    return children; // jika Syarat nya terpenuhi akan kembali ke anak ?
}

export default PrivateRoute;
