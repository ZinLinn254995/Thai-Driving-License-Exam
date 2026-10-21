import React, { useState } from 'react';
import { Play, Sparkles, BookOpen, Clock, Award, ShieldCheck, Scale, ArrowRight, Layers, Car } from 'lucide-react';
import { LanguageMode, ExamMode, ExamTopicFilter } from '../types';
import { toMyanmarNumber, ExamHistoryItem } from '../utils/helpers';

interface HomeViewProps {
  lang: LanguageMode;
  totalQuestions: number;
  signsCount: number;
  lawsCount: number;
  safeDrivingCount: number;
  onStartExam: (mode: ExamMode, topic: ExamTopicFilter) => void;
  onNavigateStudy: (filterCategory?: ExamTopicFilter) => void;
  recentHistory: ExamHistoryItem[];
  bookmarkedCount: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  totalQuestions,
  signsCount,
  lawsCount,
  safeDrivingCount,
  onStartExam,
  onNavigateStudy,
  recentHistory,
  bookmarkedCount
}) => {
  const [selectedTopic, setSelectedTopic] = useState<ExamTopicFilter>('all');
  const latestAttempt = recentHistory[0];

  return (
    <div className="space-y-6">
      {/* Official Sign Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0b5d3b] text-white p-6 sm:p-7 shadow-lg border-4 border-white outline-4 outline-[#0b5d3b]">
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
              ထိုင်းယာဉ်မောင်းလိုင်စင် လမ်းညွှန်ဆိုင်းဘုတ်၊ ယာဉ်စည်းကမ်းနှင့် ဘေးကင်းစွာမောင်းနှင်ခြင်း မေးခွန်းများ ({toMyanmarNumber(totalQuestions)} ခု)
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="bg-[#074028]/80 backdrop-blur-xs p-3 rounded-xl border border-white/15 text-center min-w-[110px]">
              <div className="text-2xl font-black text-[#f2b705] leading-none">
                {totalQuestions}
              </div>
              <div className="text-[11px] font-semibold text-white/90 mt-1">
                မေးခွန်းစုစုပေါင်း
              </div>
              <div className="text-[9px] text-[#cfe9da]">
                Total Bank
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Overview Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Category 1: Signs */}
        <div 
          onClick={() => onNavigateStudy('traffic_signs')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-emerald-300 transition-all"
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
                ป้ายและเครื่องหมายจราจร
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                Traffic Signs & Markings ({toMyanmarNumber(signsCount)} ခု)
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            {signsCount}
          </span>
        </div>

        {/* Category 2: Laws */}
        <div 
          onClick={() => onNavigateStudy('traffic_laws')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-blue-300 transition-all"
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
                กฎหมายว่าด้วยการจราจรทางบก
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                Traffic Laws ({toMyanmarNumber(lawsCount)} ခု)
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
            {lawsCount}
          </span>
        </div>

        {/* Category 3: Safe Driving */}
        <div 
          onClick={() => onNavigateStudy('safe_driving')}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-amber-300 transition-all"
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
                การขับขี่อย่างปลอดภัย
              </div>
              <div className="text-xs text-slate-600 font-myanmar">
                Safe Driving ({toMyanmarNumber(safeDrivingCount)} ခု)
              </div>
            </div>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            {safeDrivingCount}
          </span>
        </div>
      </div>

      {/* Select Topic for 50-Question Exam */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#0b5d3b]" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base font-myanmar">
              ဖြေဆိုလိုသော ကဏ္ဍ ရွေးချယ်ပါ (Select Exam Scope)
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            ကျပန်း ၅၀ ခု ရွေးထုတ်မည်
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSelectedTopic('all')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'all'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">အားလုံး (All Topics)</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              {toMyanmarNumber(totalQuestions)} ခုလုံးထဲမှ ကျပန်း ၅၀
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTopic('traffic_signs')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'traffic_signs'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Traffic Signs</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              ဆိုင်းဘုတ် {toMyanmarNumber(signsCount)} ခု
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTopic('traffic_laws')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'traffic_laws'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Traffic Laws</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              ဥပဒေ {toMyanmarNumber(lawsCount)} ခု
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTopic('safe_driving')}
            className={`p-3 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
              selectedTopic === 'safe_driving'
                ? 'border-[#0b5d3b] bg-emerald-50/70 text-slate-950 shadow-xs'
                : 'border-slate-200 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="font-bold">Safe Driving</div>
            <div className="text-[11px] text-slate-500 font-normal mt-0.5 font-myanmar">
              ဘေးကင်းစွာမောင်းနှင်ခြင်း ({toMyanmarNumber(safeDrivingCount)} ခု)
            </div>
          </button>
        </div>
      </div>

      {/* Info Notice about 50 Questions & 90% Pass */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#f2b705]/20 text-amber-800 shrink-0">
          <Award size={20} />
        </div>
        <div className="text-xs sm:text-sm text-amber-950 font-myanmar space-y-1">
          <p className="font-semibold text-amber-900">
            ထိုင်း DLT စာမေးပွဲ စည်းကမ်းချက် - စုစုပေါင်း ၅၀ မေးခွန်းအနက် ၄၅ မှတ် (၉၀%) ရရှိမှ အောင်မြင်မည်။
          </p>
          <p className="text-amber-800 text-xs">
            မေးခွန်းအားလုံးတွင် ထိုင်းစာ သို့မဟုတ် အင်္ဂလိပ်စာကို အဓိကကြီးကြီးပြသထားပြီး မြန်မာစာကို အောက်မှ သေးသေးဖြင့် ဘာသာပြန်ပြသပေးပါသည်။
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
                Recommended · အကြံပြုထားသည်
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0b5d3b] transition-colors">
              လေ့ကျင့်ရေး မုဒ် (ကျပန်း ၅၀)
            </h2>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              Practice Mode · Instant Feedback
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-myanmar mt-2.5 leading-relaxed">
              တစ်ခုဖြေဆိုတိုင်း အဖြေမှန်/မှားနှင့် ဘာသာပြန်ချက်ကို ချက်ချင်းပြသပေးမည်။ လေ့ကျင့်မှတ်သားရန် အကောင်းဆုံးဖြစ်သည်။
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartExam('instant', selectedTopic)}
            className="mt-5 w-full py-3 px-4 rounded-xl bg-[#f2b705] hover:bg-[#e0a800] active:scale-[0.99] text-slate-950 font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Play size={17} className="fill-current" />
            <span>လေ့ကျင့်မှု စတင်မည် (Instant Feedback)</span>
          </button>
        </div>

        {/* Mode 2: Real Exam Simulation */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Clock size={20} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Practice Simulation · စာမေးပွဲလေ့ကျင့်မှုပုံစံ
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0b5d3b] transition-colors">
              စာမေးပွဲ အစစ်အမှန် မုဒ် (ကျပန်း ၅၀)
            </h2>
            <div className="text-xs text-slate-500 font-medium mt-0.5">
              Real Exam Simulation · 60 Mins Timer
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-myanmar mt-2.5 leading-relaxed">
              အချိန် ၆၀ မိနစ်သတ်မှတ်ချက်၊ မေးခွန်းကျော်/ပြန်လှန်စစ်ဆေးနိုင်ပြီး ပြီးဆုံးမှသာ အောင်/ရှုံး ရမှတ်စာရင်းပြသမည်။
            </p>
          </div>

          <button
            type="button"
            onClick={() => onStartExam('timed', selectedTopic)}
            className="mt-5 w-full py-3 px-4 rounded-xl bg-[#0b5d3b] hover:bg-[#08482e] active:scale-[0.99] text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Clock size={17} />
            <span>စာမေးပွဲစစ်ဆေးမည် (Exam Simulation)</span>
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
              မေးခွန်း {toMyanmarNumber(totalQuestions)} ခုလုံး လေ့လာဖတ်ရှုရန် (Study Bank)
            </h3>
            <p className="text-xs text-slate-600 font-myanmar">
              ဆိုင်းဘုတ် ({toMyanmarNumber(signsCount)}) + ယာဉ်စည်းကမ်း ({toMyanmarNumber(lawsCount)}) + Safe Driving ({toMyanmarNumber(safeDrivingCount)}) ခုလုံးကို အဖြေမှန်များနှင့်တကွ ရှာဖွေလေ့လာနိုင်ပါသည်။
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigateStudy()}
          className="px-4 py-2.5 rounded-xl border-2 border-[#0b5d3b] text-[#0b5d3b] hover:bg-[#0b5d3b] hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
        >
          <span>{toMyanmarNumber(totalQuestions)} ခုလုံး ကြည့်ရှုမည်</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Latest Score Card if available */}
      {latestAttempt && (
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                latestAttempt.passed ? 'bg-emerald-600' : 'bg-red-600'
              }`}
            >
              {latestAttempt.percentage}%
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">
                နောက်ဆုံးဖြေဆိုခဲ့သော ရလဒ် ({latestAttempt.date})
              </div>
              <div className="font-bold text-sm text-slate-900 font-myanmar">
                ရမှတ်: {latestAttempt.score} / {latestAttempt.total} ·{' '}
                <span className={latestAttempt.passed ? 'text-emerald-700 font-bold' : 'text-red-700 font-bold'}>
                  {latestAttempt.passed ? 'အောင်မြင်ခဲ့သည် ✔' : 'မအောင်မြင်သေးပါ ✘'}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onStartExam('instant', 'all')}
            className="text-xs font-bold text-[#0b5d3b] hover:underline"
          >
            ထပ်မံဖြေဆိုရန် →
          </button>
        </div>
      )}

      {/* Source Citation */}
      <div className="text-center pt-2 text-[11px] text-slate-500 font-myanmar leading-relaxed space-y-1">
        <div>
          မေးခွန်းရင်းမြစ်များ:{' '}
          <a
            href="https://thaidriveexam.com/article-1000000000015"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Traffic Signs (117)
          </a>{' '}
          &{' '}
          <a
            href="https://thaidriveexam.com/article-1000000000016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0b5d3b] hover:underline font-sans font-medium"
          >
            Traffic Laws (74)
          </a>
        </div>
      </div>
    </div>
  );
};
