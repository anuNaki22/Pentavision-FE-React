// import CarList from "../../components/CarList";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import FinancingList from "../../components/FinancingList";
const Home = () => {
  return (
    <div className="px-48">
      <Header />
      <Banner />
      <h3 className="text-2xl text-center my-16">
        Periksa kelayakan Anda untuk mendapatkan pembiayaan berkah disini
      </h3>
      <FinancingList />
      {/* <CarList /> */}
    </div>
  );
};

export default Home;
