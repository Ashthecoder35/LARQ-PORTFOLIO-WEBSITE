import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
  return (
    <section id="comparison" className="py-32 relative overflow-hidden">
      <div className="glow-orb bg-electric w-[40vw] h-[40vw] right-[-20vw] top-[10vw]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-glass-heavy rounded-[3rem] border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-[40px]">
          <div className="grid grid-cols-3 pb-8 border-b border-white/10 items-end">
            <div></div>
            <div className="text-center pb-4 relative">
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-electric to-neon rounded-full" />
              <span className="font-display font-bold text-2xl tracking-tighter text-white text-glow">LARQ<span className="text-electric">.</span></span>
            </div>
            <div className="text-center pb-4">
              <span className="font-display font-medium text-lg text-subtext">Others</span>
            </div>
          </div>

          {[
            { feature: "Self-Cleaning UV-C", larq: true, regular: false },
            { feature: "Water Purification", larq: true, regular: false },
            { feature: "Odor Resistant", larq: true, regular: false },
            { feature: "Double-wall Vacuum", larq: true, regular: true }
          ].map((row, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="grid grid-cols-3 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors relative group"
            >
              <div className="font-medium text-white/80">{row.feature}</div>
              <div className="flex items-center justify-center relative">
                <div className="absolute inset-0 bg-electric/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Check className="text-electric w-6 h-6 drop-shadow-[0_0_10px_rgba(58,134,255,0.8)]" />
              </div>
              <div className="flex items-center justify-center">
                {row.regular ? <Check className="text-subtext w-5 h-5" /> : <X className="text-red-500/50 w-5 h-5" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
