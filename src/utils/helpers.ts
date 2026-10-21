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
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveExamHistory(item: Omit<ExamHistoryItem, 'id' | 'date'>): ExamHistoryItem {
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
    return {
      ...item,
      id: '1',
      date: 'Just now'
    };
  }
}

export function getBookmarks(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(questionId: number): boolean {
  try {
    const bookmarks = getBookmarks();
    let updated: number[];
    const isBookmarked = bookmarks.includes(questionId);
    if (isBookmarked) {
      updated = bookmarks.filter((id) => id !== questionId);
    } else {
      updated = [...bookmarks, questionId];
    }
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
    return !isBookmarked;
  } catch {
    return false;
  }
}
