import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Globe } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { tcmPdfUrl, siddhaPdfUrl } from '../data/resourceData';

interface FooterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onSelectLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/clinic-logo_400e6577.jpeg"
                alt="Dr John's Integrated Clinic Logo"
                className="w-12 h-12 rounded-full object-contain border border-slate-700 bg-white"
              />
              <div>
                <div className="text-base font-bold text-white">
                  Dr John&apos;s Integrated Clinic
                </div>
                <div className="text-xs text-sky-400 font-medium">
                  TCM · AYUSH SIDDHA MEDICINE
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-normal">
              A premier traditional healthcare institution in Taramani, Chennai uniting ancient East Asian TCM therapies (Acupuncture, Tuina, Moxibustion) with classical Indian Siddha & AYUSH medicine (Varmam, Thokkanam, Kayakarpam).
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
              >
                {t.nav.bookAppointment}
              </button>
              <a
                href="tel:+917200647975"
                className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Call Clinic
              </a>
            </div>
          </div>

          {/* Clinical Leadership (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Clinical Leadership
            </div>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-slate-200">Dr KYUNG JIN MIN TCM</div>
                <div className="text-slate-400 text-[11px]">Director · Doctor of Medicine (TCM)</div>
                <div className="text-slate-500 text-[11px]">PhD (Tianjin TCM Univ) · Stroke & Gastro Specialty</div>
              </div>

              <div>
                <div className="font-semibold text-slate-200">Dr Nava Subramanya Bharathi BSMS</div>
                <div className="text-slate-400 text-[11px]">Consultant · Siddha Medical Officer</div>
                <div className="text-slate-500 text-[11px]">Varmam & Thokkanam Specialist</div>
              </div>
            </div>
          </div>

          {/* Educational Documents (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Resource Center
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#patient-resource-center" className="hover:text-white transition-colors">
                  TCM Knowledge Base
                </a>
              </li>
              <li>
                <a href="#patient-resource-center" className="hover:text-white transition-colors">
                  Siddha & AYUSH Base
                </a>
              </li>
              <li>
                <a
                  href={tcmPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <span>TCM Doc (PDF)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href={siddhaPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <span>Siddha Doc (PDF)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Timings
            </div>
            
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <div>No.5A, 1st Floor, Thandhai Periyar Nagar</div>
                  <div>Taramani, Chennai, TN 600113</div>
                  <div className="text-slate-500 text-[11px]">Landmark: Above Odd Man Out Elite store</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="space-x-1.5">
                  <a href="tel:+917200647975" className="hover:text-white font-medium">
                    +91 72006 47975
                  </a>
                  <span>/</span>
                  <a href="tel:+919962676974" className="hover:text-white">
                    +91 99626 76974
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:tcmdoctor96@gmail.com" className="hover:text-white truncate">
                  tcmdoctor96@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-0.5">
              <div>Mon-Sat: 10:00 AM – 08:00 PM (Lunch: 12:30 – 02:30 PM)</div>
              <div>Sunday: 03:00 PM – 08:00 PM</div>
            </div>
          </div>

        </div>

        {/* Multilingual Switcher Footer Bar & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>Select Website Language:</span>
            <div className="flex items-center gap-2 font-medium">
              <button
                onClick={() => onSelectLang('en')}
                className={`hover:text-white ${currentLang === 'en' ? 'text-sky-400 font-bold underline' : ''}`}
              >
                English
              </button>
              <span>·</span>
              <button
                onClick={() => onSelectLang('ko')}
                className={`hover:text-white ${currentLang === 'ko' ? 'text-sky-400 font-bold underline' : ''}`}
              >
                한국어
              </button>
              <span>·</span>
              <button
                onClick={() => onSelectLang('zh')}
                className={`hover:text-white ${currentLang === 'zh' ? 'text-sky-400 font-bold underline' : ''}`}
              >
                中文
              </button>
              <span>·</span>
              <button
                onClick={() => onSelectLang('ja')}
                className={`hover:text-white ${currentLang === 'ja' ? 'text-sky-400 font-bold underline' : ''}`}
              >
                日本語
              </button>
            </div>
          </div>

          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Dr John&apos;s Integrated Clinic · TCM * AYUSH. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
