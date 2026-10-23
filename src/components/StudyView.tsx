import React, { useState, useMemo } from 'react';
import { Search, Bookmark, CheckCircle2, BookOpen, ShieldCheck, Scale, X, Layers, Car, Wrench, AlertTriangle } from 'lucide-react';
import { QuestionItem } from '../data/questions';
import { LanguageMode, QuestionCategory } from '../types';
import { toMyanmarNumber } from '../utils/helpers';
import { AdSlot } from './AdSlot';

interface StudyViewProps {
  questions: QuestionItem[];
  lang: LanguageMode;
  showMyanmar: boolean;
  bookmarkedIds: number[];
  onToggleBookmark: (questionId: number) => void;
  initialCategory?: string;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const StudyView: React.FC<StudyViewProps> = ({
  questions,
  lang,
  showMyanmar,
  bookmarkedIds,
  onToggleBookmark,
  initialCategory
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'traffic_signs' | 'traffic_laws' | 'safe_driving' | 'vehicle_maintenance' | 'accident_prediction' | 'bookmarked'>(
    (initialCategory as 'all' | 'traffic_signs' | 'traffic_laws' | 'safe_driving' | 'vehicle_maintenance' | 'accident_prediction') || 'all'
  );

  const signsCount = useMemo(() => questions.filter((q) => q.category === 'traffic_signs').length, [questions]);
  const lawsCount = useMemo(() => questions.filter((q) => q.category === 'traffic_laws').length, [questions]);
  const safeDrivingCount = useMemo(() => questions.filter((q) => q.category === 'safe_driving').length, [questions]);
  const maintenanceCount = useMemo(() => questions.filter((q) => q.category === 'vehicle_maintenance').length, [questions]);
  const accidentCount = useMemo(() => questions.filter((q) => q.category === 'accident_prediction').length, [questions]);

  const filteredQuestions = useMemo(() => {
    let list = questions;

    if (categoryFilter === 'traffic_signs') {
      list = list.filter((q) => q.category === 'traffic_signs');
    } else if (categoryFilter === 'traffic_laws') {
      list = list.filter((q) => q.category === 'traffic_laws');
    } else if (categoryFilter === 'safe_driving') {
      list = list.filter((q) => q.category === 'safe_driving');
    } else if (categoryFilter === 'vehicle_maintenance') {
      list = list.filter((q) => q.category === 'vehicle_maintenance');
    } else if (categoryFilter === 'accident_prediction') {
      list = list.filter((q) => q.category === 'accident_prediction');
    } else if (categoryFilter === 'bookmarked') {
      list = list.filter((q) => bookmarkedIds.includes(q.id));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        const matchesNum = String(item.id) === q || toMyanmarNumber(item.id) === q;
        const matchesBurmese = showMyanmar && (item.q_my.toLowerCase().includes(q) || item.options.some((o) => o.my.toLowerCase().includes(q)));
        const matchesEnglish = item.q_en.toLowerCase().includes(q) || item.options.some((o) => o.en.toLowerCase().includes(q));
        return matchesNum || matchesBurmese || matchesEnglish;
      });
    }

    return list;
  }, [questions, categoryFilter, bookmarkedIds, searchQuery, showMyanmar]);

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Search & Filter Header Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-myanmar">
            {lang === 'en'
              ? `Study All ${questions.length} Exam Questions`
              : `မေးခွန်း ${toMyanmarNumber(questions.length)} ခုလုံး လေ့လာဖတ်ရှုရန်`}
          </h2>
          <p className="text-xs text-slate-500 font-myanmar">
            {lang === 'en'
              ? `Traffic Signs (${signsCount}), Traffic Laws (${lawsCount}), Safe Driving (${safeDrivingCount}), Vehicle Maintenance (${maintenanceCount}), and Accident Prediction (${accidentCount}) with answers.`
              : `Traffic Signs (${toMyanmarNumber(signsCount)})၊ Traffic Laws (${toMyanmarNumber(lawsCount)})၊ Safe Driving (${toMyanmarNumber(safeDrivingCount)})၊ Maintenance (${toMyanmarNumber(maintenanceCount)}) နှင့် Accident Prediction (${toMyanmarNumber(accidentCount)}) မေးခွန်းနှင့် အဖြေများ`}
          </p>
        </div>

