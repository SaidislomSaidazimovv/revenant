import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      id="cta"
      className="relative bg-red-600 py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <Zap className="w-16 h-16" />
          </div>
        ))}
      </div>
      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <Zap className="w-4 h-4 text-white animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Take Action Now
          </span>
        </div>
        <h2
          className={`text-6xl md:text-8xl font-black text-white leading-none ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          STOP THE BLEEDING.
          <br />
          START THE CLAW.
        </h2>
        <p
          className={`text-xl text-white/90 max-w-2xl mx-auto leading-relaxed ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          You're losing money right now as you read this. Send us your dead
          files. Let us prove we're real.
        </p>
        <div
          className={`${isVisible ? "animate-bounce-in" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="mailto:audit@revenant.io?subject=Blind%20Audit%20Request"
            className="group inline-flex items-center gap-3 bg-white text-black px-14 py-6 font-black text-base uppercase tracking-wider hover:bg-gray-100 transition-all shadow-[0_8px_0_rgba(0,0,0,0.3)] hover:translate-y-[-4px] hover:shadow-[0_12px_0_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">Start Your Free Blind Audit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
          </a>
        </div>
        {/* <div className={`flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span>No Upfront Cost</span>
          </div>
          <div className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <span>Results in 72 Hours</span>
          </div>
          <div className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            <span>Cancel Anytime</span>
          </div>
        </div>
        <div className={`pt-8 ${isVisible ? 'animate-pulse-slow' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <p className="text-sm text-white/60 uppercase tracking-wider">
            🔥 Limited spots available - First 10 fleets get priority review
          </p>
        </div> */}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.3;
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out both;
        }
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out both;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
