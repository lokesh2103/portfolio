import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';

interface ProjectShowcaseProps {
  inView: boolean;
}

export const ProjectShowcase = ({ inView }: ProjectShowcaseProps) => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};