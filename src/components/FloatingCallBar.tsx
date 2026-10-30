import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface FloatingCallBarProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const FloatingCallBar: React.FC<FloatingCallBarProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)]">
      <div className="flex items-center gap-2 p-1.5 bg-white/95 backdrop-blur-md border border-sky-200/90 rounded-2xl shadow-[0_8px_30px_rgb(2,132,199,0.12)]">
        
        {/* Quick Phone Call Button */}
        <a
          href="tel:+917200647975"
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-900 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors whitespace-nowrap"
          title="Call Clinic: +91 72006 47975"
        >
          <Phone className="w-3.5 h-3.5 text-sky-700" />
          <span className="hidden sm:inline">Call Clinic</span>
        </a>

        {/* Quick WhatsApp Button */}
        <a
          href="https://wa.me/917200647975?text=Hello%20Dr%20John%27s%20Integrated%20Clinic,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors whitespace-nowrap"
          title="WhatsApp Chat"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-sm transition-all whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.nav.bookAppointment}</span>
        </button>

      </div>
    </aside>
  );
};
