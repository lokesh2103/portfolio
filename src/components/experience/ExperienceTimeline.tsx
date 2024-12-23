import { motion } from 'framer-motion';
import { experienceData } from './experienceData';
import { LinkedInTimelineItem } from './LinkedInTimelineItem';

interface ExperienceTimelineProps {
  inView: boolean;
}

export const ExperienceTimeline = ({ inView }: ExperienceTimelineProps) => {
  return (
    <div className="relative bg-[#161b22] rounded-lg border border-[#30363d] p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#0d1117]">
          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6H4V18H20V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#c9d1d9]">Experience</h3>
      </div>

      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <LinkedInTimelineItem
            key={experience.title}
            {...experience}
            index={index}
            inView={inView}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};