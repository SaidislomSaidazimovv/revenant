import React from 'react';
import { Grid, Layers, Wrench } from 'lucide-react';

export default function ProblemSection() {
  const leaks = [
    {
      icon: <Grid className="w-7 h-7" />,
      title: 'Tire Warranties',
      desc: 'Michelin, Goodyear, and Bridgestone deny claims with "road hazard." We cross-reference casing data with OEM defect logs to prove otherwise.',
      stat: '→ $487K Recovered (TX Fleet)'
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: 'Broker Deductions',
      desc: '"Lumper fee" and "detention" deductions that violate your rate confirmation. We cite the contract clause and demand refunds.',
      stat: '→ $312K Recovered (OH Fleet)'
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: 'Engine/DPF Claims',
      desc: 'Cummins and Detroit deny warranty claims that should be approved. We use telematics fault codes to prove the failure was covered.',
      stat: '→ $891K Recovered (CA Fleet)'
    }
  ];

  return (
    <section id="problem" className="bg-zinc-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600">
            Where Your Money Goes to Die
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            THE FIVE SILENT KILLERS
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every month, your fleet loses thousands to systems designed to steal from you. 
            Not fraud—just bureaucracy that bets you won't notice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leaks.map((card, i) => (
            <div key={i} className="group bg-zinc-900 border border-white/5 p-8 hover:border-red-600 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-3">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{card.desc}</p>
              <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 text-xs font-bold text-red-600 uppercase tracking-wider">
                {card.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}