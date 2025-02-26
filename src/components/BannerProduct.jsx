import PropTypes from "prop-types";
import BackButton from "./BackButton";

const BannerProduct = ({ image: ProductImage, title, description }) => {
  return (
    <div className="w-full h-[538px] relative mx-auto overflow-hidden flex flex-col bg-[#178488]">
      {/* Background utama mencakup seluruh layar */}
      <div className="absolute inset-0 w-full h-full" />

      {/* Tombol Back */}
      <BackButton to="/" />

      {/* Kotak kuning sebagai container teks */}
      <div className="relative left-1/2 -translate-x-1/2 top-[45%] w-[90%] max-w-[1036px] h-[93px] bg-[#f1b434] rounded-[10px] flex items-center justify-start px-6">
        <div className="absolute -top-16 px-2.5 py-1">
          <div className="text-white text-[24px] md:text-[40px] font-semibold leading-[32px] md:leading-[48px]">
            {title}
          </div>
        </div>
        <div className="max-w-[400px] md:max-w-[381px] text-[#004f52] text-[18px] md:text-[28px] font-medium leading-[28px] md:leading-[34px]">
          {description}
        </div>
        {ProductImage && (
          <ProductImage className="w-[40%] max-w-[458px] h-auto absolute right-0 top-[-150px] hidden md:block" />
        )}
      </div>

      {/* Judul */}
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
