import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  delay: number;
  inView: boolean;
}

export const SkillCard = ({ name, icon, level, delay, inView }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-3 mb-2">
        <img src={icon} alt={name} className="w-6 h-6" />
        <h4 className="font-medium text-navy">{name}</h4>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-green-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
};