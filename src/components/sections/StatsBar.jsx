import React from 'react';

export default function StatsBar() {
  const stats = [
    { value: '$1.2M', label: 'Avg. Annual Bleed (100+ Trucks)', color: 'text-white' },
    { value: '38%', label: 'Tire Warranties Left Unclaimed', color: 'text-red-600' },
    { value: '15%', label: 'Our Fee — Only on Recovered Cash', color: 'text-white' },
    { value: '$0', label: 'Your Risk. Zero. None. Zilch.', color: 'text-white' },
  ];

  return (
    <section className="bg-zinc-900 border-y border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <div className={`text-5xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}