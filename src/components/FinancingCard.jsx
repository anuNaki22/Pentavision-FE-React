import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
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
      className="card max-w-fit text-4xl font-bold relative rounded-lg flex flex-col justify-between cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
      onClick={() => handlingClick(path)}
    >
      <div className="rounded-lg p-4 h-[12rem] w-full bg-linear-to-t from-[#00696d] to-[rgba(255, 255, 255, 0)] absolute bottom-0 -z-50"></div>
      <h2 className="ml-8 justify-self-start">{name}</h2>
      <img
        className="justify-self-end"
        src={`${source}`}
        alt={name}
        width={400}
      />
    </div>
  );
};

export default FinancingCard;
