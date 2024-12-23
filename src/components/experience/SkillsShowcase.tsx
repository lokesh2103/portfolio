import { motion } from 'framer-motion';
import { skillsData } from './skillsData';

interface SkillsShowcaseProps {
  inView: boolean;
}

export const SkillsShowcase = ({ inView }: SkillsShowcaseProps) => {
  return (
    <div className="bg-[#161b22] rounded-lg border border-[#30363d] p-4 md:p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#0d1117]">
          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#c9d1d9]">Skills</h3>
      </div>

      <div className="space-y-6">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h4 className="text-[#8b949e] text-sm font-medium mb-3">{category}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                  className="group relative bg-[#0d1117] p-3 rounded-lg border border-[#30363d] hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                    <span className="text-[#8b949e] group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#30363d] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.3, duration: 1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};