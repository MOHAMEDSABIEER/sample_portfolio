// // // // import React from 'react';
// // // // import { ArrowDown, Download, Sparkles } from 'lucide-react';

// // // // interface HeroProps {
// // // //   onExploreClick: () => void;
// // // //   onDownloadResume: () => void;
// // // // }

// // // // export const Hero: React.FC<HeroProps> = ({ onExploreClick, onDownloadResume }) => {
// // // //   return (
// // // //     <section
// // // //       id="home"
// // // //       className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0b101b] via-[#0d1424] to-[#0b101b]"
// // // //     >
// // // //       {/* Background Ambient Studio Glow */}
// // // //       <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
// // // //       <div className="absolute top-10 left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
// // // //           {/* Left Column: Headlines & CTAs (7 cols on lg) */}
// // // //           <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
// // // //             {/* Main Headline */}
// // // //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.15]">
// // // //               STORIES THAT <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">CONNECT,</span>
// // // //               <br />
// // // //               CAMPAIGNS THAT <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">RESONATE.</span>
// // // //             </h1>

// // // //             {/* Sub-headline / Titles */}
// // // //             <div className="space-y-1.5 text-slate-300 text-sm sm:text-base md:text-lg font-normal tracking-wide">
// // // //               <p className="flex flex-wrap items-center gap-x-2">
// // // //                 <span className="font-medium text-slate-200">Creative Writer</span>
// // // //                 <span className="text-amber-400/80">|</span>
// // // //                 <span className="font-medium text-slate-200">Scriptwriter & Director</span>
// // // //                 <span className="text-amber-400/80">|</span>
// // // //               </p>
// // // //               <p className="flex flex-wrap items-center gap-x-2">
// // // //                 <span className="font-medium text-slate-200">Program Producer & Anchor</span>
// // // //                 <span className="text-amber-400/80">|</span>
// // // //                 <span className="font-medium text-slate-200">Social Media Strategist</span>
// // // //               </p>
// // // //             </div>

// // // //             {/* CTA Buttons */}
// // // //             <div className="flex flex-wrap items-center gap-4 pt-2">
// // // //               <button
// // // //                 onClick={onExploreClick}
// // // //                 className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
// // // //               >
// // // //                 Explore My Work
// // // //                 <ArrowDown className="w-4 h-4 text-slate-950" />
// // // //               </button>

// // // //               <button
// // // //                 onClick={onDownloadResume}
// // // //                 className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer whitespace-nowrap shadow-md shadow-black/40"
// // // //               >
// // // //                 <Download className="w-4 h-4 text-amber-400" />
// // // //                 Download Resume
// // // //               </button>
// // // //             </div>

// // // //             {/* Quick trust metrics */}
// // // //             <div className="pt-2 flex items-center gap-6 text-xs text-slate-400 border-t border-slate-800/60">
// // // //               <div className="flex items-center gap-2">
// // // //                 <span className="text-amber-400 font-bold text-base">8.5M+</span>
// // // //                 <span>Cumulative Views</span>
// // // //               </div>
// // // //               <span className="text-slate-700">·</span>
// // // //               <div className="flex items-center gap-2">
// // // //                 <span className="text-amber-400 font-bold text-base">120+</span>
// // // //                 <span>Episodes & Shows</span>
// // // //               </div>
// // // //               <span className="text-slate-700">·</span>
// // // //               <div className="flex items-center gap-2">
// // // //                 <span className="text-amber-400 font-bold text-base">100%</span>
// // // //                 <span>Authentic Impact</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Column: Hero Portrait & Tilted Polaroids (5 cols on lg) */}
// // // //           <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center items-center">
// // // //             <div className="relative w-full max-w-[480px]">
// // // //               {/* Vikram Hero Portrait Image */}
// // // //               <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/80 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
// // // //                 <img
// // // //                   src="/assets/portfolio/Gemini_Generated_Image_pkvuzopkvuzopkvu.png"
// // // //                   alt="Vikram Singh in creative studio environment"
// // // //                   className="w-full h-auto object-cover max-h-[440px] transform hover:scale-102 transition-transform duration-500"
// // // //                   referrerPolicy="no-referrer"
// // // //                   onError={(e) => {
// // // //                     // Fallback to reference asset if needed
// // // //                     e.currentTarget.src = '/assets/portfolio/about_portrait.png';
// // // //                   }}
// // // //                 />
// // // //                 {/* Subtle bottom gradient overlay */}
// // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-transparent to-transparent opacity-60" />
// // // //               </div>

