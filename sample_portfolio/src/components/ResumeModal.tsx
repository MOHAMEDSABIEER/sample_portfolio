import React, { useEffect } from 'react';
import { X, Download, Printer, Briefcase, GraduationCap, Award, FileText, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean text file version or triggers print-to-pdf
    const element = document.createElement('a');
    const resumeText = `
VIKRAM SINGH
Creative Writer | Scriptwriter & Director | Program Producer & Anchor | Social Media Strategist
Email: hnn@vikramsingh.com | Phone: 033-388 2980 | LinkedIn: vikram@linkedin.com

EXECUTIVE SUMMARY
Storyteller, creative director, and digital strategist with 8+ years experience turning concepts into high-engagement campaigns and cinematic productions. Over 8.5M video views, 120+ broadcast episodes produced, and partnerships with leading brands including Nike, Amazon, Spotify, and Adobe.

CORE DISCIPLINES
1. Creative Writing & Narrative Poetry
2. Script Writing & Cinematic Direction
3. Program Executive Production & Stage Anchoring
4. Social Media Management & Organic Scaling
5. Performance Influencer Strategy & Creator Relations
6. Strategic Brand Alliances & Co-Branding
7. 360° Commercial Advertising (OOH & Digital)
8. Retention Analytics & Growth Funnel Architecture

KEY ACHIEVEMENTS
- Winner: 2024 Quill Craft Horizon Prize
- Best Digital Campaign 2024: "Every Second Counts" Luxury Horology Launch
- Top 10 Indie Literary Releases: "Echoes in the Monsoon Mist"
- Executive Producer & Anchor: "The Creative Blueprint" (Top 2 on Apple Podcasts India)

EDUCATION
Bachelor of Arts in English Literature & Mass Communication (Summa Cum Laude)
    `;
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Vikram_Singh_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d1322] border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a0f1d] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-white">Curriculum Vitae — Vikram Singh</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-amber-400 text-slate-950 rounded-lg hover:bg-amber-300 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Resume</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-xs sm:text-sm">
          {/* Header block */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Vikram Singh</h1>
            <p className="text-amber-400 font-medium text-xs sm:text-sm mt-1">
              Creative Writer | Scriptwriter & Director | Program Producer & Anchor | Social Media Strategist
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-3">
              <span>📍 Mumbai / Delhi, India</span>
              <span>✉ hnn@vikramsingh.com</span>
              <span>📞 033-388 2980</span>
              <span>🔗 linkedin.com/in/vikramsingh</span>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h2>

            <div className="space-y-4 border-l-2 border-slate-800 pl-4 ml-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white text-sm">Lead Creative Strategist & Director</h3>
                  <span className="text-xs text-amber-400 font-mono">2022 - Present</span>
                </div>
                <p className="text-xs text-slate-400">Independent Studio & Brand Advisory</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Directed cinematic commercial campaigns for Nike, Spotify, and Amazon Prime Video. Grew client social impressions to over 42M and maintained 95%+ creator satisfaction.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white text-sm">Executive Producer & Host</h3>
                  <span className="text-xs text-amber-400 font-mono">2020 - 2022</span>
                </div>
                <p className="text-xs text-slate-400">Studio Wave Media & Podcasting</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Produced and hosted 120+ studio episodes with cultural icons, directors, and authors. Spearheaded multi-track stage hosting for international tech conclaves with 50,000+ attendees.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white text-sm">Senior Screenwriter & Copy Lead</h3>
                  <span className="text-xs text-amber-400 font-mono">2018 - 2020</span>
                </div>
                <p className="text-xs text-slate-400">Horizon Creative Guild</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Penned screenplays for award-winning short films, branded fiction series, and print anthologies. Winner of the 2023 Horizon Fiction Prize.
                </p>
              </div>
            </div>
          </div>

          {/* Key Recognitions */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Honors & Recognition
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-semibold text-white block">Quill Craft Horizon Award (2024)</span>
                <span className="text-[11px] text-slate-400">For outstanding contemporary narrative verse</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="font-semibold text-white block">Best Digital Campaign Award (2024)</span>
                <span className="text-[11px] text-slate-400">Awarded for Chrono Precision Horology 360 launch</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800">
              <span className="font-semibold text-white block">Bachelor of Arts in English Literature & Media Studies</span>
              <span className="text-[11px] text-slate-400">University of Delhi · First Class with Distinction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
