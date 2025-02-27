import { useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const FinancingForm = () => {
  const navigate = useNavigate();
  const tenors_const = [12, 24, 36, 48, 60];
  const [formData, setFormData] = useState({
    credit_history: "",
    property: "",
    salary: "",
    credit_amount: localStorage.getItem("credit_amount") || "",
    present_employment: "",
    existing_acc: "",
    age: "",
    duration: "",
    purpose: localStorage.getItem("financing_type") || "",
  });

  const [save, setSave] = useState(0);

  const [isAgreedPrimary, setIsAgreedPrimary] = useState(false);
  // const [isAgreedSecondary, setIsAgreedSecondary] = useState(false);

  const formatRupiah = (value) => {
    if (!value) return "Rp 0";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value !== "") && isAgreedPrimary
    );
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "credit_amount") {
      // Hanya ambil angka, tetapi tetap simpan di state sebagai string
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else if (name === "age") {
      // Hanya angka untuk usia
      setFormData({ ...formData, [name]: value.replace(/\D/g, "") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = () => {
    setSave((save) => 1 - save);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    let updatedFormData = { ...formData };

    Object.keys(updatedFormData).forEach((key) => {
      if (!isNaN(updatedFormData[key]) && key !== "save") {
        updatedFormData[key] = parseInt(updatedFormData[key], 10);
      }
    });

    updatedFormData["duration"] = tenors_const[updatedFormData["duration"]];

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}:${
          import.meta.env.VITE_BACKEND_PORT
        }/api/v1/predict`,
        // "http://192.168.21.224:5000/api/v1/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: updatedFormData,
            save: save,
          }),
        }
      );
      const data = await response.json();
      // alert(`Prediction: ${data.prediction_text}`);

      localStorage.setItem("result", JSON.stringify(data));
      console.log(data);
      navigate("/predict");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <BackButton className="top-4 left-4 md:top-10 md:left-10" />
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Pastikan Keberkahanmu
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-6 gap-x-12"
        >
          {[
            {
              label: "Riwayat Pembiayaan",
              name: "credit_history",
              options: [
                "Tidak memiliki riwayat pembiayaan",
                "Pernah memiliki pembiayaan di bank ini",
                "Sedang memiliki pembiayaan (cicilan lancar)",
                "Pernah memiliki tunggakan",
                "Memiliki pembiayaan di bank lain",
              ],
            },
            {
              label: "Lama bekerja",
              name: "present_employment",
              options: [
                "Unemployed",
                "< 1 year",
                "1-4 years",
                "4-7 years",
                "> 7 years",
              ],
              placeholder: "Pilih rentang lama bekerja",
            },
            {
              label: "Aset",
              name: "property",
              options: [
                "Tidak memiliki Properti",
                "Real Estate",
                "Life Insurance",
                "Car / lainnya",
              ],
              description: "Pilih aset utama yang Anda miliki",
            },
            {
              label: "Jumlah saldo rekening",
              name: "existing_acc",
              options: [
                "Tidak memiliki tabungan",
                "Rp 0 – Rp 5.000.000",
                "Rp 5.000.000 – Rp 10.000.000",
                "> Rp 10.000.000",
              ],
              description: "Rekening selain tabungan",
              placeholder: "Pilih rentang saldo rekening",
            },
            {
              label: "Pendapatan",
              name: "salary",
              options: [
                "Rp 0 – Rp 3.000.000",
                "Rp 3.000.000 – Rp 5.000.000",
                "Rp 5.000.000 – RP 15.000.000",
                "> RP 15.000.000",
              ],
              description: "Semua penghasilan yang didapatkan",
            },
            { label: "Usia", name: "age" },
            { label: "Jumlah Pembiayaan", name: "credit_amount" },
            {
              label: "Tenor (Bulan)",
              name: "duration",
              options: ["12", "24", "36", "48", "60"],
            },
          ].map(({ label, name, options, description, placeholder }) => (
            <div key={name} className="flex flex-col gap-2">
              <label className="text-[#131927] text-base font-semibold">
                {label}
              </label>
              <div className="p-3 bg-gray-50 rounded-xl border border-[#e5e7ea]">
                {options ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className={`w-full bg-transparent focus:outline-none text-base font-normal cursor-pointer ${
                      formData[name] ? "text-black" : "text-gray-400"
                    }`}
                  >
                    <option value="" disabled hidden>
                      {placeholder || `Pilih ${label.toLowerCase()}`}
                    </option>
                    {options.map((option, index) => (
                      <option key={index} value={index} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={name === "credit_amount" ? "text" : "number"}
                    name={name}
                    value={
                      name === "credit_amount"
                        ? formatRupiah(formData[name])
                        : formData[name]
                    }
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none text-black text-base font-normal placeholder-gray-400"
                    placeholder="Masukkan usia Anda"
                  />
                )}
              </div>
              {description && (
                <div className="h-5 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-[#9ea2ae] text-sm leading-tight">
                    {description}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              checked={isAgreedPrimary}
              onChange={() => setIsAgreedPrimary(!isAgreedPrimary)}
              className="w-5 h-5 accent-[#3E9EA2] text-[#3E9EA2] border-[#3E9EA2] rounded focus:ring-[#3E9EA2] cursor-pointer"
            />
            <label className="text-[#131927] text-base font-normal cursor-pointer">
              Saya setuju data saya digunakan untuk simulasi kelayakan
              pembiayaan.
            </label>
          </div>
          <div className="col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              checked={save === 1}
              onChange={handleCheckboxChange}
              className="w-5 h-5 accent-[#3E9EA2] text-[#3E9EA2] border-[#3E9EA2] rounded focus:ring-[#3E9EA2] cursor-pointer"
            />
            <label className="text-[#131927] text-base font-normal cursor-pointer">
              Saya setuju data saya disimpan untuk meningkatkan akurasi simulasi
              BSI.
            </label>
          </div>

          <div className="relative col-span-2 flex justify-end group">
            <button
              type="submit"
              disabled={!isAgreedPrimary || !isFormValid()}
              className={`h-14 px-8 rounded-xl font-semibold shadow-lg transition-transform duration-300 ease-in-out cursor-pointer ${
                !isAgreedPrimary || !isFormValid()
                  ? "bg-[#e5e7ea] text-[#9ea2ae] cursor-not-allowed"
                  : "bg-[#3e9ea2] text-white hover:scale-105"
              }`}
            >
              Hitung Pembiayaan Saya
            </button>

            {/* Tooltip ketika tombol dihover dalam keadaan disabled */}
            {(!isAgreedPrimary || !isFormValid()) && (
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md py-2 px-4 shadow-lg">
                {isAgreedPrimary
                  ? "Lengkapi semua field input"
                  : "Centang persetujuan penggunaan data untuk simulasi terlebih dahulu"}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinancingForm;
