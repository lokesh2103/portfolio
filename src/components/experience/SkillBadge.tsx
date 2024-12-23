import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon: string;
  level: number;
  delay: number;
  inView: boolean;
}

export const SkillBadge = ({ name, icon, level, delay, inView }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border"
    >
      <div className="flex items-center gap-3 mb-2">
        <img src={icon} alt={name} className="w-6 h-6 dark:invert" />
        <h4 className="font-medium text-card-foreground">{name}</h4>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
};