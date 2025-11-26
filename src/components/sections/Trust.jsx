import React from 'react';
import { CheckCircle, Lock } from 'lucide-react';

export default function TrustSection() {
  const benefits = [
    'Send us old data (2023 or older). Money you\'ve already written off.',
    'We audit it for free. No strings. No commitment.',
    'We send you one number: how much we found.',
    'If it\'s less than $10k, block us. If it\'s more, we talk.'
  ];

  return (
    <section id="trust" className="bg-gradient-to-br from-zinc-900 to-black border-y border-white/5 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600">
            The "Underwear Test"
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Don't Trust Us With Your Live Data?<br />
            <span className="text-gray-500">Good. You Shouldn't.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We know you don't want to show your "dirty laundry"—your rates, your messy invoices, your losses. That's why we start with a <strong className="text-white">Blind Audit</strong> on your <strong className="text-white">dead files</strong>.
          </p>

          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-900 border border-white/10 p-8 relative">
          <div className="absolute top-0 right-5 text-9xl font-black text-white/5 pointer-events-none">?</div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center">
                <Lock className="w-7 h-7 text-gray-500" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">The Ironclad NDA</div>
                <div className="text-xs uppercase tracking-wider text-red-600">With $50,000 Penalty Clause</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              We don't just promise confidentiality. We sign a "Blood Oath" NDA. If we leak your data to any competitor or broker, you sue us for $50,000 and win automatically. We put our own skin in the game.
            </p>
            <button className="w-full bg-white text-black py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
              Download Sample NDA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}