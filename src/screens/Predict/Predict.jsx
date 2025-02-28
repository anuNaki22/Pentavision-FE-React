import { useState, useEffect } from "react";
// import Simulation from "../../components/Simulation";
import LogoByond from "../../assets/logo-byond.svg?react";
import HomeButton from "../../components/HomeButton";

const Predict = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedResult = JSON.parse(window.localStorage.getItem("result"));

    if (!storedResult || storedResult.prediction_text === "null") {
      window.localStorage.removeItem("result"); // Bersihkan localStorage
      window.location.href = "/"; // Redirect ke home
    } else {
      setResult(storedResult);
    }
  }, []);

  if (!result) return null; // Mencegah render sebelum data tersedia

  const formatRupiah = (value = "") => {
    if (!value) return "";
    const num = String(value).replace(/\D/g, ""); // Hanya angka
    return `Rp ${Number(num).toLocaleString("id-ID")}`; // Format ke Rupiah
  };

  let data_now = {};
  if (result.calc_result) {
    data_now = result.calc_result.filter(
      (data) => data.tenor === result.input_data.Duration
    );
  }

  return (
    <>
      <HomeButton className="top-4 left-4 md:top-12 md:left-12 lg:top-24 lg:left-24" />
      <div className="my-0 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center mt-10 md:mt-14 w-full max-w-[900px]">
          <h2
            className={`text-2xl md:text-4xl font-semibold text-center mt-16 md:mt-28 my-2 ${
              result.prediction_text === "APPROVED"
                ? "text-[#00696D]"
                : "text-[#ed8b00]"
            }`}
          >
            {result.prediction_text === "APPROVED"
              ? "Alhamdulillah"
              : "Mohon Maaf"}
          </h2>

          <div className="flex justify-center mb-4 mt-3 text-sm md:text-xl ">
            {result.prediction_text === "APPROVED" ? (
              <p id="result-string">
                Cek detail di bawah untuk melihat pilihan tenor, margin, dan{" "}
                <br />
                angsuran per bulan yang sesuai kebutuhanmu.
              </p>
            ) : (
              <p id="result-string">
                Saat ini kamu belum memenuhi syarat pembiayaan. Kamu bisa cek
                kembali opsi lain atau{" "}
                <a
                  href="mailto:bsifund@bankbsi.co.id"
                  className="font-bold underline text-[#3E9EA2]"
                >
                  hubungi kami
                </a>{" "}
                untuk solusi terbaik. InsyaAllah, ada jalan yang berkah untukmu.
                ✨
              </p>
            )}
          </div>

          {result.prediction_text === "APPROVED" && (
            <>
              <div className="w-full flex-row justify-between items-center text-center self-center flex bg-[#00696D] rounded-xl p-4 md:p-6 mb-2 mt-8 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <div className="flex-col flex-2 items-start pl-4 space-y-4 md:space-y-6 text-start font-bold">
                  <div>Tenor</div>
                  {/* <div>Total Pembayaran Pertama</div> */}
                  <div>Margin</div>
                  <div>Angsuran per Bulan</div>
                </div>
                <div className="flex-col flex-1 items-start space-y-4 md:space-y-6 text-start font-bold">
                  <div>{data_now[0].tenor} bulan</div>
                  {/* <div>{formatRupiah(data_now[0].installment)}</div> */}
                  <div>{Number(data_now[0].margin).toFixed(2)}%</div>
                  <div>{formatRupiah(parseInt(data_now[0].installment))}</div>
                </div>
              </div>

              <div className="w-full text-[#3E9EA2] text-xs md:text-sm text-center mt-2">
                Disclaimer: Hasil di atas merupakan angka estimasi, untuk info
                lebih lanjut{" "}
                <a
                  href="mailto:bsifund@bankbsi.co.id"
                  className="font-bold underline"
                >
                  Hubungi Kami
                </a>
                .
              </div>
            </>
          )}
        </div>

        {result.prediction_text === "APPROVED" && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 p-6 md:p-10 mb-10">
            <p className="text-lg md:text-2xl font-semibold text-center">
              Mau lanjutkan proses pembiayaan? Yuk, download
            </p>
            <button
              className="text-white px-2 py-2 rounded-lg flex justify-center items-center hover:scale-105 transition-transform duration-300"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp&hl=en",
                  "_blank"
                )
              }
            >
              <LogoByond className="w-[80px] md:w-[120px] h-[80px] md:h-[120px] cursor-pointer" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Predict;
