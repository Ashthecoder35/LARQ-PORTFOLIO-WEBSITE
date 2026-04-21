import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    { q: "Is UV-C technology safe?", a: "Yes. UV-C light is safely enclosed within the bottle. It specifically targets bacteria and viruses in the water without emitting heat or harmful radiation outside the bottle." },
    { q: "How long does the battery last?", a: "A single charge via the included Micro-USB cable lasts up to 1 month with normal usage." },
    { q: "Does it filter heavy metals?", a: "No, PureVis™ technology eliminates biological contaminants (viruses and bacteria). For heavy metal filtration, consider our LARQ Bottle Filtered." }
  ];

  return (
    <section id="faqs" className="py-32 max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="font-display text-4xl font-bold text-center mb-16 tracking-tight">Questions?</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group border-glow rounded-2xl bg-glass-card cursor-pointer overflow-hidden transition-all duration-300">
            <summary className="flex justify-between items-center p-6 font-display font-medium text-lg list-none outline-none">
              {faq.q}
              <ChevronDown className="w-5 h-5 text-subtext group-open:-rotate-180 transition-transform duration-500" />
            </summary>
            {/* The open state content uses max-height transition in CSS normally, but pure CSS works alright here */}
            <div className="px-6 pb-6 pt-0 text-subtext/80 leading-relaxed font-light hidden group-open:block animate-in fade-in slide-in-from-top-2 duration-300">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};
