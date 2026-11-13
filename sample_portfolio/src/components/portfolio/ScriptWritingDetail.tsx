import React from 'react';
import { Clapperboard, Film, ScrollText } from 'lucide-react';
import { DetailIntro, SubHeading, ImageSlot, VideoSlot, MediaCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'Concept to Screen',
  title: 'Script Writing & Direction',
  description:
    'Translating raw ideas into compelling screenplays and full productions — from the first line of dialogue to the final cut, with a focus on honest performances and visual pacing.',
};

const FEATURED = {
  title: 'Midnight Odyssey (Short Film)',
  role: 'Writer & Director · 2024',
  description:
    'A 22-minute suspense drama following a night-shift radio jockey who receives cryptic clues about a stolen heritage painting.',
  videoSrc: '', // e.g. '/assets/portfolio/midnight-odyssey.mp4'
  poster: '',
};

const SCRIPT_EXCERPT = {
  title: 'Screenplay Excerpt',
  lines: [
    { type: 'scene', text: 'INT. RADIO STUDIO - NIGHT' },
    { type: 'action', text: 'The red "ON AIR" neon hums. The caller’s breath is shallow.' },
    { type: 'character', text: 'CALLER (V.O.)' },
    { type: 'dialogue', text: 'Before the 3 AM bulletin hits... check under the turntable.' },
  ],
};

const STILLS = [
  { src: '', title: 'Behind the Scenes', caption: 'On set during the night shoot' },
  { src: '', title: 'Film Poster', caption: 'Official festival poster' },
];

/* ------------------------------- Component -------------------------------- */
export const ScriptWritingDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={Clapperboard} {...INTRO} />

    <div className="space-y-5">
      <SubHeading icon={Film}>Directed Work</SubHeading>
      <MediaCard title={FEATURED.title} caption={`${FEATURED.role} — ${FEATURED.description}`}>
        <VideoSlot src={FEATURED.videoSrc} poster={FEATURED.poster} label="Short film placeholder" />
      </MediaCard>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <SubHeading icon={ScrollText}>{SCRIPT_EXCERPT.title}</SubHeading>
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 h-[calc(100%-2.5rem)]">
          {SCRIPT_EXCERPT.lines.map((l, i) => (
            <p
              key={i}
              className={
                l.type === 'scene'
                  ? 'text-amber-400 font-bold'
                  : l.type === 'character'
                  ? 'text-center text-white pt-2'
                  : l.type === 'dialogue'
                  ? 'text-center px-4 sm:px-10'
                  : ''
              }
            >
              {l.text}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 self-end">
        {STILLS.map((s) => (
          <MediaCard key={s.title} title={s.title} caption={s.caption}>
            <ImageSlot src={s.src} alt={s.title} aspect="aspect-[3/4]" />
          </MediaCard>
        ))}
      </div>
    </div>
  </div>
);
