/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState, useEffect, useCallback, useMemo } from 'react';
import { QUESTIONS_BANK, QuestionItem } from './data/questions';
import { LanguageMode, ExamMode, ExamTopicFilter, QuizQuestion, UserAnswer } from './types';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
const QuizView = lazy(() => import('./components/QuizView').then((module) => ({ default: module.QuizView })));
const ResultView = lazy(() => import('./components/ResultView').then((module) => ({ default: module.ResultView })));
const StudyView = lazy(() => import('./components/StudyView').then((module) => ({ default: module.StudyView })));
const HistoryView = lazy(() => import('./components/HistoryView').then((module) => ({ default: module.HistoryView })));
import {
  shuffleArray,
  getBookmarks,
  toggleBookmark,
  getExamHistory,
  saveExamHistory,
  ExamHistoryItem,
  toMyanmarNumber
} from './utils/helpers';
import { sounds } from './utils/sound';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'result' | 'study' | 'history'>('home');
  const [studyInitialCategory, setStudyInitialCategory] = useState<ExamTopicFilter>('all');
  const [siteLanguage, setSiteLanguage] = useState<'en' | 'my'>(() => {
    try { return localStorage.getItem('thai_drive_site_language') === 'my' ? 'my' : 'en'; }
    catch { return 'en'; }
  });

  // Keep the interface in English and let learners reveal Myanmar translations.
  const lang: LanguageMode = 'en';
  const [showMyanmar, setShowMyanmar] = useState(() => {
    try { return localStorage.getItem('thai_drive_show_myanmar') === 'true'; }
    catch { return false; }
  });

  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [examHistory, setExamHistory] = useState<ExamHistoryItem[]>([]);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<ExamHistoryItem | null>(null);

  // Active quiz state
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizMode, setQuizMode] = useState<ExamMode>('instant');
  const [quizResults, setQuizResults] = useState<UserAnswer[]>([]);

  // Count by category
  const signsCount = useMemo(() => QUESTIONS_BANK.filter((q) => q.category === 'traffic_signs').length, []);
  const lawsCount = useMemo(() => QUESTIONS_BANK.filter((q) => q.category === 'traffic_laws').length, []);
  const safeDrivingCount = useMemo(() => QUESTIONS_BANK.filter((q) => q.category === 'safe_driving').length, []);
  const maintenanceCount = useMemo(() => QUESTIONS_BANK.filter((q) => q.category === 'vehicle_maintenance').length, []);
  const accidentPredictionCount = useMemo(() => QUESTIONS_BANK.filter((q) => q.category === 'accident_prediction').length, []);

  // Load bookmarks & history on mount
  useEffect(() => {
    setBookmarkedIds(getBookmarks());
    setExamHistory(getExamHistory());
  }, []);

  const handleToggleMyanmar = () => {
    setShowMyanmar((previous) => {
      const next = !previous;
      try { localStorage.setItem('thai_drive_show_myanmar', String(next)); } catch {}
      return next;
    });
  };

  const handleToggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  const handleToggleBookmark = (questionId: number) => {
    const isNowBookmarked = toggleBookmark(questionId);
    if (isNowBookmarked === null) {
      window.alert('Could not save this bookmark in browser storage. Check your browser settings and try again.');
      return;
    }

    setBookmarkedIds((prev) =>
      isNowBookmarked ? [...prev, questionId] : prev.filter((id) => id !== questionId)
    );
  };

  // Helper to start an exam with 50 random questions from selected pool
  const startExamWithItems = useCallback((items: QuestionItem[], mode: ExamMode) => {
    if (items.length === 0) {
      window.alert('No questions are available for this topic yet. Please choose another topic.');
      return;
    }

    // Select up to 50 items randomly
    const shuffledBank = shuffleArray(items);
    const selected = shuffledBank.slice(0, 50);

    const preparedQuestions: QuizQuestion[] = selected.map((q) => {
      // Shuffle options and retain correct answer index
      const shuffledOptions = shuffleArray(
        q.options.map((opt, origIdx) => ({
          ...opt,
          originalIndex: origIdx
        }))
      );

      return {
        id: q.id,
        category: q.category,
        image: q.image || null,
        q_th: q.q_th,
        q_en: q.q_en,
        q_my: q.q_my,
        options: shuffledOptions
      };
    });

    setSelectedHistoryItem(null);
    setQuizQuestions(preparedQuestions);
    setQuizMode(mode);
    setQuizResults([]);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Start new 50 Random Question Exam with selected topic
  const handleStartExam = (mode: ExamMode, topic: ExamTopicFilter = 'all') => {
    let pool = QUESTIONS_BANK;
    if (topic === 'traffic_signs') {
      pool = QUESTIONS_BANK.filter((q) => q.category === 'traffic_signs');
    } else if (topic === 'traffic_laws') {
      pool = QUESTIONS_BANK.filter((q) => q.category === 'traffic_laws');
    } else if (topic === 'safe_driving') {
      pool = QUESTIONS_BANK.filter((q) => q.category === 'safe_driving');
    } else if (topic === 'vehicle_maintenance') {
      pool = QUESTIONS_BANK.filter((q) => q.category === 'vehicle_maintenance');
    } else if (topic === 'accident_prediction') {
      pool = QUESTIONS_BANK.filter((q) => q.category === 'accident_prediction');
    }
    startExamWithItems(pool, mode);
  };

  // Retake exam with mistakes only
  const handleRetakeMistakes = (mistakeIds: number[]) => {
    const mistakeItems = QUESTIONS_BANK.filter((q) => mistakeIds.includes(q.id));
    if (mistakeItems.length > 0) {
      startExamWithItems(mistakeItems, 'instant');
    }
  };

  // Finish exam handler: score only answers that match the active question set.
  const handleFinishExam = (answers: UserAnswer[]) => {
    if (quizQuestions.length === 0) return;

    const normalizedAnswers: UserAnswer[] = quizQuestions.map((question, index) => {
      const answer = answers[index];
      const matchesQuestion = answer?.questionId === question.id;
      const selectedOptionIndex = matchesQuestion ? answer.selectedOptionIndex : -1;
      const selectedOption = selectedOptionIndex >= 0
        ? question.options[selectedOptionIndex]
        : undefined;

      return {
        questionId: question.id,
        selectedOptionIndex: selectedOption ? selectedOptionIndex : -1,
        isCorrect: selectedOption?.isCorrect === true
      };
    });

    setQuizResults(normalizedAnswers);
    const correctCount = normalizedAnswers.filter((answer) => answer.isCorrect).length;
    const total = quizQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= 90;

    sounds.playComplete(passed);

    // Save the normalized result so history and the result screen use the same score.
    const savedHistory = saveExamHistory({
      score: correctCount,
      total,
      percentage,
      passed,
      mode: quizMode,
      questions: quizQuestions,
      answers: normalizedAnswers
    });
    setExamHistory(getExamHistory());
    if (!savedHistory) {
      window.alert('Your result is ready, but this browser could not save it to practice history. Check your browser storage settings if you want future attempts to be saved.');
    }

    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    if (window.confirm('Clear all exam history? This cannot be undone.')) {
      try {
        localStorage.removeItem('thai_drive_exam_history');
        setExamHistory([]);
      } catch {
        window.alert('Could not clear practice history from browser storage. Check your browser settings and try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f3ee] text-[#19241e] flex flex-col font-sans selection:bg-[#f2b705] selection:text-black">
      {/* App Header */}
      <Header
        showMyanmar={showMyanmar}
        onToggleMyanmar={handleToggleMyanmar}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        currentView={currentView}
        onNavigate={(view) => {
          // Leaving a timed exam discards the in-progress attempt, so ask before unmounting it.
          if (
            currentView === 'quiz' &&
            quizMode === 'timed' &&
            !window.confirm('Leave this timed exam? Your current answers will not be saved.')
          ) {
            return;
          }
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarksCount={bookmarkedIds.length}
        totalQuestions={QUESTIONS_BANK.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6">
        <Suspense fallback={<div className="py-10 text-center text-sm text-slate-600" role="status">Loading practice screen…</div>}>
        {currentView === 'home' && (
          <HomeView
            lang={lang}
            totalQuestions={QUESTIONS_BANK.length}
            signsCount={signsCount}
            lawsCount={lawsCount}
            safeDrivingCount={safeDrivingCount}
            maintenanceCount={maintenanceCount}
            accidentPredictionCount={accidentPredictionCount}
            onStartExam={handleStartExam}
            onNavigateStudy={(cat) => {
              setStudyInitialCategory(cat || 'all');
              setCurrentView('study');
            }}
            recentHistory={examHistory}
            onViewHistoryDetails={(item) => {
              if (item.questions?.length && item.answers) {
                setSelectedHistoryItem(item);
                setCurrentView('history');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            bookmarkedCount={bookmarkedIds.length}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            questions={quizQuestions}
            mode={quizMode}
            lang={lang}
            showMyanmar={showMyanmar}
            onFinishExam={handleFinishExam}
            onExit={() => setCurrentView('home')}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {(currentView === 'result' || (currentView === 'history' && selectedHistoryItem !== null)) && (
          <ResultView
            questions={selectedHistoryItem?.questions ?? quizQuestions}
            answers={selectedHistoryItem?.answers ?? quizResults}
            lang={lang}
            showMyanmar={showMyanmar}
            mode={selectedHistoryItem?.mode ?? quizMode}
            totalQuestions={QUESTIONS_BANK.length}
            onRetakeNew={() => handleStartExam(selectedHistoryItem?.mode ?? quizMode, 'all')}
            onRetakeMistakes={handleRetakeMistakes}
            onNavigateStudy={() => setCurrentView('study')}
            onGoHome={() => {
              if (selectedHistoryItem) setSelectedHistoryItem(null);
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'study' && (
          <StudyView
            questions={QUESTIONS_BANK}
            lang={lang}
            showMyanmar={showMyanmar}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            initialCategory={studyInitialCategory}
          />
        )}

        {currentView === 'history' && !selectedHistoryItem && (
          <HistoryView
            history={examHistory}
            lang={lang}
            onClearHistory={handleClearHistory}
            onStartExam={() => handleStartExam('instant', 'all')}
            onViewDetails={(item) => {
              if (item.questions?.length && item.answers) {
                setSelectedHistoryItem(item);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />
        )}
        </Suspense>
      </main>

      <footer className="mt-auto border-t-4 border-[#f2b705] bg-[#123b2b] text-white">
        <div className="mx-auto max-w-4xl px-5 py-6 sm:px-6 sm:py-7">
          <div className="mb-5 flex justify-end">
            <div className="inline-flex items-center gap-0.5 rounded-full border border-emerald-100/30 bg-white/5 p-0.5" role="group" aria-label="Choose language">
              <button type="button" onClick={() => { setSiteLanguage('en'); try { localStorage.setItem('thai_drive_site_language', 'en'); } catch {} }} aria-pressed={siteLanguage === 'en'} className={`min-h-7 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${siteLanguage === 'en' ? 'bg-[#f2b705] text-[#19241e]' : 'text-white hover:bg-white/10'}`}>Eng</button>
              <span aria-hidden="true" className="text-xs text-emerald-100/60">|</span>
              <button type="button" onClick={() => { setSiteLanguage('my'); try { localStorage.setItem('thai_drive_site_language', 'my'); } catch {} }} aria-pressed={siteLanguage === 'my'} className={`min-h-7 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${siteLanguage === 'my' ? 'bg-[#f2b705] text-[#19241e]' : 'text-white hover:bg-white/10'}`}>မြန်မာ</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-8">
            <div className="min-w-0">
              <p className="m-0 text-base font-bold tracking-tight text-white">{siteLanguage === 'en' ? 'Driving License Practice' : 'ယာဉ်မောင်းလိုင်စင် လေ့ကျင့်ရေး'}</p>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-emerald-100/90">{siteLanguage === 'en' ? "Practice for Thailand's driving licence exam at your own pace." : 'ထိုင်းနိုင်ငံ ယာဉ်မောင်းလိုင်စင် စာမေးပွဲအတွက် မိမိအဆင်ပြေသည့်အချိန်တွင် လေ့ကျင့်ပါ။'}</p>
              <p className="mt-3 inline-flex rounded-full border border-emerald-100/25 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-50">{QUESTIONS_BANK.length} {siteLanguage === 'en' ? 'practice questions' : 'လေ့ကျင့်မေးခွန်း'}</p>
            </div>
            <nav aria-label={siteLanguage === 'en' ? 'Learning resources' : 'လေ့လာရန်'} className="min-w-0">
              <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#f2d36b]">{siteLanguage === 'en' ? 'Learn' : 'လေ့လာရန်'}</h2>
              <ul className="m-0 grid list-none grid-cols-2 gap-x-3 gap-y-1 p-0 sm:grid-cols-1">
                <li><a href="/study-guide.html" className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm text-emerald-50 underline decoration-emerald-100/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-white">{siteLanguage === 'en' ? 'Study Guide' : 'လေ့လာမှု လမ်းညွှန်'}</a></li>
                <li><a href="/faq.html" className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm text-emerald-50 underline decoration-emerald-100/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-white">{siteLanguage === 'en' ? 'FAQ' : 'မေးလေ့ရှိသော မေးခွန်းများ'}</a></li>
                <li><a href="/about.html" className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm text-emerald-50 underline decoration-emerald-100/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-white">{siteLanguage === 'en' ? 'About' : 'ကျွန်ုပ်တို့အကြောင်း'}</a></li>
              </ul>
            </nav>
            <nav aria-label={siteLanguage === 'en' ? 'Website information' : 'ဝက်ဘ်ဆိုက် အချက်အလက်'} className="min-w-0">
              <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#f2d36b]">{siteLanguage === 'en' ? 'Information' : 'အချက်အလက်'}</h2>
              <ul className="m-0 grid list-none grid-cols-2 gap-x-3 gap-y-1 p-0 sm:grid-cols-1">
                <li><a href="/privacy.html" className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm text-emerald-50 underline decoration-emerald-100/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-white">{siteLanguage === 'en' ? 'Privacy Policy' : 'ကိုယ်ရေးအချက်အလက် မူဝါဒ'}</a></li>
                <li><a href="/disclaimer.html" className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm text-emerald-50 underline decoration-emerald-100/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-white">{siteLanguage === 'en' ? 'Disclaimer' : 'ရှင်းလင်းချက်နှင့် ကန့်သတ်ချက်များ'}</a></li>
                <li><a href="/contact.html" className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm text-emerald-50 underline decoration-emerald-100/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-white">{siteLanguage === 'en' ? 'Contact / Report an issue' : 'ဆက်သွယ်ရန် / ပြဿနာတင်ပြရန်'}</a></li>
              </ul>
            </nav>
          </div>

          <div className="mt-5 border-t border-white/15 pt-4 sm:mt-6 sm:flex sm:items-start sm:justify-between sm:gap-6">
            <p className="m-0 max-w-2xl text-xs leading-relaxed text-emerald-100/85">{siteLanguage === 'en' ? "Independent practice resource. Not affiliated with or endorsed by Thailand's Department of Land Transport (DLT). The 90% practice target is not an official pass mark." : 'ဤဝက်ဘ်ဆိုက်သည် သီးခြားလွတ်လပ်သော လေ့ကျင့်ရေးအရင်းအမြစ်ဖြစ်ပြီး ထိုင်းနိုင်ငံ ကုန်းလမ်းပို့ဆောင်ရေးဦးစီးဌာန (DLT) နှင့် မသက်ဆိုင်သလို ၎င်း၏ ထောက်ခံအတည်ပြုမှုလည်း မရှိပါ။ ၉၀% လေ့ကျင့်ရမှတ်သည် တရားဝင်အောင်မှတ် မဟုတ်ပါ။'}</p>
            <p className="mt-3 shrink-0 text-xs text-emerald-100/70 sm:mt-0">© {new Date().getFullYear()} {siteLanguage === 'en' ? 'Driving License Practice' : 'ယာဉ်မောင်းလိုင်စင် လေ့ကျင့်ရေး'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
