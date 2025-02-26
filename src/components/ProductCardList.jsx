/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import ProductCard from "./ProductCard";
import { oto, griya } from "../assets/data";

const ProductCardList = ({ type }) => {
  let data = [];

  if (type === "oto") {
    data = oto;
  } else if (type === "griya") {
    data = griya;
  }

  console.log(data);
  return (
    <div className="relative px-68 mb-16">
      <h2 className="text-center font-bold text-4xl text-[#004F52] mb-16">
        Pilih {type === "oto" ? "Mobil" : "Rumah"} Impian Kamu!
      </h2>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={120} // Increase gap between items
        slidesPerView="auto" // Allow natural width
        freeMode={{ enabled: true, momentum: false }} // Prevent snapping
        grabCursor={true} // Enable drag interaction
        className="pb-10"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <ProductCard item={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCardList;
