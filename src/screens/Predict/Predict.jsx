import Header from "../../components/Header";
import Simulation from "../../components/Simulation";
import HomeIcon from "../../assets/home-icon.svg?react";
import LogoByond from "../../assets/logo-byond.svg?react";
import { useState, useEffect } from "react";
const Predict = ({ data }) => {
    const [result, setResult] = useState({
        result: "APPROVED", calc_result: [
            {
                tenor: 6,
                margin: 0.07,
                installment: 5000000
            },
            {
                tenor: 12,
                margin: 0.08,
                installment: 3000000
            },
            {
                tenor: 24,
                margin: 0.09,
                installment: 2000000
            },
            {
                tenor: 36,
                margin: 0.1,
                installment: 1500000
            },
        ],
        input_data: {
            tenor: 12,
        }
    });

    if(data) setResult(data);

    const formatRupiah = (value = "") => {
        if (!value) return "";
        const num = String(value).replace(/\D/g, ""); // Hanya angka
        return `Rp ${Number(num).toLocaleString("id-ID")}`; // Format ke Rupiah
    };

    let data_now = result.calc_result.filter((data) => data.tenor === result.input_data.tenor);

    return (
        <div className="my-0 flex flex-col items-center justify-center">
            <Header />
            <div className="absolute left-[10vw] top-[20vh] rounded-[50%] p-2 shadow-[0px_1px_5px_0.5px] hover:transition-transform hover:scale-110 cursor-pointer" onClick={() => window.location.href = "/"}>
                <HomeIcon />
            </div>
            <div className="flex flex-col items-center my-10">
                <div className="max-w-[600px] flex-col items-center text-justify self-center">
                    <h2 className="text-2xl text-center my-2 text-[#00696D]">
                        {result.result == "APPROVED" ? "Alhamdulillah" : "Mohon Maaf"}
                    </h2>
                    <div className="flex justify-center mb-4">
                        <p id="result-string">
                            {result.result == "APPROVED"
                                ? "Cek detail di bawah untuk melihat pilihan tenor, margin, dan angsuran per bulan yang sesuai kebutuhanmu."
                                : "Saat ini kamu belum memenuhi syarat pembiayaan.\nKamu bisa cek kembali opsi lain atau hubungi kami untuk solusi terbaik. InsyaAllah, ada jalan yang berkah untukmu. ✨."
                            }
                        </p>
                    </div>
                    {result.result == "APPROVED" && (
                        <div className="w-full flex-row justify-between items-center text-center self-center flex bg-[#00696D] rounded-md p-4 mb-2 text-white">
                            <div className="flex-col flex-2 items-start gap-2 text-start font-bold">
                                <div>Tenor</div>
                                <div>Total Pembayaran Pertama</div>
                                <div>Margin</div>
                                <div>Angsuran per Bulan</div>
                            </div>
                            <div className="flex-col flex-1 items-start gap-2 text-start font-bold">
                                <div>{data_now[0].tenor}</div>
                                <div>{formatRupiah(data_now[0].installment)}</div>
                                <div>{Number(data_now[0].margin * 100).toFixed(2)}%</div>
                                <div>{formatRupiah(data_now[0].installment)}</div>
                            </div>
                        </div>
                    )}
                            <div className="w-full text-[#3E9EA2]">
                                Desclaimer: Hasil di atas merupakan angka estimasi, data perhitungan dapat berbeda dengan perhitungan bank. Hubungi kami untuk info lebih lanjut.
                            </div>
                </div>
            </div>

            {result.result == "APPROVED" && (
                <>
                    {/* <div className="flex justify-center flex-row gap-10 px-20">
                        {
                            result.calc_result.map((data) => (
                                <Simulation data={data} key={data.tenor} />
                            ))
                        }
                    </div> */}

                    <div className="flex items-center justify-center gap-5 p-5 mb-10">
                        <p className="text-xl font-semibold">Mau lanjutkan proses pembiayaan? Yuk, download</p>
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex-row justify-center items-center hover:transform hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp&hl=en", "_blank")}>
                            <LogoByond className="w-[90%] h-[90%]"/>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Predict;
