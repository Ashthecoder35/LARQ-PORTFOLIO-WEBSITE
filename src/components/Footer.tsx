import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative bg-[#030508] pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="glow-orb bg-electric w-[100vw] h-[50vw] left-0 bottom-[-25vw] opacity-20 filter blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tight">
          Upgrade Your <br/> 
          <span className="gradient-text-accent text-glow">Hydration.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32 w-full max-w-lg mx-auto">
          <Link to="/checkout" className="flex-1 py-5 rounded-full font-bold text-sm tracking-[0.1em] uppercase text-white btn-glow animate-pulse-glow hover:scale-[1.03] transition-transform duration-300 cursor-pointer flex justify-center items-center">
            Shop Now
          </Link>
          <button className="flex-1 py-5 rounded-full font-bold text-sm tracking-[0.1em] uppercase text-white border-glow bg-glass hover:bg-white/5 transition-all duration-300 cursor-pointer">
            Explore Colors
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left text-sm border-t border-white/10 pt-16">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-3xl tracking-tighter text-white mb-6">LARQ<span className="text-electric">.</span></div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-white/40 text-xs">Shop</h4>
            <ul className="space-y-4 text-subtext/80">
              <li><a href="#" className="hover:text-white transition-colors">PureVis™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Movement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pitcher</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-white/40 text-xs">Help</h4>
            <ul className="space-y-4 text-subtext/80">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-white/40 text-xs">Legal</h4>
            <ul className="space-y-4 text-subtext/80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
