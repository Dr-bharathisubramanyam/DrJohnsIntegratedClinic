import React, { useState, useMemo } from 'react';
import { Search, FileText, ExternalLink, BookOpen, AlertTriangle, ChevronRight, X, ShieldAlert } from 'lucide-react';
import { Language, translations } from '../data/translations';
import { resourceArticles, ResourceArticle, tcmPdfUrl, siddhaPdfUrl } from '../data/resourceData';

interface PatientResourceCenterProps {
  currentLang: Language;
}

export const PatientResourceCenter: React.FC<PatientResourceCenterProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'all' | 'tcm' | 'siddha' | 'safety'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  // Filter articles based on active tab and search query
  const filteredArticles = useMemo(() => {
    return resourceArticles.filter((article) => {
      // Tab filter
      if (activeTab === 'tcm' && article.category !== 'tcm') return false;
      if (activeTab === 'siddha' && article.category !== 'siddha') return false;
      if (activeTab === 'safety' && article.category !== 'safety') return false;

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const titleMatches = Object.values(article.title).some((str) => str.toLowerCase().includes(q));
      const summaryMatches = Object.values(article.summary).some((str) => str.toLowerCase().includes(q));
      const termsMatches = article.keyTerms?.some((kt) => kt.term.toLowerCase().includes(q));

      return titleMatches || summaryMatches || termsMatches;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="patient-resource-center" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
              Official Medical Knowledge Base
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              {t.resourceCenter.title}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              {t.resourceCenter.subtitle}
            </p>
          </div>

          {/* Quick PDF Document Access Links */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={tcmPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-sky-900 bg-white hover:bg-sky-50 border border-sky-200 rounded-xl shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              <span>TCM Trilingual Doc (PDF)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={siddhaPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-teal-900 bg-white hover:bg-teal-50 border border-teal-200 rounded-xl shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-teal-600" />
              <span>Siddha Trilingual Doc (PDF)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Functional segmented control tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.resourceCenter.allTab}
            </button>
            <button
              onClick={() => setActiveTab('tcm')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'tcm'
                  ? 'bg-white text-sky-800 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.resourceCenter.tcmTab}
            </button>
            <button
              onClick={() => setActiveTab('siddha')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'siddha'
                  ? 'bg-white text-teal-800 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.resourceCenter.siddhaTab}
            </button>
            <button
              onClick={() => setActiveTab('safety')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'safety'
                  ? 'bg-white text-rose-800 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.resourceCenter.safetyTab}
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.resourceCenter.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Articles List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const isTCM = article.category === 'tcm';
            const isSafety = article.category === 'safety';

            return (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`cursor-pointer rounded-2xl p-6 bg-white/90 backdrop-blur-sm border transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5 ${
                  isSafety
                    ? 'border-amber-200/90 hover:border-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.06)]'
                    : isTCM
                    ? 'border-sky-100 hover:border-sky-300 shadow-[0_4px_20px_rgba(2,132,199,0.04)]'
                    : 'border-teal-100 hover:border-teal-300 shadow-[0_4px_20px_rgba(13,148,136,0.04)]'
                }`}
              >
                <div className="space-y-3">
                  {/* Clean unboxed metadata with bullet separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className={isSafety ? 'text-amber-700 font-semibold' : isTCM ? 'text-sky-700 font-semibold' : 'text-teal-700 font-semibold'}>
                      {article.badge[currentLang]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px] text-slate-400">
                      Section 0{article.originalSectionNum}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[11px]">Trilingual Verified</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {article.title[currentLang]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary[currentLang]}
                  </p>

                  {/* Key Term Tags (Clean typography) */}
                  {article.keyTerms && article.keyTerms.length > 0 && (
                    <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-medium text-slate-400">Terms:</span>
                      {article.keyTerms.map((kt, kIdx) => (
                        <span key={kIdx} className="font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                          {kt.term}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read Prompt */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700 group-hover:text-sky-900">
                  <span>{t.resourceCenter.readMore}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredArticles.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-sm font-semibold text-slate-800">No matching medical resources found</h4>
            <p className="text-xs text-slate-500 mt-1">Try another search term like &ldquo;Qi&rdquo;, &ldquo;Varmam&rdquo;, &ldquo;Gua Sha&rdquo;, or reset filters.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-sky-700 bg-sky-50 rounded-lg"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Clinical Disclaimer & Safety Banner (Mandatory from documents) */}
        <div className="mt-12 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              {t.resourceCenter.disclaimerTitle}
            </div>
            <p className="text-xs text-amber-900/90 leading-relaxed font-normal">
              {t.resourceCenter.disclaimerText}
            </p>
          </div>
        </div>

      </div>

      {/* Detailed Article Modal (Trilingual Reading Mode) */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-sky-100 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-semibold text-sky-700 uppercase">
                    {selectedArticle.badge[currentLang]}
                  </span>
                  <span>·</span>
                  <span>Section {selectedArticle.originalSectionNum}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedArticle.title[currentLang]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg text-lg"
              >
                ✕
              </button>
            </div>

            {/* Language Selector inside Modal for Quick Trilingual Reading */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Article Language:</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <span className="text-sky-800 uppercase">{currentLang}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">
                  Use main site header to switch between EN, 한국어, 中文, 日本語
                </span>
              </div>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedArticle.content[currentLang].map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Key Term Explanations if available */}
            {selectedArticle.keyTerms && selectedArticle.keyTerms.length > 0 && (
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 space-y-2">
                <div className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                  Key Classical Concepts:
                </div>
                <div className="space-y-2">
                  {selectedArticle.keyTerms.map((term, tIdx) => (
                    <div key={tIdx} className="text-xs">
                      <span className="font-bold text-slate-900 mr-2">{term.term}:</span>
                      <span className="text-slate-600">{term.meaning[currentLang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trilingual Source Verification Tag */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-600" />
                <span>
                  Source: {selectedArticle.pdfSource === 'tcm' ? 'Docs_tcm-resource-trilingual.pdf' : 'Docs_siddha-resource-trilingual.pdf'}
                </span>
              </div>

              <a
                href={selectedArticle.pdfSource === 'tcm' ? tcmPdfUrl : siddhaPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900"
              >
                <span>View Full Source PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
