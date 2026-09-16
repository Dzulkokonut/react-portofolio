import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import PrivateRoute from "./component/PrivateRoute";
import GuestRoute from "./component/GuestRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
        <Navbar />  {/* Navbar teh selalu nampil di Semua halaman Karena di simpen nya di luar <main> */}
        <main>
        <Routes> {/* Routes Seperti Lorong kelas. ruang Kelas Nya itu yang Route jadi Tinggal milih mau masuk yaang mana */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
        path="/login"
        element={
            <GuestRoute>
            <Login />
            </GuestRoute>
        }
        />
        {/*Untuk rute Ke Dashboard Dilindungi memakai PrivateRoute yang akan Ngecek kamu udah login ataau belum*/}
        <Route
        path="/dashboard"
        element={
            <PrivateRoute>
            <Dashboard />
            </PrivateRoute>
        }
        />
        {/*Profile juga sama make PrivateRoute jadi bakal di cek udah login atau belum */}
        <Route
        path="/profile"
        element={
            <PrivateRoute>
            <Profile />
            </PrivateRoute>
        }
        />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
        </>
    );
}

export default App;
