import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface SubmissionSuccessProps {
  onReset: () => void;
}

export const SubmissionSuccess = ({ onReset }: SubmissionSuccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center"
      >
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-[#c9d1d9] mb-2">
        Message Sent Successfully!
      </h3>
      <p className="text-[#8b949e] mb-6">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="px-6 py-2 bg-[#238636] text-white rounded-lg hover:bg-[#2ea043] transition-colors"
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
};