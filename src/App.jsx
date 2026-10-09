import './index.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBackToTop from './components/FloatingBackToTop';
import NotFound from './components/NotFound';
import Loader from './components/Loader';
import TechnicalWriting from './components/TechnicalWriting';
import { initAnimations } from './utils/animations';

function App() {
  const [isNotFound, setIsNotFound] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if the path is anything other than root
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html') {
        // If hosted on a subpath, you might need to adjust this check
        setIsNotFound(true);
    }
    
    if (!isNotFound && !showLoader) {
        const cleanup = initAnimations();
        return cleanup;
    }
  }, [isNotFound, showLoader]);

  if (isNotFound) {
      return (
          <>
              <div className="grid-bg"></div>
              <div className="noise"></div>
              <Navbar />
              <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <NotFound />
              </div>
              <Footer />
          </>
      );
  }

  return (
    <>
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      <div className="progress" id="progress"></div>
      <div className="grid-bg"></div>
      <div className="noise"></div>

      <Navbar />
      <main id="main-content">
          <Hero />
          <Marquee />
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Achievements />
          <Certifications />
          <TechnicalWriting />
          <Contact />
          <Github />
      </main>
      <Footer />
      <FloatingBackToTop />
    </>
  );
}

export default App;
