import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  return (
    <section className="py-32 relative">
      <div className="glow-orb bg-neon w-[50vw] h-[50vw] left-[25vw] top-0 opacity-20" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-glass-heavy rounded-[3rem] p-8 md:p-16 border border-white/10 hover:border-electric/30 transition-all duration-700 shadow-2xl flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-electric via-neon to-electric" />
          
          <div className="inline-flex px-4 py-1.5 bg-electric/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-electric border border-electric/20">
            Most Popular
          </div>
          
          <motion.img 
            initial={{ y: 20 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="https://i.ibb.co/237N68Y8/image-2026-04-21-145058679.png" 
            alt="LARQ PureVis" 
            referrerPolicy="no-referrer" 
            className="w-48 h-auto object-contain mb-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" 
          />
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">LARQ Bottle <span className="font-light">PureVis™</span></h2>
          <div className="text-3xl text-white font-medium mb-8">$99 <span className="text-subtext text-base font-normal tracking-wider">/ 17 oz</span></div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full justify-center">
            <div className="flex items-center gap-2 justify-center"><Check className="text-electric w-4 h-4"/> <span className="text-sm text-white/80">Free Shipping</span></div>
            <div className="flex items-center gap-2 justify-center"><Check className="text-electric w-4 h-4"/> <span className="text-sm text-white/80">1-Year Warranty</span></div>
            <div className="flex items-center gap-2 justify-center"><Check className="text-electric w-4 h-4"/> <span className="text-sm text-white/80">30-Day Returns</span></div>
          </div>

          <a href="/checkout" className="w-full max-w-sm py-5 rounded-full font-bold text-sm tracking-[0.1em] uppercase text-white btn-glow animate-pulse-glow hover:scale-[1.02] transition-transform duration-300 flex justify-center items-center">
            Buy Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
