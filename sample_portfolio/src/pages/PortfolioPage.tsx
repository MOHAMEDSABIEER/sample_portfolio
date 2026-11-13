import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { PORTFOLIO_DETAIL_COMPONENTS } from '../components/portfolio';

interface PortfolioPageProps {
  onInquire: (subject: string) => void;
}

/** One full page per portfolio type, rendered at /portfolio/:serviceId */
export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onInquire }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const index = SERVICES_DATA.findIndex((s) => s.id === serviceId);
  const service = index !== -1 ? SERVICES_DATA[index] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) return <Navigate to="/" replace />;

  const Detail = PORTFOLIO_DETAIL_COMPONENTS[service.id];
  const prev = SERVICES_DATA[(index - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const next = SERVICES_DATA[(index + 1) % SERVICES_DATA.length];

  const goBackToPortfolio = () => navigate('/', { state: { scrollTo: 'portfolio' } });

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#0b101b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back + breadcrumb */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            onClick={goBackToPortfolio}
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
            0{index + 1} / 0{SERVICES_DATA.length}
          </span>
        </div>

        {/* Page content: the dedicated component for this type */}
        <div className="rounded-2xl border border-slate-800/80 bg-[#0d1322] p-5 sm:p-8 lg:p-10 shadow-xl shadow-black/40">
          {Detail ? <Detail /> : null}
        </div>

        {/* Inquiry CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-transparent p-5">
          <p className="text-sm text-slate-300 text-center sm:text-left">
            Ready to start a project under{' '}
            <span className="text-white font-semibold">{service.title}</span>?
          </p>
          <button
            onClick={() => onInquire(`Inquiry: ${service.title}`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Inquire About This Service
          </button>
        </div>

        {/* Previous / next type */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate(`/portfolio/${prev.id}`)}
            className="group text-left rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 p-4 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-slate-500">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous
            </span>
            <span className="block mt-1 text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
              {prev.title}
            </span>
          </button>
          <button
            onClick={() => navigate(`/portfolio/${next.id}`)}
            className="group text-right rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 p-4 transition-colors cursor-pointer"
          >
            <span className="flex items-center justify-end gap-1.5 text-[11px] uppercase tracking-widest text-slate-500">
              Next <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="block mt-1 text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
              {next.title}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
