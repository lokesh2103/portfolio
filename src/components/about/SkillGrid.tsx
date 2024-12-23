import { motion } from 'framer-motion';
import { skills } from './skillsData';

interface SkillGridProps {
  inView: boolean;
}

export const SkillGrid = ({ inView }: SkillGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-3 md:grid-cols-4 gap-6"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="group relative flex flex-col items-center"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Icon container */}
            <div className="relative p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-10 h-10 dark:invert-[.85]" 
              />
            </div>
          </div>
          
          <span className="mt-2 text-sm text-foreground/80 group-hover:text-primary transition-colors">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};