import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-full w-full md:w-[600px] lg:w-[1037px] bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mx-auto">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-black text-base md:text-lg font-semibold">
          {title}
        </h2>
        <div data-svg-wrapper>
          <svg
            width="36"
            height="36"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <rect width="44" height="44" rx="22" fill="#178488" />
            <path
              d="M16 25L22 19L28 25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[#6e6b8f] text-sm md:text-base leading-relaxed mt-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
