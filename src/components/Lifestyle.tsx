import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Lifestyle = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.15]);

  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?auto=format&fit=crop&q=80&w=2670" 
          alt="Lifestyle Elevation" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover origin-center filter brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508] via-transparent to-[#030508] opacity-80" />
      </motion.div>
      
      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Built for your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">everyday life</span>
        </motion.h2>
      </div>
    </section>
  );
};
