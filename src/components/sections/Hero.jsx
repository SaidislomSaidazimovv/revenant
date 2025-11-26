import React, { useState } from 'react';
import { DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [truckCount, setTruckCount] = useState(50);
  const recovery = truckCount * 4200;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-600/15 via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 70%)'
      }} />

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              The Financial Reckoning Has Begun
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            WAKE THE<br />
            <span className="bg-gradient-to-br from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
              DEAD MONEY.
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Your fleet is bleeding <strong className="text-white">$180,000 to $1.2M annually</strong> on missed warranties, duplicate billing, and phantom broker deductions.<br /><br />
            That's not "cost of doing business." <span className="text-red-600 font-bold underline decoration-red-600/40 underline-offset-4">That is theft.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a href="#cta" className="group bg-red-600 text-white px-10 py-5 font-bold text-sm uppercase tracking-wider transform -skew-x-12 hover:bg-red-700 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/40 flex items-center gap-3">
              <span className="block skew-x-12">Deploy The Claw</span>
              <ArrowRight className="w-5 h-5 skew-x-12 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No Upfront Cost — Ever
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Pay Only When You Get Paid
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 p-8 rounded-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800" />
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-red-600/10 rounded-full blur-3xl" />

          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">Recovery Estimate</span>
              <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-red-600" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-gray-400">Fleet Size (Power Units)</span>
                <span className="text-4xl font-black text-white">{truckCount}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={truckCount}
                onChange={(e) => setTruckCount(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-red-600/50 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform"
              />
            </div>

            <div className="bg-black p-6 border border-white/5 rounded-none">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Estimated Annual Recovery
              </div>
              <div className="text-5xl font-black text-green-500">
                ${recovery.toLocaleString()}
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Based on industry avg of <strong className="text-white">$4,200/truck/year</strong> in recoverable losses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}