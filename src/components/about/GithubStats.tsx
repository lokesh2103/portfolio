import { motion } from 'framer-motion';

interface GithubStatsProps {
  inView: boolean;
}

export const GithubStats = ({ inView }: GithubStatsProps) => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects', value: '8+' },
    { label: 'Skills', value: '20+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-3 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="bg-[#161b22] rounded-lg p-4 border border-[#30363d]"
        >
          <div className="text-2xl font-bold text-[#c9d1d9] mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-[#8b949e]">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};
