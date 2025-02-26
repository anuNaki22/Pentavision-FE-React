import { useNavigate } from "react-router-dom";

const BackButton = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <div
      data-svg-wrapper
      className="left-[10%] md:left-[90px] top-[16%] absolute cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
      onClick={() => navigate(to)}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 118 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[118px] md:h-[118px]"
      >
        <g filter="url(#shadow)">
          <rect x="28" y="18" width="62" height="62" rx="31" fill="white" />
          <path
            d="M68.159 48.9975H50.5454M50.5454 48.9975L59 40.543M50.5454 48.9975L59 57.4521"
            stroke="#004F52"
            strokeWidth="2.11364"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="shadow"
            x="24"
            y="14"
            width="70"
            height="70"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="black"
              floodOpacity="0.2"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BackButton;
