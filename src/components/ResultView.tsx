import React from 'react';
import { Award, RotateCcw, AlertCircle, CheckCircle2, XCircle, ArrowRight, BookOpen, ShieldCheck, Scale } from 'lucide-react';
import { QuizQuestion, UserAnswer, LanguageMode } from '../types';
import { toMyanmarNumber } from '../utils/helpers';

interface ResultViewProps {
  questions: QuizQuestion[];
  answers: UserAnswer[];
  lang: LanguageMode;
  onRetakeNew: () => void;
  onRetakeMistakes: (mistakeQuestionIds: number[]) => void;
  onNavigateStudy: () => void;
  onGoHome: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const ResultView: React.FC<ResultViewProps> = ({
  questions,
  answers,
  lang,
  onRetakeNew,
  onRetakeMistakes,
  onNavigateStudy,
  onGoHome
}) => {
  const total = questions.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const percentage = Math.round((correctCount / total) * 100);
  const passed = percentage >= 90; // Official Thai DLT pass criteria: 90% (45/50)

  // Find mistake questions
  const mistakes = answers
    .map((a, idx) => {
      if (!a.isCorrect) {
        return {
          question: questions[idx],
          selectedIdx: a.selectedOptionIndex
        };
      }
      return null;
    })
    .filter((m): m is { question: QuizQuestion; selectedIdx: number } => m !== null);

  const mistakeIds = mistakes.map((m) => m.question.id);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Official Result Banner */}
      <div
        className={`rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg border-4 border-white outline-4 relative overflow-hidden ${
          passed
            ? 'bg-[#0b5d3b] outline-[#0b5d3b]'
            : 'bg-[#b3261e] outline-[#b3261e]'
        }`}
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            {passed ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
            <span>{passed ? 'Official Standard: Passed' : 'Official Standard: Failed'}</span>
          </div>

          {/* Big Score */}
          <div className="py-2">
            <div className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
              {correctCount} <span className="text-2xl sm:text-3xl font-bold opacity-80">/ {total}</span>
            </div>
            <div className="text-xl sm:text-2xl font-black mt-1">
              {percentage}%
            </div>
          </div>

          {/* Pass / Fail Status Text */}
          <div className="space-y-0.5">
            <h2 className="text-xl sm:text-2xl font-extrabold font-myanmar">
              {passed ? 'ဂုဏ်ယူပါသည်! စာမေးပွဲ အောင်မြင်ပါသည်' : 'မအောင်မြင်သေးပါ၊ ထပ်မံကြိုးစားပါ'}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-myanmar">
              {passed
                ? 'ထိုင်းယာဉ်မောင်းလိုင်စင် သတ်မှတ်ချက် (၉၀% နှင့်အထက်) ပြည့်မီပါသည်။'
                : 'ထိုင်းယာဉ်မောင်းလိုင်စင်အတွက် ၄၅ မှတ် (၉၀%) အနည်းဆုံး လိုအပ်ပါသည်။'}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onRetakeNew}
          className="py-3.5 px-4 rounded-xl bg-[#f2b705] hover:bg-[#e0a800] active:scale-95 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-sm transition-all text-xs sm:text-sm"
        >
          <RotateCcw size={17} />
          <span>နောက်ထပ် ကျပန်း ၅၀ ဖြေဆိုမည်</span>
        </button>

        {mistakes.length > 0 && (
          <button
            type="button"
            onClick={() => onRetakeMistakes(mistakeIds)}
            className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 active:scale-95 text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all text-xs sm:text-sm"
          >
            <AlertCircle size={17} />
            <span>မှားခဲ့သော မေးခွန်းများ ({mistakes.length}) သာ ပြန်ဖြေမည်</span>
          </button>
        )}

        <button
          type="button"
          onClick={onNavigateStudy}
          className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm"
        >
          <BookOpen size={16} />
          <span>၁၉၁ ခုလုံး လေ့လာဖတ်ရှုမည်</span>
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm"
        >
          <span>ပင်မစာမျက်နှာသို့ (Home)</span>
        </button>
      </div>

