import React from 'react';
import { Volume2, VolumeX, BookOpen, CheckSquare, History, Languages } from 'lucide-react';

interface HeaderProps {
  showMyanmar: boolean;
  onToggleMyanmar: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  currentView: 'home' | 'quiz' | 'study' | 'history' | 'result';
  onNavigate: (view: 'home' | 'study' | 'history') => void;
  bookmarksCount: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({ showMyanmar, onToggleMyanmar, soundEnabled, onToggleSound, currentView, onNavigate, bookmarksCount, totalQuestions }) => (
  <header className="sticky top-0 z-40 bg-[#0b5d3b] text-white shadow-md border-b-4 border-[#074028]">
    <div className="max-w-4xl mx-auto px-4 py-2.5 sm:py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
        <button type="button" onClick={() => onNavigate('home')} className="flex items-center gap-3 text-left group select-none">
          <span className="w-10 h-10 rounded-xl bg-[#f2b705] text-[#19241e] font-black flex items-center justify-center text-xl border-2 border-white/90 shrink-0">TH</span>
          <span>
            <span className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-lg">Driving Test Practice</span>
              <span className="bg-[#f2b705] text-[#19241e] text-[10px] font-bold px-1.5 py-0.5 rounded">{totalQuestions} Questions</span>
            </span>
            <span className="block text-xs text-[#cfe9da]">English practice · Myanmar translations available</span>
          </span>
        </button>
        <div className="flex items-center gap-2 justify-between sm:justify-end">
          <button type="button" onClick={onToggleMyanmar} aria-pressed={showMyanmar}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#074028] hover:bg-[#063320] border border-white/10 text-xs font-semibold transition-colors">
            <Languages size={15} />{showMyanmar ? 'Hide Myanmar' : 'Show Myanmar'}
          </button>
          <button type="button" onClick={onToggleSound}
            className="p-2 rounded-xl bg-[#074028] hover:bg-[#063320] text-[#cfe9da] hover:text-white border border-white/10 transition-colors shrink-0"
            title={soundEnabled ? 'Mute sound' : 'Enable sound'} aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}>
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} className="text-red-300" />}
          </button>
        </div>
      </div>
      <nav aria-label="Main navigation" className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-white/10 text-xs overflow-x-auto no-scrollbar">
        <button type="button" onClick={() => onNavigate('home')} aria-current={currentView === 'home' || currentView === 'quiz' || currentView === 'result' ? 'page' : undefined} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap ${currentView === 'home' || currentView === 'quiz' || currentView === 'result' ? 'bg-white/20 text-white font-semibold' : 'text-[#cfe9da] hover:text-white hover:bg-white/10'}`}>
          <CheckSquare size={13} /><span>Practice Test</span>
        </button>
        <button type="button" onClick={() => onNavigate('study')} aria-current={currentView === 'study' ? 'page' : undefined} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap ${currentView === 'study' ? 'bg-white/20 text-white font-semibold' : 'text-[#cfe9da] hover:text-white hover:bg-white/10'}`}>
          <BookOpen size={13} /><span>Question Bank ({totalQuestions})</span>
          {bookmarksCount > 0 && <span className="bg-[#f2b705] text-[#19241e] text-[10px] font-bold px-1.5 py-0.2 rounded-full">{bookmarksCount}</span>}
        </button>
        <button type="button" onClick={() => onNavigate('history')} aria-current={currentView === 'history' ? 'page' : undefined} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap ${currentView === 'history' ? 'bg-white/20 text-white font-semibold' : 'text-[#cfe9da] hover:text-white hover:bg-white/10'}`}>
          <History size={13} /><span>History</span>
        </button>
      </nav>
    </div>
  </header>
);
