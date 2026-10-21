# Content Remediation Plan — AdSense Readiness

**Status:** Planned; do not treat existing question-bank content as cleared.
**Scope:** Thai driving-license practice app, 440-question bank, multilingual text, and referenced images.
**Last reviewed:** 2026-10-22

## Why this work is required

The repository's content-generation scripts identify `thaidriveexam.com` as the source for the existing question sets and images. The current repository does not contain evidence that the project has permission to reproduce or commercially monetize that site's questions or images. A public attribution or source URL is not a reuse license.

Search results reviewed on 2026-10-22 did not establish an explicit reuse license or commercial permission for those materials. This is not proof that permission does not exist; it means permission remains **unverified** until the rights holder provides written authorization or a clear applicable license is found.

The Thai Anti-Fake News Center reported that the Department of Land Transport clarified that thaidriveexam.com is not the official DLT website. The app must not imply government affiliation or endorsement.

## Release gates

Do not apply for AdSense, and do not describe the question bank as officially approved, until all applicable gates below are complete.

- [ ] **Rights:** Written permission or a clearly applicable license is recorded for each reused question, translation, and image; otherwise replace it.
- [ ] **Accuracy:** Each active question and answer key is checked against an authoritative, current source by a competent reviewer.
- [ ] **Translations:** English and Burmese versions are reviewed for meaning, clarity, and safety; machine translation alone is not approval.
- [ ] **Images:** Every image has documented ownership, permission, or a compatible license. Replace unverified images with original diagrams or properly licensed assets.
- [ ] **Attribution:** Required credit and license terms are displayed where applicable. Attribution does not substitute for permission.
- [ ] **Editorial value:** Pages include original explanations and learning value rather than simply republishing a question-and-answer bank.
- [ ] **Site identity:** The site clearly states it is an independent practice tool and is not an official DLT service.
- [ ] **Technical checks:** Re-run build/tests, verify mobile navigation, crawlable policy pages, sitemap, canonical URLs, and working contact route.

## Recommended execution order

### Phase A — Freeze and classify

1. Keep the current question bank unchanged while the audit register is used to track status.
2. Treat every question and image whose permission is undocumented as **not cleared for monetized publication**.
3. Use `docs/adsense/question-review-register.csv` as the source of truth for per-question review.
4. Do not infer permission from the fact that a page is publicly accessible or that a script can download its images.

### Phase B — Pilot an independently authored replacement set

1. Select a small pilot batch of 10 questions from one category.
2. Draft new questions in original wording from authoritative primary materials, not by paraphrasing the existing third-party questions.
3. For every draft, record a primary-source URL, relevant section/page, source publication/update date when available, reviewer, and review date.
4. Separate legal/factual validation from translation review.
5. Use only original diagrams created for this project or assets with recorded reuse terms.
6. Keep a question out of the active bank if the source is ambiguous, outdated, or cannot support the marked answer.
7. Run structural validation and manually test the questions in the app before expanding the pilot.

### Phase C — Replace in small, verifiable batches

1. Replace only batches that have passed rights, factual, translation, and image checks.
2. Preserve stable IDs only when the item remains conceptually the same and its history can be tracked; otherwise create a new ID and retire the old one.
3. Track retired questions so unverified content is not accidentally reintroduced by build scripts.
4. Add original explanations for why an answer is correct and why plausible alternatives are unsafe or incorrect, where supported by sources.
5. Re-run the question-bank audit after each batch and update the register.

### Phase D — Re-check monetization readiness

1. Re-crawl all public routes and check for broken links, empty pages, and misleading claims.
2. Confirm the About, Privacy, Disclaimer, and Contact pages are accurate and accessible.
3. Check Search Console for indexing/canonical issues after the site changes.
4. Re-read current AdSense policies immediately before applying.
5. Apply only when the content-rights and accuracy release gates are evidenced, not merely because the technical build passes.

## Source discovery starting points

Use these as research starting points, not as blanket permission to copy text or images:

- Department of Land Transport official site: https://www.dlt.go.th/
- DLT legal information portal: https://legal.dlt.go.th/
- DLT provincial office portal (example, Tak): https://tak.dlt.go.th/
- Thai Anti-Fake News Center clarification that thaidriveexam.com is not the official DLT website: https://www.antifakenewscenter.com/

A primary source may establish a rule or fact without granting copyright permission to reproduce its page, illustrations, or formatted questions. Create original teaching material from verified facts and document the source of each factual claim.

## Per-question minimum evidence

For a question to be marked ready, the register should contain:

- Source URL and precise page/section supporting the answer.
- Reviewer identity or role and review date.
- A short rationale for the correct answer.
- English and Burmese translation review status.
- Image source and license/permission evidence, or confirmation that the image is original.
- Final status: `ready`, `needs-review`, `replace`, or `retired`.

Blank fields mean **not verified**, never approved by default.

## Current decision

The existing bank has passed structural checks only. Those checks do not establish factual correctness, legal currency, translation quality, or reuse rights. Keep AdSense application blocked until the evidence above is complete.
