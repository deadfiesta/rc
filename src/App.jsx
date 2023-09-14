import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Featured from './components/Featured';
import Quicklinks from './components/Quicklinks';

import data from './components/Data.json'


function App() {
  const { defaultBanners, moneyBanners, carouselBanners } = data;
  return (
    <>
      <main className="min-h-screen bg-neutral-200">
        <Navbar />
        <Carousel banners={ moneyBanners } type={4} />
        {/** Change type to 1, 2, 3 for standard marketing banner variants 
         * 4 for Money2020 banner
         * 5 for Carousel
        */}
        <Featured />
        <Carousel banners={ carouselBanners } type={5} />
        <Quicklinks />
      </main>
    </>
  );
}

export default App;
