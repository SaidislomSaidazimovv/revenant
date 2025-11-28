import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Lock, Download } from "lucide-react";

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    "Send us old data (2023 or older). Money you've already written off.",
    "We audit it for free. No strings. No commitment.",
    "We send you one number: how much we found.",
    "If it's less than $10k, block us. If it's more, we talk.",
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
      id="trust"
      className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border-y border-white/5 py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-black to-zinc-900/95" />
      </div>
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/3 right-10 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse"
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
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div
          className={`space-y-6 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 inline-block">
            <span className="relative">
              The "Underwear Test"
              <span className="absolute -bottom-1 left-0 w-full h-px bg-red-600/30" />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Don't Trust Us With Your Live Data?
            <br />
            <span className="text-gray-500">Good. You Shouldn't.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We know you don't want to show your "dirty laundry"—your rates, your
            messy invoices, your losses. That's why we start with a{" "}
            <strong className="text-white">Blind Audit</strong> on your{" "}
            <strong className="text-white">dead files</strong>.
          </p>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`relative bg-zinc-900 border border-white/10 p-8 group hover:border-red-600/30 transition-all duration-500 ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <div className="absolute top-0 right-5 text-9xl font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-500">
            ?
          </div>
          <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-transparent group-hover:w-full transition-all duration-700" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red-600/50">
                <div className="absolute inset-0 rounded-full bg-red-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Lock className="w-7 h-7 text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10" />
              </div>
              <div>
                <div className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                  The Ironclad NDA
                </div>
                <div className="text-xs uppercase tracking-wider text-red-600">
                  With $50,000 Penalty Clause
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              We don't just promise confidentiality. We sign a "Blood Oath" NDA.
              If we leak your data to any competitor or broker, you sue us for
              $50,000 and win automatically. We put our own skin in the game.
            </p>
            <button className="w-full bg-white text-black py-4 font-bold text-sm uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
              <span className="relative z-10">Download Sample NDA</span>
            </button>
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>256-bit Encrypted</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out both;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
