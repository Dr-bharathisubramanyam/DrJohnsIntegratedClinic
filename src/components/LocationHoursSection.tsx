import React, { useMemo, useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  ExternalLink,
  Navigation,
  Copy,
  Check,
  Maximize2,
  Compass,
  Car,
  Train,
  Layers,
} from 'lucide-react';
import { Language, translations } from '../data/translations';

interface LocationHoursSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<'m' | 'k'>('m'); // 'm' = normal map, 'k' = satellite
  const [zoomLevel, setZoomLevel] = useState<number>(15);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Exact Google Maps location link provided by clinic
  const googleMapsAppUrl = 'https://maps.app.goo.gl/7QSFYvToLCJuQALC8?g_st=ac';
  
  // Directions link directly opening navigation in Google Maps
  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=12.9863,80.2432&destination_place_id=ChIJw7Qf0lpeUjoRz2pQyq9tXb8`;

  // Dynamic embed URL with map type and zoom
  const embedMapUrl = useMemo(() => {
    // Taramani, Chennai coordinates: ~12.9863° N, 80.2432° E
    return `https://maps.google.com/maps?q=Taramani,+Chennai,+Tamil+Nadu&t=${mapType}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;
  }, [mapType, zoomLevel]);

  // Real-time clinic status calculation in Indian Standard Time (IST - Asia/Kolkata)
  const clinicStatus = useMemo(() => {
    try {
      const now = new Date();
      const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
      const istDate = new Date(istString);
      const day = istDate.getDay(); // 0 is Sunday, 1-6 Mon-Sat
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      // Mon-Sat: 10:00 AM (600m) to 8:00 PM (1200m). Lunch: 12:30 PM (750m) to 2:30 PM (870m)
      if (day >= 1 && day <= 6) {
        if (timeInMinutes >= 600 && timeInMinutes < 750) {
          return { status: 'open', label: 'Open Now (Morning Session · 10:00 AM - 12:30 PM)' };
        } else if (timeInMinutes >= 750 && timeInMinutes < 870) {
          return { status: 'lunch', label: 'Lunch Break (Resumes at 02:30 PM)' };
        } else if (timeInMinutes >= 870 && timeInMinutes < 1200) {
          return { status: 'open', label: 'Open Now (Evening Session · 02:30 PM - 08:00 PM)' };
        } else {
          return { status: 'closed', label: 'Closed Now (Opens at 10:00 AM)' };
        }
      } else {
        // Sunday: 3:00 PM (900m) to 8:00 PM (1200m)
        if (timeInMinutes >= 900 && timeInMinutes < 1200) {
          return { status: 'open', label: 'Open Now (Sunday Session · 03:00 PM - 08:00 PM)' };
        } else {
          return { status: 'closed', label: 'Closed Now (Sunday Hours: 03:00 PM - 08:00 PM)' };
        }
      }
    } catch {
      return { status: 'open', label: 'Appointments Active' };
    }
  }, []);

  const handleCopyAddress = () => {
    const fullAddress = "Dr John's Integrated Clinic · TCM * AYUSH, No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani, Chennai, Tamil Nadu 600113. Landmark: Above Odd Man Out Elite store. Phone: +91 72006 47975";
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location-hours" className="py-16 sm:py-24 bg-white relative border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            Reach Us & Operating Hours
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.locationHours.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {t.locationHours.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours, Live Status & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live IST Status Ribbon */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-3 h-3 rounded-full ${
                    clinicStatus.status === 'open'
                      ? 'bg-emerald-500 ring-4 ring-emerald-100'
                      : clinicStatus.status === 'lunch'
                      ? 'bg-amber-500 ring-4 ring-amber-100'
                      : 'bg-slate-400 ring-4 ring-slate-100'
                  }`}
                />
                <span className="text-xs font-bold text-slate-900">
                  {clinicStatus.label}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                Chennai (IST)
              </span>
            </div>

            {/* Timings Schedule Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white via-sky-50/30 to-white border border-sky-100 shadow-[0_4px_20px_rgba(2,132,199,0.03)] space-y-4">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>{t.locationHours.hoursTitle}</span>
              </div>

              <div className="space-y-3 divide-y divide-sky-100 text-xs sm:text-sm">
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-slate-800">Monday to Saturday</span>
                  <div className="text-slate-600 sm:text-right font-medium">
                    <div>10:00 AM – 08:00 PM</div>
                    <div className="text-xs text-amber-700 font-normal">
                      Lunch Break: 12:30 PM – 02:30 PM
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-slate-800">Sunday Special Clinic</span>
                  <div className="text-slate-600 sm:text-right font-medium">
                    03:00 PM – 08:00 PM
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                {t.locationHours.callForAppt}
              </div>
            </div>

            {/* Address & Copy details */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>{t.locationHours.addressTitle}</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">{t.locationHours.addressCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.locationHours.copyAddress}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm font-bold text-slate-900">
                Dr John&apos;s Integrated Clinic · TCM * AYUSH
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani, Chennai, Tamil Nadu 600113.
                <br />
                <span className="text-slate-700 font-medium">Landmark: Above Odd Man Out Elite store.</span>
              </p>

              {/* Transit & Commute tips */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-600 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <Train className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Taramani MRTS Rail</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Patient Parking Available</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Numbers & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 space-y-2">
                <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
                  Direct Phone Lines
                </div>
                <div className="space-y-1 text-xs">
                  <a
                    href="tel:+917200647975"
                    className="flex items-center gap-1.5 font-bold text-sky-900 hover:text-sky-950"
                  >
                    <Phone className="w-3 h-3 text-sky-700" />
                    <span>+91 72006 47975</span>
                  </a>
                  <a
                    href="tel:+919962676974"
                    className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-slate-900"
                  >
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span>+91 99626 76974</span>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Online Inquiries
                </div>
                <div className="space-y-1 text-xs">
                  <a
                    href="https://wa.me/917200647975?text=Hello%20Dr%20John%27s%20Integrated%20Clinic,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp Consultation</span>
                  </a>
                  <a
                    href="mailto:tcmdoctor96@gmail.com"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 truncate"
                  >
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span className="truncate">tcmdoctor96@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview with 'Get Directions' (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-sky-100 shadow-[0_12px_40px_rgba(2,132,199,0.08)] overflow-hidden flex flex-col justify-between">
            
            {/* Top Bar for Map Controls */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-sky-50/90 via-white to-sky-50/80 border-b border-sky-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-sky-200 flex items-center justify-center p-1 shrink-0">
                  <img
                    src="/assets/aistudio/clinic-logo_400e6577.jpeg"
                    alt="Clinic Logo"
                    className="w-full h-full rounded-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {t.locationHours.interactiveMapTitle}
                  </h3>
                  <div className="text-xs text-sky-700 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-600 shrink-0" />
                    <span>{t.locationHours.landmarkInfo}</span>
                  </div>
                </div>
              </div>

              {/* Map Type & Zoom Controls */}
              <div className="flex items-center gap-2">
                {/* Map style segmented button */}
                <div className="flex items-center bg-white border border-sky-200 rounded-lg p-0.5 text-[11px] font-medium shadow-sm">
                  <button
                    onClick={() => setMapType('m')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      mapType === 'm'
                        ? 'bg-sky-700 text-white font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Map
                  </button>
                  <button
                    onClick={() => setMapType('k')}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                      mapType === 'k'
                        ? 'bg-sky-700 text-white font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Satellite</span>
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center bg-white border border-sky-200 rounded-lg p-0.5 text-xs shadow-sm">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(z + 1, 18))}
                    className="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded font-bold"
                    title="Zoom In"
                  >
                    +
                  </button>
                  <span className="px-1 text-[10px] text-slate-400 font-mono">{zoomLevel}z</span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(z - 1, 12))}
                    className="px-2 py-1 text-slate-700 hover:bg-slate-100 rounded font-bold"
                    title="Zoom Out"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Map Iframe Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-sky-50">
              {/* Fallback & Loading Overlay */}
              {!isMapLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/90 text-slate-500 z-10 space-y-2">
                  <Compass className="w-8 h-8 text-sky-600 animate-spin" />
                  <span className="text-xs font-medium">Loading interactive Taramani map...</span>
                </div>
              )}

              {/* Styled Interactive Iframe Embed */}
              <iframe
                title="Dr John's Integrated Clinic Location Map"
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
                className="w-full h-full"
              />

              {/* Floating Clinic Card Overlay on Map */}
              <div className="absolute bottom-4 left-4 z-20 max-w-[280px] bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sky-200 shadow-lg text-xs space-y-1 hidden sm:block">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Dr John&apos;s Integrated Clinic</span>
                </div>
                <div className="text-[11px] text-slate-600">
                  TCM * AYUSH · Taramani, Chennai
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Lat: 12.9863° N · Lng: 80.2432° E
                </div>
              </div>
            </div>

            {/* Bottom Action Footer with the 'Get Directions' link */}
            <div className="p-4 sm:p-5 bg-white border-t border-sky-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              
              <div className="flex items-center gap-2">
                {/* Primary 'Get Directions' Button */}
                <a
                  href={googleMapsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-md transition-all duration-200"
                >
                  <Navigation className="w-4 h-4 text-sky-200" />
                  <span>{t.locationHours.getDirections}</span>
                  <ExternalLink className="w-3 h-3 text-sky-300" />
                </a>

                {/* Secondary 'Open in Google Maps' */}
                <a
                  href={getDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors"
                  title="Open GPS Navigation"
                >
                  <Compass className="w-3.5 h-3.5 text-sky-700" />
                  <span className="hidden sm:inline">GPS Route</span>
                </a>
              </div>

              {/* Book Appointment at this location */}
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-sky-800 hover:bg-sky-50 border border-slate-200 rounded-xl transition-colors text-center"
              >
                Book Appointment at Taramani
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
