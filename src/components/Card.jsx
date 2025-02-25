const Card = () => {
    return (
      <div className="card max-w-lg md:max-w-sm lg:max-w-2xs mx-auto shadow-lg rounded-lg border bg-green-600 border-gray-200 p-2">
        <div className="bg-black bg-opacity-50 text-white p-4 rounded-t-lg">
          <div>
            <h2 className="text-xl md:text-md lg:text-sm font-bold text-center">
              MINI COOPER
            </h2>
            <h2 className="text-xl md:text-md lg:text-sm text-center">
              MINI COOPER S
            </h2>
          </div>
        </div>
        <img
          src="https://momobil.id/_next/image?url=https%3A%2F%2Fmomobil.id%2Fnews%2Fwp-content%2Fuploads%2F2023%2F09%2FMini-Cooper-Electric.jpg&w=3840&q=75"
          alt="Mobil 1"
          className="w-full "
        />
        <div className="bg-black bg-opacity-50 text-white p-4 rounded-b-lg text-center">
          <div>
            <h2 className="text-xl md:text-md lg:text-sm font-bold">HARGA</h2>
            <h2 className="text-xl md:text-md lg:text-sm">
              Rp 169.600.000 - Rp 192.600.000
            </h2>
          </div>
        </div>
      </div>
    );
};

export default Card;