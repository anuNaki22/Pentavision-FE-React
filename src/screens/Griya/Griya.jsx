import Accordion from "../../components/Accordion";
import PriceForm from "../../components/PriceForm";
import BannerProduct from "../../components/BannerProduct";
import ProductGriya from "../../assets/product-griya.svg?react";
import ProductCardList from "../../components/ProductCardList";

const Griya = () => {
  return (
    <div className="space-y-4 pb-32">
      {/* BannerProduct dengan z-0 agar tidak menutupi Accordion */}
      <div className="relative z-0">
        <BannerProduct
          image={ProductGriya}
          title="Griya BSI"
          description="Tinggal Tenang, Cicilan Aman, Rumah Berkah!"
        />
      </div>
      {/* Accordion dengan posisi overlap */}
      <div className="-mt-28 mb-16 relative z-10">
        <Accordion
          title="Syarat & Ketentuan"
          content={
            <ul className="list-disc pl-4 md:pl-6 space-y-2 md:space-y-3">
              <li>
                Warga Negara Indonesia (WNI) dan berdomisili di Indonesia.
              </li>
              <li>
                Umur minimal 21 tahun atau sudah (pernah) menikah, maksimal 55
                tahun (pegawai) atau 70 tahun (profesional) saat masa pembiayaan
                berakhir.
              </li>
              <li>
                <strong>Pegawai:</strong>
                <ul className="list-[circle] pl-4 md:pl-6 mt-1 space-y-1 md:space-y-2">
                  <li>
                    Status telah menjadi pegawai tetap di perusahaan saat ini.
                  </li>
                  <li>
                    Masa kerja minimum 1 tahun (termasuk masa kerja sebelum
                    diangkat menjadi pegawai tetap) di perusahaan saat ini.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Professional:</strong>
                <ul className="list-[circle] pl-4 md:pl-6 mt-1 space-y-1 md:space-y-2">
                  <li>
                    Memiliki pengalaman di bidang usahanya minimum 2 (dua) tahun
                    berturut-turut (dibuktikan oleh ijin usaha/praktek).
                  </li>
                  <li>Memiliki penghasilan yang dapat diverifikasi.</li>
                </ul>
              </li>
            </ul>
          }
        />
      </div>

      <ProductCardList type="griya"></ProductCardList>
      <PriceForm title="atau, Kamu Bisa Input Harga Sendiri Disini!" />
    </div>
  );
};

export default Griya;