        {/* Filter Pills for Categories */}
        <div className="flex items-center flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setCategoryFilter('all')}
            aria-pressed={categoryFilter === 'all'}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
              categoryFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers size={13} />
            <span>{lang === 'en' ? `All (${questions.length})` : `အားလုံး (${questions.length})`}</span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('traffic_signs')}
            aria-pressed={categoryFilter === 'traffic_signs'}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
              categoryFilter === 'traffic_signs'
                ? 'bg-white text-emerald-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck size={13} className="text-emerald-700" />
            <span>{lang === 'en' ? `Signs (${signsCount})` : `Signs (${signsCount})`}</span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('traffic_laws')}
            aria-pressed={categoryFilter === 'traffic_laws'}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
              categoryFilter === 'traffic_laws'
                ? 'bg-white text-blue-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Scale size={13} className="text-blue-700" />
            <span>{lang === 'en' ? `Laws (${lawsCount})` : `Laws (${lawsCount})`}</span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('safe_driving')}
            aria-pressed={categoryFilter === 'safe_driving'}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
              categoryFilter === 'safe_driving'
                ? 'bg-white text-amber-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Car size={13} className="text-amber-700" />
            <span>{lang === 'en' ? `Safe (${safeDrivingCount})` : `Safe (${safeDrivingCount})`}</span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('vehicle_maintenance')}
            aria-pressed={categoryFilter === 'vehicle_maintenance'}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
              categoryFilter === 'vehicle_maintenance'
                ? 'bg-white text-purple-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wrench size={13} className="text-purple-700" />
            <span>{lang === 'en' ? `Maintenance (${maintenanceCount})` : `Maintenance (${maintenanceCount})`}</span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('accident_prediction')}
            aria-pressed={categoryFilter === 'accident_prediction'}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
              categoryFilter === 'accident_prediction'
                ? 'bg-white text-rose-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle size={13} className="text-rose-700" />
            <span>{lang === 'en' ? `Accident (${accidentCount})` : `Accident (${accidentCount})`}</span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('bookmarked')}
            aria-pressed={categoryFilter === 'bookmarked'}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
              categoryFilter === 'bookmarked'
                ? 'bg-white text-amber-900 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bookmark size={13} className={bookmarkedIds.length > 0 ? 'fill-current text-amber-500' : ''} />
            <span>{lang === 'en' ? `Bookmarks (${bookmarkedIds.length})` : `မှတ်သားထား (${bookmarkedIds.length})`}</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            aria-label="Search questions by keyword or question number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'en'
                ? 'Search questions or question numbers...'
                : 'Search questions or question numbers...'
            }
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5d3b]/30 focus:border-[#0b5d3b] bg-slate-50/50"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear question search"
              title="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      <AdSlot placement="study" />

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1" role="status" aria-live="polite" aria-atomic="true">
        <span>
          {lang === 'en' ? (
            <>
              Found questions:{' '}
              <strong className="text-slate-900 font-bold">{filteredQuestions.length}</strong>
            </>
          ) : (
            <>
              ရှာဖွေတွေ့ရှိသော မေးခွန်း:{' '}
              <strong className="text-slate-900 font-bold">{toMyanmarNumber(filteredQuestions.length)}</strong> ခု
            </>
          )}
        </span>
      </div>

      {/* Questions Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => {
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-3"
              >
                {/* Header: Category Badge and Bookmark */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    {q.category === 'traffic_signs' ? (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                        <ShieldCheck size={12} />
                        <span>Traffic Signs and markings</span>
                      </span>
                    ) : q.category === 'safe_driving' ? (
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 flex items-center gap-1">
                        <Car size={12} />
                        <span>Safe driving</span>
                      </span>
                    ) : q.category === 'vehicle_maintenance' ? (
                      <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 flex items-center gap-1">
                        <Wrench size={12} />
                        <span>Vehicle maintenance</span>
                      </span>
                    ) : q.category === 'accident_prediction' ? (
                      <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200 flex items-center gap-1">
                        <AlertTriangle size={12} />
                        <span>Accident prediction</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 flex items-center gap-1">
                        <Scale size={12} />
                        <span>Traffic laws</span>
                      </span>
                    )}
                    <span className="text-xs font-semibold text-slate-400">
                      #{q.id}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleBookmark(q.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked
                        ? 'text-amber-500 bg-amber-50'
                        : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                    }`}
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
                    aria-label={isBookmarked ? 'Remove question bookmark' : 'Bookmark question'}
                    aria-pressed={isBookmarked}
                  >
                    <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Question Image (if present) */}
                  {q.image && (
                    <div className="w-28 h-28 sm:w-32 sm:h-32 bg-slate-50 rounded-xl border border-slate-100 p-2 flex items-center justify-center shrink-0 self-center sm:self-start">
                      <img
                        src={q.image}
                        alt={`Question ${q.id}`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Question and Options */}
                  <div className="flex-1 space-y-3 w-full">
                    {/* Question text */}
                    {<>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">{q.q_en}</h3>
                        {showMyanmar && <p className="text-xs font-myanmar text-slate-500 leading-relaxed mt-0.5">{q.q_my}</p>}
                      </>}

                    {/* 4 Choices with Correct Answer highlighted */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const letter = OPTION_LETTERS[optIdx];
                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-xl border transition-all ${
                              opt.isCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-400/40'
                                : 'bg-slate-50/70 border-slate-200 text-slate-600'
                            }`}
                          >
                            <div className="flex items-start gap-1.5">
                              <span
                                className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                                  opt.isCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-slate-200 text-slate-600'
                                  }`}
                              >
                                {letter}
                              </span>

                              <div className="flex-1 space-y-1">
                                {opt.image && (
                                  <div className="mb-1 p-1 bg-white rounded border border-slate-200 inline-block">
                                    <img
                                      src={opt.image}
                                      alt={`Option ${letter}`}
                                      className="max-h-20 w-auto object-contain"
                                    />
                                  </div>
                                )}

                                {<>
                                    <div className="font-semibold leading-tight text-slate-900">{opt.en}</div>
                                    {showMyanmar && <div className="font-myanmar text-xs text-slate-500 leading-relaxed mt-0.5">{opt.my}</div>}
                                  </>}
                              </div>

                              {opt.isCorrect && (
                                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-500 font-myanmar border border-slate-200">
            <BookOpen size={32} className="mx-auto text-slate-300 mb-2" />
            <p className="font-bold text-slate-700">
              {lang === 'en' ? 'No Questions Found' : 'ရှာမတွေ့ပါ'}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'en'
                ? 'Try a different keyword or reset the category filter.'
                : 'ရှာဖွေမှုစကားလုံး အစားထိုး၍ ပြန်လည်စစ်ဆေးကြည့်ပါ။'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0b5d3b] px-4 py-2 text-sm font-bold text-white hover:bg-[#08482e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5d3b]"
            >
              Reset search and filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
