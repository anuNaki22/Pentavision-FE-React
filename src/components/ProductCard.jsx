/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const ProductCard = ({ type, item, setCredit }) => {
  // const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/form");
    // localStorage.setItem("credit_amount", item.price);
    setCredit((x) => {
      // console.log("credit:", x);
      return item.price;
    });
  };

  return (
    <a href="#form">
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col cursor-pointer"
        onClick={handleClick}
      >
        {/* Price Tag */}
        <div
          className={`harga absolute flex items-center justify-center inset-0  text-white text-2xl font-bold py-2 px-2 text-center ${
            type === "oto" ? "" : "mt-16"
          }`}
        >
          <p className="tracking-wide bg-[#003739] py-2 px-6 mt-34 rounded-lg ">
            Rp {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
        </div>
        {/* Image Container (Forces Consistent Size) */}
        <div className="bg-white flex justify-center items-center w-full aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        {/* Product Name */}
        <div className={`bg-[#3e9ea2]  pt-12 pb-12 px-4 text-white`}>
          <p
            className={`text-center text-4xl ${
              type === "oto" ? "block" : "hidden"
            }`}
          >
            {item.name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
