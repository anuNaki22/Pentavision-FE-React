import { useState, useEffect } from "react";
import Simulation from "../../components/Simulation";
import HomeIcon from "../../assets/home-icon.svg?react";
import LogoByond from "../../assets/logo-byond.svg?react";

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
    <div className="my-0 flex flex-col items-center justify-center">
      <div
        className="absolute left-[10vw] top-[20vh] rounded-[50%] p-2 shadow-[0px_1px_5px_0.5px] hover:transition-transform hover:scale-110 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <HomeIcon />
      </div>
      <div className="flex flex-col items-center mt-20">
        <div className="max-w-[600px] flex-col items-center text-justify self-center">
          <h2 className="text-2xl text-center my-2 text-[#00696D]">
            {result.prediction_text === "APPROVED"
              ? "Alhamdulillah"
              : "Mohon Maaf"}
          </h2>
          <div className="flex justify-center mb-4">
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
                untuk solusi terbaik. InsyaAllah, ada jalan yang berkah untukmu.
                ✨
              </p>
            )}
          </div>
          {result.prediction_text === "APPROVED" && (
            <>
              <div className="w-full flex-row justify-between items-center text-center self-center flex bg-[#00696D] rounded-md p-4 mb-2 text-white">
                <div className="flex-col flex-2 items-start gap-2 text-start font-bold">
                  <div>Tenor</div>
                  {/* <div>Total Pembayaran Pertama</div> */}
                  <div>Margin</div>
                  <div>Angsuran per Bulan</div>
                </div>
                <div className="flex-col flex-1 items-start gap-2 text-start font-bold">
                  <div>{data_now[0].tenor}</div>
                  {/* <div>{formatRupiah(data_now[0].installment)}</div> */}
                  <div>{Number(data_now[0].margin).toFixed(2)}%</div>
                  <div>{formatRupiah(parseInt(data_now[0].installment))}</div>
                </div>
              </div>
              <div className="w-full text-[#3E9EA2]">
                Disclaimer: Hasil di atas merupakan angka estimasi, untuk info
                lebih lanjut{" "}
                <a
                  href="mailto:bsifund@bankbsi.co.id"
                  className="font-bold underline"
                >
                  hubungi kami
                </a>
                .
              </div>
            </>
          )}
        </div>
      </div>

      {result.prediction_text === "APPROVED" && (
        <>
          <div className="flex items-center justify-center gap-5 p-5 mb-10">
            <p className="text-xl font-semibold">
              Mau lanjutkan proses pembiayaan? Yuk, download
            </p>
            <button
              className="bg-black text-white px-4 py-2 rounded-lg flex-row justify-center items-center hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp&hl=en",
                  "_blank"
                )
              }
            >
              <LogoByond className="w-[90%] h-[90%]" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Predict;
