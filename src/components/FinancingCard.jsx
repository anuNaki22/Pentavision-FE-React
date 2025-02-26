// eslint-disable-next-line react/prop-types
const FinancingCard = ({ name, source }) => {
  return (
    <div className="card max-w-fit text-4xl font-bold relative rounded-lg flex flex-col justify-between">
      <div className="rounded-lg p-4 h-[12rem] w-full bg-linear-to-t from-[#00696d] to-[rgba(255, 255, 255, 0)] absolute bottom-0 -z-50"></div>
      <h2 className="ml-8 justify-self-start">{name}</h2>
      <img
        className="justify-self-end"
        src={`${source}`}
        alt="Griya"
        width={400}
      />
    </div>
  );
};

export default FinancingCard;
