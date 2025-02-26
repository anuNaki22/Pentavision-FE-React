/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import ProductCard from "./ProductCard";

const ProductCardList = ({ type }) => {
  return (
    <div className="relative px-68 mb-16">
      <h2 className="text-center font-bold text-4xl text-[#004F52] mb-16">
        Pilih {type == "oto" ? "Mobil" : "Rumah"} Impian Kamu!
      </h2>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={120} // Increase gap between items
        slidesPerView="auto" // Allow natural width
        freeMode={{ enabled: true, momentum: false }} // Prevent snapping
        grabCursor={true} // Enable drag interaction
        className="pb-10"
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i} className="!w-auto">
            {" "}
            {/* Prevent forced width */}
            <ProductCard type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCardList;
