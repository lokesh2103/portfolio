import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HERO_BUTTONS } from '@/config/constants';

export const ActionButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-wrap gap-2 sm:gap-6"
    >
      {HERO_BUTTONS.map((button, index) => (
        <motion.a
          key={button.href}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={button.href}
          className={`${button.className} px-4 py-3 inline-flex items-center`}
        >
          {/* Glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          {/* Button content */}
          <span className="relative flex items-center gap-2">
            {button.text}
            {index === 0 && (
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};
