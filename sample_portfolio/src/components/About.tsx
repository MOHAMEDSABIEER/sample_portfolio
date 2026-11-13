import React from 'react';
import {
  Feather,
  Clapperboard,
  Mic,
  BarChart3,
  Megaphone,
  Handshake,
  MonitorPlay,
  TrendingUp,
} from 'lucide-react';

interface AboutProps {
  onSelectService: (serviceId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onSelectService }) => {
  const quickServices = [
    {
      id: 'creative-writing',
      title: 'Creative\nWriting & Poetry',
      icon: Feather,
    },
    {
      id: 'script-writing',
      title: 'Script Writing &\nDirection',
      icon: Clapperboard,
    },
    {
      id: 'program-producer',
      title: 'Program\nProducer &\nAnchoring',
      icon: Mic,
    },
    {
      id: 'social-media-handling',
      title: 'Social Media\nPage Handling &\nDevelopment',
      icon: BarChart3,
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer\nMarketing',
      icon: Megaphone,
    },
    {
      id: 'brand-collaboration',
      title: 'Brand\nCollaboration',
      icon: Handshake,
    },
    {
      id: 'ad-campaign',
      title: 'Ad Campaign',
      icon: MonitorPlay,
    },
    {
      id: 'social-growth-strategy',
      title: 'Social Media\nGrowth &\nStrategy',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-[#0b101b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0e1628]/90 border border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle warm glow behind */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Portrait (3 cols on lg) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative group">
                <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl shadow-black/60 bg-slate-900">
                  <img
                    src="/assets/portfolio/Gemini_Generated_Image_pkvuzopkvuzopkvu.png"
                    alt="Vikram Singh portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/portfolio/Gemini_Generated_Image_pkvuzopkvuzopkvu.png';
                    }}
                  />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 blur -z-10 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Middle Column: Bio & Signature (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  ABOUT ME
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                The Creative Mind
                <br />
                Behind the Strategy
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">Vikram Singh</strong> — a storyteller, creator and strategist with a passion for turning ideas into impactful content.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                From powerful scripts and compelling stories to data-driven social media growth, I bring together creativity and strategy to build brands, engage audiences and inspire change.
              </p>

              {/* Hand-drawn Signature */}
              <div className="pt-2">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/portfolio/signature.png"
                    alt="Vikram Singh Signature"
                    className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
                    onError={(e) => {
                      // fallback to text if image fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="font-script text-2xl sm:text-3xl text-amber-400 font-bold tracking-wider">
                    Vikram Singh
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 8 Quick Service Icons (4 cols on lg) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
              <div className="grid grid-cols-4 gap-y-6 gap-x-2 text-center">
                {quickServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => onSelectService(service.id)}
                      className="flex flex-col items-center group cursor-pointer p-1 rounded-xl hover:bg-slate-800/50 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:scale-110 transition-all duration-200 mb-1.5">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-slate-300 group-hover:text-amber-400 leading-tight whitespace-pre-line text-center transition-colors">
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
