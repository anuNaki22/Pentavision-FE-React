const Header = () => {
  return (
    <div className="px-58 py-4">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <a href="/">
            <img
              src="src/assets/images/logo.png"
              alt="Logo"
              className="w-[14rem]"
            />
          </a>
        </div>
        <nav className="space-x-8 text-xl text-gray-700">
          <a
            href="/"
            className="font-bold border-b-2 text-[#ED8B00] border-[#ED8B00]"
          >
            BSI Fund
          </a>
          <a href="https://www.bankbsi.co.id/">Produk dan Layanan</a>
          <a href="https://www.bankbsi.co.id/">Prioritas</a>
          <a href="https://www.bankbsi.co.id/">Berita dan Pembaruan</a>
          <a href="https://www.bankbsi.co.id/">Informasi Perusahaan</a>
          <a href="https://www.bankbsi.co.id/">Hubungan Investor</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
