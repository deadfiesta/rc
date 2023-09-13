import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import FeaturedRedemption from './components/FeaturedRedemption';

function App() {
  return (
    <>
      <main className="min-h-screen bg-neutral-200">
        <Navbar />
        <Carousel type={1} />
        {/** Change type to 1, 2, 3 for different variants */}
        <Carousel type={2} />
        <Carousel type={3} />
        <FeaturedRedemption />
      </main>
    </>
  );
}

export default App;
