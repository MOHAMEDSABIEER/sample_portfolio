import React, { useEffect } from 'react';
import { X, ShieldCheck, Map } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface PolicyModalProps {
  type: 'privacy' | 'sitemap' | null;
  onClose: () => void;
  onSelectService: (id: string) => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  type,
  onClose,
  onSelectService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0d1322] border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a0f1d] shrink-0">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            ) : (
              <Map className="w-5 h-5 text-amber-400" />
            )}
            <h3 className="text-base font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Website Sitemap'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2025
              </p>
              <p>
                Welcome to Vikram Singh’s official portfolio. Your privacy is paramount. This policy clarifies how inquiries and communications are handled.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">1. Information Collection</h4>
              <p>
                We only collect information willingly provided via our contact form (Name, Email address, and message briefs). This information is solely utilized to respond to creative proposals and project commissions.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">2. Confidentiality & Non-Disclosure</h4>
              <p>
                All scripts, treatments, concepts, and campaign outlines submitted for review are treated under strict professional non-disclosure standards.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">3. Third-Party Sharing</h4>
              <p>
                We do not sell, rent, or trade your contact information with any external data brokers or advertisers.
              </p>
            </>
          ) : (
            <div className="space-y-4">
              <p>Quick directory of pages, services, and portfolio showcases:</p>

              <div className="space-y-2">
                <h4 className="text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  Main Navigation
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li>
                    <a href="#home" onClick={onClose} className="hover:text-amber-400">
                      Home (Hero Showcase)
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={onClose} className="hover:text-amber-400">
                      About Vikram Singh & Quick Services
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" onClick={onClose} className="hover:text-amber-400">
                      My Portfolio Grid (8 Core Services)
                    </a>
                  </li>
                  <li>
                    <a href="#clients" onClick={onClose} className="hover:text-amber-400">
                      Trusted By Leading Brands & Client Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={onClose} className="hover:text-amber-400">
                      Contact & Collaboration Hub
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  The Eight Core Portfolio Disciplines
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onClose();
                        onSelectService(s.id);
                      }}
                      className="text-left p-2 rounded bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-amber-300 transition-colors"
                    >
                      • {s.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
