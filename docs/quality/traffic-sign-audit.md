# Traffic-sign and question-bank audit — 2026-10-23

## Scope reviewed
- Branch: `work/adsense-readiness-audit`
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
5. Resolve question/image reuse rights before enabling first-party advertising or other monetization. A source URL or attribution is not a substitute for permission.
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