// // // //               {/* Tilted Polaroids Stack on Right Edge */}
// // // //               <div className="hidden sm:flex flex-col gap-3 absolute -right-4 sm:-right-8 top-4 sm:top-6 z-20">
// // // //                 {/* Polaroid 1: Writing & Scripting
// // // //                 <div className="w-28 sm:w-36 bg-white p-1.5 pb-2 rounded shadow-2xl shadow-black transform rotate-6 hover:rotate-0 transition-transform duration-300 border border-slate-200">
// // // //                   <div className="relative overflow-hidden rounded-[2px] bg-slate-900 aspect-[4/3]">
// // // //                     <img
// // // //                       src="/assets/portfolio/polaroid_top.png"
// // // //                       alt="Vikram writing scripts"
// // // //                       className="w-full h-full object-cover"
// // // //                       referrerPolicy="no-referrer"
// // // //                     />
// // // //                   </div>
// // // //                   <p className="text-[9px] text-slate-600 text-center font-mono mt-1 font-medium">Scripting</p>
// // // //                 </div> */}

// // // //                 {/* Polaroid 2: Anchoring Stage */}
// // // //                 {/* <div className="w-28 sm:w-36 bg-white p-1.5 pb-2 rounded shadow-2xl shadow-black transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-slate-200 ml-2">
// // // //                   <div className="relative overflow-hidden rounded-[2px] bg-slate-900 aspect-[4/3]">
// // // //                     <img
// // // //                       src="/assets/portfolio/polaroid_mid.png"
// // // //                       alt="Vikram hosting on stage"
// // // //                       className="w-full h-full object-cover"
// // // //                       referrerPolicy="no-referrer"
// // // //                     />
// // // //                   </div>
// // // //                   <p className="text-[9px] text-slate-600 text-center font-mono mt-1 font-medium">Anchoring</p>
// // // //                 </div> */}

// // // //                 {/* Polaroid 3: Studio Filming */}
// // // //                 {/* <div className="w-28 sm:w-36 bg-white p-1.5 pb-2 rounded shadow-2xl shadow-black transform rotate-4 hover:rotate-0 transition-transform duration-300 border border-slate-200 -ml-1">
// // // //                   <div className="relative overflow-hidden rounded-[2px] bg-slate-900 aspect-[4/3]">
// // // //                     <img
// // // //                       src="/assets/portfolio/polaroid_bot.png"
// // // //                       alt="Vikram on production set"
// // // //                       className="w-full h-full object-cover"
// // // //                       referrerPolicy="no-referrer"
// // // //                     />
// // // //                   </div>
// // // //                   <p className="text-[9px] text-slate-600 text-center font-mono mt-1 font-medium">Directing</p>
// // // //                 </div> */}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // import React from 'react';
// // // import { ArrowDown, Download } from 'lucide-react';

// // // interface HeroProps {
// // //   onExploreClick: () => void;
// // //   onDownloadResume: () => void;
// // // }

// // // export const Hero: React.FC<HeroProps> = ({
// // //   onExploreClick,
// // //   onDownloadResume
// // // }) => {
// // //   return (
// // //     <section
// // //       id="home"
// // //       className="relative min-h-screen flex items-center overflow-hidden bg-[#0b101b]"
// // //     >

// // //       {/* ==================================
// // //           SINGLE COMBINED HERO IMAGE
// // //           Client + Background in one image
// // //       =================================== */}

// // //       <div className="absolute inset-0">
// // //         <img
// // //           src="/assets/portfolio/hero-background.png"
// // //           alt="Vikram Singh - Creative Storyteller"
// // //           className="w-full h-full object-cover object-center"
// // //         />
// // //       </div>


// // //       {/* Dark overlay for text readability */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-[#080d18]/90 via-[#080d18]/60 to-[#080d18]/20" />

// // //       {/* Bottom gradient */}
// // //       <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b]/80 via-transparent to-[#0b101b]/20" />


// // //       {/* ==================================
// // //           HERO CONTENT
// // //       =================================== */}

// // //       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32">

// // //         <div className="max-w-4xl flex flex-col space-y-6 sm:space-y-8">

// // //           {/* Small Label */}
// // //           <div className="flex items-center gap-3">

