import React, { useState, useEffect, useCallback } from 'react';
import { Bookmark, Flag, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Clock, HelpCircle, Grid, X, ShieldCheck, Scale, Car } from 'lucide-react';
import { QuizQuestion, LanguageMode, ExamMode, UserAnswer } from '../types';
import { toMyanmarNumber } from '../utils/helpers';
import { sounds } from '../utils/sound';

interface QuizViewProps {
  questions: QuizQuestion[];
  mode: ExamMode;
  lang: LanguageMode;
  onFinishExam: (answers: UserAnswer[]) => void;
  onExit: () => void;
  bookmarkedIds: number[];
  onToggleBookmark: (questionId: number) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  mode,
  lang,
  onFinishExam,
  onExit,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});
  const [flaggedIds, setFlaggedIds] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes for 50 questions
  const [showGridModal, setShowGridModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const currentQ = questions[currentIndex];
  const isBookmarked = bookmarkedIds.includes(currentQ.id);
  const isFlagged = flaggedIds.includes(currentQ.id);
  const isRevealed = revealedQuestions[currentIndex];
  const selectedIndex = userAnswers[currentIndex];

  // Timer for Timed Exam mode
  useEffect(() => {
    if (mode !== 'timed') return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode]);

  // Option selection handler
  const handleSelectOption = useCallback((optionIndex: number) => {
    if (mode === 'instant' && isRevealed) return;

    const option = currentQ.options[optionIndex];
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));

    if (mode === 'instant') {
      setRevealedQuestions((prev) => ({
        ...prev,
        [currentIndex]: true
      }));

      if (option.isCorrect) {
        sounds.playCorrect();
      } else {
        sounds.playWrong();
      }
    }
  }, [currentQ, currentIndex, isRevealed, mode]);

  // Next / Previous navigation
  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (mode === 'instant') {
        handleSubmitExam();
      } else {
        setShowConfirmModal(true);
      }
    }
  }, [currentIndex, questions.length, mode]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const toggleFlag = (id: number) => {
    setFlaggedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmitExam = () => {
    const answers: UserAnswer[] = questions.map((q, idx) => {
      const selected = userAnswers[idx];
      const isCorrect = selected !== undefined ? q.options[selected]?.isCorrect : false;
      return {
        questionId: q.id,
        selectedOptionIndex: selected !== undefined ? selected : -1,
        isCorrect
      };
    });
    onFinishExam(answers);
  };

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showGridModal || showConfirmModal) return;

      if (e.key === '1' || e.key === 'a' || e.key === 'A') handleSelectOption(0);
      else if (e.key === '2' || e.key === 'b' || e.key === 'B') handleSelectOption(1);
      else if (e.key === '3' || e.key === 'c' || e.key === 'C') handleSelectOption(2);
      else if (e.key === '4' || e.key === 'd' || e.key === 'D') handleSelectOption(3);
      else if (e.key === 'ArrowRight' || (mode === 'instant' && isRevealed && e.key === 'Enter')) {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelectOption, handleNext, handlePrev, isRevealed, mode, showGridModal, showConfirmModal]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const correctCount = Object.keys(userAnswers).filter(
    (idx) => questions[parseInt(idx, 10)]?.options[userAnswers[parseInt(idx, 10)]]?.isCorrect
  ).length;

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top Bar: Progress, Question Counter, Score / Timer */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onExit}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
              title="Exit exam"
            >
              ← ထွက်မည်
            </button>
            <span>
              မေးခွန်း{' '}
              <strong className="text-[#0b5d3b] text-base">
                {toMyanmarNumber(currentIndex + 1)}
              </strong>{' '}
              / {toMyanmarNumber(questions.length)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'timed' ? (
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  timeLeft < 300
                    ? 'bg-red-100 text-red-700 animate-pulse'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                <Clock size={14} />
                <span>{formatTime(timeLeft)}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <span>ရမှတ်:</span>
                <span className="text-sm font-extrabold">{toMyanmarNumber(correctCount)}</span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGridModal(true)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="မေးခွန်းဇယား (Question Palette)"
            >
              <Grid size={16} />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0b5d3b] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        {/* Header: Category Badge and Actions */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            {currentQ.category === 'traffic_signs' ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck size={12} />
                <span>Traffic Signs and markings</span>
              </span>
            ) : currentQ.category === 'safe_driving' ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                <Car size={12} />
                <span>Safe driving</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                <Scale size={12} />
                <span>Traffic laws</span>
              </span>
            )}
            <span className="text-xs font-semibold text-slate-400">
              #{currentQ.id}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {mode === 'timed' && (
              <button
                type="button"
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg transition-colors font-medium ${
                  isFlagged
                    ? 'bg-amber-100 text-amber-800 font-bold'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
                title="Flag question"
              >
                <Flag size={14} className={isFlagged ? 'fill-current text-amber-600' : ''} />
                <span>{isFlagged ? 'မှတ်ထားပြီး' : 'မှတ်ထားရန်'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onToggleBookmark(currentQ.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked
                  ? 'text-amber-500 bg-amber-50'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
            >
              <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
            </button>
          </div>
        </div>

        {/* Question Image (if present) */}
        {currentQ.image && (
          <div className="flex justify-center items-center py-2 bg-slate-50 rounded-xl border border-slate-100 min-h-[140px]">
            <img
              src={currentQ.image}
              alt={`Question ${currentQ.id}`}
              className="max-h-44 sm:max-h-52 w-auto object-contain transition-transform hover:scale-105"
              loading="eager"
            />
          </div>
        )}

        {/* Question Text: PRIMARY LARGE (Thai or English) with MYANMAR SUBTITLE BELOW */}
        <div className="space-y-1.5 pt-1">
          {lang === 'th_my' ? (
            <div>
              {/* Thai Primary Large */}
              <h2 className="text-base sm:text-xl font-bold font-thai text-slate-900 leading-snug">
                {currentQ.q_th}
              </h2>
              {/* Myanmar Subtitle Small */}
              <p className="text-xs sm:text-sm font-myanmar text-slate-500 leading-relaxed mt-1">
                {currentQ.q_my}
              </p>
            </div>
          ) : (
            <div>
              {/* English Primary Large */}
              <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
                {currentQ.q_en}
              </h2>
              {/* Myanmar Subtitle Small */}
              <p className="text-xs sm:text-sm font-myanmar text-slate-500 leading-relaxed mt-1">
                {currentQ.q_my}
              </p>
            </div>
          )}
        </div>

        {/* Options List: PRIMARY LARGE (Thai or English) with MYANMAR SUBTITLE BELOW */}
        <div className="space-y-2.5 pt-2">
          {currentQ.options.map((option, optIdx) => {
            const isSelected = selectedIndex === optIdx;
            const letter = OPTION_LETTERS[optIdx];

            let btnClasses =
              'w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 select-none ';

            if (mode === 'instant' && isRevealed) {
              if (option.isCorrect) {
                btnClasses += 'border-emerald-600 bg-emerald-50/90 text-emerald-950 font-medium';
              } else if (isSelected && !option.isCorrect) {
                btnClasses += 'border-red-500 bg-red-50/90 text-red-950';
              } else {
                btnClasses += 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
              }
            } else {
              if (isSelected) {
                btnClasses += 'border-[#0b5d3b] bg-emerald-50 text-slate-950 font-medium shadow-xs';
              } else {
                btnClasses +=
                  'border-slate-200 bg-white hover:border-[#0b5d3b]/50 hover:bg-slate-50/80 text-slate-800';
              }
            }

            return (
              <button
                key={optIdx}
                type="button"
                disabled={mode === 'instant' && isRevealed}
                onClick={() => handleSelectOption(optIdx)}
                className={btnClasses}
              >
                {/* Option Letter Badge */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    mode === 'instant' && isRevealed
                      ? option.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                      : isSelected
                      ? 'bg-[#0b5d3b] text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {letter}
                </div>

                {/* Option Content */}
                <div className="flex-1 space-y-1">
                  {/* Option Image (if choice is an image) */}
                  {option.image && (
                    <div className="mb-2 p-1.5 bg-white rounded-lg border border-slate-200 inline-block">
                      <img
                        src={option.image}
                        alt={`Option ${letter}`}
                        className="max-h-24 sm:max-h-28 w-auto object-contain"
                      />
                    </div>
                  )}

                  {/* Primary text (Thai or English) in large font, Myanmar sub below */}
                  {lang === 'th_my' ? (
                    <div>
                      {/* Thai Primary Large */}
                      <div className="font-thai font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                        {option.th}
                      </div>
                      {/* Myanmar Subtitle Small */}
                      <div className="font-myanmar text-xs text-slate-500 leading-relaxed mt-0.5">
                        {option.my}
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* English Primary Large */}
                      <div className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                        {option.en}
                      </div>
                      {/* Myanmar Subtitle Small */}
                      <div className="font-myanmar text-xs text-slate-500 leading-relaxed mt-0.5">
                        {option.my}
                      </div>
                    </div>
                  )}
                </div>

                {/* Instant Feedback Status Icon */}
                {mode === 'instant' && isRevealed && (
                  <div className="shrink-0 mt-0.5">
                    {option.isCorrect ? (
                      <CheckCircle2 size={18} className="text-emerald-600" />
                    ) : isSelected ? (
                      <XCircle size={18} className="text-red-500" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Mode Answer Feedback Banner */}
        {mode === 'instant' && isRevealed && (
          <div
            className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
              currentQ.options[selectedIndex]?.isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-red-50 border-red-200 text-red-900'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {currentQ.options[selectedIndex]?.isCorrect ? (
                <CheckCircle2 size={20} className="text-emerald-700" />
              ) : (
                <XCircle size={20} className="text-red-600" />
              )}
            </div>
            <div className="font-myanmar space-y-1">
              <div className="font-bold">
                {currentQ.options[selectedIndex]?.isCorrect
                  ? 'အဖြေမှန်ကန်ပါသည်! (Correct)'
                  : 'အဖြေမှားယွင်းပါသည်! (Incorrect)'}
              </div>
              {!currentQ.options[selectedIndex]?.isCorrect && (
                <div className="text-xs text-slate-800">
                  အဖြေမှန်မှာ:{' '}
                  <span className="font-bold text-emerald-700">
                    {OPTION_LETTERS[currentQ.options.findIndex((o) => o.isCorrect)]}.{' '}
                    {lang === 'th_my'
                      ? currentQ.options.find((o) => o.isCorrect)?.th
                      : currentQ.options.find((o) => o.isCorrect)?.en}{' '}
                    <span className="font-normal text-slate-600">
                      ({currentQ.options.find((o) => o.isCorrect)?.my})
                    </span>
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={handlePrev}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft size={16} />
            <span>ရှေ့သို့</span>
          </button>

          {mode === 'instant' ? (
            <button
              type="button"
              disabled={!isRevealed}
              onClick={handleNext}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                isRevealed
                  ? 'bg-[#f2b705] hover:bg-[#e0a800] text-slate-950 shadow-sm active:scale-95'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{currentIndex + 1 === questions.length ? 'ရလဒ်ကြည့်မည်' : 'နောက်တစ်ခု'}</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 border border-slate-200"
              >
                ပြီးဆုံးမည်
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0b5d3b] hover:bg-[#08482e] text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
              >
                <span>{currentIndex + 1 === questions.length ? 'အဖြေတင်မည်' : 'ရှေ့ဆက်မည်'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid Navigator Modal (Questions 1..50 palette) */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4 shadow-xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="font-bold text-slate-900 text-base font-myanmar">
                မေးခွန်းများသို့ ကူးပြောင်းရန် (Question Navigator)
              </h3>
              <button
                type="button"
                onClick={() => setShowGridModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Status Legend */}
            <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
                ဖြေဆိုပြီး ({answeredCount})
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                မှတ်သားထား ({flaggedIds.length})
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" />
                မဖြေရသေး ({questions.length - answeredCount})
              </span>
            </div>

            {/* Grid of Questions */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 overflow-y-auto py-2">
              {questions.map((q, idx) => {
                const isAns = userAnswers[idx] !== undefined;
                const isFlag = flaggedIds.includes(q.id);
                const isCur = currentIndex === idx;

                let cls =
                  'h-10 rounded-xl font-bold text-xs flex items-center justify-center relative transition-transform active:scale-90 ';
                if (isCur) {
                  cls += 'ring-2 ring-[#0b5d3b] ring-offset-1 ';
                }

                if (isAns) {
                  cls += 'bg-emerald-600 text-white ';
                } else if (isFlag) {
                  cls += 'bg-amber-100 text-amber-800 border border-amber-300 ';
                } else {
                  cls += 'bg-slate-100 text-slate-700 hover:bg-slate-200 ';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowGridModal(false);
                    }}
                    className={cls}
                  >
                    <span>{idx + 1}</span>
                    {isFlag && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowGridModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
            >
              ပိတ်မည် (Close)
            </button>
          </div>
        </div>
      )}

      {/* Confirm Submission Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <HelpCircle size={26} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg font-myanmar">
                စာမေးပွဲ အဖြေလွှာ တင်သွင်းမည်လား။
              </h3>
              <p className="text-xs text-slate-600 font-myanmar mt-1">
                မေးခွန်း {questions.length} အနက် {toMyanmarNumber(answeredCount)} ခု ဖြေဆိုထားပြီး{' '}
                {toMyanmarNumber(questions.length - answeredCount)} ခု မဖြေဆိုရသေးပါ။
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                ပြန်စစ်ဆေးမည်
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="flex-1 py-2.5 rounded-xl bg-[#0b5d3b] hover:bg-[#08482e] text-white font-bold text-xs"
              >
                အဖြေတင်မည် (Submit)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
