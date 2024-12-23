import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

// Theme-specific color palettes with improved visibility
const PARTICLE_COLORS = {
  light: [
    'rgba(15, 23, 42, 0.4)',    // slate-900
    'rgba(30, 41, 59, 0.4)',    // slate-800
    'rgba(51, 65, 85, 0.4)',    // slate-700
    'rgba(71, 85, 105, 0.4)',   // slate-600
    'rgba(51, 65, 85, 0.4)',    // slate-700
  ],
  dark: [
    'rgba(100, 255, 218, 0.3)', // green
    'rgba(14, 165, 233, 0.3)',  // blue
    'rgba(129, 140, 248, 0.3)', // indigo
    'rgba(192, 132, 252, 0.3)', // purple
    'rgba(34, 211, 238, 0.3)'   // cyan
  ]
};

const PARTICLE_COUNT = 150; // Increased particle count

export const Particles = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getRandomValue = useCallback((min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }, []);

  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    id: i,
    size: getRandomValue(3, 8), // Increased particle size range
    color: PARTICLE_COLORS[isDark ? 'dark' : 'light'][Math.floor(Math.random() * 5)],
    initialX: getRandomValue(-20, 120),
    initialY: getRandomValue(-20, 120),
    duration: getRandomValue(20, 30), // Slower movement
    delay: getRandomValue(-15, 0),
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`, // Increased glow effect
          }}
          animate={{
            y: [0, -1000],
            x: [0, getRandomValue(-400, 400)], // Increased horizontal movement
            opacity: [0, 0.8, 0], // Increased max opacity
            scale: [1, getRandomValue(0.8, 1.5)], // Increased scale variation
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
            times: [0, 0.5, 1],
          }}
        />
      ))}
    </div>
  );
};