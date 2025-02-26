import FinancingCard from "./FinancingCard";
const FinancingCardList = () => {
  return (
    <div className="flex justify-between space-x-24 my-16 px-58">
      <FinancingCard
        name={"Griya"}
        source={"src/assets/images/griya-logo.png"}
        path={"/griya"}
      />
      <FinancingCard
        name={"OTO"}
        source={"src/assets/images/oto-logo.png"}
        path={"/oto"}
      />
      <FinancingCard
        name={"MitraGuna"}
        source={"src/assets/images/mitraguna-logo.png"}
        path={"/mitraguna"}
      />
    </div>
  );
};

export default FinancingCardList;
