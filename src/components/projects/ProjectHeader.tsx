import { motion } from 'framer-motion';

interface ProjectHeaderProps {
  inView: boolean;
}

export const ProjectHeader = ({ inView }: ProjectHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl font-bold text-[#c9d1d9] mb-4"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-[#8b949e] max-w-2xl mx-auto"
      >
        A collection of projects that showcase my skills and experience in building modern web applications
      </motion.p>
    </div>
  );
};