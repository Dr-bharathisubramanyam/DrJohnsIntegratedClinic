import React from 'react';
import {
  CheckCircle2,
  Activity,
  Crosshair,
  Hand,
  Leaf,
  Flame,
  ShieldPlus,
  Sparkles,
} from 'lucide-react';
import { Language, translations } from '../data/translations';

interface TreatmentsSectionProps {
  currentLang: Language;
  onOpenBooking?: (treatmentId?: string) => void;
}

// Visual representation configuration for each clinical specialty
interface TreatmentVisual {
  icon: React.ReactNode;
  bgGradient: string;
  borderColor: string;
  badgeBg: string;
  accentColor: string;
  svgGraphic: React.ReactNode;
}

const treatmentVisuals: Record<string, TreatmentVisual> = {
  acupuncture: {
    icon: <Activity className="w-6 h-6 text-sky-700" />,
    bgGradient: 'from-sky-50 via-white to-sky-50/30',
    borderColor: 'border-sky-200/80',
    badgeBg: 'bg-sky-100/80 text-sky-800 border-sky-200',
    accentColor: 'text-sky-700',
    svgGraphic: (
      <svg className="w-16 h-12 text-sky-200/60" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 40L32 8M32 8L28 16M32 8L36 16" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="8" r="3" fill="currentColor" fillOpacity="0.4" />
        <path d="M42 20C46 22 48 26 48 30C48 36 42 40 36 40" strokeDasharray="2 2" />
        <circle cx="22" cy="24" r="1.5" fill="currentColor" />
        <circle cx="38" cy="28" r="1.5" fill="currentColor" />
        <circle cx="48" cy="30" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  varmam: {
    icon: <Crosshair className="w-6 h-6 text-teal-700" />,
    bgGradient: 'from-teal-50 via-white to-teal-50/30',
    borderColor: 'border-teal-200/80',
    badgeBg: 'bg-teal-100/80 text-teal-800 border-teal-200',
    accentColor: 'text-teal-700',
    svgGraphic: (
      <svg className="w-16 h-12 text-teal-200/60" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="24" r="16" strokeDasharray="3 3" />
        <circle cx="32" cy="24" r="8" />
        <circle cx="32" cy="24" r="3" fill="currentColor" />
        <line x1="32" y1="4" x2="32" y2="44" strokeDasharray="2 2" />
        <line x1="12" y1="24" x2="52" y2="24" strokeDasharray="2 2" />
      </svg>
    ),
  },
  'tuina-thokkanam': {
    icon: <Hand className="w-6 h-6 text-indigo-700" />,
    bgGradient: 'from-indigo-50 via-white to-indigo-50/30',
    borderColor: 'border-indigo-200/80',
    badgeBg: 'bg-indigo-100/80 text-indigo-800 border-indigo-200',
    accentColor: 'text-indigo-700',
    svgGraphic: (
      <svg className="w-16 h-12 text-indigo-200/60" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 36C22 30 24 22 28 14C30 10 34 8 38 12C42 16 44 26 50 34" strokeLinecap="round" />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
        <circle cx="33" cy="26" r="2" fill="currentColor" />
        <circle cx="34" cy="34" r="2" fill="currentColor" />
        <path d="M26 40C32 44 38 44 44 40" strokeLinecap="round" />
      </svg>
    ),
  },
  'herbal-decoctions': {
    icon: <Leaf className="w-6 h-6 text-emerald-700" />,
    bgGradient: 'from-emerald-50 via-white to-emerald-50/30',
    borderColor: 'border-emerald-200/80',
    badgeBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
    accentColor: 'text-emerald-700',
    svgGraphic: (
      <svg className="w-16 h-12 text-emerald-200/60" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 38C18 38 22 22 38 14C48 24 40 38 32 38C26 38 22 36 18 38Z" strokeLinejoin="round" />
        <path d="M22 34C28 28 32 24 38 14" strokeLinecap="round" />
        <path d="M28 28C32 30 36 30 38 28" />
        <circle cx="48" cy="16" r="1.5" fill="currentColor" />
        <circle cx="52" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  'gua-sha-moxa': {
    icon: <Flame className="w-6 h-6 text-amber-700" />,
    bgGradient: 'from-amber-50 via-white to-amber-50/30',
    borderColor: 'border-amber-200/80',
    badgeBg: 'bg-amber-100/80 text-amber-800 border-amber-200',
    accentColor: 'text-amber-700',
    svgGraphic: (
      <svg className="w-16 h-12 text-amber-200/70" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 6C32 6 22 18 22 28C22 35 27 40 32 40C37 40 42 35 42 28C42 18 32 6 32 6Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M32 18C32 18 27 24 27 30C27 34 30 36 32 36C34 36 37 34 37 30C37 24 32 18 32 18Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M14 34C18 38 22 40 28 40" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  kayakarpam: {
    icon: <ShieldPlus className="w-6 h-6 text-sky-800" />,
    bgGradient: 'from-blue-50 via-white to-blue-50/30',
    borderColor: 'border-blue-200/80',
    badgeBg: 'bg-blue-100/80 text-blue-800 border-blue-200',
    accentColor: 'text-blue-800',
    svgGraphic: (
      <svg className="w-16 h-12 text-blue-200/60" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 6L46 12V24C46 34 39 40 32 44C25 40 18 34 18 24V12L32 6Z" strokeLinejoin="round" />
        <path d="M32 16V28M26 22H38" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            Integrated Clinical Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.treatments.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {t.treatments.sectionSubtitle}
          </p>
        </div>

        {/* Treatment Grid (Bento cards with visual representations & icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.treatments.items.map((item, idx) => {
            const visual = treatmentVisuals[item.id] || {
              icon: <Sparkles className="w-6 h-6 text-sky-700" />,
              bgGradient: 'from-sky-50 via-white to-slate-50/30',
              borderColor: 'border-sky-100',
              badgeBg: 'bg-sky-100/80 text-sky-800 border-sky-200',
              accentColor: 'text-sky-700',
              svgGraphic: null,
            };

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${visual.bgGradient} border ${visual.borderColor} hover:border-sky-300 shadow-[0_4px_24px_rgba(2,132,199,0.04)] hover:shadow-[0_14px_36px_rgba(2,132,199,0.09)] transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
              >
                {/* Background Graphical Watermark Accent in Top-Right Corner */}
                <div className="absolute -top-2 -right-2 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity">
                  {visual.svgGraphic}
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Visual Header Strip: Icon Tile + Numbering + Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform duration-200">
                      {visual.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        0{idx + 1}
                      </span>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${visual.badgeBg}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors pt-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Key Indications / Clinical Benefits */}
                  <div className="pt-3 border-t border-slate-200/60 space-y-2">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Primary Indications & Outcomes:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-700 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
