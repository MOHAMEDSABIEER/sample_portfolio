import React from 'react';
import { BarChart3, Link2, LayoutGrid } from 'lucide-react';
import { DetailIntro, SubHeading, ImageSlot, LinkCard, MediaCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Build. Manage. Grow.',
  title: 'Social Media Page Handling & Development',
  description:
    'End-to-end page management: brand tone, content calendars, carousels and daily community engagement that turn quiet profiles into thriving communities.',
};

const PAGE_LINKS = [
  { label: '@urbanpulse – Instagram', url: 'https://instagram.com/', platform: 'instagram' as const, note: '12K → 380K followers' },
  { label: 'Nexus Cloud – LinkedIn', url: 'https://linkedin.com/', platform: 'web' as const, note: 'B2B thought leadership' },
];

const SHOWCASE = [
  { src: '', title: 'Profile Grid Redesign', caption: 'Before / after visual grid' },
  { src: '', title: 'Growth Analytics Snapshot', caption: 'Followers & engagement over 9 months' },
];

/* ------------------------------- Component -------------------------------- */
export const SocialMediaHandlingDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={BarChart3} {...INTRO} />

    <div className="space-y-4">
      <SubHeading icon={Link2}>Pages I Manage</SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PAGE_LINKS.map((l) => (
          <LinkCard key={l.label} {...l} />
        ))}
      </div>
    </div>

    <div className="space-y-5">
      <SubHeading icon={LayoutGrid}>Work Showcase</SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SHOWCASE.map((s) => (
          <MediaCard key={s.title} title={s.title} caption={s.caption}>
            <ImageSlot src={s.src} alt={s.title} aspect="aspect-[4/3]" />
          </MediaCard>
        ))}
      </div>
    </div>
  </div>
);
