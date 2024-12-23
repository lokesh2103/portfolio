import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PreLanding } from './components/PreLanding';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { SectionDivider } from './components/ui/section-divider';
import { Toaster } from './components/ui/toast';

function App() {
  const [showPreLanding, setShowPreLanding] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showPreLanding ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPreLanding]);

  return (
    <div className="relative">
      <Toaster />
      <AnimatePresence>
        {showPreLanding && (
          <PreLanding onComplete={() => setShowPreLanding(false)} />
        )}
      </AnimatePresence>

      {!showPreLanding && (
        <>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;