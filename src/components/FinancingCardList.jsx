// import FinancingCard from "./FinancingCard";
// const FinancingCardList = () => {
//   return (
//     <div className="flex justify-between space-x-24 mt-16 px-58 mb-48">
//       <FinancingCard
//         name={"Griya"}
//         source={"src/assets/images/griya-logo.png"}
//         path={"/griya"}
//       />
//       <FinancingCard
//         name={"OTO"}
//         source={"src/assets/images/oto-logo.png"}
//         path={"/oto"}
//       />
//       <FinancingCard
//         name={"MitraGuna"}
//         source={"src/assets/images/mitraguna-logo.png"}
//         path={"/mitraguna"}
//       />
//     </div>
//   );
// };

// export default FinancingCardList;

import FinancingCard from "./FinancingCard";

const FinancingCardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 mt-8 px-6 sm:px-12 md:px-20 mb-16">
      <FinancingCard
        name="Griya"
        source="src/assets/images/griya-logo.png"
        path="/griya"
      />
      <FinancingCard
        name="OTO"
        source="src/assets/images/oto-logo.png"
        path="/oto"
      />
      <FinancingCard
        name="MitraGuna"
        source="src/assets/images/mitraguna-logo.png"
        path="/mitraguna"
      />
    </div>
  );
};

export default FinancingCardList;
