import Accordion from "../../components/Accordion";

const Mitraguna = () => {
  return (
    <div className="space-y-4">
      <Accordion
        title="Syarat & Ketentuan"
        content={
          <ul className="list-disc pl-4 md:pl-6 space-y-2 md:space-y-3">
            <li>WNI cakap hukum</li>
            <li>
              Usia minimal 21 tahun dan maksimal 52 tahun pada saat jatuh tempo
              pembiayaan
            </li>
            <li>Pegawai tetap dan berpayroll dengan BSI</li>
            <li>
              Belum memiliki pembiayaan eksisting jenis mitraguna online hingga
              Rp 100 Juta
            </li>
            <li>Riwayat Pembiayaannya lancar</li>
            <li>
              <strong>Biaya – Biaya:</strong>
              <ul className="list-[circle] pl-4 md:pl-6 mt-1 space-y-1 md:space-y-2">
                <li>
                  Biaya Administrasi 0,5% x plafon pembiayaan (sesuai pengajuan
                  pembiayaan)
                </li>
                <li>Biaya Asuransi (sesuai pengajuan pembiayaan)</li>
                <li>Biaya Materai : Rp 10.000</li>
              </ul>
            </li>
          </ul>
        }
      />
    </div>
  );
};

export default Mitraguna;
