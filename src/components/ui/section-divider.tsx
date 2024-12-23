import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider = ({ className = '' }: SectionDividerProps) => {
  return (
    <div className={`relative h-16 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-3 h-3 bg-primary rounded-full relative"
        >
          <motion.div
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary rounded-full"
          />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 w-[150px] h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
};