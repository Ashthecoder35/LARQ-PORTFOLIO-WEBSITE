import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Droplet, Battery, Leaf, Clock, Zap } from 'lucide-react';

export const Features = () => {
  const features = [
    { icon: <ShieldCheck />, title: "Self-Cleaning" },
    { icon: <Droplet />, title: "Water Purification" },
    { icon: <Battery />, title: "1-Month Battery" },
    { icon: <Leaf />, title: "Eco-Friendly" },
    { icon: <Clock />, title: "24h Cold / 12h Hot" },
    { icon: <Zap />, title: "Pro-Grade Steel" }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center p-8 rounded-3xl bg-glass border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="text-subtext group-hover:text-neon transition-colors duration-500 mr-6 w-8 h-8">
                {React.cloneElement(f.icon as React.ReactElement, { className: 'w-full h-full' })}
              </div>
              <h3 className="font-display text-xl font-semibold text-white tracking-wide">{f.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
