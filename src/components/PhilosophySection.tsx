import React from 'react';
import { Layers, ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface PhilosophySectionProps {
  currentLang: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            Integrated Medicine Framework
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {t.philosophy.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* 3 Pillar Cards in Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: TCM (5 cols) */}
          <div className="md:col-span-6 lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 border border-sky-100 shadow-[0_4px_20px_rgba(2,132,199,0.03)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100/90 text-sky-700 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.philosophy.tcmTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.philosophy.tcmDesc}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-sky-100 text-xs text-slate-500 space-y-1">
              <div className="font-semibold text-sky-900">Core Foundations:</div>
              <div>Qi (氣) Flow · Yin-Yang Dynamic · Meridian Jing-Luo</div>
            </div>
          </div>

          {/* Card 2: AYUSH Siddha (5 cols) */}
          <div className="md:col-span-6 lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-teal-50/30 border border-teal-100 shadow-[0_4px_20px_rgba(13,148,136,0.03)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100/90 text-teal-700 flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.philosophy.ayushTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.philosophy.ayushDesc}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-teal-100 text-xs text-slate-500 space-y-1">
              <div className="font-semibold text-teal-900">Core Foundations:</div>
              <div>96 Thathuvam · 3 Humours (Vali, Azhal, Iyyam) · Varmam</div>
            </div>
          </div>

          {/* Card 3: The Integrative Synergy (Full 4 cols or spanning) */}
          <div className="md:col-span-12 lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center backdrop-blur-md">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.philosophy.synergyTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.philosophy.synergyDesc}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-xs text-sky-200">
              <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Evidence-informed clinical oversight</span>
            </div>
          </div>

        </div>

        {/* Comparison Table / Matrix (Hairline dividers, zero pill badges) */}
        <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/30 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-xs font-semibold text-sky-800 uppercase tracking-wider mb-4">
              Clinical Synergy Matrix: Traditional Chinese Medicine & AYUSH Siddha
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-sky-200/80 text-slate-500 font-semibold">
                    <th className="py-3 pr-4">Dimension</th>
                    <th className="py-3 px-4 text-sky-900">Traditional Chinese Medicine (TCM)</th>
                    <th className="py-3 px-4 text-teal-900">AYUSH Siddha Medicine</th>
                    <th className="py-3 pl-4 text-indigo-950">Clinical Integration at Our Clinic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100 text-slate-700">
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">Primary Bio-Force</td>
                    <td className="py-3.5 px-4">Qi (氣) & Yin-Yang (陰陽) equilibrium</td>
                    <td className="py-3.5 px-4">Pancha Bootham & Mukkutram (Vali/Azhal/Iyyam)</td>
                    <td className="py-3.5 pl-4 font-medium text-slate-900">Cross-analyzed pulse & tongue evaluation</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">Diagnostic Method</td>
                    <td className="py-3.5 px-4">Four Examinations (Si Zhen) & Meridian palpation</td>
                    <td className="py-3.5 px-4">Envagai Thervu (8-Fold) & Naadi pulse / Neikuri</td>
                    <td className="py-3.5 pl-4 font-medium text-slate-900">Comprehensive dual pulse verification</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">Vital Point Therapy</td>
                    <td className="py-3.5 px-4">Acupoints (Xue wei) & Xingnao Kaiqiao needle protocol</td>
                    <td className="py-3.5 px-4">108 Varmam energy junctions & nerve nodes</td>
                    <td className="py-3.5 pl-4 font-medium text-slate-900">Needle neuromodulation + Varmam therapeutic pressure</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">Manual Bodywork</td>
                    <td className="py-3.5 px-4">Tuina medical massage, Gua Sha & cupping</td>
                    <td className="py-3.5 px-4">Thokkanam 9-stroke manipulation & Ottradam</td>
                    <td className="py-3.5 pl-4 font-medium text-slate-900">Joint mobilization, fascial release, and pain freedom</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">Botanical Therapeutics</td>
                    <td className="py-3.5 px-4">Classical TCM formulas & targeted decoctions</td>
                    <td className="py-3.5 px-4">Kudineer decoctions, Chooranam powders & medicated oils</td>
                    <td className="py-3.5 pl-4 font-medium text-slate-900">Synergistic internal tonics tailored to patient tolerance</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
