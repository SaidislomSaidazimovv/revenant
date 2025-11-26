import React from 'react';

export default function CTASection() {
  return (
    <section id="cta" className="relative bg-red-600 py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-black/40 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-6xl md:text-8xl font-black text-white leading-none">
          STOP THE BLEEDING.<br />START THE CLAW.
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          You're losing money right now as you read this. 
          Send us your dead files. Let us prove we're real.
        </p>
        <a href="mailto:audit@revenant.io?subject=Blind%20Audit%20Request" className="inline-block bg-white text-black px-14 py-6 font-black text-base uppercase tracking-wider hover:bg-gray-200 transition-all shadow-[0_8px_0_rgba(0,0,0,0.3)] hover:translate-y-[-4px] hover:shadow-[0_12px_0_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,0.3)]">
          Start Your Free Blind Audit
        </a>
      </div>
    </section>
  );
}