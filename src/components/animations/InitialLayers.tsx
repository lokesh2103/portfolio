import { motion } from 'framer-motion';

export const InitialLayers = () => {
  const layers = [
    { color: 'bg-navy/40', delay: 0 },
    { color: 'bg-navy/60', delay: 0.2 },
    { color: 'bg-navy/80', delay: 0.4 },
    { color: 'bg-navy', delay: 0.6 },
  ];

  return (
    <>
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className={`fixed inset-0 ${layer.color}`}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            delay: layer.delay,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          style={{ zIndex: 50 + i }}
        />
      ))}
    </>
  );
};