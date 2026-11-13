import React from 'react';
import { MonitorPlay, Image as ImageIcon } from 'lucide-react';
import { DetailIntro, SubHeading, ImageSlot, MediaCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Campaigns That Deliver Results',
  title: 'Ad Campaign',
  description:
    'Conceptual 360° campaigns across billboards, digital video and print — built around one big idea with undeniable cut-through.',
};

const CAMPAIGN = {
  src: '', // e.g. '/assets/portfolio/ad-campaign.jpg'
  title: 'Every Second Counts',
  caption: 'Global 360° launch campaign · 38M impressions · +140% preorder inquiries',
};

/* ------------------------------- Component -------------------------------- */
export const AdCampaignDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={MonitorPlay} {...INTRO} />

    <div className="space-y-5 max-w-3xl mx-auto">
      <SubHeading icon={ImageIcon}>Campaign Visual</SubHeading>
      <MediaCard title={CAMPAIGN.title} caption={CAMPAIGN.caption}>
        <ImageSlot src={CAMPAIGN.src} alt={CAMPAIGN.title} aspect="aspect-[4/3]" label="Ad campaign image placeholder" />
      </MediaCard>
    </div>
  </div>
);
