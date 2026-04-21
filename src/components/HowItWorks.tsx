import React from 'react';
import { motion } from 'motion/react';
import { Droplet, Zap, ShieldCheck } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    { icon: <Zap className="w-8 h-8" />, title: "Press", desc: "Tap once for Normal Mode or twice for Adventure Mode." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Purify", desc: "PureVis™ UV-C LED breaks down bacteria DNA." },
    { icon: <Droplet className="w-8 h-8" />, title: "Enjoy", desc: "Brilliantly clean water, zero effort required." }
  ];

  return (
    <section id="technology" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tight">Pure water in <span className="gradient-text-accent">60 seconds</span></h2>
          <p className="text-subtext text-xl font-light">Eradicate up to 99.9% of bacteria and viruses.</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-5xl mx-auto">
          {/* Animated connection line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-white/10 z-0 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-electric to-transparent blur-[2px]"
            />
          </div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center group w-full md:w-1/3"
            >
              <div className="w-32 h-32 rounded-[2rem] bg-glass-card border border-white/5 flex items-center justify-center mb-8 text-subtext group-hover:text-electric group-hover:border-electric/50 group-hover:shadow-[0_0_40px_rgba(58,134,255,0.3)] transition-all duration-500 transform group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-electric/0 group-hover:from-electric/10 group-hover:to-neon/10 transition-all duration-500" />
                <motion.div className="relative z-10">
                  {step.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-white uppercase tracking-widest">{step.title}</h3>
              <p className="text-subtext/80 leading-relaxed text-center font-light max-w-[250px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
