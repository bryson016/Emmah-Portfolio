import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import FocusAreas from './components/FocusAreas';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Updates from './components/Updates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <FocusAreas />
        <Experience />
        <Projects />
        <Gallery />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}