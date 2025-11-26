import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-xl tracking-wider text-gray-500">
          REVENANT<span className="text-red-600">.</span>
        </div>
        <div className="flex items-center gap-8 text-xs uppercase tracking-wider text-gray-500">
          <span>© 2025 Revenant Inc.</span>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}