const ProductCard = () => {
  return (
    <div className="max-w-xs relative shadow-2xl rounded-lg overflow-hidden mx-auto">
      <div className="harga absolute flex items-center justify-center inset-0  text-white text-2xl font-bold py-2 px-2 text-center">
        <p className="tracking-wide bg-[#003739] py-2 px-6 mt-16 rounded-lg ">
          Rp 500.000.000
        </p>
      </div>
      <div className="py-4 bg-white">
        <img src="src/assets/images/mobil1.png" alt="Honda Mobilio" />
      </div>
      <div className="bg-[#3e9ea2] py-12 px-2 text-white">
        <p className="text-center text-4xl">Honda Mobilio</p>
      </div>
    </div>
  );
};

export default ProductCard;
