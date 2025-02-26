// const Footer = () => {
//   return (
//     <footer className="bg-linear-to-r from-[#259E9E] to-[#F7A22A] text-white text-center py-8 px-58 flex flex-col items-center">
//       <div className="container flex items-center justify-between py-8">
//         <img
//           src="src/assets/images/logo-footer.png"
//           alt="Bank Syariah Indonesia"
//           className="w-[16rem]"
//         />
//         <div className="sitemap space-x-4">
//           <a href="https://www.bankbsi.co.id/syarat-ketentuan/bsi">
//             Syarat dan Ketentuan
//           </a>
//           <a href="https://www.bankbsi.co.id/kebijakan-privacy/bsi">
//             Kebijakan Privasi
//           </a>
//           <a href="mailto:contactus@bankbsi.co.id">Hubungi Kami</a>
//           <a href="https://talentics.id/bank-bsi/">Karir</a>
//         </div>
//       </div>
//       <p className="mt-16 mb-8">
//         PT Bank Syariah Indonesia Tbk Berizin dan Diawasi oleh Otoritas Jasa
//         Keuangan dan Bank Indonesia.
//         <br></br>
//         PT Bank Syariah Indonesia Tbk Merupakan Peserta Penjaminan LPS
//       </p>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#259E9E] to-[#F7A22A] text-white text-center py-8 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Top Section */}
      <div className="container flex flex-wrap justify-center md:justify-between items-center py-6 gap-6 md:gap-12">
        {/* Logo */}
        <img
          src="src/assets/images/logo-footer.png"
          alt="Bank Syariah Indonesia"
          className="w-[12rem] sm:w-[14rem] md:w-[16rem]"
        />

        {/* Sitemap Links */}
        <div className="sitemap flex flex-wrap justify-center gap-4 text-sm sm:text-base">
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

      {/* Bottom Text */}
      <p className="mt-8 text-xs sm:text-sm md:text-base px-4 md:px-16 text-center">
        PT Bank Syariah Indonesia Tbk Berizin dan Diawasi oleh Otoritas Jasa
        Keuangan dan Bank Indonesia.
        <br />
        PT Bank Syariah Indonesia Tbk Merupakan Peserta Penjaminan LPS
      </p>
    </footer>
  );
};

export default Footer;
