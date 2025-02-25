import CardFinancing from "./CardFinancing";
const FinancingList = () => {
  return (
    <div className="flex justify-between space-x-24 mt-16">
      <CardFinancing
        name={"Griya"}
        source={"src/assets/images/griya-logo.png"}
      />
      <CardFinancing name={"OTO"} source={"src/assets/images/oto-logo.png"} />
      <CardFinancing
        name={"MitraGuna"}
        source={"src/assets/images/mitraguna-logo.png"}
      />
    </div>
  );
};

export default FinancingList;
