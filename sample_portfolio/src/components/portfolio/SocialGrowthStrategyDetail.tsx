import React from 'react';
import { TrendingUp, FileText, ExternalLink } from 'lucide-react';
import { DetailIntro, SubHeading } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Strategy. Engagement. Growth.',
  title: 'Social Media Growth & Strategy',
  description:
    'Algorithmic analysis, retention mechanics and narrative flywheels that turn fleeting viewers into long-term advocates. Scroll through the sample strategy deck below.',
};

// Replace this file in /public/assets/portfolio/ with your real PDF (same name or update the path)
const PDF = {
  title: 'Growth Strategy Deck (Sample)',
  src: '/assets/portfolio/growth-strategy-sample.pdf',
};

/* ------------------------------- Component -------------------------------- */
export const SocialGrowthStrategyDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={TrendingUp} {...INTRO} />

    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <SubHeading icon={FileText}>{PDF.title}</SubHeading>
        <a
          href={PDF.src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200"
        >
          Open in new tab <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Scrollable PDF viewer */}
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
        <iframe
          src={`${PDF.src}#view=FitH`}
          title={PDF.title}
          className="w-full h-[65vh] min-h-[420px]"
        />
      </div>
      <p className="text-[11px] text-slate-500 text-center">
        Can’t see the document on your device? Use “Open in new tab” above.
      </p>
    </div>
  </div>
);
