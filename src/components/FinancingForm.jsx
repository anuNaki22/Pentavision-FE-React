import { useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const FinancingForm = () => {
  const navigate = useNavigate();
  const tenors_const = [12, 24, 36, 48, 60];
  const [formData, setFormData] = useState({
    credit_history: "0",
    property: "0",
    salary: "0",
    credit_amount: localStorage.getItem("credit_amount") || "",
    present_employment: "0",
    existing_acc: "0",
    age: "",
    duration: "",
    purpose: localStorage.getItem("financing_type") || "",
  });

  const [save, setSave] = useState(0);

  const [isAgreedPrimary, setIsAgreedPrimary] = useState(false);
  const [isAgreedSecondary, setIsAgreedSecondary] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      if (data.prediction_text === "APPROVED") {
        localStorage.setItem("calc_result", JSON.stringify(data.calc_result));
        localStorage.setItem(
          "prediction_text",
          JSON.stringify(data.prediction_text)
        );
      } else {
        localStorage.setItem(
          "prediction_text",
          JSON.stringify(data.prediction_text)
        );
        // alert("Prediction: REJECTED");
      }
      navigate("/predict");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <BackButton />
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
                "Sedang memiliki pembiayaan",
                "Past Due",
                "Loan Outside This Bank",
              ],
            },
            {
              label: "Aset",
              name: "property",
              options: [
                "No Property",
                "Real Estate",
                "Life Insurance",
                "Car/Other",
              ],
            },
            {
              label: "Pendapatan",
              name: "salary",
              options: [
                "No Savings",
                "0 - 5M",
                "5M - 25M",
                "25M - 50M",
                "> 50M",
              ],
            },
            { label: "Jumlah Pembiayaan", name: "credit_amount" },
          ].map(({ label, name, options }) => (
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
                    className="w-full bg-transparent focus:outline-none text-[#131927] text-base font-normal"
                  >
                    {options.map((option, index) => (
                      <option key={index} value={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none text-[#131927] text-base font-normal"
                    placeholder="Placeholder"
                  />
                )}
              </div>
            </div>
          ))}
          {[
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
            },
            {
              label: "Jumlah saldo rekening",
              name: "existing_acc",
              options: [
                "Tidak memiliki gaji",
                "Rp 0 – Rp 3.000.000",
                "Rp 3.000.000 – Rp 5.000.000",
                "Rp 5.000.000 – Rp 15.000.000",
              ],
            },
            { label: "Usia", name: "age" },
            {
              label: "Tenor (Bulan)",
              name: "duration",
              options: ["12", "24", "36", "48", "60"],
            },
          ].map(({ label, name, options }) => (
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
                    className="w-full bg-transparent focus:outline-none text-[#131927] text-base font-normal"
                  >
                    {options.map((option, index) => (
                      <option key={index} value={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none text-[#131927] text-base font-normal"
                    placeholder="Placeholder"
                  />
                )}
              </div>
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

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={!isAgreedPrimary}
              className={`bg-[#3e9ea2] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ${
                !isAgreedPrimary ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Hitung Pembiayaan Saya
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinancingForm;
