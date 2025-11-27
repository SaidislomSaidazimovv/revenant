import React, { useState, useEffect, useRef } from "react";

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      value: 1.2,
      suffix: "M",
      prefix: "$",
      label: "Avg. Annual Bleed (100+ Trucks)",
      color: "text-white",
      duration: 2000,
    },
    {
      value: 38,
      suffix: "%",
      prefix: "",
      label: "Tire Warranties Left Unclaimed",
      color: "text-red-600",
      duration: 1500,
    },
    {
      value: 15,
      suffix: "%",
      prefix: "",
      label: "Our Fee — Only on Recovered Cash",
      color: "text-white",
      duration: 1500,
    },
    {
      value: 0,
      suffix: "",
      prefix: "$",
      label: "Your Risk. Zero. None. Zilch.",
      color: "text-white",
      duration: 1000,
    },
  ];

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

  useEffect(() => {
    if (!isVisible) return;
    stats.forEach((stat, index) => {
      const startTime = Date.now();
      const duration = stat.duration;
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = easeOutQuart * stat.value;
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      setTimeout(() => animate(), index * 100);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-zinc-900 via-black to-zinc-900 border-y border-white/10 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-800/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`text-center space-y-3 group ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="relative p-6 rounded-lg border border-white/5 bg-black/30 backdrop-blur-sm hover:border-red-600/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 h-full flex flex-col justify-between min-h-[200px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent group-hover:w-full transition-all duration-700" />
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />

              <div className="flex-grow flex items-center justify-center">
                <div
                  className={`relative text-5xl md:text-6xl font-black ${stat.color} tabular-nums`}
                >
                  <span className="inline-block group-hover:scale-110 transition-transform duration-300">
                    {stat.prefix}
                    {i === 0 ? counters[i].toFixed(1) : Math.round(counters[i])}
                    {stat.suffix}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                  {stat.label}
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-600/20 group-hover:w-16 group-hover:bg-red-600/50 transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
