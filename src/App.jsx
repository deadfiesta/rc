import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <main className="min-h-screen bg-neutral-200">
        <Navbar />
        <Carousel type={1} />
        {/** Change type to 1, 2, 3 for different variants */}
      </main>
    </>
  );
}

export default App;
