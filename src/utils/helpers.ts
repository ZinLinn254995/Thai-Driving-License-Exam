import { ExamMode } from '../types';

const MM_DIGITS = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

export function toMyanmarNumber(num: number | string): string {
  return String(num).replace(/\d/g, (d) => MM_DIGITS[parseInt(d, 10)]);
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface ExamHistoryItem {
  id: string;
  date: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  mode: ExamMode;
}

const STORAGE_KEY_HISTORY = 'thai_drive_exam_history';
const STORAGE_KEY_BOOKMARKS = 'thai_drive_bookmarks';

export function getExamHistory(): ExamHistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // Ignore malformed entries so one damaged local record cannot break the History view.
    return parsed.filter((item): item is ExamHistoryItem => {
      if (!item || typeof item !== 'object') return false;
      const record = item as Partial<ExamHistoryItem>;
      return (
        typeof record.id === 'string' &&
        typeof record.date === 'string' &&
        typeof record.score === 'number' &&
        Number.isFinite(record.score) &&
        Number.isInteger(record.score) &&
        record.score >= 0 &&
        typeof record.total === 'number' &&
        Number.isFinite(record.total) &&
        Number.isInteger(record.total) &&
        record.total > 0 &&
        record.score <= record.total &&
        typeof record.percentage === 'number' &&
        Number.isFinite(record.percentage) &&
        Number.isInteger(record.percentage) &&
        record.percentage >= 0 &&
        record.percentage <= 100 &&
        record.percentage === Math.round((record.score / record.total) * 100) &&
        typeof record.passed === 'boolean' &&
        record.passed === (record.percentage >= 90) &&
        (record.mode === 'timed' || record.mode === 'instant')
      );
    }).slice(0, 30);
  } catch {
    return [];
  }
}

export function saveExamHistory(item: Omit<ExamHistoryItem, 'id' | 'date'>): ExamHistoryItem | null {
  try {
    const history = getExamHistory();
    const newItem: ExamHistoryItem = {
      ...item,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    const updated = [newItem, ...history].slice(0, 30);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(updated));
    return newItem;
  } catch {
    // Do not fabricate a successful-looking history item when storage fails.
    return null;
  }
}

export function getBookmarks(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return [...new Set(parsed.filter(
      (id): id is number => typeof id === 'number' && Number.isSafeInteger(id) && id > 0
    ))];
  } catch {
    return [];
  }
}

export function toggleBookmark(questionId: number): boolean | null {
  // null means the requested change could not be persisted.
  if (!Number.isSafeInteger(questionId) || questionId <= 0) return null;

  try {
    const bookmarks = getBookmarks();
    const isBookmarked = bookmarks.includes(questionId);
    const updated = isBookmarked
      ? bookmarks.filter((id) => id !== questionId)
      : [...bookmarks, questionId];

    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
    return !isBookmarked;
  } catch {
    return null;
  }
}
