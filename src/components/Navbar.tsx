import React, { useState } from 'react';
import { Phone, Calendar, Globe, Menu, X, Clock, MapPin } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onSelectLang, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[currentLang];

  const languages: { code: Language; label: string; nativeName: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English' },
    { code: 'ko', label: 'Korean', nativeName: '한국어' },
    { code: 'zh', label: 'Chinese', nativeName: '中文' },
    { code: 'ja', label: 'Japanese', nativeName: '日本語' },
  ];

  return (
    <>
      {/* Clinic Top Alert Strip */}
      <div className="bg-sky-900 text-sky-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              <span>Mon-Sat 10:00 AM - 8:00 PM (Lunch: 12:30 - 2:30 PM) · Sun 3:00 - 8:00 PM</span>
            </span>
            <span className="hidden md:inline text-sky-400">·</span>
            <span className="hidden md:flex items-center gap-1 text-sky-200">
              <MapPin className="w-3.5 h-3.5 text-sky-300" />
              <span>Taramani, Chennai</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+917200647975"
              className="hover:text-white transition-colors flex items-center gap-1 text-sky-200"
            >
              <Phone className="w-3 h-3 text-sky-300" />
              <span>+91 72006 47975</span>
            </a>
            <span className="text-sky-400">/</span>
            <a
              href="tel:+919962676974"
              className="hover:text-white transition-colors text-sky-200"
            >
              +91 99626 76974
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation conforming strictly to 3-Zone contract */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-sky-100 shadow-[0_2px_15px_-3px_rgba(2,132,199,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand element */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/assets/aistudio/clinic-logo_400e6577.jpeg"
              alt="Dr John's Integrated Clinic Logo"
              className="w-12 h-12 rounded-full object-contain border border-sky-200 shadow-sm transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors whitespace-nowrap">
                Dr John&apos;s Integrated Clinic
              </span>
              <span className="text-xs font-medium text-sky-700 tracking-wide whitespace-nowrap">
                TCM · AYUSH
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#philosophy" className="hover:text-sky-700 transition-colors whitespace-nowrap">
              {t.nav.about}
            </a>
            <a href="#doctors" className="hover:text-sky-700 transition-colors whitespace-nowrap">
              {t.nav.doctors}
            </a>
            <a href="#treatments" className="hover:text-sky-700 transition-colors whitespace-nowrap">
              {t.nav.treatments}
            </a>
            <a href="#patient-resource-center" className="hover:text-sky-700 transition-colors whitespace-nowrap font-semibold text-sky-800">
              {t.nav.resourceCenter}
            </a>
            <a href="#location-hours" className="hover:text-sky-700 transition-colors whitespace-nowrap">
              {t.nav.timings}
            </a>
          </nav>

          {/* Zone 3: 1 primary action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-sky-50/80 hover:bg-sky-100 border border-sky-200/80 rounded-lg transition-colors whitespace-nowrap"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span className="font-semibold uppercase">{currentLang}</span>
                <span className="text-slate-500 text-[11px] hidden sm:inline">
                  {languages.find((l) => l.code === currentLang)?.nativeName}
                </span>
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-sky-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-1"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Select Language / 언어 선택
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                        currentLang === lang.code
                          ? 'bg-sky-50 text-sky-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-[11px] text-slate-400">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-sky-100 bg-white/95 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {t.nav.doctors}
              </a>
              <a
                href="#treatments"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {t.nav.treatments}
              </a>
              <a
                href="#patient-resource-center"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg bg-sky-50/80 text-sky-800 font-semibold"
              >
                {t.nav.resourceCenter}
              </a>
              <a
                href="#location-hours"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {t.nav.timings}
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+917200647975"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-sky-700" />
                <span>Call +91 72006 47975</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-sky-700 rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
