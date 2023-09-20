import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Carousel from "./components/Carousel";
import DraggableCarousel from "./components/DraggableCarousel";
import Featured from "./components/Featured";
import Quicklinks from "./components/Quicklinks";
import Footer from "./components/Footer";
import data from "./components/Data.json";
import ChangeFavIcon from "./components/ChangeFavIcon";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { defaultBanners, moneyBanners, carouselBanners } = data;

  useEffect(() => {
    console.log(isLoading ? "Loading" : "Loaded!");
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Preloader setIsLoading={setIsLoading} />
      ) : (
        <main className="min-h-screen bg-neutral-200">
          <Navbar />
          <DraggableCarousel banners={defaultBanners} type={2} />
          {/** Change type to 1, 2, 3 for standard marketing banner variants
           * 4 for Money2020 banner
           * 5 for Carousel
           */}
          <Featured />
          <Carousel banners={carouselBanners} type={5} />
          <Quicklinks />
          <Footer />
          <ChangeFavIcon />
        </main>
      )}
    </>
  );
}

export default App;
