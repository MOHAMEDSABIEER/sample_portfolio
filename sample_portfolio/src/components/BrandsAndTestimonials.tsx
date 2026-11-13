import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const BrandsAndTestimonials: React.FC = () => {
  return (
    <section id="clients" className="py-14 sm:py-20 bg-[#0b101b] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Trusted by Leading Brands (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white uppercase">
                TRUSTED BY <span className="text-amber-400">LEADING BRANDS</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Partnered with visionary brands to produce viral content and lasting creative campaigns.
              </p>
            </div>

            {/* Brand Logos Row */}
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-6 sm:gap-8 py-4">
              {/* Nike Swoosh */}
              <div className="text-white hover:text-amber-400 transition-colors opacity-90 hover:opacity-100">
                <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 24 24">
                  <path d="M21.707 5.293c-2.828 0-6.364 2.121-9.899 5.657C8.273 14.485 5.444 17.314 3 17.314c-1.414 0-2-1.414 0-2.828 2.828-2 6.364-4.243 9.899-6.364C16.434 5.999 19.97 5.293 21.707 5.293z" />
                </svg>
              </div>

              {/* Amazon */}
              <div className="text-white hover:text-amber-400 transition-colors opacity-90 hover:opacity-100 flex items-center">
                <span className="font-bold text-xl sm:text-2xl tracking-tight lowercase">
                  amazon
                </span>
              </div>

              {/* Spotify */}
              <div className="text-white hover:text-amber-400 transition-colors opacity-90 hover:opacity-100 flex items-center gap-1.5">
                <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.435-5.308-1.76-8.792-.963-.335.077-.67-.133-.746-.468-.077-.334.132-.67.467-.746 3.808-.87 7.076-.506 9.72 1.113.295.18.388.563.208.857zm1.225-2.724c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-9.74 3.632-1.102 8.147-.568 11.233 1.332.366.226.482.705.257 1.071zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.494.15-1.017-.128-1.167-.622-.15-.493.128-1.016.621-1.166 3.532-1.072 9.404-.866 13.14 1.353.444.264.59.84.327 1.284-.264.444-.84.59-1.284.327z" />
                </svg>
                <span className="font-bold text-sm sm:text-base hidden sm:inline">Spotify</span>
              </div>

              {/* YouTube */}
              <div className="text-white hover:text-amber-400 transition-colors opacity-90 hover:opacity-100 flex items-center">
                <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>

              {/* Adobe */}
              <div className="text-white hover:text-amber-400 transition-colors opacity-90 hover:opacity-100 flex items-center gap-1.5">
                <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 24 24">
                  <path d="M13.966 22.624l-1.69-4.542H8.38l3.6-8.283 4.256 12.825h-2.27zM0 1.376h7.624L0 22.624V1.376zm16.376 0H24v21.248L16.376 1.376z" />
                </svg>
                <span className="font-bold text-sm sm:text-base hidden sm:inline">Adobe</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-mono">
              Campaigns delivered across OTT, print, social media, and digital broadcast channels.
            </div>
          </div>

          {/* Divider on Large Screens */}
          <div className="hidden lg:block lg:col-span-1 flex justify-center items-center">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/40 to-transparent mx-auto" />
          </div>

          {/* Right Column: What Clients Say (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white uppercase">
                WHAT <span className="text-amber-400">CLIENTS SAY</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Direct testimonials from creative directors, brand leaders, and media producers.
              </p>
            </div>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TESTIMONIALS_DATA.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0e1628] border border-slate-800/80 p-5 flex flex-col justify-between shadow-xl shadow-black/40 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Gold quote symbol */}
                    <span className="text-3xl font-serif text-amber-400 leading-none block mb-2 font-bold">
                      “
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Client Info with Avatar */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400/50 bg-slate-800 shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
