const Header = () => {
  return (
    <div className="px-8 py-4">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img
            src="src/assets/images/logo.png"
            alt="Logo"
            className="w-[14rem]"
          />
        </div>
        <nav className="space-x-8 text-xl text-gray-700">
          <a
            href="#"
            className="font-bold border-b-2 text-[#ED8B00] border-[#ED8B00]"
          >
            BSI Fund
          </a>
          <a href="#">Produk dan Layanan</a>
          <a href="#">Prioritas</a>
          <a href="#">Berita dan Pembaruan</a>
          <a href="#">Informasi Perusahaan</a>
          <a href="#">Hubungan Investor</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
