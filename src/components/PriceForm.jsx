import { useState } from "react";

const formatRupiah = (value) => {
  if (!value) return "";
  const num = value.replace(/\D/g, ""); // Hanya angka
  return `Rp. ${Number(num).toLocaleString("id-ID")}`;
};

const PriceForm = ({
  title = "atau, Kamu Bisa Input Harga Sendiri Disini!",
  setCredit,
}) => {
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    setPrice(formatRupiah(e.target.value));
  };

  const handleSubmit = () => {
    const numericPrice = price.replace(/\D/g, ""); // Ambil angka saja
    setCredit(numericPrice);
  };

  return (
    <div className="w-full min-h-[309px] bg-[#f1b434] flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-[979px] flex flex-col items-center gap-6 md:gap-10">
        <h2 className="text-[#004f52] text-[24px] md:text-[32px] font-semibold text-center leading-[30px] md:leading-[38px]">
          {title}
        </h2>
        <div className="w-full p-5 bg-white rounded-xl border border-[#ed8b00] flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-lg">
          <input
            type="text"
            value={price}
            onChange={handleChange}
            placeholder="Rp. ..."
            className="w-full p-4 bg-gray-50 rounded-lg border-2 border-[#e5e7ea] text-[18px] md:text-[20px] text-[#004f52] focus:outline-none focus:ring-2 focus:ring-[#178488] shadow-sm"
          />
          <a href="#form" className="w-full md:w-auto">
            <button
              onClick={handleSubmit}
              disabled={!price}
              className={`w-full md:w-[250px] h-12 md:h-14 py-3 md:py-4 rounded-lg text-[18px] cursor-pointer font-semibold transition-all duration-300 shadow-md ${
                price
                  ? "bg-[#178488] text-white hover:bg-[#146c6f]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Simulasi
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
