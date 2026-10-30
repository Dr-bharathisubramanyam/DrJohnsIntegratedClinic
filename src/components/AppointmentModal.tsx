import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Phone, MessageSquare, Check, User, Mail, FileText, Download } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialDoctor?: string;
  initialTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialDoctor,
  initialTreatment,
}) => {
  const t = translations[currentLang];

  const [doctor, setDoctor] = useState(initialDoctor || 'any');
  const [treatment, setTreatment] = useState(initialTreatment || 'acupuncture');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [prefLang, setPrefLang] = useState(currentLang);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Compute available time slots based on selected date
  const isSunday = new Date(date).getDay() === 0;

  const availableSlots = isSunday
    ? [
        '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
        '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
        '07:00 PM', '07:30 PM'
      ]
    : [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
        // Lunch 12:30 - 2:30 PM skipped!
        '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
        '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM',
        '06:30 PM', '07:00 PM', '07:30 PM'
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const ref = `DJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  // WhatsApp text formatting
  const doctorLabel =
    doctor === 'dr-min'
      ? 'Dr KYUNG JIN MIN TCM (Director)'
      : doctor === 'dr-nava'
      ? 'Dr Nava Subramanya Bharathi BSMS (Consultant)'
      : 'Integrated Joint Consultation';

  const waMessage = `*Appointment Request - Dr John's Integrated Clinic*%0A` +
    `Ref No: ${bookingRef}%0A` +
    `Patient Name: ${encodeURIComponent(fullName)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Doctor: ${encodeURIComponent(doctorLabel)}%0A` +
    `Treatment: ${encodeURIComponent(treatment)}%0A` +
    `Preferred Date: ${date}%0A` +
    `Preferred Time: ${timeSlot}%0A` +
    `Language: ${prefLang.toUpperCase()}%0A` +
    (notes ? `Notes: ${encodeURIComponent(notes)}%0A` : '') +
    `Location: No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani, Chennai (Above Odd Man Out Elite store)`;

  const waUrl = `https://wa.me/917200647975?text=${waMessage}`;

  // Generate .ics calendar file
  const downloadIcs = () => {
    const title = `Appointment at Dr John's Integrated Clinic (${doctorLabel})`;
    const description = `Consultation for ${fullName}. Treatment: ${treatment}. Contact: +91 72006 47975. Location: No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani (Above Odd Man Out Elite store).`;
    const location = `Dr John's Integrated Clinic, No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani, Chennai 600113 (Above Odd Man Out Elite store)`;
    
    // Simple ICS format
    const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dr Johns Integrated Clinic//Appointments//EN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${date.replace(/-/g, '')}T100000Z
DTEND:${date.replace(/-/g, '')}T110000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `DrJohnsClinic-${bookingRef || 'appointment'}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto cursor-pointer"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-sky-800 to-sky-900 text-white flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/clinic-logo_400e6577.jpeg"
              alt="Clinic Logo"
              className="w-10 h-10 rounded-full object-contain border border-white/30"
            />
            <div>
              <h3 className="text-lg font-bold">
                {t.booking.title}
              </h3>
              <p className="text-xs text-sky-200">
                Dr John&apos;s Integrated Clinic · Taramani, Chennai
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            title="Exit / Close (Esc)"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/25 flex items-center justify-center text-white transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Doctor Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t.booking.selectDoctor}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDoctor('any')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                      doctor === 'any'
                        ? 'border-sky-600 bg-sky-50/80 text-sky-950 font-semibold ring-1 ring-sky-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-slate-900">Joint Consultation</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">TCM + Siddha (Both)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDoctor('dr-min')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                      doctor === 'dr-min'
                        ? 'border-sky-600 bg-sky-50/80 text-sky-950 font-semibold ring-1 ring-sky-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-slate-900">Dr KYUNG JIN MIN</div>
                    <div className="text-[11px] text-sky-700 mt-0.5">Director · TCM & Acupuncture</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDoctor('dr-nava')}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                      doctor === 'dr-nava'
                        ? 'border-teal-600 bg-teal-50/80 text-teal-950 font-semibold ring-1 ring-teal-500'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-slate-900">Dr Nava Subramanya Bharathi</div>
                    <div className="text-[11px] text-teal-700 mt-0.5">Consultant · Siddha</div>
                  </button>
                </div>
              </div>

              {/* Treatment Interest */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t.booking.selectTreatment}
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                >
                  <option value="Acupuncture & Electro-Acupuncture">Acupuncture & Electro-Acupuncture (Stroke & Neurological)</option>
                  <option value="Varmam Vital Point Therapy">Varmam Vital Point Therapy (Spondylosis, Sciatica, Nerve)</option>
                  <option value="Tuina & Thokkanam Manual Therapy">Tuina & Thokkanam Medical Bodywork</option>
                  <option value="Herbal Formulations & Kudineer">Classical Herbal Decoctions & Internal Medicine</option>
                  <option value="Gua Sha & Fire Therapy">Gua Sha, Moxibustion & External Therapy</option>
                  <option value="Kayakarpam Rejuvenation">Kayakarpam & Preventive Health Maintenance</option>
                  <option value="Comprehensive General Consultation">Initial Diagnostic Assessment & Pulse Evaluation</option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-sky-600" />
                    <span>{t.booking.preferredDate}</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                    required
                  />
                  <div className="text-[11px] text-slate-400">
                    {isSunday ? 'Sunday hours: 3:00 PM – 8:00 PM' : 'Mon-Sat hours: 10:00 AM – 8:00 PM (Lunch 12:30 - 2:30 PM)'}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{t.booking.preferredTime}</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  >
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-sky-600" />
                    <span>{t.booking.fullName} *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Sarah Johnson / 김민수 / 李明"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>{t.booking.phone} *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 72006 47975"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-sky-600" />
                    <span>{t.booking.email}</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patient@example.com"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Preferred Language
                  </label>
                  <select
                    value={prefLang}
                    onChange={(e) => setPrefLang(e.target.value as Language)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  >
                    <option value="en">English</option>
                    <option value="ko">한국어 (Korean)</option>
                    <option value="zh">中文 (Chinese)</option>
                    <option value="ja">日本語 (Japanese)</option>
                  </select>
                </div>
              </div>

              {/* Health Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>{t.booking.notes}</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none"
                />
              </div>

              {/* Form Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Proceed to Confirm Voucher</span>
                </button>

                <a
                  href="tel:+917200647975"
                  className="w-full sm:w-auto py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-700" />
                  <span>{t.booking.directCall}</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Exit dialog"
                  aria-label="Exit dialog"
                >
                  <X className="w-4 h-4 text-slate-500" />
                  <span>Exit</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                {t.booking.lunchNotice}
              </div>

            </form>
          ) : (
            /* Success & Action Screen */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900">
                  {t.booking.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.booking.successMessage}
                </p>
              </div>

              {/* Voucher Card */}
              <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100 text-left text-xs space-y-2.5 max-w-md mx-auto">
                <div className="flex items-center justify-between border-b border-sky-200/60 pb-2">
                  <span className="font-semibold text-slate-500">Voucher Reference:</span>
                  <span className="font-mono font-bold text-sky-900">{bookingRef}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Patient:</span>
                  <span className="font-semibold text-slate-900">{fullName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Consulting Doctor:</span>
                  <span className="font-semibold text-slate-900">{doctorLabel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Therapy:</span>
                  <span className="font-semibold text-slate-900">{treatment}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Scheduled:</span>
                  <span className="font-semibold text-slate-900">{date} at {timeSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Location:</span>
                  <span className="font-semibold text-slate-900">Taramani, Chennai</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Voucher to Clinic WhatsApp (+91 72006 47975)</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={downloadIcs}
                    className="py-2.5 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-600" />
                    <span>Download .ics</span>
                  </button>

                  <a
                    href="tel:+917200647975"
                    className="py-2.5 px-3 text-xs font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-700" />
                    <span>Call Desk</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
                  >
                    {t.booking.bookAnother}
                  </button>
                  <span className="text-slate-300">·</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 hover:underline cursor-pointer"
                    title="Exit dialog"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Exit Dialog</span>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
