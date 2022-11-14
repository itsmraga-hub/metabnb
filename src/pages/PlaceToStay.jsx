import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PlaceToStayListDisplay from "../components/PlaceToStayListDisplay";

const PlaceToStay = () => (
  <>
    <Header />
    <Navbar />
    <main>
      <PlaceToStayListDisplay />
    </main>
    <Footer />
  </>
);

export default PlaceToStay;
