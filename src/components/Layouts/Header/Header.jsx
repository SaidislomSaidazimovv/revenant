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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center rotate-45 transition-transform hover:rotate-45 hover:scale-110">
            <Layers className="w-5 h-5 text-white -rotate-45" />
          </div>
          <span className="font-bold text-2xl tracking-wider">
            REVENANT<span className="text-red-600">.</span>
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
        <a
          href="#cta"
          className="hidden md:block bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-wider transform -skew-x-12 hover:bg-red-600 hover:text-white transition-all hover:scale-105"
        >
          <span className="block skew-x-12">Start Blind Audit</span>
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 py-4">
          <ul className="flex flex-col gap-4 px-6">
            <li>
              <a
                href="#problem"
                className="text-sm font-semibold uppercase text-gray-400"
              >
                The Leak
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="text-sm font-semibold uppercase text-gray-400"
              >
                The Recovery
              </a>
            </li>
            <li>
              <a
                href="#trust"
                className="text-sm font-semibold uppercase text-gray-400"
              >
                The Proof
              </a>
            </li>
            <li>
              <a
                href="#cta"
                className="bg-red-600 text-white px-6 py-3 text-center font-bold text-xs uppercase"
              >
                Start Audit
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
