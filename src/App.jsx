import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

import Preloader from "./components/Preloader";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";
import Quicklinks from "./components/Quicklinks";
import Footer from "./components/Footer";
import data from "./components/Data.json";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { defaultBanners, moneyBanners, carouselBanners } = data;

  useEffect(()=> {
    console.log(isLoading)
  }, [isLoading])
  return (
    <>
      {isLoading ? (
        <Preloader setIsLoading={setIsLoading} />
      ) : (
        <main className="min-h-screen bg-neutral-200">
          <Navbar />
          <Carousel banners={moneyBanners} type={4} />
          {/** Change type to 1, 2, 3 for standard marketing banner variants
           * 4 for Money2020 banner
           * 5 for Carousel
           */}
          <Featured />
          <Carousel banners={carouselBanners} type={5} />
          <Quicklinks />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
