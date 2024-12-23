import { useInView } from 'react-intersection-observer';
import { ProjectHeader } from './projects/ProjectHeader';
import { ProjectShowcase } from './projects/ProjectShowcase';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="work" className="py-10 md:py-12 bg-[#0d1117]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <ProjectHeader inView={inView} />
        <ProjectShowcase inView={inView} />
      </div>
    </section>
  );
};