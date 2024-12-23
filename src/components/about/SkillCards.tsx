import { motion } from 'framer-motion';
import { skills } from './skillsData';

interface SkillCardsProps {
  inView: boolean;
}

export const SkillCards = ({ inView }: SkillCardsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 }}
      className="bg-[#161b22] rounded-lg p-6 border border-[#30363d]"
    >
      <h3 className="text-lg font-semibold text-[#c9d1d9] mb-6">Technical Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="group flex flex-col items-center gap-3"
          >
            <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] group-hover:border-[#58a6ff] transition-colors">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-8 h-8"
              />
            </div>
            <span className="text-sm text-[#8b949e] group-hover:text-[#58a6ff] transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};