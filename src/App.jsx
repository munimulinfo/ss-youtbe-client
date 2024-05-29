import Banner from "./pages/Home/Banner";
import Footer from "./pages/Home/Footer";
import Guide from "./pages/Home/Guide";
import HowToDownload from "./pages/Home/HowToDownload";
import Navbar from "./pages/Home/Navbar";
import SupportSection from "./pages/Home/SupportSection";

function App() {
  return (
    <>
      <div className="bg-[#08003A] text-white box-border md:px-24 px-5">
        <Navbar />
        <Banner />
      </div>
        <SupportSection/>
        <Guide/>
        <div className="md:px-24 px-5">
          <HowToDownload/>
        </div>
        <Footer />

    </>
  );
}

export default App;
