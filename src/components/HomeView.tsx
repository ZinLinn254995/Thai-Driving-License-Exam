import React, { useState } from 'react';
import { Play, Sparkles, BookOpen, Clock, Award, ShieldCheck, Scale, ArrowRight, Layers, Car, Wrench, AlertTriangle } from 'lucide-react';
import { LanguageMode, ExamMode, ExamTopicFilter } from '../types';
import { toMyanmarNumber, ExamHistoryItem } from '../utils/helpers';
import { AdSenseAd } from './AdSenseAd';

interface HomeViewProps {
  lang: LanguageMode;
  showMyanmar: boolean;
  totalQuestions: number;
  signsCount: number;
  lawsCount: number;
  safeDrivingCount: number;
  maintenanceCount: number;
  accidentPredictionCount: number;
  onStartExam: (mode: ExamMode, topic: ExamTopicFilter) => void;
  onNavigateStudy: (filterCategory?: ExamTopicFilter) => void;
  recentHistory: ExamHistoryItem[];
  bookmarkedCount: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  showMyanmar,
  totalQuestions,
  signsCount,
  lawsCount,
  safeDrivingCount,
  maintenanceCount,
  accidentPredictionCount,
  onStartExam,
  onNavigateStudy,
  recentHistory,
  bookmarkedCount
}) => {
  const [selectedTopic, setSelectedTopic] = useState<ExamTopicFilter>('all');
  const latestAttempt = recentHistory[0];

  return (
    <div className="space-y-6">
      {/* Independent practice introduction banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0b5d3b] text-white p-5 sm:p-7 shadow-lg border-4 border-white outline-4 outline-[#0b5d3b]">
        {/* Highway sign bolts decoration */}
        <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-slate-300 border border-slate-600 shadow-inner" />
        <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-slate-300 border border-slate-600 shadow-inner" />
        <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-slate-300 border border-slate-600 shadow-inner" />
        <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-slate-300 border border-slate-600 shadow-inner" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f2b705] text-[#19241e] text-xs font-black tracking-wide uppercase">
              <ShieldCheck size={13} />
              <span>Thai Driving License Exam 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Thai Driving License Practice
            </h1>
            <p className="text-sm sm:text-base text-[#cfe9da] font-myanmar leading-relaxed">
              {lang === 'en'
                ? `Practice question bank with ${totalQuestions} questions covering Traffic Signs, Laws, Safe Driving, Vehicle Maintenance, and Accident Prediction.`
                : `ထိုင်းယာဉ်မောင်းလိုင်စင် လမ်းညွှန်ဆိုင်းဘုတ်၊ ယာဉ်စည်းကမ်း၊ Safe Driving၊ ယာဉ်ထိန်းသိမ်းရေး နှင့် မတော်တဆမှု ကြိုတင်ခန့်မှန်းခြင်း မေးခွန်းများ (${toMyanmarNumber(totalQuestions)} ခု)`}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="bg-[#074028]/80 backdrop-blur-xs p-3 rounded-xl border border-white/15 text-center min-w-[110px]">
              <div className="text-2xl font-black text-[#f2b705] leading-none">
                {totalQuestions}
              </div>
              <div className="text-[11px] font-semibold text-white/90 mt-1">
                {lang === 'en' ? 'Total Questions' : 'မေးခွန်းစုစုပေါင်း'}
              </div>
              <div className="text-[9px] text-[#cfe9da]">
                5 Categories
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Make the site's English-first, Myanmar-supported purpose clear to visitors and reviewers. */}
      <section
        aria-labelledby="language-support-heading"
        className="rounded-2xl border border-emerald-200 bg-white p-4 sm:p-5 shadow-sm"
      >
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-xl bg-emerald-50 p-2.5 text-[#0b5d3b]" aria-hidden="true">
            <BookOpen size={22} />
          </div>
          <div className="min-w-0">
            <h2 id="language-support-heading" className="text-base sm:text-lg font-extrabold text-slate-900">
              English Practice with Myanmar Translations
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-700 font-myanmar">
              ထိုင်းယာဉ်မောင်းလိုင်စင် စာမေးပွဲအတွက် အင်္ဂလိပ်ဘာသာဖြင့် လေ့ကျင့်ဖြေဆိုနိုင်ပြီး
              မေးခွန်းနှင့် အဖြေရွေးချယ်စရာများကို နားလည်ရန် မြန်မာဘာသာပြန်ကို ဖွင့်ကြည့်နိုင်ပါသည်။
              အင်္ဂလိပ်စာကို အဓိကထားလေ့လာပြီး လိုအပ်သည့်အခါ မြန်မာဘာသာပြန်ဖြင့် အထောက်အကူယူပါ။
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              English is the main study language. Use the Myanmar translation control in the header for additional understanding support. This is an independent practice aid, not an official exam or government service.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900 border border-emerald-100">
              <span aria-hidden="true">✓</span>
              English questions · Optional Myanmar translations
            </div>
          </div>
        </div>
      </section>

      <AdSenseAd slot={import.meta.env.VITE_ADSENSE_HOME_SLOT} />

      {/* Categories Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {/* Category 1: Signs */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Study Traffic Signs (${signsCount} questions)`}
          onClick={() => onNavigateStudy('traffic_signs')}
          onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onNavigateStudy('traffic_signs'); } }}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-emerald-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Category 1
              </div>
              <div className="font-bold text-sm text-slate-900 font-thai">
                {lang === 'en' ? 'Traffic Signs' : 'ป้ายและเครื่องหมายจราจร'}
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                {lang === 'en'
                  ? `Signs & Markings (${signsCount})`
                  : `Traffic Signs (${toMyanmarNumber(signsCount)} ခု)`}
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            {signsCount}
          </span>
        </div>

        {/* Category 2: Laws */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Study Traffic Laws (${lawsCount} questions)`}
          onClick={() => onNavigateStudy('traffic_laws')}
          onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onNavigateStudy('traffic_laws'); } }}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-blue-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <Scale size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Category 2
              </div>
              <div className="font-bold text-sm text-slate-900 font-thai">
                {lang === 'en' ? 'Traffic Laws' : 'กฎหมายว่าด้วยการจราจรทางบก'}
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                {lang === 'en'
                  ? `Traffic Laws (${lawsCount})`
                  : `Traffic Laws (${toMyanmarNumber(lawsCount)} ခု)`}
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
            {lawsCount}
          </span>
        </div>

        {/* Category 3: Safe Driving */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Study Safe Driving (${safeDrivingCount} questions)`}
          onClick={() => onNavigateStudy('safe_driving')}
          onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onNavigateStudy('safe_driving'); } }}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-amber-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Car size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Category 3
              </div>
              <div className="font-bold text-sm text-slate-900 font-thai">
                {lang === 'en' ? 'Safe Driving' : 'การขับขี่อย่างปลอดภัย'}
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                {lang === 'en'
                  ? `Safe Driving (${safeDrivingCount})`
                  : `Safe Driving (${toMyanmarNumber(safeDrivingCount)} ခု)`}
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            {safeDrivingCount}
          </span>
        </div>

        {/* Category 4: Vehicle Maintenance */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Study Vehicle Maintenance (${maintenanceCount} questions)`}
          onClick={() => onNavigateStudy('vehicle_maintenance')}
          onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onNavigateStudy('vehicle_maintenance'); } }}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-purple-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
              <Wrench size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Category 4
              </div>
              <div className="font-bold text-sm text-slate-900 font-thai">
                {lang === 'en' ? 'Maintenance' : 'การบำรุงรักษารถ'}
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                {lang === 'en'
                  ? `Maintenance (${maintenanceCount})`
                  : `Vehicle Maintenance (${toMyanmarNumber(maintenanceCount)} ခု)`}
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
            {maintenanceCount}
          </span>
        </div>

        {/* Category 5: Accident Prediction */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Study Accident Prediction (${accidentPredictionCount} questions)`}
          onClick={() => onNavigateStudy('accident_prediction')}
          onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onNavigateStudy('accident_prediction'); } }}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-rose-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
              <AlertTriangle size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Category 5
              </div>
              <div className="font-bold text-sm text-slate-900 font-thai">
                {lang === 'en' ? 'Accident Prediction' : 'การคาดการณ์อุบัติเหตุ'}
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                {lang === 'en'
                  ? `Hazard Prediction (${accidentPredictionCount})`
                  : `Accident Prediction (${toMyanmarNumber(accidentPredictionCount)} ခု)`}
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
            {accidentPredictionCount}
          </span>
        </div>
      </div>

      {/* Select Topic for 50-Question Exam */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#0b5d3b]" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base font-myanmar">
              {lang === 'en'
                ? 'Select Exam Scope (Category Filter)'
                : 'ဖြေဆိုလိုသော ကဏ္ဍ ရွေးချယ်ပါ (Select Exam Scope)'}
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {lang === 'en' ? '50 questions randomly drawn' : 'ကျပန်း ၅၀ ခု ရွေးထုတ်မည်'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-semibold">
          <button
            type="button"
            aria-pressed={selectedTopic === 'all'}
            onClick={() => setSelectedTopic('all')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'all'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">{lang === 'en' ? 'All Topics' : 'အားလုံး (All)'}</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {lang === 'en'
                ? `Random 50 of ${totalQuestions}`
                : `${toMyanmarNumber(totalQuestions)} ခုလုံးထဲမှ ကျပန်း ၅၀`}
            </div>
          </button>

          <button
            type="button"
            aria-pressed={selectedTopic === 'traffic_signs'}
            onClick={() => setSelectedTopic('traffic_signs')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'traffic_signs'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Traffic Signs</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {lang === 'en' ? `${signsCount} questions` : `ဆိုင်းဘုတ် ${toMyanmarNumber(signsCount)} ခု`}
            </div>
          </button>

          <button
            type="button"
            aria-pressed={selectedTopic === 'traffic_laws'}
            onClick={() => setSelectedTopic('traffic_laws')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'traffic_laws'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Traffic Laws</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {lang === 'en' ? `${lawsCount} questions` : `ဥပဒေ ${toMyanmarNumber(lawsCount)} ခု`}
            </div>
          </button>

          <button
            type="button"
            aria-pressed={selectedTopic === 'safe_driving'}
            onClick={() => setSelectedTopic('safe_driving')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'safe_driving'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Safe Driving</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {lang === 'en' ? `${safeDrivingCount} questions` : `${toMyanmarNumber(safeDrivingCount)} ခု`}
            </div>
          </button>

          <button
            type="button"
            aria-pressed={selectedTopic === 'vehicle_maintenance'}
            onClick={() => setSelectedTopic('vehicle_maintenance')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'vehicle_maintenance'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Maintenance</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {lang === 'en' ? `${maintenanceCount} questions` : `ယာဉ်ထိန်းသိမ်းမှု (${toMyanmarNumber(maintenanceCount)} ခု)`}
            </div>
          </button>

          <button
            type="button"
            aria-pressed={selectedTopic === 'accident_prediction'}
            onClick={() => setSelectedTopic('accident_prediction')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'accident_prediction'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Accident Prediction</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {lang === 'en' ? `${accidentPredictionCount} questions` : `မတော်တဆမှုခန့်မှန်း (${toMyanmarNumber(accidentPredictionCount)} ခု)`}
            </div>
          </button>
        </div>
      </div>

      {/* Explain the site's practice target without implying an official pass mark. */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#f2b705]/20 text-amber-800 shrink-0">
          <Award size={20} />
        </div>
        <div className="text-xs sm:text-sm text-amber-950 font-myanmar space-y-1">
          <p className="font-semibold text-amber-900">
            Practice target: 90% in this tool. This is not an official exam pass mark; check current requirements with Thailand’s Department of Land Transport.
          </p>
          <p className="text-amber-800 text-xs">
            Each test selects up to 50 random questions from this practice bank.
          </p>
        </div>
      </div>

      {/* Start Exam Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mode 1: Instant Practice */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {lang === 'en' ? 'Good for Learning' : 'Recommended · အကြံပြုထားသည်'}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0b5d3b] transition-colors">
              {lang === 'en' ? 'Practice Mode (50 Random)' : 'လေ့ကျင့်ရေး မုဒ် (ကျပန်း ၅၀)'}
            </h2>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              Practice Mode · Instant Feedback
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-myanmar mt-2.5 leading-relaxed">
              {lang === 'en'
                ? 'Instant feedback after each question with immediate right/wrong answer highlights. Best for step-by-step study.'
                : 'တစ်ခုဖြေဆိုတိုင်း အဖြေမှန်/မှားနှင့် ဘာသာပြန်ချက်ကို ချက်ချင်းပြသပေးမည်။ လေ့ကျင့်မှတ်သားရန် အကောင်းဆုံးဖြစ်သည်။'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartExam('instant', selectedTopic)}
            className="mt-5 w-full py-3 px-4 rounded-xl bg-[#f2b705] hover:bg-[#e0a800] active:scale-[0.99] text-slate-950 font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Play size={17} className="fill-current" />
            <span>
              {lang === 'en' ? 'Start Practice (Instant Feedback)' : 'လေ့ကျင့်မှု စတင်မည် (Instant Feedback)'}
            </span>
          </button>
        </div>

        {/* Mode 2: Timed Exam Practice */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Clock size={20} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {lang === 'en' ? 'Timed Practice' : 'အချိန်ကန့်သတ် လေ့ကျင့်မှု'}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0b5d3b] transition-colors">
              {lang === 'en' ? 'Timed Exam Practice (50 Random)' : 'အချိန်ကန့်သတ် စာမေးပွဲလေ့ကျင့်မှု (ကျပန်း ၅၀)'}
            </h2>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              Timed Practice · 60-Minute Timer
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-myanmar mt-2.5 leading-relaxed">
              {lang === 'en'
                ? '60-minute strict exam timer, question flagging, and palette navigation. Final score and your practice-target status after you submit. (This is not an official exam result.)'
                : 'အချိန် ၆၀ မိနစ်သတ်မှတ်ချက်၊ မေးခွန်းကျော်/ပြန်လှန်စစ်ဆေးနိုင်ပြီး ပြီးဆုံးမှသာ ရမှတ်နှင့် လေ့ကျင့်မှုပန်းတိုင် အခြေအနေကို ပြသမည်။'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartExam('timed', selectedTopic)}
            className="mt-5 w-full py-3 px-4 rounded-xl bg-[#0b5d3b] hover:bg-[#08482e] active:scale-[0.99] text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Clock size={17} />
            <span>
              {lang === 'en' ? 'Start Timed Practice (60m)' : 'အချိန်ကန့်သတ် လေ့ကျင့်မှု စတင်မည် (၆၀ မိနစ်)'}
            </span>
          </button>
        </div>
      </div>

      {/* Study & Bank Shortcut */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <BookOpen size={22} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">
              {lang === 'en'
                ? `Full Question Bank Study (${totalQuestions} Questions)`
                : `မေးခွန်း ${toMyanmarNumber(totalQuestions)} ခုလုံး လေ့လာဖတ်ရှုရန် (Study Bank)`}
            </h3>
            <p className="text-xs text-slate-600 font-myanmar">
              {lang === 'en'
                ? `Browse all ${totalQuestions} questions across Traffic Signs (${signsCount}), Laws (${lawsCount}), Safe Driving (${safeDrivingCount}), Maintenance (${maintenanceCount}), and Accident Prediction (${accidentPredictionCount}) with correct answers.`
                : `ဆိုင်းဘုတ် (${toMyanmarNumber(signsCount)}) + ဥပဒေ (${toMyanmarNumber(lawsCount)}) + Safe Driving (${toMyanmarNumber(safeDrivingCount)}) + Maintenance (${toMyanmarNumber(maintenanceCount)}) + Accident Prediction (${toMyanmarNumber(accidentPredictionCount)}) ခုလုံးကို အဖြေမှန်များနှင့်တကွ ရှာဖွေလေ့လာနိုင်ပါသည်။`}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigateStudy()}
          className="px-4 py-2.5 rounded-xl border-2 border-[#0b5d3b] text-[#0b5d3b] hover:bg-[#0b5d3b] hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
        >
          <span>
            {lang === 'en' ? `Browse All ${totalQuestions}` : `${toMyanmarNumber(totalQuestions)} ခုလုံး ကြည့်ရှုမည်`}
          </span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Latest Score Card if available */}
      {latestAttempt && (
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0 ${
                latestAttempt.passed ? 'bg-emerald-600' : 'bg-red-600'
              }`}
            >
              {latestAttempt.percentage}%
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">
                {lang === 'en'
                  ? `Latest Attempt (${latestAttempt.date})`
                  : `နောက်ဆုံးဖြေဆိုခဲ့သော ရလဒ် (${latestAttempt.date})`}
              </div>
              <div className="font-bold text-sm text-slate-900 font-myanmar">
                {lang === 'en' ? 'Score: ' : 'ရမှတ်: '}
                {lang === 'en' ? latestAttempt.score : toMyanmarNumber(latestAttempt.score)} /{' '}
                {lang === 'en' ? latestAttempt.total : toMyanmarNumber(latestAttempt.total)} ·{' '}
                <span className={latestAttempt.passed ? 'text-emerald-700 font-bold' : 'text-red-700 font-bold'}>
                  {latestAttempt.passed
                    ? (lang === 'en' ? 'Practice target reached ✔' : 'လေ့ကျင့်မှုပန်းတိုင် ပြည့်မီ ✔')
                    : (lang === 'en' ? 'Below practice target ✘' : 'လေ့ကျင့်မှုပန်းတိုင် မပြည့်မီသေး ✘')}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onStartExam('instant', 'all')}
            className="text-xs font-bold text-[#0b5d3b] hover:underline"
          >
            {lang === 'en' ? 'Retake Exam →' : 'ထပ်မံဖြေဆိုရန် →'}
          </button>
        </div>
      )}

      {/* Source Citation */}
      <div className="text-center pt-2 text-[11px] text-slate-500 font-myanmar leading-relaxed space-y-1">
        <div>
          {lang === 'en' ? 'Question Sources: ' : 'မေးခွန်းရင်းမြစ်များ: '}
          <a
            href="https://thaidriveexam.com/article-1000000000015"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Traffic Signs (117)
          </a>{' '}
          ·{' '}
          <a
            href="https://thaidriveexam.com/article-1000000000016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Laws (74)
          </a>{' '}
          ·{' '}
          <a
            href="https://thaidriveexam.com/article-1000000000022"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Safe Driving (249)
          </a>{' '}
          ·{' '}
          <a
            href="https://thaidriveexam.com/article-1000000000017"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Maintenance (81)
          </a>{' '}
          ·{' '}
          <a
            href="https://thaidriveexam.com/article-1000000000023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Accident (77)
          </a>
        </div>
      </div>
    </div>
  );
};
