import React from 'react';
import { Award, RotateCcw, AlertCircle, CheckCircle2, XCircle, ArrowRight, BookOpen, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';
import { QuizQuestion, UserAnswer, LanguageMode, ExamMode, QuestionCategory } from '../types';
import { toMyanmarNumber } from '../utils/helpers';

interface ResultViewProps {
  questions: QuizQuestion[];
  answers: UserAnswer[];
  lang: LanguageMode;
  showMyanmar: boolean;
  mode: ExamMode;
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
  mode,
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
  const targetReached = percentage >= 90; // Site practice target only; not an official pass mark.
  const answeredCount = questions.reduce((count, question, index) => {
    const answer = answers[index];
    return count + (answer?.questionId === question.id && answer.selectedOptionIndex >= 0 ? 1 : 0);
  }, 0);
  const unansweredCount = total - answeredCount;
  const incorrectCount = answeredCount - correctCount;
  const categories: { id: QuestionCategory; label: string }[] = [
    { id: 'traffic_signs', label: 'Traffic Signs' },
    { id: 'traffic_laws', label: 'Traffic Laws' },
    { id: 'safe_driving', label: 'Safe Driving' },
    { id: 'vehicle_maintenance', label: 'Vehicle Maintenance' },
    { id: 'accident_prediction', label: 'Accident Prediction' }
  ];
  const categoryResults = categories.map((category) => {
    const items = questions.filter((question) => question.category === category.id);
    const correct = items.reduce((count, question) => {
      const index = questions.findIndex((item) => item.id === question.id);
      const answer = answers[index];
      return count + (answer?.questionId === question.id && answer.isCorrect ? 1 : 0);
    }, 0);
    return { ...category, total: items.length, correct, percentage: items.length ? Math.round(correct / items.length * 100) : 0 };
  }).filter((category) => category.total > 0);

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
      {/* Mode label */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Results</p>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900">{mode === 'timed' ? 'Timed Exam Results' : 'Practice Results'}</h1>
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${mode === 'timed' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}`}>
          {mode === 'timed' ? 'Timed Exam · 60 min limit' : 'Practice Mode'}
        </span>
      </div>

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

      {/* Clear score breakdown: answered, incorrect, and unanswered are separate */}
      <section aria-labelledby="score-breakdown-title" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm space-y-3">
        <h3 id="score-breakdown-title" className="font-bold text-slate-900">Score Breakdown</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Total</p><p className="text-2xl font-black text-slate-900">{total}</p></div>
          <div className="rounded-xl bg-emerald-50 p-3"><p className="text-xs text-emerald-800">Correct</p><p className="text-2xl font-black text-emerald-800">{correctCount}</p></div>
          <div className="rounded-xl bg-red-50 p-3"><p className="text-xs text-red-800">Incorrect</p><p className="text-2xl font-black text-red-800">{incorrectCount}</p></div>
          <div className="rounded-xl bg-amber-50 p-3"><p className="text-xs text-amber-900">Unanswered</p><p className="text-2xl font-black text-amber-900">{unansweredCount}</p></div>
        </div>
        <p className="text-xs leading-relaxed text-slate-500">Accuracy is calculated from all questions in this attempt. Unanswered questions are counted separately from incorrect answers.</p>
      </section>

      {/* Performance by category */}
      <section aria-labelledby="category-results-title" className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm space-y-4">
        <div><h3 id="category-results-title" className="font-bold text-slate-900">Performance by Category</h3><p className="text-xs text-slate-500 mt-1">Use this breakdown to choose what to study next.</p></div>
        <div className="space-y-4">
          {categoryResults.map((category) => <div key={category.id}>
            <div className="flex items-center justify-between gap-3 text-sm mb-1.5"><span className="font-semibold text-slate-700">{category.label}</span><span className="font-bold text-slate-900">{category.correct}/{category.total} · {category.percentage}%</span></div>
            <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden" role="progressbar" aria-label={category.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={category.percentage}><div className="h-full rounded-full bg-[#0b5d3b] transition-all" style={{ width: `${category.percentage}%` }} /></div>
          </div>)}
        </div>
        {categoryResults.length > 0 && <p className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">Study suggestion: start with <strong>{[...categoryResults].sort((a, b) => a.percentage - b.percentage)[0].label}</strong>, your lowest-scoring category in this attempt. A category with few questions may not represent your overall ability.</p>}
      </section>

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
                  ? `Review Incorrect & Unanswered Questions (${mistakes.length})`
                  : `မှားယွင်းခဲ့သော မေးခွန်းများ ပြန်လည်စစ်ဆေးရန် (${mistakes.length} ခု)`}
              </h3>
              <p className="text-xs text-slate-500 font-myanmar">
                {lang === 'en'
                  ? 'Incorrect and unanswered questions are listed here separately. Review the correct answer and verify important rules with trusted official guidance.'
                  : 'အဖြေမှန်များကို ဂရုပြုမှတ်သားပါ'}
              </p>
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
              {mistakes.length} {lang === 'en' ? 'To Review' : 'ခု ပြန်လေ့လာရန်'}
            </span>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {mistakes.map(({ question, selectedIdx }, idx) => {
              const correctOpt = question.options.find((o) => o.isCorrect);
              const wrongOpt = selectedIdx >= 0 ? question.options[selectedIdx] : null;

              return (
                <div key={question.id} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="mb-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold bg-slate-100 text-slate-700">{selectedIdx < 0 ? 'Unanswered' : 'Incorrect'}</div>
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
