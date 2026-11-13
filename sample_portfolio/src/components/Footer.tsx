import React from 'react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'sitemap') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#090d16] py-6 sm:py-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Left: Copyright */}
          <div>
            <span className="font-semibold text-slate-300">Vikram Singh</span> © 2025. All Rights Reserved.
          </div>

          {/* Middle: Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPolicy('sitemap')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Sitemap
            </button>
          </div>

          {/* Right: Signature Slogan */}
          <div className="font-script text-xl sm:text-2xl text-amber-400 font-bold tracking-wide">
            Create. Connect. Grow.
          </div>
        </div>
      </div>
    </footer>
  );
};
