import React from 'react';
import { Volume2, VolumeX, BookOpen, CheckSquare, History, ShieldCheck } from 'lucide-react';
import { LanguageMode } from '../types';

interface HeaderProps {
  lang: LanguageMode;
  setLang: (lang: LanguageMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  currentView: 'home' | 'quiz' | 'study' | 'history' | 'result';
  onNavigate: (view: 'home' | 'study' | 'history') => void;
  bookmarksCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  soundEnabled,
  onToggleSound,
  currentView,
  onNavigate,
  bookmarksCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0b5d3b] text-white shadow-md border-b-4 border-[#074028]">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Logo & Title */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#f2b705] text-[#19241e] font-black flex items-center justify-center text-xl shadow-sm border-2 border-white/90 group-hover:scale-105 transition-transform">
              ๕၀
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-lg text-white">
                  Thai Drive Exam
                </span>
                <span className="bg-[#f2b705] text-[#19241e] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                  521 Questions
                </span>
              </div>
              <p className="text-xs text-[#cfe9da] font-myanmar -mt-0.5">
                ထိုင်းယာဉ်မောင်းလိုင်စင် မေးခွန်းလေ့ကျင့်ရန် (၅၂၁ ပုဒ်)
              </p>
            </div>
          </div>

          {/* Controls: 2 Language Modes & Sound */}
          <div className="flex items-center gap-2 justify-between sm:justify-end">
            {/* The 2 Language Modes requested: Thai + Myanmar & English + Myanmar */}
            <div className="flex items-center bg-[#074028] p-1 rounded-xl border border-white/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('th_my')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  lang === 'th_my'
                    ? 'bg-[#f2b705] text-[#19241e] font-black shadow-xs'
                    : 'text-[#cfe9da] hover:text-white'
                }`}
                title="ไทย (Primary) + မြန်မာ (Sub)"
              >
                <span>🇹🇭 ไทย</span>
                <span className="opacity-70 text-[10px]">+ မြန်မာ</span>
              </button>

              <button
                type="button"
                onClick={() => setLang('en_my')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  lang === 'en_my'
                    ? 'bg-[#f2b705] text-[#19241e] font-black shadow-xs'
                    : 'text-[#cfe9da] hover:text-white'
                }`}
                title="English (Primary) + မြန်မာ (Sub)"
              >
                <span>🇬🇧 English</span>
                <span className="opacity-70 text-[10px]">+ မြန်မာ</span>
              </button>
            </div>

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={onToggleSound}
              className="p-2 rounded-xl bg-[#074028] hover:bg-[#063320] text-[#cfe9da] hover:text-white border border-white/10 transition-colors shrink-0"
              title={soundEnabled ? 'Mute sound' : 'Enable sound'}
              aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="text-red-300" />}
            </button>
          </div>
        </div>

        {/* Sub Nav Bar */}
        <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-white/10 text-xs overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
              currentView === 'home' || currentView === 'quiz' || currentView === 'result'
                ? 'bg-white/20 text-white font-semibold'
                : 'text-[#cfe9da] hover:text-white hover:bg-white/10'
            }`}
          >
            <CheckSquare size={13} />
            <span>စာမေးပွဲ (Random 50 Exam)</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('study')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
              currentView === 'study'
                ? 'bg-white/20 text-white font-semibold'
                : 'text-[#cfe9da] hover:text-white hover:bg-white/10'
            }`}
          >
            <BookOpen size={13} />
            <span>မေးခွန်း ၁၉၁ ခုလုံး (All Bank)</span>
            {bookmarksCount > 0 && (
              <span className="bg-[#f2b705] text-[#19241e] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {bookmarksCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('history')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
              currentView === 'history'
                ? 'bg-white/20 text-white font-semibold'
                : 'text-[#cfe9da] hover:text-white hover:bg-white/10'
            }`}
          >
            <History size={13} />
            <span>မှတ်တမ်းများ (History)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
