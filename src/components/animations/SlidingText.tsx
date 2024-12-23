import { motion } from 'framer-motion';

interface SlidingTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
}

export const SlidingText = ({
  text,
  className = '',
  baseDelay = 0,
}: SlidingTextProps) => {
  return (
    <div className="flex justify-center flex-wrap">
      {text.split('').map((char, i) => (
        <div
          key={i}
          className="overflow-hidden"
          style={{ display: 'inline-block' }}
        >
          <motion.span
            className={`inline-block ${className} ${
              char === ' ' ? 'mr-2' : ''
            } bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-primary to-green-400 bg-[length:200%_auto] animate-text-gradient`}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.5,
              delay: baseDelay + i * 0.05,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            style={{ display: 'inline-block', paddingBottom: '0.5rem' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </div>
      ))}
    </div>
  );
};
