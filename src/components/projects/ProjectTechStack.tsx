import { motion } from 'framer-motion';

interface ProjectTechStackProps {
  technologies: string[];
}

export const ProjectTechStack = ({ technologies }: ProjectTechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-primary border border-border"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
};