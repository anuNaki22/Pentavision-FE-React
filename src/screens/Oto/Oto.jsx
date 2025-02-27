import Accordion from "../../components/Accordion";
import PriceForm from "../../components/PriceForm";
import BannerProduct from "../../components/BannerProduct";
import ProductOto from "../../assets/product-oto.svg?react";
import ProductCardList from "../../components/ProductCardList";
import FinancingForm from "../../components/FinancingForm";
import { useState } from "react";

const Oto = () => {
  const [credit_amount, setCredit] = useState(0);

  return (
    <div>
      <div className="flex justify-center">
        <BannerProduct
          image={ProductOto}
          title="OTO BSI"
          description="Setir Kendaraan Impian dengan Skema Syariah!"
        />
      </div>

      <ProductCardList type="oto" setCredit={setCredit}></ProductCardList>
      <PriceForm
        title="atau, Kamu Bisa Input Harga Sendiri Disini!"
        setCredit={setCredit}
      />
      <div className="w-full pb-20 pt-32 px-4 min-h-screen relative mx-auto bg-[#00696D]">
        <FinancingForm credit_amount={credit_amount} purpose="1" />
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
    </div>
  );
};

export default Oto;
