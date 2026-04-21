import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: "John D.", text: "This bottle changed how I drink water. Zero smell even after a week of no scrubbing.", rating: 5 },
    { name: "Sarah W.", text: "The premium feel and peace of mind when traveling is unmatched. Worth every penny.", rating: 5 },
    { name: "Mike T.", text: "Battery lasts forever. My water tastes noticeably fresher compared to my old metal bottle.", rating: 5 },
    { name: "Elena R.", text: "The sleekest bottle I've ever owned. The self-cleaning tech is like magic.", rating: 5 },
  ];

  return (
    <section className="py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-display text-4xl font-bold tracking-tight">Loved by thousands</h2>
      </div>
      
      <div className="flex gap-6 overflow-hidden relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 pl-6 min-w-max"
        >
          {/* Double the array for seamless marquee */}
          {[...reviews, ...reviews].map((rev, i) => (
            <div key={i} className="w-[350px] bg-glass-card border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 group">
              <div className="flex gap-1 mb-6">
                {[...Array(rev.rating)].map((_, j) => (
                  <motion.div key={j} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: j * 0.1 }}>
                    <Star className="w-4 h-4 fill-electric stroke-electric group-hover:drop-shadow-[0_0_10px_rgba(58,134,255,0.8)] transition-all" />
                  </motion.div>
                ))}
              </div>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">"{rev.text}"</p>
              <div className="text-subtext font-display font-medium text-xs tracking-[0.2em] uppercase">{rev.name}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient fades on left/right edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030508] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030508] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