// // //             <span className="w-10 h-[2px] bg-amber-400" />

// // //             <span className="text-amber-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
// // //               Creative Storyteller & Strategist
// // //             </span>

// // //           </div>


// // //           {/* Main Heading */}
// // //           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.12]">

// // //             STORIES THAT{' '}
// // //             <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
// // //               CONNECT,
// // //             </span>

// // //             <br />

// // //             CAMPAIGNS THAT{' '}
// // //             <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
// // //               RESONATE.
// // //             </span>

// // //           </h1>


// // //           {/* Professional Titles */}
// // //           <div className="space-y-2 text-slate-200 text-sm sm:text-base md:text-lg tracking-wide">

// // //             <p>
// // //               Creative Writer
// // //               <span className="text-amber-400 mx-2">|</span>
// // //               Scriptwriter & Director
// // //             </p>

// // //             <p>
// // //               Program Producer & Anchor
// // //               <span className="text-amber-400 mx-2">|</span>
// // //               Social Media Strategist
// // //             </p>

// // //             <p>
// // //               Influencer Marketing
// // //               <span className="text-amber-400 mx-2">|</span>
// // //               Brand Collaboration
// // //               <span className="text-amber-400 mx-2">|</span>
// // //               Ad Campaigns
// // //             </p>

// // //           </div>


// // //           {/* CTA Buttons */}
// // //           <div className="flex flex-wrap items-center gap-4 pt-3">

// // //             <button
// // //               onClick={onExploreClick}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-1"
// // //             >
// // //               Explore My Work
// // //               <ArrowDown className="w-4 h-4" />
// // //             </button>


// // //             <button
// // //               onClick={onDownloadResume}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-amber-400/60 rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
// // //             >
// // //               <Download className="w-4 h-4 text-amber-400" />
// // //               Download Resume
// // //             </button>

// // //           </div>


// // //           {/* Trust Metrics */}
// // //           <div className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-6 border-t border-white/20 max-w-2xl">

// // //             <div>
// // //               <p className="text-amber-400 font-bold text-2xl">
// // //                 8.5M+
// // //               </p>
// // //               <p className="text-slate-300 text-xs">
// // //                 Cumulative Views
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <p className="text-amber-400 font-bold text-2xl">
// // //                 120+
// // //               </p>
// // //               <p className="text-slate-300 text-xs">
// // //                 Episodes & Shows
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <p className="text-amber-400 font-bold text-2xl">
// // //                 100%
// // //               </p>
// // //               <p className="text-slate-300 text-xs">
// // //                 Authentic Impact
// // //               </p>
// // //             </div>

// // //           </div>

// // //         </div>
// // //       </div>

// // //     </section>
// // //   );
// // // };



// // import React from 'react';
// // import { ArrowDown, Download } from 'lucide-react';

// // interface HeroProps {
// //   onExploreClick: () => void;
// //   onDownloadResume: () => void;
// // }

// // export const Hero: React.FC<HeroProps> = ({
// //   onExploreClick,
// //   onDownloadResume
// // }) => {
// //   return (
// //     <section
// //       id="home"
// //       className="relative min-h-screen flex items-center overflow-hidden bg-[#0b101b]"
// //     >

// //       {/* Background Image */}
// //       <div className="absolute inset-0">
// //         <img
// //           src="/assets/portfolio/hero-background.png"
// //           alt="Jabir"
// //           className="w-full h-full object-cover object-center"
// //         />
// //       </div>

// //       {/* Gradient: Keep left image bright, darken right for text */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080d18]/30 to-[#080d18]/85" />

// //       {/* Subtle bottom gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b]/50 via-transparent to-transparent" />


// //       {/* Hero Content */}
// //       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32">

// //       <div className="flex justify-end">
// //   <div className="w-full lg:w-[45%] lg:ml-auto lg:mr-[-20px] flex flex-col space-y-6 sm:space-y-8 text-left">

// //             {/* Small Label */}
// //             <div className="flex items-center gap-3">

// //               <span className="w-10 h-[2px] bg-amber-400" />

// //               <span className="text-amber-400 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
// //                 Creative Storyteller & Strategist
// //               </span>

// //             </div>


// //             {/* Main Heading */}
// //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.12]">

// //               STORIES THAT{' '}
// //               <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
// //                 CONNECT,
// //               </span>

