import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  return (
    <div className="relative px-58">
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
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCardList;