      {/* Review Mistakes Section */}
      {mistakes.length > 0 ? (
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base font-myanmar">
                မှားယွင်းခဲ့သော မေးခွန်းများ ပြန်လည်စစ်ဆေးရန် ({mistakes.length} ခု)
              </h3>
              <p className="text-xs text-slate-500 font-myanmar">
                အဖြေမှန်များကို ဂရုပြုမှတ်သားပါ (Thai/Eng ကြီးကြီးနှင့် Myanmar Subtitle)
              </p>
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
              {mistakes.length} Mistakes
            </span>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {mistakes.map(({ question, selectedIdx }, idx) => {
              const correctOpt = question.options.find((o) => o.isCorrect);
              const wrongOpt = selectedIdx >= 0 ? question.options[selectedIdx] : null;

              return (
                <div key={question.id} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Question Image if present */}
                    {question.image && (
                      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-50 rounded-xl border border-slate-100 p-2 flex items-center justify-center shrink-0">
                        <img
                          src={question.image}
                          alt={`Sign ${question.id}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}

                    {/* Question and Answers */}
                    <div className="flex-1 space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {question.category === 'traffic_signs' ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                              Traffic Signs
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                              Traffic Laws
                            </span>
                          )}
                          <span className="text-[11px] font-bold text-slate-400">
                            #{question.id}
                          </span>
                        </div>

                        {/* Large Primary Text with Myanmar Subtitle */}
                        {lang === 'th_my' ? (
                          <div>
                            <h4 className="text-sm sm:text-base font-bold font-thai text-slate-900 leading-snug">
                              {question.q_th}
                            </h4>
                            <p className="text-xs font-myanmar text-slate-500 leading-relaxed mt-0.5">
                              {question.q_my}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                              {question.q_en}
                            </h4>
                            <p className="text-xs font-myanmar text-slate-500 leading-relaxed mt-0.5">
                              {question.q_my}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Correct Answer Box */}
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1">
                        <div className="flex items-center gap-1 font-bold text-emerald-800 font-myanmar">
                          <CheckCircle2 size={14} />
                          <span>အဖြေမှန် (Correct Answer):</span>
                        </div>
                        {correctOpt?.image && (
                          <div className="p-1 bg-white rounded border border-emerald-200 inline-block">
                            <img src={correctOpt.image} alt="Correct option" className="max-h-16 w-auto" />
                          </div>
                        )}
                        <div className="font-semibold text-emerald-900 text-sm">
                          {lang === 'th_my' ? correctOpt?.th : correctOpt?.en}
                        </div>
                        <div className="text-xs text-emerald-700 font-myanmar">
                          {correctOpt?.my}
                        </div>
                      </div>

                      {/* User's Wrong Choice Box */}
                      {wrongOpt ? (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-950 text-xs space-y-1">
                          <div className="flex items-center gap-1 font-bold text-red-800 font-myanmar">
                            <XCircle size={14} />
                            <span>သင်ရွေးချယ်ခဲ့သောအဖြေ (Your Pick):</span>
                          </div>
                          {wrongOpt.image && (
                            <div className="p-1 bg-white rounded border border-red-200 inline-block">
                              <img src={wrongOpt.image} alt="Your pick" className="max-h-16 w-auto" />
                            </div>
                          )}
                          <div className="line-through text-red-900 font-medium text-sm">
                            {lang === 'th_my' ? wrongOpt.th : wrongOpt.en}
                          </div>
                          <div className="text-xs text-red-700 font-myanmar">
                            {wrongOpt.my}
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-slate-400 italic">
                          (မဖြေဆိုခဲ့ပါ - Skipped)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-900 font-myanmar space-y-1">
          <Award size={32} className="text-emerald-700 mx-auto" />
          <h3 className="font-bold text-lg">အမှတ်ပြည့် ၅၀/၅၀ ရရှိပါသည်!</h3>
          <p className="text-xs text-emerald-700">
            တစ်ချက်မှ မမှားဘဲ အပြည့်အဝ မှန်ကန်စွာ ဖြေဆိုနိုင်ခဲ့ပါသည်။
          </p>
        </div>
      )}
    </div>
  );
};