// //               <br />

// //               CAMPAIGNS THAT{' '}
// //               <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
// //                 RESONATE.
// //               </span>

// //             </h1>


// //             {/* Professional Titles */}
// //             <div className="space-y-2 text-slate-200 text-sm sm:text-base md:text-lg tracking-wide">

// //               <p>
// //                 Content creator
// //                 <span className="text-amber-400 mx-2">|</span>
// //                 Scriptwriter & Director
// //               </p>

// //               <p>
// //                 Program Producer & Anchor
// //                 <span className="text-amber-400 mx-2">|</span>
// //                 Social Media Strategist
// //               </p>

// //               <p>
// //                 Social media Manager
// //                 <span className="text-amber-400 mx-2">|</span>
// //                 Brand Collaboration
// //                 <span className="text-amber-400 mx-2">|</span>
// //                 Ad Campaigns
// //               </p>

// //             </div>


// //             {/* CTA Buttons */}
// //             <div className="flex flex-wrap items-center gap-4 pt-3">

// //               <button
// //                 onClick={onExploreClick}
// //                 className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 Explore My Work
// //                 <ArrowDown className="w-4 h-4" />
// //               </button>


// //               <button
// //                 onClick={onDownloadResume}
// //                 className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-amber-400/60 rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 <Download className="w-4 h-4 text-amber-400" />
// //                 Download Resume
// //               </button>

// //             </div>


// //             {/* Trust Metrics */}
// //             <div className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-6 border-t border-white/20 max-w-2xl">

// //               <div>
// //                 <p className="text-amber-400 font-bold text-2xl">
// //                   8.5M+
// //                 </p>
// //                 <p className="text-slate-300 text-xs">
// //                   Cumulative Views
// //                 </p>
// //               </div>

// //               <div>
// //                 <p className="text-amber-400 font-bold text-2xl">
// //                   120+
// //                 </p>
// //                 <p className="text-slate-300 text-xs">
// //                   Episodes & Shows
// //                 </p>
// //               </div>

// //               <div>
// //                 <p className="text-amber-400 font-bold text-2xl">
// //                   100%
// //                 </p>
// //                 <p className="text-slate-300 text-xs">
// //                   Authentic Impact
// //                 </p>
// //               </div>

// //             </div>

// //           </div>
// //         </div>
// //       </div>

// //     </section>
// //   );
// // };

// import React from 'react';
// import { ArrowDown, Download } from 'lucide-react';

// interface HeroProps {
//   onExploreClick: () => void;
//   onDownloadResume: () => void;
// }

// export const Hero: React.FC<HeroProps> = ({
//   onExploreClick,
//   onDownloadResume
// }) => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden bg-[#0b101b]"
//     >

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/assets/portfolio/hero-background.png"
//           alt="Vikram Singh"
//           className="
//             w-full h-full
//             object-cover
//             object-[35%_center]
//             sm:object-center
//             lg:object-center
//           "
//         />
//       </div>

//       {/* Desktop Overlay */}
//       <div className="
//         absolute inset-0
//         hidden sm:block
//         bg-gradient-to-r
//         from-transparent
//         via-[#080d18]/30
//         to-[#080d18]/85
//       " />

//       {/* Mobile Overlay */}
//       <div className="
//         absolute inset-0
//         sm:hidden
//         bg-gradient-to-b
//         from-[#080d18]/10
//         via-[#080d18]/65
//         to-[#080d18]/95
//       " />

//       {/* Desktop Bottom Gradient */}
//       <div className="
//         absolute inset-0
//         hidden sm:block
//         bg-gradient-to-t
//         from-[#0b101b]/50
//         via-transparent
//         to-transparent
//       " />


//       {/* Hero Content */}
//       <div className="
//         relative z-10
//         w-full max-w-7xl mx-auto
//         px-5 sm:px-6 lg:px-8
//         pt-28 pb-16
//         sm:pt-32 sm:pb-20
//       ">

//         <div className="flex justify-end">

//           {/* Content */}
//           <div className="
//             w-full
//             sm:w-[65%]
//             lg:w-[45%]
//             flex flex-col
//             space-y-5 sm:space-y-7
//             text-left
//           ">

//             {/* Small Label */}
//             <div className="flex items-center gap-3">

//               <span className="w-8 sm:w-10 h-[2px] bg-amber-400" />

