import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionIndicator from './components/SectionIndicator';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects /> {/* This should have id="projects" */}
      <About />
      <Contact />
      <Footer />
      <SectionIndicator />
    </div>
  );
}

export default App;