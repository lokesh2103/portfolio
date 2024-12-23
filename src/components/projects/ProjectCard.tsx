import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectType } from './types';
import { ProjectTechStack } from './ProjectTechStack';
import { ShuttleGradient } from '@/components/ui/shuttle-gradient';

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Shuttle Gradient Effect */}
      <ShuttleGradient />

      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div className="relative p-6 space-y-4">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm">{project.description}</p>

        {/* Features List */}
        {project.features && (
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="pt-2">
          <ProjectTechStack technologies={project.tech} />
        </div>

        {/* Action Links */}
        <div className="flex gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
