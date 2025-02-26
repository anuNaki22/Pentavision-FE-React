// const Banner = () => {
//   return (
//     <div className="banner bg-[url('src/assets/images/banner.png')] h-[640px] bg-cover bg-bottom flex items-center mt-4 ">
//       <div className=" w-[70%] h-full bg-linear-to-r from-[#003739] to-[rgba(115, 115, 115, 0)] text-white flex flex-col py-28 px-58">
//         <h1 className="font-semibold text-white text-[4.8rem]">BSI Funding</h1>
//         <h2 className="text-4xl leading-10">
//           Cerdas Membiayai, <br></br>Ringan Dicicil, Berkah Dimiliki!
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Banner;

const Banner = () => {
  return (
    <div className="banner bg-[url('src/assets/images/banner.png')] h-[400px] sm:h-[500px] md:h-[640px] bg-cover bg-center flex items-center">
      <div className="w-full sm:w-[80%] lg:w-[70%] h-full bg-gradient-to-r from-[#003739] to-transparent text-white flex flex-col py-12 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-20 xl:px-32">
        <h1 className="font-semibold text-white text-3xl sm:text-5xl md:text-[4.8rem] leading-tight">
          BSI Funding
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl leading-8 sm:leading-10">
          Cerdas Membiayai, <br />
          Ringan Dicicil, Berkah Dimiliki!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
