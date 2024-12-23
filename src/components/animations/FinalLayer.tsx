import { motion } from 'framer-motion';

interface FinalLayerProps {
  delay: number;
}

export const FinalLayer = ({ delay }: FinalLayerProps) => (
  <motion.div
    className="fixed inset-0 bg-navy"
    initial={{ y: "-100%" }}
    animate={{ y: "-100%" }}
    exit={{ y: "0%" }}
    transition={{
      duration: 1,
      delay,
      ease: [0.43, 0.13, 0.23, 0.96]
    }}
    style={{ zIndex: 70 }}
  />
);