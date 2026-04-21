import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, ChevronLeft, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#030508] text-white selection:bg-electric selection:text-white font-sans font-light">
      {/* Simple header */}
      <header className="border-b border-white/10 bg-glass-heavy sticky top-0 z-50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-white hover:text-electric transition-colors flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase">Back</span>
          </Link>
          <div className="font-display font-bold text-2xl tracking-tighter">LARQ<span className="text-electric">.</span></div>
          <div className="flex items-center gap-2 text-subtext">
            <Lock className="w-4 h-4" />
            <span className="text-xs tracking-[0.2em] uppercase font-bold hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-12 gap-12 lg:gap-20 relative">
        {/* Background elements */}
        <div className="glow-orb bg-electric w-[60vw] h-[60vw] left-[-20vw] top-[10vw] opacity-10 blur-[150px]" />
        
        {/* Form Section */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <h2 className="font-display text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-electric/20 text-electric flex items-center justify-center text-sm">1</span>
              Contact Information
            </h2>
            <div className="space-y-4 text-base">
              <input type="email" placeholder="Email Address" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
              <div className="flex items-start gap-3 mt-4 px-1">
                <input type="checkbox" id="news" className="w-5 h-5 mt-0.5 rounded border-white/20 bg-white/5 text-electric focus:ring-electric focus:ring-offset-0 transition-all cursor-pointer" />
                <label htmlFor="news" className="text-sm text-subtext leading-relaxed cursor-pointer hover:text-white transition-colors">Keep me updated with news, exclusive offers, and hydration tips.</label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-electric/20 text-electric flex items-center justify-center text-sm">2</span>
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4 text-base">
              <input type="text" placeholder="First Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
              <input type="text" placeholder="Last Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
              <input type="text" placeholder="Address" className="col-span-2 w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="col-span-2 w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
              <input type="text" placeholder="City" className="w-full md:col-span-1 col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
              <input type="text" placeholder="Postal Code" className="w-full md:col-span-1 col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/50 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all hover:bg-white/[0.05]" />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-electric/20 text-electric flex items-center justify-center text-sm">3</span>
              Payment
            </h2>
            <div className="p-8 bg-glass-card border-glow rounded-[2rem] space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-electric via-neon to-electric opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-electric" />
                    <span className="font-medium tracking-wide text-lg text-white">Credit Card</span>
                  </div>
                  <span className="text-sm text-subtext">All transactions are secure and encrypted.</span>
                </div>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/40 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all font-mono tracking-widest text-lg hover:bg-white/[0.04]" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/40 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all font-mono tracking-widest text-lg hover:bg-white/[0.04]" />
                  <input type="text" placeholder="CVC" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-subtext/40 focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all font-mono tracking-widest text-lg hover:bg-white/[0.04]" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-glass-heavy border border-white/10 rounded-[2.5rem] p-8 lg:p-10 lg:sticky lg:top-32 shadow-2xl relative overflow-hidden backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-transparent z-0 opacity-50" />
            
            <h3 className="font-display text-2xl font-bold mb-8 tracking-tight relative z-10 text-white">Order Summary</h3>
            
            <div className="flex items-center gap-6 mb-8 relative z-10 group">
              <div className="w-28 h-28 bg-gradient-to-tr from-white/5 to-white/[0.02] rounded-3xl flex items-center justify-center p-3 border border-white/10 group-hover:border-electric/30 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src="https://i.ibb.co/237N68Y8/image-2026-04-21-145058679.png" alt="LARQ Bottle PureVis" className="object-contain w-full h-full drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-white tracking-wide">LARQ Bottle PureVis™</h4>
                <p className="text-subtext text-sm mb-3">17 oz / Obsidian Black</p>
                <div className="font-mono font-medium text-lg text-white">$99.00</div>
              </div>
            </div>

            <div className="space-y-5 border-t border-white/10 pt-8 mb-8 relative z-10 text-base">
              <div className="flex justify-between">
                <span className="text-subtext">Subtotal</span>
                <span className="font-mono text-white">$99.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-subtext">Shipping</span>
                <span className="text-electric font-bold tracking-wider uppercase text-sm flex items-center">Free <ShieldCheck className="w-3 h-3 ml-1"/></span>
              </div>
              <div className="flex justify-between">
                <span className="text-subtext">Taxes</span>
                <span className="font-mono text-white">$0.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-white/10 pt-8 mb-10 relative z-10">
              <span className="font-display font-bold text-2xl text-white">Total</span>
              <div className="flex items-end gap-2">
                <span className="text-subtext text-sm mb-1.5 font-bold tracking-widest uppercase">USD</span>
                <span className="font-display font-bold text-4xl text-white">$99.00</span>
              </div>
            </div>

            <button className="w-full py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase text-white btn-glow animate-pulse-glow hover:scale-[1.03] transition-transform duration-300 relative z-10 shadow-[0_0_40px_rgba(58,134,255,0.4)]">
              Complete Payment
            </button>

            <div className="flex items-center justify-center gap-2 mt-8 text-subtext/60 text-xs font-bold tracking-[0.1em] uppercase relative z-10">
              <Lock className="w-3.5 h-3.5" />
              <span>Payments are secure & encrypted</span>
            </div>
          </motion.div>
        </div>
        
      </main>
    </div>
  );
};
