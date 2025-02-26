// import { useNavigate } from "react-router-dom";
// const FinancingCard = ({ name, source, path }) => {
//   const navigate = useNavigate();
//   const handlingClick = (path) => {
//     navigate(path);
//   };
//   return (
//     <div
//       className="card max-w-fit text-4xl font-bold relative rounded-lg flex flex-col justify-between cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
//       onClick={() => handlingClick(path)}
//     >
//       <div className="rounded-lg p-4 h-[12rem] w-full bg-linear-to-t from-[#00696d] to-[rgba(255, 255, 255, 0)] absolute bottom-0 -z-50"></div>
//       <h2 className="ml-8 justify-self-start">{name}</h2>
//       <img
//         className="justify-self-end"
//         src={`${source}`}
//         alt={name}
//         width={400}
//       />
//     </div>
//   );
// };

// export default FinancingCard;

import { useNavigate } from "react-router-dom";

const FinancingCard = ({ name, source, path }) => {
  const navigate = useNavigate();
  const handlingClick = () => {
    navigate(path);
  };

  return (
    <div
      className="card relative rounded-lg flex flex-col justify-between cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 w-full sm:w-[18rem] md:w-[20rem] lg:w-[22rem]"
      onClick={handlingClick}
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