//               <span className="
//                 text-amber-400 uppercase
//                 tracking-[0.2em] sm:tracking-[0.3em]
//                 text-[10px] sm:text-sm
//                 font-semibold
//               ">
//                 Creative Storyteller & Strategist
//               </span>

//             </div>


//             {/* Main Heading */}
//             <h1 className="
//               text-3xl
//               sm:text-4xl
//               md:text-5xl
//               lg:text-5xl
//               xl:text-6xl
//               font-extrabold
//               tracking-tight
//               text-white
//               uppercase
//               leading-[1.12]
//             ">

//               STORIES THAT{' '}
//               <span className="text-amber-400">
//                 CONNECT,
//               </span>

//               <br />

//               CAMPAIGNS THAT{' '}
//               <span className="text-amber-400">
//                 RESONATE.
//               </span>

//             </h1>


//             {/* Professional Titles */}
//             <div className="
//               space-y-2
//               text-slate-200
//               text-xs sm:text-base md:text-lg
//               tracking-wide
//               leading-relaxed
//             ">

//               <p>
//                 Creative Writer
//                 <span className="text-amber-400 mx-1 sm:mx-2">|</span>
//                 Scriptwriter & Director
//               </p>

//               <p>
//                 Program Producer & Anchor
//                 <span className="text-amber-400 mx-1 sm:mx-2">|</span>
//                 Social Media Strategist
//               </p>

//               <p>
//                 Influencer Marketing
//                 <span className="text-amber-400 mx-1 sm:mx-2">|</span>
//                 Brand Collaboration
//                 <span className="text-amber-400 mx-1 sm:mx-2">|</span>
//                 Ad Campaigns
//               </p>

//             </div>


//             {/* CTA Buttons */}
//             <div className="
//               flex flex-wrap
//               items-center
//               gap-3 sm:gap-4
//               pt-2
//             ">

//               <button
//                 onClick={onExploreClick}
//                 className="
//                   inline-flex items-center justify-center gap-2
//                   px-5 sm:px-7
//                   py-3 sm:py-3.5
//                   text-xs sm:text-base
//                   font-semibold text-slate-950
//                   bg-gradient-to-r from-amber-400 to-amber-500
//                   hover:from-amber-300 hover:to-amber-400
//                   rounded-full
//                   shadow-lg shadow-amber-500/25
//                   transition-all duration-300
//                 "
//               >
//                 Explore My Work
//                 <ArrowDown className="w-4 h-4" />
//               </button>


//               <button
//                 onClick={onDownloadResume}
//                 className="
//                   inline-flex items-center justify-center gap-2
//                   px-5 sm:px-7
//                   py-3 sm:py-3.5
//                   text-xs sm:text-base
//                   font-medium text-white
//                   bg-white/10 hover:bg-white/20
//                   border border-white/30
//                   rounded-full backdrop-blur-sm
//                   transition-all duration-300
//                 "
//               >
//                 <Download className="w-4 h-4 text-amber-400" />
//                 Download Resume
//               </button>

//             </div>


//             {/* Trust Metrics */}
//             <div className="
//               flex flex-wrap items-center
//               gap-x-5 sm:gap-x-7
//               gap-y-3
//               pt-5 sm:pt-6
//               border-t border-white/20
//               max-w-2xl
//             ">

//               <div>
//                 <p className="text-amber-400 font-bold text-xl sm:text-2xl">
//                   8.5M+
//                 </p>
//                 <p className="text-slate-300 text-[10px] sm:text-xs">
//                   Cumulative Views
//                 </p>
//               </div>

//               <div>
//                 <p className="text-amber-400 font-bold text-xl sm:text-2xl">
//                   120+
//                 </p>
//                 <p className="text-slate-300 text-[10px] sm:text-xs">
//                   Episodes & Shows
//                 </p>
//               </div>

//               <div>
//                 <p className="text-amber-400 font-bold text-xl sm:text-2xl">
//                   100%
//                 </p>
//                 <p className="text-slate-300 text-[10px] sm:text-xs">
//                   Authentic Impact
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };




