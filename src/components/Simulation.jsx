

const Simulation = ({ data }) => {
    return (
        <div className="w-full max-w-[500px] flex flex-col items-center gap-6 md:gap-10 text-center">
            <div>
                <div>Tenor</div>
                <div>{data.tenor}</div>
            </div>
            <div>
                <div>Total Pembayaran Pertama</div>
                <div>{data.installment}</div>
            </div>
            <div>
                <div>Margin</div>
                <div>{data.margin}</div>
            </div>
            <div>
                <div>Angsuran per Bulan</div>
                <div>{data.installment}</div>
            </div>
        </div>
    )
}
export default Simulation;