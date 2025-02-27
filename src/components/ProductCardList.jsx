import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { oto, griya } from "../assets/data";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCardList = ({ type, setCredit }) => {
  let data = type === "oto" ? oto : griya;

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Memastikan useEffect hanya berjalan setelah swiperInstance tersedia

  return (
    <div className="relative mb-16 mt-16">
      <h2 className="text-center font-bold text-4xl text-[#004F52] mb-16">
        Pilih {type === "oto" ? "Mobil" : "Rumah"} Impian Kamu!
      </h2>

      <div className="relative">
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full ml-6 cursor-pointer"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full mr-6 cursor-pointer"
        >
          <ChevronRight size={30} />
        </button>
        <Swiper
          modules={[FreeMode, Navigation, Autoplay, Scrollbar]}
          spaceBetween={120}
          slidesPerView="auto"
          freeMode={{ enabled: true, momentum: false }}
          grabCursor={true}
          className="pb-10"
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          scrollbar={{ draggable: true }}
          onSwiper={setSwiperInstance} // Simpan instance swiper dengan benar
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <ProductCard item={item} type={type} setCredit={setCredit} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCardList;
