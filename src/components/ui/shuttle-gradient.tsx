import { motion } from 'framer-motion';

interface ShuttleGradientProps {
  className?: string;
}

export const ShuttleGradient = ({ className = '' }: ShuttleGradientProps) => {
  return (
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${className}`}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: 'linear' 
      }}
      style={{
        background: `
          linear-gradient(
            60deg,
            transparent 0%,
            rgba(88, 166, 255, 0.1) 30%,
            rgba(88, 166, 255, 0.2) 50%,
            rgba(88, 166, 255, 0.1) 70%,
            transparent 100%
          )
        `,
        backgroundSize: '200% 100%',
      }}
    />
  );
};