import { useInView } from 'react-intersection-observer';
import { ExperienceHeader } from './experience/ExperienceHeader';
import { ExperienceTimeline } from './experience/ExperienceTimeline';
import { SkillsShowcase } from './experience/SkillsShowcase';

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-10 md:py-12 bg-[#0d1117]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <ExperienceHeader inView={inView} />
        <div className="grid lg:grid-cols-[2fr,1fr] gap-6 md:gap-8 mt-8 md:mt-10">
          <ExperienceTimeline inView={inView} />
          <SkillsShowcase inView={inView} />
        </div>
      </div>
    </section>
  );
};