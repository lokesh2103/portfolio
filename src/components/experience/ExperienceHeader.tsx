import { motion } from 'framer-motion';

interface ExperienceHeaderProps {
  inView: boolean;
}

export const ExperienceHeader = ({ inView }: ExperienceHeaderProps) => {
  return (
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl font-bold text-[#c9d1d9] mb-4"
      >
        Experience & Expertise
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-[#8b949e] max-w-2xl mx-auto"
      >
        A journey through my professional experience and technical expertise
      </motion.p>
    </div>
  );
};