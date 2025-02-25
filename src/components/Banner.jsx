const Banner = () => {
  return (
    <div className="banner bg-[url('src/assets/images/banner.png')] h-[600px] bg-cover bg-bottom flex items-center mt-4">
      <div className=" w-[50%] h-full bg-linear-to-r from-[#003739] to-[rgba(115, 115, 115, 0)] text-white flex flex-col py-28 px-20">
        <h1 className="font-semibold text-white text-[4.8rem]">BSI Funding</h1>
        <h2 className="text-4xl leading-10">
          Cerdas Membiayai, <br></br>Ringan Dicicil, Berkah Dimiliki!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
