import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InitialLayers } from './animations/InitialLayers';
import { SlidingText } from './animations/SlidingText';
import { FinalLayer } from './animations/FinalLayer';

interface PreLandingProps {
  onComplete: () => void;
}

export const PreLanding = ({ onComplete }: PreLandingProps) => {
  const [showContent, setShowContent] = useState(true);
  const [showHello, setShowHello] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show Hello text after initial layers
    const helloTimer = setTimeout(() => setShowHello(true), 1200);

    // Show Welcome text after Hello
    const welcomeTimer = setTimeout(() => {
      setShowHello(false);
      setShowWelcome(true);
    }, 2800);

    // Complete animation and transition to homepage
    const completeTimer = setTimeout(() => {
      setShowContent(false);
      setTimeout(onComplete, 1000);
    }, 4100); // Updated to 4.1 seconds

    return () => {
      clearTimeout(helloTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showContent && (
        <div className="fixed inset-0 overflow-hidden">
          <InitialLayers />
          <AnimatePresence>
            {showHello && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: 55 }}
              >
                <SlidingText
                  text="Hello,"
                  className="text-6xl md:text-7xl font-bold"
                  baseDelay={0.1}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showWelcome && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: 55 }}
              >
                <SlidingText
                  text="Welcome to my Portfolio"
                  className="text-5xl md:text-6xl font-bold"
                  baseDelay={0.1}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <FinalLayer delay={3.3} />{' '}
          {/* Updated delay to match 4.1s total duration */}
        </div>
      )}
    </AnimatePresence>
  );
};
