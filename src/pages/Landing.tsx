import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { Lifestyle } from '../components/Lifestyle';
import { Comparison } from '../components/Comparison';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const Landing = () => {
  return (
    <div className="min-h-screen selection:bg-electric selection:text-white bg-[#030508] overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Lifestyle />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};
