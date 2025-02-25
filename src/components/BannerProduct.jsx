import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BannerProduct = ({ image: ProductImage, title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1441px] h-[538px] relative">
      {/* Background utama */}
      <div className="w-full h-full absolute bg-[#178488]" />

      {/* Tombol Back (menggunakan SVG) */}
      <div
        data-svg-wrapper
        className="left-[10%] md:left-[117px] top-[16%] absolute cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
        onClick={() => navigate("/")}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 118 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[118px] md:h-[118px]"
        >
          <g filter="url(#filter0_dd_2129_60850)">
            <rect x="28" y="18" width="62" height="62" rx="31" fill="white" />
            <path
              d="M68.159 48.9975H50.5454M50.5454 48.9975L59 40.543M50.5454 48.9975L59 57.4521"
              stroke="#004F52"
              strokeWidth="2.11364"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Kotak kuning sebagai container teks */}
      <div className="w-[90%] max-w-[1036px] h-[93px] left-[5%] md:left-[195px] top-[45%] absolute bg-[#f1b434] rounded-[10px] flex items-center justify-start px-6">
        {/* Teks rata kiri */}
        <div className="max-w-[400px] md:max-w-[381px] text-[#004f52] text-[18px] md:text-[28px] font-medium leading-[28px] md:leading-[34px]">
          {description}
        </div>
        {/* Gambar hanya tampil di layar medium ke atas */}
        {ProductImage && (
          <ProductImage className="w-[40%] max-w-[458px] h-auto absolute right-0 top-[-150px] hidden md:block" />
        )}
      </div>

      {/* Judul */}
      <div className="h-14 px-2.5 py-1 left-[10%] md:left-[207px] top-[32%] absolute justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-[24px] md:text-[40px] font-semibold leading-[32px] md:leading-[48px]">
          {title}
        </div>
      </div>
    </div>
  );
};

// Default Props
BannerProduct.defaultProps = {
  title: "Griya BSI",
  description: "Tinggal Tenang, Cicilan Aman, Rumah Berkah!",
  image: null, // Jika tidak ada gambar, tidak akan ditampilkan
};

// Prop Types
BannerProduct.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.elementType, // Komponen React (SVG/Image)
};

export default BannerProduct;
