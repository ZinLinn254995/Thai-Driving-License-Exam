/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { QUESTIONS_BANK, QuestionItem } from './data/questions';
import { LanguageMode, ExamMode, ExamTopicFilter, QuizQuestion, UserAnswer } from './types';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { StudyView } from './components/StudyView';
import { HistoryView } from './components/HistoryView';
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

  // Keep the interface in English and let learners reveal Myanmar translations.
  const lang: LanguageMode = 'en';
  const [showMyanmar, setShowMyanmar] = useState(() => {
    try { return localStorage.getItem('thai_drive_show_myanmar') === 'true'; }
    catch { return false; }
  });

  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  const [examHistory, setExamHistory] = useState<ExamHistoryItem[]>([]);

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

  // Finish exam handler
  const handleFinishExam = (answers: UserAnswer[]) => {
    setQuizResults(answers);
    const correctCount = answers.filter((a) => a.isCorrect).length;
    const total = answers.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= 90;

    sounds.playComplete(passed);

    // Save to history
    saveExamHistory({
      score: correctCount,
      total,
      percentage,
      passed,
      mode: quizMode
    });
    setExamHistory(getExamHistory());

    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    if (window.confirm('Clear all exam history? This cannot be undone.')) {
      try {
        localStorage.removeItem('thai_drive_exam_history');
        setExamHistory([]);
      } catch {}
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
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarksCount={bookmarkedIds.length}
        totalQuestions={QUESTIONS_BANK.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6">
        {currentView === 'home' && (
          <HomeView
            lang={lang}
            showMyanmar={showMyanmar}
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

        {currentView === 'result' && (
          <ResultView
            questions={quizQuestions}
            answers={quizResults}
            lang={lang}
            showMyanmar={showMyanmar}
            totalQuestions={QUESTIONS_BANK.length}
            onRetakeNew={() => handleStartExam(quizMode, 'all')}
            onRetakeMistakes={handleRetakeMistakes}
            onNavigateStudy={() => setCurrentView('study')}
            onGoHome={() => setCurrentView('home')}
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

        {currentView === 'history' && (
          <HistoryView
            history={examHistory}
            lang={lang}
            showMyanmar={showMyanmar}
            onClearHistory={handleClearHistory}
            onStartExam={() => handleStartExam('instant', 'all')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white/70 py-4 text-center text-xs text-slate-500 font-myanmar">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>{`Driving License Practice · ${QUESTIONS_BANK.length} Questions`}</div>
          <div className="flex items-center gap-3 text-[11px] font-sans">
            <span className="text-[#0b5d3b] font-bold">Practice target: 90% (not an official pass mark)</span>
            <span>·</span>
            <a
              href="https://thaidriveexam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 underline"
            >
              thaidriveexam.com
            </a>
          </div>
        </div>
        <nav aria-label="Site information" className="max-w-4xl mx-auto px-4 mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 font-sans text-[11px]">
          <a href="/study-guide.html" className="underline hover:text-slate-900">Study Guide</a>
          <a href="/faq.html" className="underline hover:text-slate-900">FAQ</a>
          <a href="/about.html" className="underline hover:text-slate-900">About</a>
          <a href="/privacy.html" className="underline hover:text-slate-900">Privacy</a>
          <a href="/disclaimer.html" className="underline hover:text-slate-900">Disclaimer</a>
          <a href="/contact.html" className="underline hover:text-slate-900">Contact / Report an issue</a>
        </nav>
        <p className="mt-2 px-4 text-[10px] text-slate-500 font-sans">
          Independent study resource; not affiliated with Thailand’s Department of Land Transport.
        </p>
      </footer>
    </div>
  );
}
