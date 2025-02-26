const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#259E9E] to-[#F7A22A] text-white text-center py-8 px-58 flex flex-col items-center">
      <div className="container flex items-center justify-between py-8">
        <img
          src="src/assets/images/logo-putih.png"
          alt="Bank Syariah Indonesia"
        />
        <div className="sitemap space-x-4">
          <a href="https://www.bankbsi.co.id/syarat-ketentuan/bsi">
            Syarat dan Ketentuan
          </a>
          <a href="https://www.bankbsi.co.id/kebijakan-privacy/bsi">
            Kebijakan Privasi
          </a>
          <a href="mailto:contactus@bankbsi.co.id">Hubungi Kami</a>
          <a href="https://talentics.id/bank-bsi/">Karir</a>
        </div>
      </div>
      <p className="mt-16 mb-8">
        PT Bank Syariah Indonesia Tbk Berizin dan Diawasi oleh Otoritas Jasa
        Keuangan dan Bank Indonesia.
        <br></br>
        PT Bank Syariah Indonesia Tbk Merupakan Peserta Penjaminan LPS
      </p>
    </footer>
  );
};

export default Footer;
