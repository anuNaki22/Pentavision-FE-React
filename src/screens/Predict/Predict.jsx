import Header from "../../components/Header";
import Simulation from "../../components/Simulation";
import { useState, useEffect } from "react";
const Predict = () => {
    const [result, setResult] = useState({ result: "APPROVED", calc_result: [
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
    let data_now = result.calc_result.filter((data) => data.tenor === result.input_data.tenor);

    return (
        <div className="my-0">
            <Header />
            <div className="flex flex-col items-center my-10">
                <h2 className="text-2xl text-center my-2">
                    Kelayakan Pembiayaan Anda
                </h2>
                <div className="flex justify-center mb-4">
                    <p id="result-string">Layak</p>
                </div>
                <div className="w-[300px] flex-col items-center text-center self-center">
                    <div className="flex-row flex justify-between gap-10">
                        <div>Tenor</div>
                        <div>{data_now[0].tenor}</div>
                    </div>
                    <div className="flex-row flex justify-between gap-10">
                        <div>Total Pembayaran Pertama</div>
                        <div>{data_now[0].installment}</div>
                    </div>
                    <div className="flex-row flex justify-between gap-10">
                        <div>Margin</div>
                        <div>{data_now[0].margin}</div>
                    </div>
                    <div className="flex-row flex justify-between gap-10">
                        <div>Angsuran per Bulan</div>
                        <div>{data_now[0].installment}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-row gap-10">
                {
                    result.calc_result.map((data) => (
                        <Simulation data={data} key={data.tenor} />
                    ))
                }
            </div>
        </div>
    );
};

export default Predict;
