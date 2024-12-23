import { motion } from 'framer-motion';
import { TypedTitle } from './content/TypedTitle';
import { ActionButtons } from './content/ActionButtons';

export const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-left relative z-10"
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
    >
      <span className="hero-title">
        Hi, I'm Lokesh
      </span>
    </motion.h1>
    <TypedTitle />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-lg text-foreground/80 mb-8 max-w-xl"
    >
      Building modern web applications with a focus on performance, accessibility, and user experience.
    </motion.p>
    <ActionButtons />
  </motion.div>
);