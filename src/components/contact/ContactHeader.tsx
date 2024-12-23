import { motion } from 'framer-motion';

interface ContactHeaderProps {
  inView: boolean;
}

export const ContactHeader = ({ inView }: ContactHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl font-bold text-[#c9d1d9] mb-4"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-[#8b949e] max-w-2xl mx-auto"
      >
        Whether you're interested in collaboration, have an opportunity to discuss, or just want to say hello, I'd love to hear from you.
      </motion.p>
    </div>
  );
};