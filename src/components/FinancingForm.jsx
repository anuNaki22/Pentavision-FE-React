import { useState } from "react";

const FinancingForm = () => {
  const [formData, setFormData] = useState({
    credit_history: "0",
    property: "0",
    saving_account: "0",
    credit_amount: "",
    present_employment: "0",
    existing_acc: "0",
    age: "",
    duration: "",
  });

  const [isAgreed, setIsAgreed] = useState(false); // State untuk checkbox

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedFormData = { ...formData };

    Object.keys(updatedFormData).forEach((key) => {
      if (!isNaN(updatedFormData[key])) {
        updatedFormData[key] = parseInt(updatedFormData[key], 10);
      }
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}:$${
          import.meta.env.VITE_BACKEND_PORT
        }/api/v1/predict`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedFormData),
        }
      );
      const data = await response.json();
      alert(`Prediction: ${data.prediction_text}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Pastikan Keberkahanmu
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {[
          {
            label: "Riwayat Pembiayaan",
            name: "credit_history",
            options: [
              "No Loan History",
              "In This Bank",
              "Current Loan (Good Standing)",
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
            name: "saving_account",
            options: ["No Savings", "0 - 5M", "5M - 25M", "25M - 50M", "> 50M"],
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
            options: ["No Account", "0-5M", "5M - 10M", "> 10M"],
          },
          { label: "Usia", name: "age" },
          { label: "Tenor", name: "duration" },
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

        {/* Checkbox Term & Condition */}
        <div className="col-span-2 flex items-center gap-3">
          <input
            type="checkbox"
            id="agreement"
            checked={isAgreed}
            onChange={handleCheckboxChange}
            className="w-5 h-5 text-[#3E9EA2] border-gray-300 rounded focus:ring-[#3E9EA2] cursor-pointer"
          />
          <label
            htmlFor="agreement"
            className="text-[#131927] text-base font-normal cursor-pointer"
          >
            Saya setuju data saya digunakan untuk simulasi kelayakan pembiayaan.
          </label>
        </div>

        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-[#3e9ea2] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Hitung Pembiayaan Saya
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancingForm;
