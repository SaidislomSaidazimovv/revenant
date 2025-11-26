import React from 'react';

export default function SolutionSection() {
  const steps = [
    { 
      num: '1', 
      title: 'THE AUTOPSY', 
      desc: 'You send us your dead files—old invoices, settlement sheets, maintenance records. We run them through our forensic system to find every dollar you\'re owed.' 
    },
    { 
      num: '2', 
      title: 'THE CLAIM PACK', 
      desc: 'We generate legally-sound claim packages citing specific contract clauses, warranty codes, and timestamps. Undeniable proof you\'re owed money.' 
    },
    { 
      num: '3', 
      title: 'CASH RECOVERY', 
      desc: 'Money hits your bank. Only then do we invoice 15%. If we find $0, you pay $0. It is physically impossible to lose money with us.' 
    }
  ];

  return (
    <section id="solution" className="bg-gradient-to-b from-black to-zinc-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600">
            How The Claw Works
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            THREE STEPS. ZERO RISK.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We do the digging. We do the fighting. You do the depositing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-zinc-900 border-2 border-zinc-700 rounded-full flex items-center justify-center text-3xl font-black text-white hover:border-red-600 hover:bg-red-600 hover:scale-110 transition-all">
                {step.num}
              </div>
              <h3 className="text-3xl font-black text-white">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}