import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onDownloadResume
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b101b]"
    >

      {/* =====================================
          DESKTOP BACKGROUND
          Original full-width image
      ====================================== */}
      <div className="absolute inset-0 hidden lg:block">
        <img
          src="/assets/portfolio/hero-background.png"
          alt="Vikram Singh"
          className="w-full h-full object-cover object-center"
        />

        {/* Desktop overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080d18]/30 to-[#080d18]/85" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b]/50 via-transparent to-transparent" />
      </div>


      {/* =====================================
          MOBILE PORTRAIT SECTION
          Focus on client's face
      ====================================== */}
      <div className="relative lg:hidden h-[420px] sm:h-[520px] overflow-hidden">

        <img
          src="/assets/portfolio/hero-background.png"
          alt="Vikram Singh"
          className="w-full h-full object-cover object-[27%_center]"
        />

        {/* Mobile image gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0b101b]" />

      </div>


      {/* =====================================
          HERO CONTENT
      ====================================== */}
      <div className="
        relative z-10
        w-full max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-8
        -mt-10 lg:mt-0
        pt-0 lg:pt-32
        pb-12 lg:pb-20
      ">

        <div className="flex justify-end">

          <div className="
            w-full
            lg:w-[45%]
            flex flex-col
            space-y-5 sm:space-y-7
            text-left
          ">

            {/* Small Label */}
            <div className="flex items-center gap-3">

              <span className="w-8 sm:w-10 h-[2px] bg-amber-400 shrink-0" />

              <span className="text-amber-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-sm font-semibold">
                Creative Storyteller & Strategist
              </span>

            </div>


            {/* Main Heading */}
            <h1 className="
              text-[32px]
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl
              font-extrabold
              tracking-tight
              text-white
              uppercase
              leading-[1.12]
            ">

              STORIES THAT{' '}
              <span className="text-amber-400">
                CONNECT,
              </span>

              <br />

              CAMPAIGNS THAT{' '}
              <span className="text-amber-400">
                RESONATE.
              </span>

            </h1>


            {/* Professional Titles */}
            <div className="
              space-y-2.5
              text-slate-200
              text-[13px]
              sm:text-base
              lg:text-base
              xl:text-lg
              tracking-wide
              leading-relaxed
            ">

              <p>
                Creative Writer
                <span className="text-amber-400 mx-1.5">|</span>
                Scriptwriter & Director
              </p>

              <p>
                Program Producer & Anchor
                <span className="text-amber-400 mx-1.5">|</span>
                Social Media Strategist
              </p>

              <p>
                Influencer Marketing
                <span className="text-amber-400 mx-1.5">|</span>
                Brand Collaboration
                <span className="text-amber-400 mx-1.5">|</span>
                Ad Campaigns
              </p>

            </div>


            {/* CTA Buttons */}
            <div className="
              flex flex-wrap
              items-center
              gap-3
              pt-2
            ">

              <button
                onClick={onExploreClick}
                className="
                  inline-flex items-center justify-center gap-2
                  px-5 sm:px-7
                  py-3.5
                  text-sm sm:text-base
                  font-semibold text-slate-950
                  bg-gradient-to-r from-amber-400 to-amber-500
                  hover:from-amber-300 hover:to-amber-400
                  rounded-full
                  shadow-lg shadow-amber-500/25
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                Explore My Work
                <ArrowDown className="w-4 h-4" />
              </button>


              <button
                onClick={onDownloadResume}
                className="
                  inline-flex items-center justify-center gap-2
                  px-5 sm:px-7
                  py-3.5
                  text-sm sm:text-base
                  font-medium text-white
                  bg-white/10 hover:bg-white/20
                  border border-white/30
                  rounded-full
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download Resume
              </button>

            </div>


            {/* Trust Metrics */}
            <div className="
              grid grid-cols-3
              gap-2 sm:gap-6
              pt-5 sm:pt-6
              border-t border-white/20
              max-w-2xl
            ">

              <div>
                <p className="text-amber-400 font-bold text-xl sm:text-2xl">
                  8.5M+
                </p>
                <p className="text-slate-300 text-[10px] sm:text-xs">
                  Cumulative Views
                </p>
              </div>

              <div>
                <p className="text-amber-400 font-bold text-xl sm:text-2xl">
                  120+
                </p>
                <p className="text-slate-300 text-[10px] sm:text-xs">
                  Episodes & Shows
                </p>
              </div>

              <div>
                <p className="text-amber-400 font-bold text-xl sm:text-2xl">
                  100%
                </p>
                <p className="text-slate-300 text-[10px] sm:text-xs">
                  Authentic Impact
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
