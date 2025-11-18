import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Banners from './components/Banners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0604]">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {currentSection === 'home' && (
        <>
          <Hero />
          <Banners />
          <Rooms featured={true} />
          <Services preview={true} />
          <Testimonials />
        </>
      )}

      {currentSection === 'about' && <About />}
      {currentSection === 'rooms' && <Rooms featured={false} />}
      {currentSection === 'services' && <Services preview={false} />}
      {currentSection === 'contact' && <Contact />}

      <Footer setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default App;
