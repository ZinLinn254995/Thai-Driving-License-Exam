# Traffic-sign and question-bank audit — 2026-10-23

## Scope reviewed
- Data file: `src/data/questions.ts`
- The bank declares 598 questions: 117 traffic-signs-and-markings, 74 traffic-laws, 249 safe-driving, 81 vehicle-maintenance, and 77 accident-prediction.
- The first 117 traffic-sign questions point to `/exam_images/q_001.webp` through `/exam_images/q_117.webp`.
- The source comments link topic collections to article pages on thaidriveexam.com. The current repo therefore needs a rights/provenance review before this content is monetized. Attribution alone does not establish permission to reproduce another site's questions or images.

## Image integrity flags
The Git tree reports unusually small files in the numbered image series:
- `q_023.webp` — 1,588 bytes
- `q_032.webp` — 748 bytes
- `q_042.webp` — 960 bytes
- `q_047.webp` — 1,954 bytes
- `q_114.webp` — 1,242 bytes
- `q_006.webp` — 2,256 bytes

These are review flags, not proof that the images are wrong; a simple sign image can legitimately be small. The source connector can inspect text and file metadata but did not expose the binary image pixels for direct visual comparison in this audit. Do not silently replace these files or guess which sign each image should depict without visually checking them against the question and an authoritative reference.

## Recommended authoritative references for the visual review
- Thailand Department of Highways: traffic-sign standards and manuals: https://www.doh.go.th/content/201
- Office of Transport and Traffic Policy and Planning: traffic-sign manuals and standards: https://www.otp.go.th/post/view/2098
- Wikimedia Commons file pages for individual Thai government traffic signs can identify public-domain status under Thai copyright law; verify each individual file's source, description, and license before reuse.

## Safe remediation sequence
1. Open every traffic-sign question beside its image and verify the sign matches the English question and correct answer.
2. Mark ambiguous or conflicting answers for authoritative review instead of guessing.
3. Replace only confirmed mismatches with verified, appropriately licensed assets; retain each asset's source and license in an attribution inventory.
4. Review English and Myanmar translations together after correcting the source meaning.
5. Resolve question/image reuse rights before publishing or reusing material on this website. A source URL or attribution is not a substitute for permission.
6. Run a local production build and a browser pass through Study, Practice, Timed Exam, Results, History, and the Myanmar toggle before considering the audit complete.

## Visual spot-check of flagged assets (2026-10-23)
The six flagged WebP files were opened as images from the branch. They are road-marking diagrams rather than photographic road signs:

| Asset | Visible content | Status |
| --- | --- | --- |
| `q_006.webp` | Yellow solid line above a broken yellow line | Needs question-to-image match check |
| `q_023.webp` | Two right-pointing arrows separated by a solid white line | Needs question-to-image match check |
| `q_032.webp` | Repeating broken white lane line | Needs question-to-image match check |
| `q_042.webp` | Road/intersection edge marking with a short white line | Needs question-to-image match check |
| `q_047.webp` | Two right-pointing arrows and a broken white divider | Needs question-to-image match check |
| `q_114.webp` | Road/intersection edge marking with a broken white line | Needs question-to-image match check |

This visual check confirms what the files depict, but not whether each depiction belongs to its numbered question. The question source file is too large for the current repository file connector to return its text, so the exact prompt-to-image pairs still require a local/browser review. No images were replaced because that would risk assigning the wrong road marking to a question.

