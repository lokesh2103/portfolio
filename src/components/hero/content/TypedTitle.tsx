import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { TYPED_STRINGS } from '@/config/constants';

export const TypedTitle = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 1000,
      loop: true,
      cursorChar: '|',
      autoInsertCss: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-xl md:text-2xl lg:text-3xl mb-6 h-[40px] font-mono relative"
    >
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[length:200%_auto] bg-gradient-to-r from-green-400 via-primary to-green-400 bg-clip-text"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        <span ref={typedRef}></span>
      </motion.div>
    </motion.div>
  );
};