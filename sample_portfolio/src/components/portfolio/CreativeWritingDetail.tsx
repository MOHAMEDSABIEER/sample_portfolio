import React from 'react';
import { Feather, BookOpen, Quote } from 'lucide-react';
import { DetailIntro, SubHeading, ImageSlot, MediaCard } from './shared';

/* ------------------------------ Dummy data -------------------------------- */
const INTRO = {
  eyebrow: 'The Art of Storytelling',
  title: 'Creative Writing & Poetry',
  description:
    'Words have the power to express emotions, capture memories and bring stories to life. Through creative writing and poetry, I explore human experiences and transform thoughts into meaningful expressions that connect with readers.',
};

const POETRY = [
  {
    src: '/assets/portfolio/poetry-1.png', // replace with your own image
    title: 'Echoes in the Monsoon Mist',
    meta: 'Poetry Collection – 01 · 2024',
    excerpt:
      'We measured time not in calendar squares, but in the slow cooling of tea glasses on rainy balcony sills.',
    tags: ['Free Verse', 'Nostalgia'],
  },
  {
    src: '/assets/portfolio/poetry-2.png', // replace with your own image
    title: 'The Cartographer of Stillness',
    meta: 'Poetry Collection – 02 · 2023',
    excerpt: 'He wound watches not to mark the minutes, but to give tomorrow somewhere steady to land.',
    tags: ['Narrative', 'Reflection'],
  },
];

const HIGHLIGHTS = [
  { stat: '140K+', label: 'Readers Reached' },
  { stat: '2x', label: 'National Anthologies' },
  { stat: '2024', label: 'Quill Craft Award' },
];

/* ------------------------------- Component -------------------------------- */
export const CreativeWritingDetail: React.FC = () => (
  <div className="space-y-8">
    <DetailIntro icon={Feather} {...INTRO} />

    <div className="grid grid-cols-3 gap-3">
      {HIGHLIGHTS.map((h) => (
        <div key={h.label} className="rounded-xl bg-[#090e1a] border border-slate-800/80 p-3 text-center">
          <div className="text-lg sm:text-2xl font-extrabold text-amber-400 font-mono">{h.stat}</div>
          <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{h.label}</div>
        </div>
      ))}
    </div>

    <div className="space-y-5">
      <SubHeading icon={BookOpen}>Selected Poetry</SubHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {POETRY.map((poem) => (
          <MediaCard key={poem.title}>
            <ImageSlot src={poem.src} alt={poem.title} aspect="aspect-[4/5]" fit="contain" label="Poetry image" />
            <div className="p-4 space-y-2">
              <p className="text-amber-400 text-xs font-mono">{poem.meta}</p>
              <h4 className="text-white font-bold">{poem.title}</h4>
              <p className="flex gap-2 text-sm text-amber-200/90 font-serif italic leading-relaxed">
                <Quote className="w-4 h-4 shrink-0 mt-1 text-amber-500/60" />
                <span>{poem.excerpt}</span>
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {poem.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-800/80 text-[11px] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </MediaCard>
        ))}
      </div>
    </div>
  </div>
);
