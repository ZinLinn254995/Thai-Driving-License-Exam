import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { test } from 'node:test';
import { QUESTIONS_BANK } from '../src/data/questions';

const publicDir = join(process.cwd(), 'public');

test('question bank records have unique IDs, complete language fields, and one correct option', () => {
  assert.ok(QUESTIONS_BANK.length > 0, 'question bank should not be empty');
  const ids = new Set<number>();

  for (const question of QUESTIONS_BANK) {
    assert.ok(Number.isSafeInteger(question.id) && question.id > 0, `question ID should be a positive safe integer: ${question.id}`);
    assert.ok(!ids.has(question.id), `duplicate question ID: ${question.id}`);
    ids.add(question.id);

    assert.ok(question.q_en.trim(), `question ${question.id} is missing English text`);
    assert.ok(question.q_my.trim(), `question ${question.id} is missing Myanmar text`);
    assert.ok(question.q_th.trim(), `question ${question.id} is missing Thai text`);
    assert.equal(question.options.length, 4, `question ${question.id} should have four options`);
    assert.equal(
      question.options.filter((option) => option.isCorrect === true).length,
      1,
      `question ${question.id} should have exactly one correct option`
    );

    for (const option of question.options) {
      assert.ok(option.en?.trim(), `question ${question.id} has an option without English text`);
      assert.ok(option.my?.trim(), `question ${question.id} has an option without Myanmar text`);
    }
  }
});

test('local question images point to files that exist in the public directory', () => {
  const checkedPaths = new Set<string>();

  for (const question of QUESTIONS_BANK) {
    const image = question.image;
    if (!image || /^https?:\/\//i.test(image)) continue;

    const pathname = image.startsWith('/') ? image : `/${image}`;
    const target = resolve(publicDir, `.${pathname}`);
    assert.ok(
      target.startsWith(publicDir + '/') || target === publicDir,
      `question ${question.id} image path escapes public directory: ${image}`
    );
    checkedPaths.add(target);
  }

  for (const target of checkedPaths) {
    assert.ok(existsSync(target), `missing local question image: ${target.slice(publicDir.length)}`);
  }
});
