import React from 'react';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import Hero from '../../components/sections/Hero';
import StatsBar from '../../components/sections/StatsBar';
import ProblemSection from '../../components/sections/Problem';
import SolutionSection from '../../components/sections/Solution';
import TrustSection from '../../components/sections/Trust';
import CTASection from '../../components/sections/CTA';

export default function Home() {
  return (
    <div className="bg-black text-gray-200 min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}