## Verified example of a potential free source
Wikimedia Commons lists the file [Thailand road sign บ-1-1.svg](https://commons.wikimedia.org/wiki/File:Thailand_road_sign_บ-1-1.svg) as a Thai Department of Rural Roads stop sign and describes it as public domain under section 7 of Thailand's Copyright Act. This is an example source record, not a blanket license for every Commons file; verify the individual file page before reuse. Official Thai traffic-sign manuals are also available from the [Office of Transport and Traffic Policy and Planning](https://www.otp.go.th/post/view/2098) and should be used to verify sign meaning.

## Current status
This is an audit note, not a claim that the image set or answers have been fully verified. No question answers or images were changed based only on filenames or file sizes.


## User-approved review and change-control policy (2026-10-24)

The repository owner explicitly requires that question-bank content remain unchanged unless they are shown the finding and approve the proposed edit first. This restriction applies even when a question, answer, translation, or image mapping appears incorrect.

- Do not edit, delete, reorder, rewrite, translate, or replace any question, answer, explanation, question-to-image mapping, or related asset without prior explicit approval from the owner.
- Findings must first be recorded here as **suspected issue**, **verified correct**, **verified incorrect**, or **unable to verify**. A small file size, visual appearance, or a mismatch suspicion is not proof by itself.
- For a suspected/verified issue, record the question ID, exact English prompt, current answer/options and image path, evidence/reference, confidence, and proposed correction. Share the finding with the owner and wait for explicit approval before changing any data or image.
- If evidence confirms the current content is correct, record it as **verified correct** and leave it unchanged.
- If evidence confirms an error, record it as **verified incorrect — awaiting owner approval**. Do not fix it until approval is received.
- Keep all review work on `release/readiness-audit`; do not merge to `main` or publish changes without explicit approval.

## Review register — no question data changed

The following assets are pending question-to-image comparison. Their appearance was inspected, but the matching question text was not available through the current repository file connector. Therefore none is currently classified as correct or incorrect.

| Asset | Image observation only | Question match status | Data change |
| --- | --- | --- | --- |
| `q_006.webp` | Yellow solid line above a broken yellow line | Unable to verify — prompt/answer pair not inspected | None |
| `q_023.webp` | Two right-pointing arrows separated by a solid white line | Unable to verify — prompt/answer pair not inspected | None |
| `q_032.webp` | Repeating broken white lane line | Unable to verify — prompt/answer pair not inspected | None |
| `q_042.webp` | Road/intersection edge marking with a short white line | Unable to verify — prompt/answer pair not inspected | None |
| `q_047.webp` | Two right-pointing arrows and a broken white divider | Unable to verify — prompt/answer pair not inspected | None |
| `q_114.webp` | Road/intersection edge marking with a broken white line | Unable to verify — prompt/answer pair not inspected | None |

### Required review record for each question

When the exact question is available, add one entry per question using this format:

- **Question ID / image path:**
- **Exact current English prompt and options:**
- **Current answer / explanation (if present):**
- **Myanmar translation (if present):**
- **Observed finding:** suspected issue / verified correct / verified incorrect / unable to verify
- **Evidence:** official Thai reference, page/section, URL, and relevant wording or sign identifier
- **Reasoning and confidence:**
- **Proposed change (if any):**
- **Owner decision:** pending / approved / rejected
- **Applied change:** must remain “none” until explicit approval

A correction is not authorized merely because an audit entry says “verified incorrect.” Approval must come from the owner before the repository data is changed.


## Question-to-image review records (2026-10-24)

The large source file was retrieved through its Git blob SHA after the normal file-content endpoint returned an empty body. The six exact English prompts and currently keyed answers below were checked against the original WebP assets in this branch and compared with Thai road-marking references. This is an audit-only record: no question-bank content or image was changed.

Reference points used for comparison:
- Thailand OTP traffic-sign manuals: https://www.otp.go.th/post/view/2098
- Thai highway traffic-marking standard drawing (Department of Highways): https://doh.go.th/uploads/tinymce/service/bid/doc_bid/STD_FOR_HIGHWAY_DESIGN_CONC_2015_EDITION2017.pdf
- Thai traffic-marking legal definitions for stop lines and give-way lines (secondary legal-text presentation): https://lawplayer.com/th/act/ocs-%E0%B8%970006-2B-0027
- English-language DLT driving manual search result describing solid stop lines and broken give-way lines: https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf

| Question ID / image | Exact English prompt | Current keyed answer | Current review status | Evidence and next check |
| --- | --- | --- | --- | --- |
| 6 / `q_006.webp` | “What does this sign / marking mean?” | “Do not cross solid line; dashed line may overtake when safe” | **Visually consistent; side-specific interpretation caveat** | Original asset visibly shows a solid yellow line parallel to a broken yellow line. The keyed answer matches the general rule for a solid/broken centre-line combination. The image does not show vehicle direction or which side the driver is on, so avoid interpreting it as permission for every direction/side to overtake. |
| 23 / `q_023.webp` | “When encountering this sign, what must the driver do?” | “Stay in lane; no overtaking; strictly do not cross or straddle lane markings” | **Supported by the DLT English manual** | Original asset shows two same-direction arrows separated by a solid white line. The English DLT driving manual describes a solid white “No Changing Lanes” line as prohibiting overtaking and crossing. This supports the keyed answer’s core meaning. Source: https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf (Road Markings, p. 62). No content change made. |
| 32 / `q_032.webp` | “When encountering this sign, what must the driver do?” | “Lanes may be changed or overtaking is permitted” | **Visually consistent; safety qualification** | Original asset shows a broken white lane divider. This is consistent with a lane divider that may be crossed for a lane change/overtake when legal and safe. The current English answer omits “when safe”; review whether the explanation should explicitly include that qualification, but do not change it without owner approval. |
| 42 / `q_042.webp` | “When encountering this sign, what must the driver do?” | “Stop before the stop line” | **Visually consistent with stop-line definition** | Original asset shows a solid white transverse line across the approach at an intersection. Thai legal definitions describe a solid white transverse stop line and require stopping before it when a stop control applies. The keyed answer matches the marking shown. |
| 47 / `q_047.webp` | “When encountering this sign, what should the driver do?” | “Stay in lane, no straddling, overtaking allowed” | **Supported with a safety qualification** | Original asset shows two same-direction arrows separated by a broken white lane divider. The English DLT driving manual identifies broken white lines as lane dividers, and lane-change rules require crossing only when safe; this supports lane changes/overtaking where permitted and safe, but not an unconditional permission. Source: https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf (Road Markings, p. 62). No content change made. |
| 114 / `q_114.webp` | “When encountering this sign, what must the driver do?” | “Slow down; if other vehicles or pedestrians are crossing, stop before the give-way line” | **Visually consistent with give-way-line definition** | Original asset shows a broken white transverse line at an intersection. Thai road-marking rules define the give-way line as a broad broken white transverse line; drivers slow down and yield to crossing traffic/pedestrians, stopping before the line when necessary. The keyed answer is consistent with that rule. |

### Outcome and owner decision

- Original image files for all six IDs were opened and inspected at full size; their current question-to-image assignments are recorded above.
- IDs **6, 32, 42, and 114** are visually consistent with the current keyed answer, subject to the caveats recorded in the table.
- IDs **23 and 47** use similar same-direction arrows with solid versus broken white lane dividers. The English DLT driving manual supports the distinction: solid white line means no lane changes/overtaking; broken white lane divider allows a lane change only when safe. The current answer keys are supported at the core meaning, though ID 47 would be clearer if it stated the safety qualification. These are audit notes only, not permission to edit.
- No question, answer, translation, image, or mapping was changed. No correction is proposed for immediate implementation. If a definitive mismatch is established, record the evidence and proposed change here, then ask the repository owner for explicit approval before editing any content.


### Automated structural inventory (2026-10-24)

Read-only inspection of `src/data/questions.ts` on `release/readiness-audit` was completed without changing the question bank.

- Parsed **598** question records; category counts match the declared inventory: 117 traffic signs, 74 traffic laws, 249 safe driving, 81 vehicle maintenance, and 77 accident prediction.
- All 598 records had non-empty Thai, English, and Myanmar question text and exactly four options.
- All 598 records had exactly one option marked `isCorrect: true`.
- **173** records reference an image asset: all 117 traffic-sign records plus 56 records in the other categories.
- A normalized English-prompt scan found 10 groups sharing repeated prompt wording. The largest groups are image-dependent traffic-sign templates such as “When encountering this sign, what should the driver do?”; repeated template text is **not by itself evidence of duplicate or incorrect questions**, because the sign image and options may differ.
- This check validates structure only. It does **not** establish that the keyed answer, Thai source wording, Myanmar translation, and referenced image semantically match, nor does it establish commercial reuse rights for any asset.
- The exact image/question matching and rights review remain outstanding. No question, option, answer key, translation, explanation, image, or mapping was changed by this inspection.

### Repository image-asset inventory (2026-10-24)

A read-only recursive Git tree inventory of commit `0026c49357e5ed2fa8e82698700047f3a60fdcfe` found **197 tracked image files** across the repository. This includes:

- `public/exam_images/`: **117** numbered traffic-sign images (`q_001.webp`–`q_117.webp`).
- `public/exam_images/law/`: **34** images.
- `public/exam_images/safe/`: **30** images.
- `public/exam_images/accident/`: **12** images.
- `public/exam_images/maintenance/`: **1** image.
- `public/logo.svg`: **1** image asset.
- Two additional JPG files outside the exam-image folders (one under `.aistudio/`, one under `public/assets/aistudio/`).

This is a **file-presence inventory only**, not proof that every question references the correct file, that all referenced paths load in the deployed app, or that the assets are licensed for reuse. The extra JPG files are not assumed to be question assets. Next verification should compare the actual image paths used by the question records against the tracked file tree and inspect each uncertain visual match. No assets or question mappings were changed.

