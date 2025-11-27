import React, { useState, useEffect } from "react";
import { Layers, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/5 py-3"
            : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group animate-slide-down">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rotate-45 transition-all duration-500 hover:shadow-lg">
              <Layers className="w-5 h-5 text-white -rotate-45 transition-transform duration-500" />
            </div>
            <span className="font-bold text-2xl tracking-wider transition-all duration-300">
              REVENANT
              <span className="text-red-600 inline-block transition-all duration-500 origin-center">
                .
              </span>
            </span>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            {[
              { href: "#problem", label: "The Leak" },
              { href: "#solution", label: "The Recovery" },
              { href: "#trust", label: "The Proof" },
            ].map((item, index) => (
              <li
                key={index}
                className="relative group animate-slide-down"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative block py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out" />
                  <span className="absolute inset-0 bg-red-600/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded" />
                  <span className="absolute -left-3 top-1/2 w-0 h-px bg-red-600 group-hover:w-2 transition-all duration-300 -translate-y-1/2" />
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block animate-slide-down animation-delay-400">
            <a
              href="#cta"
              className="inline-block bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-wider transform -skew-x-12 hover:bg-red-600 hover:text-white transition-all hover:scale-105"
            >
              <span className="block skew-x-12">Start Blind Audit</span>
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-red-500 transition-all duration-300 group animate-slide-down animation-delay-500"
          >
            <div className="absolute inset-0 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="relative transform group-hover:scale-110 group-hover:rotate-90 transition-all duration-300">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 py-4">
            <ul className="flex flex-col gap-4 px-6">
              {[
                { href: "#problem", label: "The Leak" },
                { href: "#solution", label: "The Recovery" },
                { href: "#trust", label: "The Proof" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="transform hover:translate-x-3 transition-all duration-300"
                  style={{
                    animation: mobileMenuOpen
                      ? `slideInMobile 0.4s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  <a
                    href={item.href}
                    className="text-sm font-semibold uppercase text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-red-600 group-hover:w-6 transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
              <li
                style={{
                  animation: mobileMenuOpen
                    ? "slideInMobile 0.4s ease-out 0.3s both"
                    : "none",
                }}
              >
                <a
                  href="#cta"
                  className="block bg-red-600 text-white px-6 py-3 text-center font-bold text-xs uppercase hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 transform hover:-translate-y-1"
                >
                  Start Audit
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
}
