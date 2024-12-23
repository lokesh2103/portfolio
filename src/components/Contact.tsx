import { useInView } from 'react-intersection-observer';
import { ContactHeader } from './contact/ContactHeader';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-10 md:py-12 bg-[#0d1117]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <ContactHeader inView={inView} />
        
        <div className="grid lg:grid-cols-[1fr,400px] gap-6 md:gap-8">
          <div className="bg-[#161b22] p-4 md:p-6 rounded-lg border border-[#30363d]">
            <ContactForm inView={inView} />
          </div>
          
          <div className="bg-[#161b22] p-4 md:p-6 rounded-lg border border-[#30363d]">
            <ContactInfo inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};