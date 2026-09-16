import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null); // baris 1 dan 3 membuat ruang Kosong bernama AuthContext

export function AuthProvider({ children }) { {/* Mengekspor fungsi Si AuthProvider. <App /> Disebutnya children */}
    const [user, setUser] = useState(() => { {/* Saat Web Pertama Kali Di buka lakuin Pencarian inih => dst */}
        const saved = localStorage.getItem("portofolio_user"); {/* localStorage mengecek laci yang bernama portofolio_user */}
        return saved ? JSON.parse(saved) : null;               {/* Kalau ada langsung konek ke akun terahir login kalau gada nu */}
    });

    useEffect(() => { {/* jika user login fungsinya Mencatat Info login Si User Ke laci bernama portofolio_user */}
        if (user) {
            localStorage.setItem("portofolio_user", JSON.stringify(user));
        } else {
            localStorage.removeItem("portofolio_user"); {/* fungsi nya Kalau User logout Bakal Menghapus catatan Info login User */}
        }
    }, [user]);

    function login(email, password) {
        if (!email.trim() || !password.trim()) {  {/* syarat nya masukin email dan pw tidak boleh Kosong atau isinya cuman spasi  nilai false berarti gabisa masuk*/}
            return false;
        }
        setUser({ name: email.split("@")[0], email }); {/* Ngambil nama dari Email tapi yang dibelakang @ ajah  nlai true berarti bisa masuk*/}
        return true;
    }

    function logout() {   {/* kalau Klik logout Usernya berubah jadi null atau kosong */}
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}> {/* Kranjang Buat Nyimpen Alat Alat */}
        {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {         {/* Sama ga Faham */}
    return useContext(AuthContext);
}
