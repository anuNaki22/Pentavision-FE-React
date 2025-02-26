import PropTypes from "prop-types";
import BackButton from "./BackButton";

const BannerProduct = ({ image: ProductImage, title, description }) => {
  return (
    <div className="w-screen h-[538px] relative overflow-hidden">
      {/* Background utama mencakup seluruh layar */}
      <div className="absolute inset-0 w-screen h-full bg-[#178488]" />

      {/* Tombol Back */}
      <BackButton to="/" />

      {/* Kotak kuning sebagai container teks */}
      <div className="absolute left-[5%] md:left-[195px] top-[45%] w-[90%] max-w-[1036px] h-[93px] bg-[#f1b434] rounded-[10px] flex items-center justify-start px-6">
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
      <div className="absolute left-[10%] md:left-[207px] top-[32%] px-2.5 py-1">
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
