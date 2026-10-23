import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Bookmark, Flag, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Clock, HelpCircle, Grid, X, ShieldCheck, Scale, Car, Wrench, AlertTriangle } from 'lucide-react';
import { QuizQuestion, LanguageMode, ExamMode, UserAnswer } from '../types';
import { toMyanmarNumber } from '../utils/helpers';
import { sounds } from '../utils/sound';

interface QuizViewProps {
  questions: QuizQuestion[];
  mode: ExamMode;
  lang: LanguageMode;
  showMyanmar: boolean;
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
  showMyanmar,
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
  const [showExitConfirmModal, setShowExitConfirmModal] = useState(false);
  const submitExamRef = useRef<() => void>(() => {});
  const submissionStartedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentQ = questions[currentIndex];
  const isBookmarked = currentQ ? bookmarkedIds.includes(currentQ.id) : false;
  const isFlagged = currentQ ? flaggedIds.includes(currentQ.id) : false;
  const isRevealed = revealedQuestions[currentIndex];
  const selectedIndex = userAnswers[currentIndex];

  const handleSubmitExam = useCallback(() => {
    // Prevent a double tap or timer/submit race from recording the same attempt twice.
    if (submissionStartedRef.current || questions.length === 0) return;
    submissionStartedRef.current = true;
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
  }, [questions, userAnswers, onFinishExam]);

  // Keep the timer callback pointed at the latest answers without restarting the interval.
  submitExamRef.current = handleSubmitExam;

