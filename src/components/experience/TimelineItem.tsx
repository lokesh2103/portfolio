import { motion } from 'framer-motion';
import { ExperienceType } from './types';

interface TimelineItemProps extends ExperienceType {
  index: number;
  inView: boolean;
}

export const TimelineItem = ({ title, company, period, description, achievements, index, inView }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="relative pl-16"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.2 }}
        className="absolute left-7 top-3 w-3 h-3 rounded-full bg-primary border-2 border-[#0d1117]"
      />

      <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] hover:border-primary/50 transition-colors">
        <div className="flex flex-wrap items-baseline gap-2 mb-2">
          <h3 className="text-xl font-bold text-[#c9d1d9]">{title}</h3>
          <span className="text-primary">@</span>
          <span className="text-[#8b949e]">{company}</span>
        </div>
        
        <p className="text-[#8b949e] mb-4">{period}</p>
        
        <p className="text-[#8b949e] mb-4">{description}</p>
        
        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
              className="flex items-start gap-2 text-[#8b949e]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};