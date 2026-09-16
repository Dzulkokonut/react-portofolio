import ProjectCard from "../component/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Website Portofolio Pribadi",
        desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulir kontak.",
        image: "/image/pria.jpg",
        tech: ["React", "React Router", "CSS"],
        githubUrl: "https://github.com/Dzulkokonut/Portofolio-react",
        demoUrl: "https://dzulkokonut.netlify.app",
    },
{
    id: 2,
    title: "Aplikasi Catatan Sederhana",
    desc: "Aplikasi pencatat tugas harian dengan penyimpanan lokal.",
    image: "/image/CatatanSederhana.jpg",
    tech: ["React", "useState", "localStorage"],
    githubUrl: "https://github.com/Dzulkokonut/Catatan-Sederhana-_",
    demoUrl: "https://catatan-app-demo.vercel.app",
},
{
    id: 3,
    title: "Aplikasi Catatan Anak Sekolah",
    desc: "Aplikasi Untuk Menyimpan Catatan dan Gambar Anak Sekolah ",
    image: "/image/CASP.jpg",
    tech: ["PHP,MYSQL,HTML,CSS,JAVASCRIPT"],
    githuburl: "https://github.com/Dzulkokonut/Tugas-sekolah",

},

];

function Projects() {
    return (
        <section className="projects">
        <h2>Proyek Saya</h2>
        <div className="projects-grid">
        {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
        ))}
        </div>
        </section>
    );
}

export default Projects;
