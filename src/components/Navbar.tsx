import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-glass-heavy py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">LARQ<span className="text-electric">.</span></span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-semibold text-subtext uppercase tracking-[0.2em]">
          <a href="#technology" className="hover:text-white transition-colors">Technology</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#comparison" className="hover:text-white transition-colors">Compare</a>
          <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/checkout" className="hidden md:flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-white btn-glow transition-all hover:scale-105">
            Shop Now
          </a>
          <button className="text-white md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
