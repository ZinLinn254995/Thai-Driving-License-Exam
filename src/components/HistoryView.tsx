import React from 'react';
import { History, Award, CheckCircle2, XCircle, Trash2, RotateCcw, ArrowRight } from 'lucide-react';
import { ExamHistoryItem, toMyanmarNumber } from '../utils/helpers';

interface HistoryViewProps {
  history: ExamHistoryItem[];
  onClearHistory: () => void;
  onStartExam: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  onClearHistory,
  onStartExam
}) => {
  const totalAttempts = history.length;
  const passedAttempts = history.filter((h) => h.passed).length;
  const passRate = totalAttempts > 0 ? Math.round((passedAttempts / totalAttempts) * 100) : 0;
  const avgScore =
    totalAttempts > 0
      ? Math.round(history.reduce((acc, h) => acc + h.score, 0) / totalAttempts)
      : 0;

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Header Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-myanmar">
            စာမေးပွဲ ဖြေဆိုမှတ်တမ်းများ
          </h2>
          <p className="text-xs text-slate-500 font-myanmar">
            ယခင်ဖြေဆိုခဲ့သော ရလဒ်များနှင့် အောင်မြင်မှုရာခိုင်နှုန်း
          </p>
        </div>

        {history.length > 0 && (
          <button
            type="button"
            onClick={onClearHistory}
            className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-xl transition-colors font-medium"
            title="Clear history"
          >
            <Trash2 size={14} />
            <span>မှတ်တမ်းဖျက်မည်</span>
          </button>
        )}
      </div>

      {/* Summary Cards */}
      {totalAttempts > 0 && (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-black text-slate-900 leading-none">
              {toMyanmarNumber(totalAttempts)}
            </div>
            <div className="text-[11px] text-slate-500 font-myanmar mt-1">
              ဖြေဆိုကြိမ်ရေ
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-black text-emerald-700 leading-none">
              {toMyanmarNumber(passRate)}%
            </div>
            <div className="text-[11px] text-slate-500 font-myanmar mt-1">
              အောင်ချက်
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-black text-[#0b5d3b] leading-none">
              {toMyanmarNumber(avgScore)} <span className="text-xs text-slate-400 font-normal">/ ၅၀</span>
            </div>
            <div className="text-[11px] text-slate-500 font-myanmar mt-1">
              ပျမ်းမျှရမှတ်
            </div>
          </div>
        </div>
      )}

      {/* History Items List */}
      <div className="space-y-3">
        {history.length > 0 ? (
          history.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white shrink-0 ${
                    item.passed ? 'bg-emerald-600' : 'bg-red-600'
                  }`}
                >
                  {item.percentage}%
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 font-myanmar">
                      ရမှတ်: {toMyanmarNumber(item.score)} / {toMyanmarNumber(item.total)}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.passed
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.passed ? 'အောင်မြင် ✔' : 'မအောင်သေး ✘'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.date} ·{' '}
                    <span className="font-myanmar">
                      {item.mode === 'timed' ? 'အချိန်ကန့်သတ်စာမေးပွဲ' : 'လေ့ကျင့်ရေးမုဒ်'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onStartExam}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                title="Retake exam"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-500 font-myanmar border border-slate-200 space-y-3">
            <History size={32} className="mx-auto text-slate-300" />
            <p className="font-bold text-slate-700">ဖြေဆိုမှတ်တမ်း မရှိသေးပါ</p>
            <p className="text-xs text-slate-500">
              ကျပန်းမေးခွန်း ၅၀ စာမေးပွဲကို စတင်ဖြေဆိုကြည့်ပါ။
            </p>
            <button
              type="button"
              onClick={onStartExam}
              className="mt-2 px-4 py-2.5 rounded-xl bg-[#f2b705] hover:bg-[#e0a800] text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>စာမေးပွဲ စတင်မည်</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
