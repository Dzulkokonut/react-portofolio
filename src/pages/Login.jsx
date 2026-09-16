import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    {/* Membuat 2 tempat Kosong Email dan password setform adalah alat buat ngubah si tempat kosong */}
    const [error, setError] = useState("");
    {/* Membuat Tempat Untuk Menampung error mungkin ? */}
    const { login } = useAuth();    {/* Mengecek Akun ??*/}
    const navigate = useNavigate(); {/* Buat Pindah halaman kyknya ?? */}
    const location = useLocation(); {/* Mengecek Lokasi url  */}

    const redirectTo = location.state?.from?.pathname || "/dashboard";
    console.log("redirectTo:", redirectTo);
    {/* Mengecek Apakah User punya tujuan Khusus Sebelum di tahan sama Login kalau ada simpen rutenyaa kalau gada balikin ke dashboard */}

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    {/* ...form = Spread operator copy smua ketikan yang lama jangan di timpa hapus <ai> */}
    {/* menjalan kan fungsi menghandle event user mulai mengetik di keyboard lalu cari target dan value nya */}

    function handleSubmit(e) {
        e.preventDefault();
        const success = login(form.email, form.password);
        if (success) {
            navigate(redirectTo, { replace: true });
        } else {
            setError("Email dan password wajib diisi.");
        }
    }

    {/* menjalan kan fungsi menghandle event ketika user mengeklik submit dan preventDefault mencegah browser refreh saat di submit  lalu data yang adadi form. email dan form Password di lempar ke fugsi login yang ada di AuthContext lalu hasil berhasil atau gagalnya di simpen ke variable success dan kalau berhasil di bakal nge replace halaman login ??*/}

    return (
        <section className="login">
        <h2>Masuk ke Akun</h2>
        <form onSubmit={handleSubmit}>
        <label>
        Email
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
        Password
        <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        />
        </label>
        <button type="submit">Masuk</button>
        </form>
        {error && <p className="error">{error}</p>}
        </section>
    );
}

export default Login;
