import React, { useState } from 'react';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface PortfolioGridProps {
  onSelectService: (serviceId: string) => void;
  selectedServiceId?: string | null;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  onSelectService,
  selectedServiceId,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'writing', label: 'Writing & Direction' },
    { id: 'broadcast', label: 'Broadcast & Media' },
    { id: 'marketing', label: 'Growth & Strategy' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'writing')
      return service.id === 'creative-writing' || service.id === 'script-writing';
    if (filter === 'broadcast')
      return service.id === 'program-producer' || service.id === 'ad-campaign';
    if (filter === 'marketing')
      return (
        service.id === 'social-media-handling' ||
        service.id === 'influencer-marketing' ||
        service.id === 'brand-collaboration' ||
        service.id === 'social-growth-strategy'
      );
    return true;
  });

  return (
    <section id="portfolio" className="py-14 sm:py-20 bg-[#0b101b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: MY PORTFOLIO with flanking lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
          <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[200px] bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase text-center flex items-center gap-2">
            MY <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">PORTFOLIO</span>
          </h2>
          <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[200px] bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500" />
        </div>

        {/* Optional Interactive Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 px-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                filter === cat.id
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Cards Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredServices.map((service: ServiceItem, index: number) => {
            const isHighlighted = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                className={`group rounded-2xl bg-[#0e1628] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 ${
                  isHighlighted
                    ? 'border-amber-400 ring-2 ring-amber-400/40'
                    : 'border-slate-800/80 hover:border-amber-500/40'
                }`}
              >
                {/* Card Top: Image Area */}
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1628] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                    
                    {/* Index badge */}
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-amber-400/90 border border-amber-500/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 min-h-[3rem]">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400 font-normal leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    {/* Quick Metric Pills */}
                    <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-amber-400">
                        {service.metrics[0]?.stat}
                      </span>
                      <span className="text-slate-500 truncate max-w-[120px]">
                        {service.metrics[0]?.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Button */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-amber-300 hover:text-slate-950 bg-slate-900/90 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 border border-amber-500/30 hover:border-transparent rounded-full transition-all duration-200 cursor-pointer group/btn shadow-sm"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom helper tip */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Click any card's button to inspect verified case studies, excerpts, and live deliverables.
        </div>
      </div>
    </section>
  );
};
