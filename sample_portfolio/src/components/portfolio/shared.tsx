import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Play,
  ExternalLink,
  Youtube,
  Instagram,
  Link2,
  type LucideIcon,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Shared building blocks for the 8 portfolio detail components.             */
/*  Every media slot shows a placeholder until a real `src` is supplied.      */
/* -------------------------------------------------------------------------- */

interface DetailIntroProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}

export const DetailIntro: React.FC<DetailIntroProps> = ({
  icon: Icon,
  eyebrow,
  title,
  description,
}) => (
  <div className="text-center max-w-3xl mx-auto py-4 sm:py-6">
    <Icon className="w-9 h-9 text-amber-400 mx-auto mb-4" />
    <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3">{eyebrow}</p>
    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
    <p className="text-slate-300 leading-7 sm:leading-8 text-sm sm:text-base">{description}</p>
  </div>
);

export const SubHeading: React.FC<{ icon: LucideIcon; children: React.ReactNode }> = ({
  icon: Icon,
  children,
}) => (
  <div className="flex items-center gap-3">
    <Icon className="text-amber-400 w-5 h-5" />
    <h3 className="text-lg sm:text-xl font-bold text-white">{children}</h3>
  </div>
);

/* ------------------------------- Image slot ------------------------------- */

interface ImageSlotProps {
  src?: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]" */
  aspect?: string;
  fit?: 'cover' | 'contain';
  label?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  aspect = 'aspect-video',
  fit = 'cover',
  label = 'Image placeholder',
}) => {
  const [failed, setFailed] = useState(false);
  const showImage = !!src && !failed;

  return (
    <div className={`relative w-full overflow-hidden bg-slate-950 ${aspect}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-500">
          <ImageIcon className="w-8 h-8" />
          <span className="text-[11px] uppercase tracking-widest">{label}</span>
        </div>
      )}
    </div>
  );
};

/* ------------------------------- Video slot ------------------------------- */

interface VideoSlotProps {
  src?: string;
  poster?: string;
  aspect?: string;
  label?: string;
  badge?: string;
}

export const VideoSlot: React.FC<VideoSlotProps> = ({
  src,
  poster,
  aspect = 'aspect-video',
  label = 'Video placeholder',
  badge,
}) => (
  <div className={`relative w-full overflow-hidden bg-slate-950 ${aspect}`}>
    {src ? (
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-500">
        <span className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center">
          <Play className="w-6 h-6 text-amber-400 ml-0.5" />
        </span>
        <span className="text-[11px] uppercase tracking-widest">{label}</span>
      </div>
    )}
    {badge && (
      <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/70 text-amber-400 border border-amber-500/30">
        {badge}
      </span>
    )}
  </div>
);

/* ----------------------------- YouTube thumbnail -------------------------- */

interface YouTubeCardProps {
  videoId: string;
  title: string;
  description?: string;
  /** Optional full URL; defaults to the standard watch URL for videoId */
  url?: string;
}

export const YouTubeCard: React.FC<YouTubeCardProps> = ({
  videoId,
  title,
  description,
  url,
}) => {
  const [thumbFailed, setThumbFailed] = useState(false);
  const href = url ?? `https://www.youtube.com/watch?v=${videoId}`;
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 transition-colors"
    >
      <div className="relative aspect-video bg-slate-950 overflow-hidden">
        {!thumbFailed ? (
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            onError={() => setThumbFailed(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-slate-600">
            <Youtube className="w-10 h-10" />
          </div>
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
          <span className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
          </span>
        </span>
      </div>
      <div className="p-4">
        <p className="text-white text-sm font-semibold group-hover:text-amber-400 transition-colors line-clamp-2">
          {title}
        </p>
        {description && <p className="text-xs text-slate-400 mt-1 line-clamp-2">{description}</p>}
      </div>
    </a>
  );
};

/* ------------------------------- Link card -------------------------------- */

export type LinkPlatform = 'instagram' | 'youtube' | 'web';

const platformIcon: Record<LinkPlatform, LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  web: Link2,
};

interface LinkCardProps {
  label: string;
  url: string;
  platform?: LinkPlatform;
  note?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ label, url, platform = 'web', note }) => {
  const Icon = platformIcon[platform];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/40 p-4 transition-colors"
    >
      <span className="w-10 h-10 shrink-0 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-amber-400" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
          {label}
        </span>
        {note && <span className="block text-xs text-slate-400 truncate">{note}</span>}
      </span>
      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0" />
    </a>
  );
};

/* ------------------------------ Card wrapper ------------------------------ */

export const MediaCard: React.FC<{
  children: React.ReactNode;
  title?: string;
  caption?: string;
  className?: string;
}> = ({ children, title, caption, className = '' }) => (
  <div className={`rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 ${className}`}>
    {children}
    {(title || caption) && (
      <div className="p-4">
        {title && <p className="text-amber-400 text-sm font-semibold">{title}</p>}
        {caption && <p className="text-xs text-slate-400 mt-1 leading-relaxed">{caption}</p>}
      </div>
    )}
  </div>
);
