import Accordion from "../../components/Accordion";
import PriceForm from "../../components/PriceForm";
import BannerProduct from "../../components/BannerProduct";
import ProductOto from "../../assets/product-oto.svg?react";
import ProductCardList from "../../components/ProductCardList";

const Oto = () => {
  return (
    <div className="space-y-4 pb-32">
      <div className="flex justify-center">
        <BannerProduct
          image={ProductOto}
          title="OTO BSI"
          description="Setir Kendaraan Impian dengan Skema Syariah!"
        />
      </div>

      <div className="-mt-28 mb-16 relative z-10">
        <Accordion
          title="Syarat & Ketentuan"
          content={
            <ul className="list-disc pl-4 md:pl-6 space-y-2 md:space-y-3">
              <li>Data Diri (KTP, KK, NPWP)</li>
              <li>PBB</li>
              <li>Slip Gaji 3 bulan terakhir/Surat keterangan Kerja</li>
              <li>Rekening koran 3 bulan terakhir</li>
              <li>Materai 10.000 (4 lembar)</li>
            </ul>
          }
        />
      </div>
      <ProductCardList type="oto"></ProductCardList>
      <PriceForm title="atau, Kamu Bisa Input Harga Sendiri Disini!" />
    </div>
  );
};

export default Oto;
