import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';
import { skillsByExperience } from './skillsData';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
  inView: boolean;
}

export const ExperienceCard = ({ title, company, period, description, index, inView }: ExperienceCardProps) => {
  const isEven = index % 2 === 0;
  const skills = skillsByExperience[title] || [];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Timeline dot */}
      <div 
        className="absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2"
        style={{ top: `${index * 240 + 32}px` }}
      />

      <motion.div
        className={`${isEven ? 'md:order-1' : 'md:order-2'}`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <div className="bg-card p-6 rounded-lg shadow-lg border">
          <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
          <h4 className="text-lg text-primary mb-2">{company}</h4>
          <p className="text-muted-foreground mb-4">{period}</p>
          <ul className="space-y-3">
            {description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2 text-card-foreground/80"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div 
        className={`${isEven ? 'md:order-2' : 'md:order-1'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
      >
        <div className="grid gap-4">
          {skills.map((skill, i) => (
            <SkillBadge
              key={skill.name}
              {...skill}
              delay={0.4 + i * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};