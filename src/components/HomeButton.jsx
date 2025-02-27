import { useNavigate } from "react-router-dom";

const HomeButton = ({ to = "/", className = "" }) => {
  const navigate = useNavigate();

  return (
    <div
      data-svg-wrapper
      className={`absolute cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80 ${className}`}
      onClick={() => navigate(to)}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#shadow)">
          <rect x="89" y="70" width="62" height="62" rx="31" fill="white" />
          <path
            d="M116.204 112.388H113.674C110.878 112.388 108.612 110.122 108.612 107.327V99.3648C108.612 97.595 109.537 95.9537 111.05 95.0364L117.377 91.2021C118.989 90.225 121.011 90.225 122.623 91.2021L128.95 95.0364C130.463 95.9537 131.388 97.595 131.388 99.3648V107.327C131.388 110.122 129.122 112.388 126.327 112.388H123.796M116.204 112.388V107.327C116.204 105.23 117.904 103.531 120 103.531V103.531C122.096 103.531 123.796 105.23 123.796 107.327V112.388M116.204 112.388H123.796"
            stroke="#004F52"
            strokeWidth="1.89796"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        {/* <defs>
          <filter
            id="shadow"
            x="85"
            y="66"
            width="70"
            height="70"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.1 0 0 0 0 0.15 0 0 0 0 0.2 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs> */}
      </svg>
    </div>
  );
};

export default HomeButton;
