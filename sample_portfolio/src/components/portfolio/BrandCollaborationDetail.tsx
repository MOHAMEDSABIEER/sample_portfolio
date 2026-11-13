import React from 'react';
import { Handshake, Film, Link2 } from 'lucide-react';
import { DetailIntro, SubHeading, VideoSlot, LinkCard, MediaCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Creating Mutual Value',
  title: 'Brand Collaboration',
  description:
    'Brokering strategic partnerships between consumer brands, cultural institutions and media houses that deliver long-term mutual value.',
};

const REEL = {
  title: 'Poetry Nights x Lamy – Collaboration Reel',
  caption: '5-city spoken word salons with custom engraved pens',
  videoSrc: '', // e.g. '/assets/portfolio/brand-reel.mp4'
  poster: '',
};

const LINK = {
  label: 'View the Full Collaboration',
  url: 'https://instagram.com/',
  platform: 'instagram' as const,
  note: 'Original reel on Instagram',
};

/* ------------------------------- Component -------------------------------- */
export const BrandCollaborationDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={Handshake} {...INTRO} />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-5">
        <SubHeading icon={Film}>Collaboration Reel</SubHeading>
        <MediaCard title={REEL.title} caption={REEL.caption} className="max-w-xs mx-auto md:max-w-none">
          <VideoSlot src={REEL.videoSrc} poster={REEL.poster} aspect="aspect-[9/16]" label="Reel video placeholder" />
        </MediaCard>
      </div>

      <div className="space-y-4">
        <SubHeading icon={Link2}>Link</SubHeading>
        <LinkCard {...LINK} />
      </div>
    </div>
  </div>
);
