import React from 'react';
import { Mic, Youtube, Link2 } from 'lucide-react';
import { DetailIntro, SubHeading, YouTubeCard, LinkCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Engaging Content, Meaningful Conversations',
  title: 'Program Producer & Anchoring',
  description:
    'Producing studio shows, podcasts and live stage panels — and commanding the mic with warmth, curiosity and poise under live broadcast pressure.',
};

// Replace `videoId` with the ID from the YouTube URL (youtube.com/watch?v=<videoId>)
const VIDEOS = [
  {
    videoId: 'YOUR_VIDEO_ID_1',
    title: 'The Creative Blueprint – Episode 48',
    description: 'Flagship weekly studio show',
  },
  {
    videoId: 'YOUR_VIDEO_ID_2',
    title: 'Global Innovation Conclave 2024 – Mainstage',
    description: 'Live anchoring & moderation',
  },
  {
    videoId: 'YOUR_VIDEO_ID_3',
    title: 'Behind The Script – Audio Salon Highlights',
    description: 'Intimate masterclass series',
  },
];

const EXTRA_LINKS = [
  { label: 'Full Podcast Playlist', url: 'https://youtube.com/', platform: 'youtube' as const, note: 'YouTube playlist' },
  { label: 'Event Highlights Reel', url: 'https://example.com/', platform: 'web' as const, note: 'External link' },
];

/* ------------------------------- Component -------------------------------- */
export const ProgramProducerDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={Mic} {...INTRO} />

    <div className="space-y-5">
      <SubHeading icon={Youtube}>Watch the Shows</SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {VIDEOS.map((v) => (
          <YouTubeCard key={v.title} {...v} />
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <SubHeading icon={Link2}>More Links</SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {EXTRA_LINKS.map((l) => (
          <LinkCard key={l.label} {...l} />
        ))}
      </div>
    </div>
  </div>
);
