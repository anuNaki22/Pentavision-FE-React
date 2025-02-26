import Header from "../../components/Header";
import Banner from "../../components/Banner";
import FinancingCardList from "../../components/FinancingCardList";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <h3 className="text-2xl text-center my-16">
        Periksa kelayakan Anda untuk mendapatkan pembiayaan berkah disini
      </h3>
      <FinancingCardList />
      <Footer />
    </div>
  );
};

export default Home;
