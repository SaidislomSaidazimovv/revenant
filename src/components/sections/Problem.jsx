import React, { useState, useEffect, useRef } from "react";
import { Grid, Layers, Wrench } from "lucide-react";

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const leaks = [
    {
      icon: <Grid className="w-7 h-7" />,
      title: "Tire Warranties",
      desc: 'Michelin, Goodyear, and Bridgestone deny claims with "road hazard." We cross-reference casing data with OEM defect logs to prove otherwise.',
      stat: "→ $487K Recovered (TX Fleet)",
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Broker Deductions",
      desc: '"Lumper fee" and "detention" deductions that violate your rate confirmation. We cite the contract clause and demand refunds.',
      stat: "→ $312K Recovered (OH Fleet)",
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "Engine/DPF Claims",
      desc: "Cummins and Detroit deny warranty claims that should be approved. We use telematics fault codes to prove the failure was covered.",
      stat: "→ $891K Recovered (CA Fleet)",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative bg-zinc-950 py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
      </div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative max-w-5xl mx-auto z-10">
        <div
          className={`text-center space-y-4 mb-16 ${
            isVisible ? "animate-fade-in-down" : "opacity-0"
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 inline-block">
            <span className="relative">
              Where Your Money Goes to Die
              <span className="absolute -bottom-1 left-0 w-full h-px bg-red-600/30" />
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            THE FIVE SILENT KILLERS
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every month, your fleet loses thousands to systems designed to steal
            from you. Not fraud—just bureaucracy that bets you won't notice.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {leaks.map((card, i) => (
            <div
              key={i}
              className={`group bg-zinc-900 border border-white/5 p-8 hover:border-red-600 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 relative overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-transparent group-hover:w-full transition-all duration-700" />
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red-600/50">
                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {card.desc}
              </p>
              <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 text-xs font-bold text-red-600 uppercase tracking-wider group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-600/30">
                {card.stat}
              </span>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out both;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
