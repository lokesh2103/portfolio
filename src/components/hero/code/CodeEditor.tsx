import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { CODE_CONTENT } from '@/config/constants';
import { CodeHeader } from './CodeHeader';
import { CodeContent } from './CodeContent';
import { CodeFooter } from './CodeFooter';

export const CodeEditor = () => {
  const { isComplete } = useTypewriter(CODE_CONTENT, 10, 300);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="relative rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      <div className="relative code-editor rounded-lg border border-white/10">
        <CodeHeader />
        <CodeContent />
        {isComplete && <CodeFooter />}
      </div>
    </motion.div>
  );
};