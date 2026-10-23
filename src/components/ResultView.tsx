import React from 'react';
import { Award, RotateCcw, AlertCircle, CheckCircle2, XCircle, ArrowRight, BookOpen, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';
import { QuizQuestion, UserAnswer, LanguageMode } from '../types';
import { toMyanmarNumber } from '../utils/helpers';

interface ResultViewProps {
  questions: QuizQuestion[];
  answers: UserAnswer[];
  lang: LanguageMode;
  showMyanmar: boolean;
  totalQuestions?: number;
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
  showMyanmar,
  totalQuestions = 598,
  onRetakeNew,
  onRetakeMistakes,
  onNavigateStudy,
  onGoHome
}) => {
  const total = questions.length;
  // Count only answers aligned with the displayed question set; stale or malformed entries must not inflate scores.
  const correctCount = questions.reduce((count, question, index) => {
    const answer = answers[index];
    return count + (answer?.questionId === question.id && answer.isCorrect ? 1 : 0);
  }, 0);
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const targetReached = percentage >= 90; // This is a site practice target, not an official exam pass result.

  // Find mistake questions
  const mistakes = questions
    .map((question, idx) => {
      const answer = answers[idx];
      if (answer?.questionId !== question.id || !answer.isCorrect) {
        return {
          question,
          selectedIdx: answer?.questionId === question.id ? answer.selectedOptionIndex : -1
        };
      }
      return null;
    })
    .filter((m): m is { question: QuizQuestion; selectedIdx: number } => m !== null);

  const mistakeIds = mistakes.map((m) => m.question.id);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Practice result banner */}
      <div
        className={`rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg border-4 border-white outline-4 relative overflow-hidden ${
          targetReached
            ? 'bg-[#0b5d3b] outline-[#0b5d3b]'
            : 'bg-[#b3261e] outline-[#b3261e]'
        }`}
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            {targetReached ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
            <span>{targetReached ? 'Practice Target Reached' : 'Keep Practicing'}</span>
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
              {targetReached
                ? 'Great work! You reached the practice target.'
                : 'Keep going—review your mistakes and try again.'}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-myanmar">
              {targetReached
                ? 'You reached this website’s 90% practice target. This is not an official exam result; check current requirements with Thailand’s Department of Land Transport.'
                : 'You are below this website’s 90% practice target. Official exam requirements may differ; check with Thailand’s Department of Land Transport.'}
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
          <span>
            {lang === 'en' ? 'Retake Another 50 Questions' : 'နောက်ထပ် ကျပန်း ၅၀ ဖြေဆိုမည်'}
          </span>
        </button>

        {mistakes.length > 0 && (
          <button
            type="button"
            onClick={() => onRetakeMistakes(mistakeIds)}
            className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 active:scale-95 text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all text-xs sm:text-sm"
          >
            <AlertCircle size={17} />
            <span>
              {lang === 'en'
                ? `Retake Mistake Questions Only (${mistakes.length})`
                : `မှားခဲ့သော မေးခွန်းများ (${mistakes.length}) သာ ပြန်ဖြေမည်`}
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={onNavigateStudy}
          className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm"
        >
          <BookOpen size={16} />
          <span>
            {lang === 'en'
              ? `Study All ${totalQuestions} Questions`
              : `မေးခွန်း ${toMyanmarNumber(totalQuestions)} ခုလုံး လေ့လာဖတ်ရှုမည်`}
          </span>
        </button>

        <button
          type="button"
          onClick={onGoHome}
          className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm"
        >
          <span>{lang === 'en' ? 'Return to Home' : 'ပင်မစာမျက်နှာသို့ (Home)'}</span>
        </button>
      </div>


      {/* Review Mistakes Section */}
      {mistakes.length > 0 ? (
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base font-myanmar">
                {lang === 'en'
                  ? `Review Mistake Questions (${mistakes.length})`
                  : `မှားယွင်းခဲ့သော မေးခွန်းများ ပြန်လည်စစ်ဆေးရန် (${mistakes.length} ခု)`}
              </h3>
              <p className="text-xs text-slate-500 font-myanmar">
                {lang === 'en'
                  ? 'Review the answers shown below, and check important rules against trusted official guidance.'
                  : 'အဖြေမှန်များကို ဂရုပြုမှတ်သားပါ'}
              </p>
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
              {mistakes.length} {lang === 'en' ? 'Mistakes' : 'ခု မှားခဲ့သည်'}
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
                          ) : question.category === 'safe_driving' ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                              Safe Driving
                            </span>
                          ) : question.category === 'vehicle_maintenance' ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                              Maintenance
                            </span>
                          ) : question.category === 'accident_prediction' ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                              Accident Prediction
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

                        {/* Question text */}
                        {<>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{question.q_en}</h4>
                          {showMyanmar && <p className="text-xs font-myanmar text-slate-500 leading-relaxed mt-0.5">{question.q_my}</p>}
                        </>}
                      </div>

                      {/* Correct Answer Box */}
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1">
                        <div className="flex items-center gap-1 font-bold text-emerald-800 font-myanmar">
                          <CheckCircle2 size={14} />
                          <span>{lang === 'en' ? 'Correct Answer:' : 'အဖြေမှန် (Correct Answer):'}</span>
                        </div>
                        {correctOpt?.image && (
                          <div className="p-1 bg-white rounded border border-emerald-200 inline-block">
                            <img src={correctOpt.image} alt="Correct option" className="max-h-16 w-auto" />
                          </div>
                        )}
                        <div className="font-semibold text-emerald-900 text-sm">
                          {correctOpt?.en}
                        </div>
                        {showMyanmar && (
                          <div className="text-xs text-emerald-700 font-myanmar">
                            {correctOpt?.my}
                          </div>
                        )}
                      </div>

                      {/* User's Wrong Choice Box */}
                      {wrongOpt ? (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-950 text-xs space-y-1">
                          <div className="flex items-center gap-1 font-bold text-red-800 font-myanmar">
                            <XCircle size={14} />
                            <span>{lang === 'en' ? 'Your Choice:' : 'သင်ရွေးချယ်ခဲ့သောအဖြေ (Your Pick):'}</span>
                          </div>
                          {wrongOpt.image && (
                            <div className="p-1 bg-white rounded border border-red-200 inline-block">
                              <img src={wrongOpt.image} alt="Your pick" className="max-h-16 w-auto" />
                            </div>
                          )}
                          <div className="line-through text-red-900 font-medium text-sm">
                            {wrongOpt.en}
                          </div>
                          {lang !== 'en' && (
                            <div className="text-xs text-red-700 font-myanmar">
                              {wrongOpt.my}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-xs text-slate-400 italic">
                          {lang === 'en' ? '(Question skipped)' : '(မဖြေဆိုခဲ့ပါ - Skipped)'}
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
          <h3 className="font-bold text-lg">
            {lang === 'en' ? `Perfect Score: ${correctCount} / ${total}!` : `အမှတ်ပြည့် ${toMyanmarNumber(correctCount)} / ${toMyanmarNumber(total)} ရရှိပါသည်!`}
          </h3>
          <p className="text-xs text-emerald-700">
            {lang === 'en'
              ? 'Outstanding! You answered every single question correctly without any mistakes.'
              : 'တစ်ချက်မှ မမှားဘဲ အပြည့်အဝ မှန်ကန်စွာ ဖြေဆိုနိုင်ခဲ့ပါသည်။'}
          </p>
        </div>
      )}
    </div>
  );
};
