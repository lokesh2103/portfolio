import { motion } from 'framer-motion';
import { CodeEditor } from './code/CodeEditor';

export const HeroVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-3xl" />
    <CodeEditor />
  </motion.div>
);