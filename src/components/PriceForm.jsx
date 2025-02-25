import { useState } from "react";

const formatRupiah = (value) => {
  if (!value) return "";
  const num = value.replace(/\D/g, ""); // Hanya angka
  return `Rp. ${Number(num).toLocaleString("id-ID")}`; // Format ke Rupiah
};

const PriceForm = ({
  title = "atau, Kamu Bisa Input Harga Sendiri Disini!",
}) => {
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    setPrice(formatRupiah(e.target.value));
  };

  const handleSubmit = () => {
    alert(`Harga yang dimasukkan: ${price}`);
  };

  return (
    <div className="w-full min-h-[309px] bg-[#f1b434] flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-[979px] flex flex-col items-center gap-6 md:gap-10">
        {/* Title - Bisa diisi secara dinamis */}
        <div className="px-2.5 py-1 flex justify-center items-center">
          <h2 className="text-[#004f52] text-xl md:text-[32px] font-semibold leading-[30px] md:leading-[38px] text-center">
            {title}
          </h2>
        </div>

        {/* Input & Button Container */}
        <div className="w-full p-5 bg-white rounded-xl border border-[#ed8b00] flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Input Field */}
          <div className="w-full md:flex-grow">
            <input
              type="text"
              value={price}
              onChange={handleChange}
              placeholder="Rp.200.000.000"
              className="w-full p-4 bg-gray-50 rounded-lg border-2 border-[#e5e7ea] text-lg md:text-xl text-[#004f52] focus:outline-none focus:ring-2 focus:ring-[#178488]"
            />
          </div>

          {/* Submit Button - Full Width on Mobile */}
          <button
            onClick={handleSubmit}
            disabled={!price}
            className={`w-full md:w-[250px] h-12 md:h-14 py-3 md:py-4 rounded-lg flex justify-center items-center text-lg font-semibold leading-normal transition-all duration-300 ${
              price
                ? "bg-[#178488] text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Simulasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
