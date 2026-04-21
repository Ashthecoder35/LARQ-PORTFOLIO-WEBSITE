import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030508]">
      {/* Immersive glow effects */}
      <div className="glow-orb bg-neon w-[60vw] h-[60vw] left-[-10vw] top-[-20vw]" />
      <div className="glow-orb bg-electric w-[50vw] h-[50vw] right-[-10vw] bottom-[-20vw]" />
      
      {/* Light rays */}
      <div className="light-ray top-[20%] left-[-50%]" />
      <div className="light-ray top-[60%] right-[-50%]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-subtext"
          >
            The Future of Hydration
          </motion.div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight">
            Drink Pure.<br />
            <span className="gradient-text-accent text-glow">Anywhere.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-subtext font-light max-w-lg leading-relaxed mix-blend-screen opacity-80">
            Self-cleaning water bottle powered by UV-C purification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4">
            <Link to="/checkout" className="px-10 py-5 rounded-full font-bold text-sm tracking-wider uppercase text-white btn-glow animate-pulse-glow hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              Shop Now
            </Link>
            <button className="px-10 py-5 rounded-full font-bold text-sm tracking-wider uppercase text-white bg-glass border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3">
              Watch Demo <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] lg:h-[90vh] flex items-center justify-center p-8"
        >
          {/* Enhanced background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent rounded-full blur-[100px] scale-150" />
          
          {/* Animated UV circles - sharper lines */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full border border-electric/40 w-[110%] aspect-square shadow-[0_0_80px_rgba(58,134,255,0.2)]"
          />
          <motion.div 
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute rounded-full border border-neon/30 w-[90%] aspect-square shadow-[0_0_60px_rgba(131,56,236,0.2)]"
          />

          {/* Background Bottle Detail (Glow) - Stylized radial glow instead of blurry image for sharpness */}
          <div className="absolute z-10 w-full h-full flex items-center justify-center opacity-40">
            <div className="w-[500px] h-[500px] bg-electric opacity-30 rounded-full blur-[120px]" />
          </div>

          {/* Main Product Image - Sharpened with masking for white background */}
          <motion.div
            style={{ y: useTransform(scrollY, [0, 1000], [0, -120]) }}
            className="relative z-20 w-full max-w-[280px] lg:max-w-[380px] aspect-[1/2] flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Pedestal Shadow */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[5%] bg-black/60 blur-2xl rounded-full" />
            
            <motion.img 
              src="https://i.ibb.co/237N68Y8/image-2026-04-21-145058679.png" 
              alt="LARQ PureVis Bottle" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] contrast-[1.05] brightness-[1.1]"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
