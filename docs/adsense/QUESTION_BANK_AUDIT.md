# Question Bank Structural Audit

**Audit date:** 2026-10-22  
**Scope:** `src/data/questions.ts` on `seo-adsense-readiness-phase-1`  
**Audit type:** Automated structural checks only — not a legal, factual, translation, or road-safety review.

## Inventory

| Category | Items |
|---|---:|
| Traffic signs and markings | 117 |
| Traffic laws | 74 |
| Safe driving | 249 |
| **Total** | **440** |
| Answer options | 1,760 |
| Questions with image references | 160 |
| Answer options with image references | 20 |

## Structural checks performed

| Check | Result |
|---|---|
| Total question objects | 440 |
| Unique question IDs | 440; no duplicate IDs found |
| Questions with at least one answer option | 440; none empty |
| Questions with exactly one option marked correct | 440; no structural exceptions found |
| Empty Thai/English/Burmese question or option strings | None found |
| Question/option translations exactly equal to Thai source text | None found by exact-string comparison |

## What these results do not prove

- An answer marked `isCorrect: true` is factually correct or legally current.
- The Thai source wording is accurate, complete, or suitable for the real licensing exam.
- English or Burmese translations preserve the intended legal or safety meaning.
- Question and answer text may be reused commercially.
- Any referenced image is owned by the project or licensed for reuse and monetization.

Repository scripts identify third-party source material for the three categories and show image downloads from `thaidriveexam.com`. Therefore, passing structural checks does not clear the question bank for AdSense. See [CONTENT_PROVENANCE_AUDIT.md](./CONTENT_PROVENANCE_AUDIT.md).

## Required next review

1. Resolve reuse rights for all third-party question text, answer keys, translations and images, or replace unlicensed content.
2. Build a question-level review register containing question ID, official source used to verify the rule, answer-key reviewer, translation reviewer, image license, and review date.
3. Prioritize traffic-law and safety-critical questions for review by a qualified person familiar with current Thai driving rules.
4. Re-run this structural audit after content changes and review the final website on mobile and desktop.

**Decision:** Structural integrity looks good in the checks above, but content rights and factual accuracy remain unverified. Do not treat this report as approval to monetize the existing bank.
