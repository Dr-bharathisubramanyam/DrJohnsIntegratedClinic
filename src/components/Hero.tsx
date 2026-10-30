import React from 'react';
import { Calendar, Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 border-b border-sky-100/60">
      {/* Decorative ambient glass light orbs */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-200/35 via-teal-100/30 to-blue-200/25 blur-3xl -z-10 pointer-events-none rounded-full"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              {t.hero.titleStart}{' '}
              <span className="bg-gradient-to-r from-sky-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Dual Leadership Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-sky-100 shadow-sm">
                <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
                  Director
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Dr Kyung Jin Min
                  <span className="block text-xs font-semibold text-sky-700 mt-0.5">TCM</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-sky-100 shadow-sm">
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                  Consultant
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Dr Nava Subramanya Bharathi
                  <span className="block text-xs font-semibold text-teal-700 mt-0.5">BSMS</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.bookBtn}</span>
              </button>

              <a
                href="https://wa.me/917200647975?text=Hello%20Dr%20John%27s%20Integrated%20Clinic,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors duration-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.whatsappBtn}</span>
              </a>

              <a
                href="tel:+917200647975"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>{t.hero.callBtn}</span>
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Acupuncture & Electro-therapy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Varmam</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Tuina & Thokkanam</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Glassy Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 bg-white/70 backdrop-blur-xl border border-sky-100 shadow-[0_20px_50px_rgba(2,132,199,0.08)] space-y-5">
              
              {/* Header inside glass frame with clinic logo */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/clinic-logo_400e6577.jpeg"
                    alt="Clinic Official Logo"
                    className="w-14 h-14 rounded-full object-contain border border-sky-200 shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-snug">
                      Dr John&apos;s Integrated Clinic
                    </div>
                    <div className="text-xs text-sky-700 font-medium">
                      TCM & AYUSH Healing Center
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Open for Appointments
                  </span>
                </div>
              </div>

              {/* Side-by-side Doctor Preview Cards with accurate non-distorted photos */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Dr. Min */}
                <div className="group p-3 rounded-2xl bg-gradient-to-b from-sky-50/80 to-white border border-sky-100/90 text-center flex flex-col items-center transition-all duration-300 hover:shadow-md">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-white shadow-md mb-2 bg-slate-100">
                    <img
                      src="/assets/aistudio/dr-kyung-jin-min_b1f8082a.png"
                      alt="Dr Kyung Jin Min TCM"
                      className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-900 line-clamp-1">
                    Dr Kyung Jin Min
                  </div>
                  <div className="text-[11px] font-medium text-sky-700">Director · TCM</div>
                </div>

                {/* Dr. Nava */}
                <div className="group p-3 rounded-2xl bg-gradient-to-b from-teal-50/80 to-white border border-teal-100/90 text-center flex flex-col items-center transition-all duration-300 hover:shadow-md">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-white shadow-md mb-2 bg-slate-100">
                    <img
                      src="/assets/aistudio/dr-nava-bharathi_22f63621.png"
                      alt="Dr Nava Subramanya Bharathi BSMS"
                      className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    Dr Nava Subramanya Bharathi
                  </div>
                  <div className="text-[11px] font-medium text-teal-700">Consultant · Siddha</div>
                </div>
              </div>

              {/* Quick Hours and Location Widget */}
              <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 text-xs space-y-1.5 text-slate-600">
                <div className="flex items-center justify-between font-semibold text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>Taramani, Chennai</span>
                  </span>
                  <a
                    href="https://maps.app.goo.gl/7QSFYvToLCJuQALC8?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:text-sky-900 underline font-medium"
                  >
                    View Map
                  </a>
                </div>
                <div className="text-[11px] text-slate-500">
                  Mon - Sat: 10:00 AM - 08:00 PM (Lunch: 12:30 - 02:30 PM)
                </div>
                <div className="text-[11px] text-slate-500">
                  Sunday: 03:00 PM - 08:00 PM
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3-Pillar Information Ribbon below hero split */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-sky-100/80">
          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-sky-100 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100/80 flex items-center justify-center text-sky-700 shrink-0 font-semibold text-sm">
              01
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Consultation Hours
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                {t.hero.quickStats.timing}
              </div>
              <div className="text-xs text-slate-500 mt-1 space-y-0.5">
                <div>{t.hero.quickStats.timingDetail}</div>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  {t.hero.quickStats.sundayTiming}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-sky-100 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100/80 flex items-center justify-center text-teal-700 shrink-0 font-semibold text-sm">
              02
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Location & Accessibility
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{t.hero.quickStats.location}</div>
              <div className="text-xs text-slate-500 mt-0.5">Near Taramani IT corridor, Chennai, India</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-sky-100 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100/80 flex items-center justify-center text-blue-700 shrink-0 font-semibold text-sm">
              03
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Integrative Synergy
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{t.hero.quickStats.integration}</div>
              <div className="text-xs text-slate-500 mt-0.5">{t.hero.quickStats.integrationDetail}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
