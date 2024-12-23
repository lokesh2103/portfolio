import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

const socialLinks = [
  { href: "https://linkedin.com/in/lokesh-sahukar", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/lokesh2103", icon: Github, label: "GitHub" },
  { href: "mailto:slokesh2103@gmail.com", icon: Mail, label: "Email" },
  { href: "/resume.pdf", icon: FileText, label: "Resume" }
];

const code = `const developer = {
  name: 'Lokesh Sahukar',
  skills: ['React', 'TypeScript', 'Node.js'],
  experience: '4+ years',
  passion: 'Building amazing web apps',
  
  code: () => {
    while (true) {
      learn();
      build();
      improve();
    }
  }
};`;

export const CodeBlock = () => {
  const { displayedText, isComplete } = useTypewriter(code, 20, 800);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      
      <div className="relative bg-black/40 backdrop-blur-xl rounded-lg border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
          </div>
          <span className="text-sm text-white/40 font-mono">developer.ts</span>
        </div>

        {/* Code content */}
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code className="text-white/80">
            {displayedText}
            {!isComplete && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block w-2 h-4 bg-primary/80 ml-0.5"
              />
            )}
          </code>
        </pre>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="px-4 py-3 border-t border-white/10 flex items-center gap-4"
        >
          <span className="text-sm text-white/40 font-mono">// Connect with me:</span>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.7 + index * 0.1 }}
                whileHover={{ scale: 1.2, color: "#64ffda" }}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-white/60 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};