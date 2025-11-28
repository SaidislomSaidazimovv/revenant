import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      num: "1",
      title: "THE AUTOPSY",
      desc: "You send us your dead files—old invoices, settlement sheets, maintenance records. We run them through our forensic system to find every dollar you're owed.",
    },
    {
      num: "2",
      title: "THE CLAIM PACK",
      desc: "We generate legally-sound claim packages citing specific contract clauses, warranty codes, and timestamps. Undeniable proof you're owed money.",
    },
    {
      num: "3",
      title: "CASH RECOVERY",
      desc: "Money hits your bank. Only then do we invoice 15%. If we find $0, you pay $0. It is physically impossible to lose money with us.",
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
      id="solution"
      className="relative bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/95 to-black" />
      </div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
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
              How The Claw Works
              <span className="absolute -bottom-1 left-0 w-full h-px bg-red-600/30" />
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            THREE STEPS. ZERO RISK.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We do the digging. We do the fighting. You do the depositing.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center space-y-4 group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            >
              <div className="relative mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative w-20 h-20 bg-zinc-900 border-2 border-zinc-700 rounded-full flex items-center justify-center text-3xl font-black text-white group-hover:border-red-600 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight className="w-6 h-6 text-red-600 animate-pulse" />
                  </div>
                )}
              </div>
              <div className="relative p-6 rounded-lg border border-white/5 bg-black/30 backdrop-blur-sm group-hover:border-red-600/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-red-600/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent group-hover:w-full transition-all duration-700" />
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.desc}
                </p>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-600/20 group-hover:w-16 group-hover:bg-red-600/50 transition-all duration-500" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                Step {step.num}
              </div>
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
