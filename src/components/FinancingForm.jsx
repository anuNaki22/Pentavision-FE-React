import { useState } from "react";
const FinancingForm = () => {
  const [formData, setFormData] = useState({
    credit_amount: "",
    age: "",
    dependants: "",
    duration: "",
    present_employment: "0",
    property: "0",
    purpose: "1",
    saving_accounts: "0",
    credit_history: "0",
    existing_acc: "0",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedFormData = { ...formData };

    if (
      updatedFormData.age < 21 ||
      updatedFormData.age > 52 ||
      updatedFormData.present_employment === "0"
    ) {
      updatedFormData.credit_amount = "0";
    }

    updatedFormData.credit_amount = parseInt(updatedFormData.credit_amount, 10);
    updatedFormData.saving_accounts = parseInt(
      updatedFormData.saving_accounts,
      10
    );
    updatedFormData.existing_acc = parseInt(updatedFormData.existing_acc, 10);

    Object.keys(updatedFormData).forEach((key) => {
      updatedFormData[key] = parseInt(updatedFormData[key], 10);
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}:${
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
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Credit Approval Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Credit Amount", name: "credit_amount" },
          { label: "Age", name: "age" },
          { label: "Dependants", name: "dependants" },
          { label: "Loan Duration (months)", name: "duration" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-gray-600 font-medium">{label}</label>
            <input
              type="number"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        {[
          {
            label: "Present Employment",
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
            label: "Property Ownership",
            name: "property",
            options: [
              "No Property",
              "Real Estate",
              "Life Insurance",
              "Car/Other",
            ],
          },
          {
            label: "Loan Purpose",
            name: "purpose",
            options: ["OTO", "Mitraguna", "Griya"],
          },
          {
            label: "Savings Account",
            name: "saving_accounts",
            options: ["No Savings", "0 - 5M", "5M - 25M", "25M - 50M", "> 50M"],
          },
          {
            label: "Credit History",
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
            label: "Existing Account",
            name: "existing_acc",
            options: ["No Account", "0-5M", "5M - 10M", "> 10M"],
          },
        ].map(({ label, name, options }) => (
          <div key={name}>
            <label className="block text-gray-600 font-medium">{label}</label>
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {options.map((option, index) => (
                <option key={index} value={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-xl font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FinancingForm;
