import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { CODE_CONTENT } from '@/config/constants';

export const CodeContent = () => {
  const { displayedText, isComplete } = useTypewriter(CODE_CONTENT, 10, 300);

  const formatCode = (code: string) => {
    return code.split('\n').map((line) => {
      line = line
        .replace(/(const|let|var|function|return|while|true)/g, '<span class="keyword">$1</span>')
        .replace(/('.*?')/g, '<span class="string">$1</span>')
        .replace(/(\w+)(?=\s*:)/g, '<span class="function">$1</span>');
      return `<span class="block leading-6">${line}</span>`;
    }).join('');
  };

  return (
    <pre className="p-4 text-sm font-mono">
      <code dangerouslySetInnerHTML={{ __html: formatCode(displayedText) }} />
      {!isComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-2 h-4 bg-primary/80 ml-0.5"
        />
      )}
    </pre>
  );
};