function footer() {
    const year = new Date().getFullYear;
    return (
        <footer className="footer">
            <p>&copy; {year} Portofolio Saya. Seluruh Hak Cipta Dilindungi.</p>
        </footer>
    );
}

export default footer;