  // Timer for Timed Exam mode
  useEffect(() => {
    if (mode !== 'timed') return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== 'timed' || timeLeft !== 0) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    submitExamRef.current();
  }, [mode, timeLeft]);

  // Option selection handler
  const handleSelectOption = useCallback((optionIndex: number) => {
    // Keyboard shortcuts can fire even while rendering an empty or malformed question set.
    if (!currentQ || !Number.isInteger(optionIndex) || optionIndex < 0 || optionIndex >= currentQ.options.length) return;
    if (mode === 'instant' && isRevealed) return;

    const option = currentQ.options[optionIndex];
    if (!option) return;

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
  }, [currentIndex, questions.length, mode, handleSubmitExam]);

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



  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Let keyboard users dismiss an open dialog without accidentally triggering quiz shortcuts.
      if (e.key === 'Escape') {
        if (showExitConfirmModal) setShowExitConfirmModal(false);
        else if (showConfirmModal) setShowConfirmModal(false);
        else if (showGridModal) setShowGridModal(false);
        else return;
        e.preventDefault();
        return;
      }
      if (showGridModal || showConfirmModal || showExitConfirmModal) return;

      // Do not let quiz shortcuts interfere with text entry or browser/system shortcuts.
      const target = e.target as HTMLElement | null;
      if (
        target?.isContentEditable ||
        (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) ||
        e.altKey || e.ctrlKey || e.metaKey
      ) return;

      // Enter already activates a focused button natively; do not also advance via the global shortcut.
      if (e.key === 'Enter' && target?.closest('button, a, [role="button"]')) return;

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
  }, [handleSelectOption, handleNext, handlePrev, isRevealed, mode, showGridModal, showConfirmModal, showExitConfirmModal]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const correctCount = Object.keys(userAnswers).filter(
    (idx) => questions[parseInt(idx, 10)]?.options[userAnswers[parseInt(idx, 10)]]?.isCorrect
  ).length;

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  // Defensive fallback: an empty question pool must not crash while rendering currentQ.
  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4">
        <h2 className="text-lg font-bold text-slate-900">No questions available</h2>
        <p className="text-sm text-slate-600">This practice test cannot start because no questions were provided. Return home and choose another topic.</p>
        <button
          type="button"
          onClick={onExit}
          className="px-4 py-2.5 rounded-xl bg-[#0b5d3b] hover:bg-[#074028] text-white font-bold text-sm"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top Bar: Progress, Question Counter, Score / Timer */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => mode === 'timed' ? setShowExitConfirmModal(true) : onExit()}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
              title={lang === 'en' ? 'Exit exam' : 'စာမေးပွဲမှ ထွက်မည်'}
            >
              {lang === 'en' ? '← Exit' : '← ထွက်မည်'}
            </button>
            <span>
              {lang === 'en' ? (
                <>
                  Question{' '}
                  <strong className="text-[#0b5d3b] text-base">
                    {currentIndex + 1}
                  </strong>{' '}
                  of {questions.length}
                </>
              ) : (
                <>
                  မေးခွန်း{' '}
                  <strong className="text-[#0b5d3b] text-base">
                    {toMyanmarNumber(currentIndex + 1)}
                  </strong>{' '}
                  / {toMyanmarNumber(questions.length)}
                </>
              )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'timed' ? (
              <div
                role="timer"
                aria-label={`${lang === 'en' ? 'Time remaining' : 'အချိန်ကျန်' }: ${formatTime(timeLeft)}`}
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
                <span>{lang === 'en' ? 'Score:' : 'ရမှတ်:'}</span>
                <span className="text-sm font-extrabold">
                  {lang === 'en' ? correctCount : toMyanmarNumber(correctCount)}
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGridModal(true)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title={lang === 'en' ? 'Question Navigator' : 'မေးခွန်းဇယား (Question Palette)'}
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

        {/* Flag & Bookmark header */}
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
            ) : currentQ.category === 'vehicle_maintenance' ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                <Wrench size={12} />
                <span>Vehicle maintenance</span>
              </span>
            ) : currentQ.category === 'accident_prediction' ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                <AlertTriangle size={12} />
                <span>Accident prediction</span>
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
                title={isFlagged ? 'Unflag question' : 'Flag question'}
                aria-pressed={isFlagged}
              >
                <Flag size={14} className={isFlagged ? 'fill-current text-amber-600' : ''} />
                <span>
                  {lang === 'en'
                    ? isFlagged
                      ? 'Flagged'
                      : 'Flag'
                    : isFlagged
                    ? 'မှတ်ထားပြီး'
                    : 'မှတ်ထားရန်'}
                </span>
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
              aria-label={isBookmarked ? 'Remove question bookmark' : 'Bookmark question'}
              aria-pressed={isBookmarked}
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

        {/* Question Text */}
        <div className="space-y-1.5 pt-1">
          {<>
            <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">{currentQ.q_en}</h2>
            {showMyanmar && <p className="text-xs sm:text-sm font-myanmar text-slate-500 leading-relaxed mt-1">{currentQ.q_my}</p>}
          </>}
        </div>

        {/* Options List */}
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
                aria-pressed={isSelected}
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

                  {/* Primary text with language mode */}
                  {<>
                    <div className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">{option.en}</div>
                    {showMyanmar && <div className="font-myanmar text-xs text-slate-500 leading-relaxed mt-0.5">{option.my}</div>}
                  </>}
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
            <div className="space-y-1">
              <div className="font-bold">
                {currentQ.options[selectedIndex]?.isCorrect
                  ? (lang === 'en' ? 'Correct Answer!' : 'အဖြေမှန်ကန်ပါသည်! (Correct)')
                  : (lang === 'en' ? 'Incorrect Answer!' : 'အဖြေမှားယွင်းပါသည်! (Incorrect)')}
              </div>
              {!currentQ.options[selectedIndex]?.isCorrect && (
                <div className="text-xs text-slate-800">
                  {lang === 'en' ? 'Correct choice: ' : 'အဖြေမှန်မှာ: '}
                  <span className="font-bold text-emerald-700">
                    {OPTION_LETTERS[currentQ.options.findIndex((o) => o.isCorrect)]}.{' '}
                    {currentQ.options.find((o) => o.isCorrect)?.en}{' '}
                    {showMyanmar && (
                      <span className="font-normal text-slate-600 font-myanmar">
                        ({currentQ.options.find((o) => o.isCorrect)?.my})
                      </span>
                    )}
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
            <span>{lang === 'en' ? 'Previous' : 'ရှေ့သို့'}</span>
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
              <span>
                {lang === 'en'
                  ? currentIndex + 1 === questions.length
                    ? 'View Results'
                    : 'Next Question'
                  : currentIndex + 1 === questions.length
                  ? 'ရလဒ်ကြည့်မည်'
                  : 'နောက်တစ်ခု'}
              </span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 border border-slate-200"
              >
                {lang === 'en' ? 'Finish Exam' : 'ပြီးဆုံးမည်'}
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0b5d3b] hover:bg-[#08482e] text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
              >
                <span>
                  {lang === 'en'
                    ? currentIndex + 1 === questions.length
                      ? 'Submit Exam'
                      : 'Next Question'
                    : currentIndex + 1 === questions.length
                    ? 'အဖြေတင်မည်'
                    : 'ရှေ့ဆက်မည်'}
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid Navigator Modal (Questions 1..50 palette) */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4" role="presentation">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4 shadow-xl max-h-[85vh] flex flex-col" role="dialog" aria-modal="true" aria-labelledby="question-navigator-title">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 id="question-navigator-title" className="font-bold text-slate-900 text-base font-myanmar">
                {lang === 'en'
                  ? 'Question Navigator (Palette)'
                  : 'မေးခွန်းများသို့ ကူးပြောင်းရန် (Question Navigator)'}
              </h3>
              <button
                type="button"
                onClick={() => setShowGridModal(false)}
                aria-label="Close question navigator"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Status Legend */}
            <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
                {lang === 'en' ? `Answered (${answeredCount})` : `ဖြေဆိုပြီး (${answeredCount})`}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                {lang === 'en' ? `Flagged (${flaggedIds.length})` : `မှတ်သားထား (${flaggedIds.length})`}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-slate-200 inline-block" />
                {lang === 'en'
                  ? `Unanswered (${questions.length - answeredCount})`
                  : `မဖြေရသေး (${questions.length - answeredCount})`}
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
                    aria-label={`Go to question ${idx + 1}${isAns ? ', answered' : ', unanswered'}${isFlag ? ', flagged' : ''}${isCur ? ', current question' : ''}`}
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
              {lang === 'en' ? 'Close' : 'ပိတ်မည် (Close)'}
            </button>
          </div>
        </div>
      )}

      {/* Confirm leaving a timed exam without saving partial answers */}
      {showExitConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4" role="presentation">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl text-center" role="dialog" aria-modal="true" aria-labelledby="exit-exam-title">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <HelpCircle size={26} />
            </div>
            <div>
              <h3 id="exit-exam-title" className="font-bold text-slate-900 text-lg">Leave this exam?</h3>
              <p className="text-xs text-slate-600 mt-1">
                Your current answers will be lost and this attempt will not be saved to history.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirmModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                Continue Exam
              </button>
              <button
                type="button"
                onClick={onExit}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs"
              >
                Leave Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Submission Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4" role="presentation">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl text-center" role="dialog" aria-modal="true" aria-labelledby="submit-exam-title">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <HelpCircle size={26} />
            </div>
            <div>
              <h3 id="submit-exam-title" className="font-bold text-slate-900 text-lg font-myanmar">
                {lang === 'en'
                  ? 'Submit Exam Answers?'
                  : 'စာမေးပွဲ အဖြေလွှာ တင်သွင်းမည်လား။'}
              </h3>
              <p className="text-xs text-slate-600 font-myanmar mt-1">
                {lang === 'en'
                  ? `You have answered ${answeredCount} of ${questions.length} questions. ${questions.length - answeredCount} remain unanswered.`
                  : `မေးခွန်း ${questions.length} အနက် ${toMyanmarNumber(answeredCount)} ခု ဖြေဆိုထားပြီး ${toMyanmarNumber(questions.length - answeredCount)} ခု မဖြေဆိုရသေးပါ။`}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                {lang === 'en' ? 'Review Questions' : 'ပြန်စစ်ဆေးမည်'}
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="flex-1 py-2.5 rounded-xl bg-[#0b5d3b] hover:bg-[#08482e] text-white font-bold text-xs"
              >
                {lang === 'en' ? 'Submit Exam' : 'အဖြေတင်မည် (Submit)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
