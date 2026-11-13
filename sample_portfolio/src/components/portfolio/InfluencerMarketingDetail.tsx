import React from 'react';
import { Megaphone, Video } from 'lucide-react';
import { DetailIntro, SubHeading, VideoSlot, MediaCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Authentic Voices. Real Impact.',
  title: 'Influencer Marketing',
  description:
    'Curating performance-driven creator collaborations that go beyond hollow sponsor reads into organic narrative integrations.',
};

const CAMPAIGN = {
  title: 'Run Your Story – Creator Campaign',
  caption: '28 creators · 14.2M impressions · +24% uplift in product sales',
  videoSrc: '', // e.g. '/assets/portfolio/influencer-30s.mp4'
  poster: '',
};

/* ------------------------------- Component -------------------------------- */
export const InfluencerMarketingDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={Megaphone} {...INTRO} />

    <div className="space-y-5 max-w-3xl mx-auto">
      <SubHeading icon={Video}>Campaign Spotlight</SubHeading>
      <MediaCard title={CAMPAIGN.title} caption={CAMPAIGN.caption}>
        <VideoSlot
          src={CAMPAIGN.videoSrc}
          poster={CAMPAIGN.poster}
          label="30 sec video placeholder"
          badge="0:30"
        />
      </MediaCard>
    </div>
  </div>
);
