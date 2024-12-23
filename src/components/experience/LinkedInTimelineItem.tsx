import { motion } from 'framer-motion';
import { ExperienceType } from './types';

interface LinkedInTimelineItemProps extends ExperienceType {
  index: number;
  inView: boolean;
  isLast: boolean;
}

export const LinkedInTimelineItem = ({ 
  title, 
  company, 
  companyLogo,
  period, 
  description, 
  achievements,
  index,
  inView,
  isLast
}: LinkedInTimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="relative pl-12"
    >
      {/* Company Logo */}
      <div className="absolute left-0 top-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.1 }}
          className="w-8 h-8 rounded-full bg-white border-2 border-[#30363d] overflow-hidden"
        >
          <img 
            src={companyLogo} 
            alt={company}
            className="w-full h-full object-contain p-1"
          />
        </motion.div>
      </div>

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-px bg-[#30363d]" />
      )}

      {/* Content */}
      <div className="pb-6">
        <div className="group">
          <h4 className="text-lg font-semibold text-[#c9d1d9] group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-[#8b949e]">{company}</p>
          <p className="text-sm text-[#8b949e] mb-3">{period}</p>
        </div>

        <p className="text-[#8b949e] mb-4">{description}</p>

        <div className="space-y-2">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.2 + i * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
              <span className="text-[#8b949e]">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};