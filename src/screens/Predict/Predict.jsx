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
      //   window.localStorage.removeItem("result"); // Hapus setelah diambil
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
    console.log(data_now);
  }

  return (
    <>
      <HomeButton />
      <div className="my-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mt-20">
          <div className="max-w-[800px] flex-col items-center text-justify self-center">
            <h2
              className={`text-3xl font-semibold text-center mt-28 my-2 ${
                result.prediction_text === "APPROVED"
                  ? "text-[#00696D]"
                  : "text-[#ed8b00]"
              }`}
            >
              {result.prediction_text === "APPROVED"
                ? "Alhamdulillah"
                : "Mohon Maaf"}
            </h2>

            <div className="flex justify-center mb-4 text-md">
              {result.prediction_text === "APPROVED" ? (
                <p id="result-string">
                  Cek detail di bawah untuk melihat pilihan tenor, margin, dan
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
                  untuk solusi terbaik. InsyaAllah, ada jalan yang berkah
                  untukmu. ✨
                </p>
              )}
            </div>
            {result.prediction_text === "APPROVED" && (
              <>
                <div className="w-full flex-row justify-between items-center text-center self-center flex bg-[#00696D] rounded-xl p-6 mb-2 text-white text-2xl">
                  <div className="flex-col flex-2 items-start pl-4 space-y-6 text-start font-bold">
                    <div>Tenor</div>
                    {/* <div>Total Pembayaran Pertama</div> */}
                    <div>Margin</div>
                    <div>Angsuran per Bulan</div>
                  </div>
                  <div className="flex-col flex-1 items-start space-y-6 text-start font-bold">
                    <div>{data_now[0].tenor} bulan</div>
                    {/* <div>{formatRupiah(data_now[0].installment)}</div> */}
                    <div>{Number(data_now[0].margin).toFixed(2)}%</div>
                    <div>{formatRupiah(parseInt(data_now[0].installment))}</div>
                  </div>
                </div>
                <div className="w-full text-[#3E9EA2] text-sm text-center">
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
        </div>

        {result.prediction_text === "APPROVED" && (
          <>
            <div className="flex items-center justify-center gap-5 p-10 mb-10">
              <p className="text-2xl font-semibold">
                Mau lanjutkan proses pembiayaan? Yuk, download
              </p>
              <button
                className=" text-white px-2 py-2 rounded-lg flex-row justify-center items-center hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp&hl=en",
                    "_blank"
                  )
                }
              >
                <LogoByond className="w-[90%] h-[90%] cursor-pointer" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Predict;
