// const Header = () => {
//   return (
//     <div className="px-58 py-4">
//       <div className="container flex items-center justify-between">
//         <div className="logo">
//           <a href="/">
//             <img
//               src="src/assets/images/logo.png"
//               alt="Logo"
//               className="w-[14rem]"
//             />
//           </a>
//         </div>
//         <nav className="space-x-8 text-xl text-gray-700">
//           <a
//             href="/"
//             className="font-bold border-b-2 text-[#ED8B00] border-[#ED8B00]"
//           >
//             BSI Fund
//           </a>
//           <a href="https://www.bankbsi.co.id/">Produk dan Layanan</a>
//           <a href="https://www.bankbsi.co.id/">Prioritas</a>
//           <a href="https://www.bankbsi.co.id/">Berita dan Pembaruan</a>
//           <a href="https://www.bankbsi.co.id/">Informasi Perusahaan</a>
//           <a href="https://www.bankbsi.co.id/">Hubungan Investor</a>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 py-4 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between bg-white">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              src="src/assets/images/logo.png"
              alt="Logo"
              className="w-[14rem]"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex text-sm space-x-4 xl:text-xl  text-gray-700 items-center ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <a
            href="/"
            className="font-bold border-b-2 text-[#ED8B00] border-[#ED8B00] block lg:inline"
          >
            BSI Find
          </a>
          <a href="https://www.bankbsi.co.id/" className="block lg:inline">
            Produk dan Layanan
          </a>
          <a href="https://www.bankbsi.co.id/" className="block lg:inline">
            Prioritas
          </a>
          <a href="https://www.bankbsi.co.id/" className="block lg:inline">
            Berita dan Pembaruan
          </a>
          <a href="https://www.bankbsi.co.id/" className="block lg:inline">
            Informasi Perusahaan
          </a>
          <a href="https://www.bankbsi.co.id/" className="block lg:inline">
            Hubungan Investor
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
