

const Simulation = ({ data }) => {

    const formatRupiah = (value = "") => {
        if (!value) return "";
        const num = String(value).replace(/\D/g, ""); // Hanya angka
        return `Rp ${Number(num).toLocaleString("id-ID")}`; // Format ke Rupiah
      };


    return (
        <div className="w-full max-w-[400px] flex flex-col items-center text-center bg-[#00696D] rounded-md p-6 mb-5 text-white">
            <div>
                <div>Tenor</div>
                <div>{data.tenor}</div>
            </div>
            <div>
                <div>Total Pembayaran Pertama</div>
                <div>{formatRupiah(data.installment)}</div>
            </div>
            <div>
                <div>Margin</div>
                <div>{Number(data.margin*100).toFixed(2)}%</div>
            </div>
            <div>
                <div>Angsuran per Bulan</div>
                <div>{formatRupiah(data.installment)}</div>
            </div>
        </div>
    )
}
export default Simulation;