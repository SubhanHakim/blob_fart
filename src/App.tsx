import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDecorations from './components/FloatingDecorations';
import Marquee from './components/Marquee';
import Hero from './sections/Hero';
import Community from './sections/Community';
import Gallery from './sections/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Community />
      <Gallery />
      <Footer />
      <FloatingDecorations />
    </div>
  );
}

export default App;
