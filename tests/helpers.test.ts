import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import {
  getBookmarks,
  getExamHistory,
  saveExamHistory,
  toggleBookmark,
  toMyanmarNumber,
  shuffleArray
} from '../src/utils/helpers';

const storage = new Map<string, string>();
let storageWriteFails = false;

Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem(key: string) {
      return storage.get(key) ?? null;
    },
    setItem(key: string, value: string) {
      if (storageWriteFails) throw new Error('Storage quota exceeded');
      storage.set(key, value);
    },
    removeItem(key: string) {
      storage.delete(key);
    },
    clear() {
      storage.clear();
    }
  }
});

beforeEach(() => {
  storage.clear();
  storageWriteFails = false;
});

afterEach(() => {
  storage.clear();
  storageWriteFails = false;
});

test('toMyanmarNumber converts digits and preserves other characters', () => {
  assert.equal(toMyanmarNumber('Score: 90% · 12'), 'Score: ၉၀% · ၁၂');
});

test('shuffleArray returns a shuffled copy without mutating the source', () => {
  const source = [1, 2, 3, 4, 5];
  const copy = shuffleArray(source);
  assert.notStrictEqual(copy, source);
  assert.deepEqual([...copy].sort(), source);
  assert.deepEqual(source, [1, 2, 3, 4, 5]);
});

test('getExamHistory ignores impossible records and accepts valid records', () => {
  storage.set('thai_drive_exam_history', JSON.stringify([
    { id: 'ok', date: 'Oct 23', score: 9, total: 10, percentage: 90, passed: true, mode: 'timed' },
    { id: 'bad-score', date: 'Oct 23', score: 11, total: 10, percentage: 100, passed: true, mode: 'instant' },
    { id: 'bad-percent', date: 'Oct 23', score: 5, total: 10, percentage: 99, passed: true, mode: 'instant' },
    { id: 'bad-mode', date: 'Oct 23', score: 5, total: 10, percentage: 50, passed: false, mode: 'unknown' },
    null
  ]));
  assert.deepEqual(getExamHistory().map((item) => item.id), ['ok']);
});

test('saveExamHistory returns null rather than claiming success when storage writes fail', () => {
  storageWriteFails = true;
  assert.equal(saveExamHistory({
    score: 9,
    total: 10,
    percentage: 90,
    passed: true,
    mode: 'instant'
  }), null);
});

test('getBookmarks removes invalid, unsafe, and duplicate IDs', () => {
  storage.set('thai_drive_bookmarks', JSON.stringify([2, 2, 0, -1, 1.5, '3', Number.MAX_SAFE_INTEGER + 1, 7]));
  assert.deepEqual(getBookmarks(), [2, 7]);
});

test('toggleBookmark validates IDs and reports persistence failures', () => {
  assert.equal(toggleBookmark(0), null);
  assert.equal(toggleBookmark(Number.MAX_SAFE_INTEGER + 1), null);
  assert.equal(toggleBookmark(12), true);
  assert.deepEqual(getBookmarks(), [12]);
  assert.equal(toggleBookmark(12), false);
  assert.deepEqual(getBookmarks(), []);
  storageWriteFails = true;
  assert.equal(toggleBookmark(13), null);
});
