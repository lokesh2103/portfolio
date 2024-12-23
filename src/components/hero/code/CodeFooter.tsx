import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/config/constants';

export const CodeFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-3 border-t border-white/10"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4"
      >
        <span className="text-sm comment font-mono">// Connect with me:</span>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                color: "#64ffda",
                transition: { duration: 0.1 } 
              }}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="text-white/60 transition-all duration-100"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};