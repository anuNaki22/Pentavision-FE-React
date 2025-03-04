/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const FinancingCard = ({ name, source, path }) => {
  const navigate = useNavigate();
  const handlingClick = (path) => {
    if (name == "Griya") {
      localStorage.setItem("financing_type", 3);
    } else if (name == "Mitraguna") {
      localStorage.setItem("financing_type", 2);
    } else {
      localStorage.setItem("financing_type", 1);
    }
    navigate(path);
  };

  return (
    <div
      className="card relative rounded-lg flex flex-col justify-between cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 w-full sm:w-[18rem] md:w-[20rem] lg:w-[22rem]"
      onClick={() => handlingClick(path)}
    >
      {/* Gradient Background */}
      <div className="absolute bottom-0 w-full h-[12rem] rounded-lg bg-gradient-to-t from-[#00696d] to-transparent"></div>

      {/* Title */}
      <h2 className="ml-4 text-xl sm:text-2xl md:text-3xl font-bold">{name}</h2>

      {/* Image */}
      <img
        className="w-full mx-auto max-w-[8rem] sm:max-w-[10rem] md:max-w-[16rem] lg:max-w-[20rem] z-0"
        src={source}
        alt={name}
      />
    </div>
  );
};

export default FinancingCard;
