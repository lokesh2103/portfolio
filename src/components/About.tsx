import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubProfile } from './about/GithubProfile';
import { GithubStats } from './about/GithubStats';
import { SkillCards } from './about/SkillCards';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-10 md:py-12 bg-[#0d1117]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-8 text-[#c9d1d9]"
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          <GithubProfile inView={inView} />
          <div className="space-y-6">
            <GithubStats inView={inView} />
            <SkillCards inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};