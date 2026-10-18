import './index.css';
import React, { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import FloatingBackToTop from './components/FloatingBackToTop';
import Loader from './components/Loader';
import { initAnimations } from './utils/animations';

// ── Lazy-loaded sections & views ──────────────────────────────────────
const About = lazy(() => import('./components/About'));
const Stats = lazy(() => import('./components/Stats'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const TechnicalWriting = lazy(() => import('./components/TechnicalWriting'));
const Contact = lazy(() => import('./components/Contact'));
const Github = lazy(() => import('./components/Github'));
const NotFound = lazy(() => import('./components/NotFound'));

// Clean skeleton fallback preserving section id and height to prevent CLS
function SectionFallback({ id, minHeight = '420px' }) {
    return (
        <section id={id} className="section" style={{ minHeight }} aria-busy="true">
            <div className="container" style={{ opacity: 0.18 }}>
                <div style={{ height: '18px', width: '130px', background: 'var(--panel-strong)', borderRadius: '6px', marginBottom: '24px' }}></div>
                <div style={{ height: '44px', width: 'min(420px, 80%)', background: 'var(--panel-strong)', borderRadius: '12px', marginBottom: '40px' }}></div>
                <div style={{ height: '180px', width: '100%', background: 'var(--panel)', borderRadius: '16px' }}></div>
            </div>
        </section>
    );
}

function App() {
  const [isNotFound] = useState(() => {
    const path = window.location.pathname;
    return path !== '/' && path !== '/index.html';
  });
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
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
                  <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
                      <NotFound />
                  </Suspense>
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

          <Suspense fallback={<SectionFallback id="about" minHeight="500px" />}>
              <About />
          </Suspense>

          <Suspense fallback={<div style={{ minHeight: '120px' }} />}>
              <Stats />
          </Suspense>

          <Suspense fallback={<SectionFallback id="skills" minHeight="450px" />}>
              <Skills />
          </Suspense>

          <Suspense fallback={<SectionFallback id="projects" minHeight="650px" />}>
              <Projects />
          </Suspense>

          <Suspense fallback={<SectionFallback id="education" minHeight="500px" />}>
              <Education />
          </Suspense>

          <Suspense fallback={<SectionFallback id="experience" minHeight="500px" />}>
              <Experience />
          </Suspense>

          <Suspense fallback={<SectionFallback id="achievements" minHeight="600px" />}>
              <Achievements />
          </Suspense>

          <Suspense fallback={<SectionFallback id="certifications" minHeight="600px" />}>
              <Certifications />
          </Suspense>

          <Suspense fallback={<SectionFallback id="writing" minHeight="400px" />}>
              <TechnicalWriting />
          </Suspense>

          <Suspense fallback={<SectionFallback id="contact" minHeight="500px" />}>
              <Contact />
          </Suspense>

          <Suspense fallback={<div style={{ minHeight: '350px' }} />}>
              <Github />
          </Suspense>
      </main>
      <Footer />
      <FloatingBackToTop />
    </>
  );
}

export default App;
