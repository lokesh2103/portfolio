import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  delay: number;
  className?: string;
}

export const TextReveal = ({ text, delay, className = "" }: TextRevealProps) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
    >
      {text}
    </motion.div>
  </div>
);