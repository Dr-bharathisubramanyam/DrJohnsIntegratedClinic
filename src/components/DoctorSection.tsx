import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle2, Award, BookOpen, GraduationCap, Building2, ExternalLink } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { doctorsData, Doctor } from '../data/doctorData';

interface DoctorSectionProps {
  currentLang: Language;
  onOpenBooking: (doctorName?: string) => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/40 via-white to-sky-50/30 border-t border-sky-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            Clinical Leadership & Faculty
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.doctors.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {t.doctors.sectionSubtitle}
          </p>
        </div>

        {/* Doctor Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {doctorsData.map((doc) => {
            const isDirector = doc.id === 'dr-min';
            return (
              <div
                key={doc.id}
                className="group rounded-3xl bg-white/85 backdrop-blur-md border border-sky-100/90 shadow-[0_10px_35px_rgba(2,132,199,0.05)] overflow-hidden flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(2,132,199,0.09)] transition-all duration-300"
              >
                {/* Top Profile Strip */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Photo & Identity Lockup */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Non-distorted doctor portrait */}
                    <div className="w-32 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-md shrink-0">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100 hover:grayscale-0 transition-all duration-500 ease-out"
                      />
                    </div>

                    <div className="text-center sm:text-left space-y-2 flex-1">
                      <div className="inline-block text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2.5 py-0.5 rounded-full border border-sky-200">
                        {doc.roleLabel[currentLang]}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {doc.nameLocal ? doc.nameLocal[currentLang] : doc.name}
                      </h3>
                      <div className="text-xs font-semibold text-sky-700">
                        {doc.title[currentLang]}
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        {doc.credentials}
                      </div>
                      {doc.regNumber && (
                        <div className="text-[11px] text-teal-700 font-medium">
                          Registered: {doc.regNumber}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Biography Paragraph */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {doc.aboutText[currentLang]}
                  </p>

                  {/* Clinical Specialties */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-sky-600" />
                      <span>{t.doctors.specialties}</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {doc.specialties[currentLang].slice(0, 4).map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight Education & Mentor / Affiliation */}
                  <div className="p-3.5 rounded-xl bg-sky-50/50 border border-sky-100 text-xs space-y-1 text-slate-600">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-sky-700" />
                      <span>
                        {isDirector ? 'Doctoral Degree (PhD) & Hospital Residency' : 'BSMS & Advanced Clinical Postings'}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {isDirector
                        ? 'Tianjin University of TCM · Mentored by Academician Prof. Shi Xuemin (Father of Stroke Acupuncture)'
                        : 'Sri Sairam Siddha Medical College · Shathvigam Siddha Hospital & Research Center'}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 bg-slate-50/70 border-t border-sky-100/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(doc.name)}
                      className="px-4 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.doctors.bookConsultation}</span>
                    </button>

                    <a
                      href={`tel:${doc.phone.replace(/\s+/g, '')}`}
                      className="p-2.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center gap-1"
                      title="Direct Call"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-600" />
                      <span className="hidden sm:inline text-xs">{doc.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-Depth Doctor Credentials, Theses, and CV */}
        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedDoctor(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-sky-100 p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-16 h-20 rounded-xl object-cover object-top border border-slate-200 shadow-sm"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {selectedDoctor.nameLocal ? selectedDoctor.nameLocal[currentLang] : selectedDoctor.name}
                    </h3>
                    <div className="text-xs font-semibold text-sky-700">
                      {selectedDoctor.title[currentLang]}
                    </div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">
                      {selectedDoctor.credentials}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  ✕
                </button>
              </div>

              {/* Education History */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  <span>{t.doctors.qualifications}</span>
                </div>
                <div className="space-y-2 border-l-2 border-sky-200 pl-4 ml-2">
                  {selectedDoctor.education.map((edu, idx) => (
                    <div key={idx} className="text-xs space-y-0.5">
                      <div className="font-semibold text-slate-900">{edu.degree[currentLang]}</div>
                      <div className="text-slate-600">{edu.institution[currentLang]}</div>
                      <div className="text-slate-400 font-mono text-[11px]">{edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Experience & Hospitals */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-600" />
                  <span>Clinical Postings & Hospital Practice</span>
                </div>
                <div className="space-y-2.5 border-l-2 border-teal-200 pl-4 ml-2">
                  {selectedDoctor.experience.map((exp, idx) => (
                    <div key={idx} className="text-xs space-y-0.5">
                      <div className="font-semibold text-slate-900">{exp.role[currentLang]}</div>
                      <div className="text-slate-600">{exp.hospital[currentLang]}</div>
                      {exp.details && (
                        <div className="text-slate-500 text-[11px]">{exp.details[currentLang]}</div>
                      )}
                      <div className="text-slate-400 font-mono text-[11px]">{exp.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Theses & Publications */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span>{t.doctors.researchAndTheses}</span>
                </div>
                <div className="space-y-2.5">
                  {selectedDoctor.researchPublications.map((pub, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <div className="font-semibold text-slate-900">
                        {pub.title[currentLang]}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                        {pub.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships & Honors */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Honors, Memberships & Public Service
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {selectedDoctor.membershipsOrHonors[currentLang].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons inside modal */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={selectedDoctor.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Official Document PDF ({selectedDoctor.name})</span>
                </a>

                <button
                  onClick={() => {
                    const name = selectedDoctor.name;
                    setSelectedDoctor(null);
                    onOpenBooking(name);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-sm transition-colors"
                >
                  Book Appointment with {selectedDoctor.name}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
