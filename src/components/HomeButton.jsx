import { useNavigate } from "react-router-dom";

const HomeButton = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <div
      data-svg-wrapper
      className="left-[10%] md:left-[90px] top-[16%] absolute cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
      onClick={() => navigate(to)}
    >
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_4449_347)">
          <rect x="89" y="70" width="62" height="62" rx="31" fill="white" />
          <path
            d="M116.204 112.388H113.674C110.878 112.388 108.612 110.122 108.612 107.327V99.3648C108.612 97.595 109.537 95.9537 111.05 95.0364L117.377 91.2021C118.989 90.225 121.011 90.225 122.623 91.2021L128.95 95.0364C130.463 95.9537 131.388 97.595 131.388 99.3648V107.327C131.388 110.122 129.122 112.388 126.327 112.388H123.796M116.204 112.388V107.327C116.204 105.23 117.904 103.531 120 103.531V103.531C122.096 103.531 123.796 105.23 123.796 107.327V112.388M116.204 112.388H123.796"
            stroke="#004F52"
            stroke-width="1.89796"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_4449_347"
            x="0.428571"
            y="0.408163"
            width="239.143"
            height="239.143"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4.21769"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_4449_347"
            />
            <feOffset dy="18.9796" />
            <feGaussianBlur stdDeviation="46.3946" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0745098 0 0 0 0 0.0980392 0 0 0 0 0.152941 0 0 0 0.14 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4449_347"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="6.32653"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_4449_347"
            />
            <feOffset dy="8.43537" />
            <feGaussianBlur stdDeviation="14.7619" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0745098 0 0 0 0 0.0980392 0 0 0 0 0.152941 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_4449_347"
              result="effect2_dropShadow_4449_347"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_4449_347"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default HomeButton;
