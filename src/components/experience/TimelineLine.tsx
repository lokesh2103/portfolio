import { motion } from 'framer-motion';

interface TimelineLineProps {
  inView: boolean;
}

export const TimelineLine = ({ inView }: TimelineLineProps) => (
  <motion.div 
    className="absolute left-1/2 w-px h-full bg-gradient-to-b from-green-400/20 via-green-400 to-green-400/20 transform -translate-x-1/2"
    initial={{ height: 0 }}
    animate={inView ? { height: '100%' } : {}}
    transition={{ duration: 1.5, ease: 'easeInOut' }}
  />
);