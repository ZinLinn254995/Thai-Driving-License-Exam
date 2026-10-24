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

### Question-image path integrity check (2026-10-24)

A read-only scan of the current question source's `image` fields compared all non-null image paths with files in the recursive repository tree.

- **193** non-null image-field references were found across the source (including image fields on nested objects, not just the main question record).
- All **193 unique paths** resolve to tracked files under `public/` after normalizing the leading slash.
- **0 missing referenced image paths** were found by this check.
- No repeated non-null path strings were found in those image fields.

This confirms repository path presence only. It does not prove that the image depicts the sign/scenario intended by its question, that it renders correctly in every deployed route, or that its rights are cleared. Visual/semantic matching and licensing remain separate checks. No source mappings or image files were changed.



### Direct visual comparison — traffic signs Q75–Q90 (2026-10-24)

The original WebP assets for Q75–Q90 were opened from this branch and compared directly with each question's Thai/English/Myanmar options and the currently keyed option. This is a visual-semantic check of the depicted symbol against the supplied key, not independent legal certification of every sign description. No source data or assets were changed.

| ID / asset | Observed image | Current keyed answer | Visual match | Notes |
| --- | --- | --- | --- | --- |
| 75 / `q_075.webp` | Main road with side roads joining on opposite sides; left-side branch appears first along the approach | Staggered side road junction, first on left | **Consistent** | Myanmar wording is compressed but retains left-first distinction. |
| 76 / `q_076.webp` | Opposite staggered arrangement; right-side branch appears first | Staggered side road junction, first on right | **Consistent** | Directional counterpart to Q75. |
| 77 / `q_077.webp` | Side road joins the main vertical road from the left | Side road joins main road from left | **Consistent** | Keyed direction matches the symbol. |
| 78 / `q_078.webp` | Side road joins from the right | Side road joins main road from right | **Consistent** | Keyed direction matches the symbol. |
| 79 / `q_079.webp` | Main route branches to the left at an oblique angle | Side road forks from main road on left (Y-junction) | **Broadly consistent** | Diagram depicts a left branch; the major/minor-road distinction is inferred from relative line weight/shape, so retain the Thai source wording as the authority for that distinction. |
| 80 / `q_080.webp` | Main route branches to the right at an oblique angle | Side road forks from main road on right (Y-junction) | **Broadly consistent** | Direction matches; same caveat about interpreting major/minor status from a simplified icon. |
| 81 / `q_081.webp` | Both sides of the road narrow ahead | Road narrows on both sides ahead | **Consistent** | Myanmar and English preserve the both-sides meaning. |
| 82 / `q_082.webp` | Right side narrows while the left boundary remains straight | Road narrows on the right | **Consistent** | Keyed direction matches the symbol. |
| 83 / `q_083.webp` | Straight-through lane continues; adjacent right lane is marked closed with a red bar | Right lane closed | **Consistent** | Orange temporary/work-zone style sign; option 3 is keyed and matches the blocked lane. |
| 84 / `q_084.webp` | Vertical clearance/height symbol marked “2.5 m” | Vehicles not exceeding 2.50 m in height may pass | **Symbolically consistent** | The sign visibly shows 2.5 m height clearance. This confirms what the graphic depicts, not whether the threshold is correct for every road/location; keep the legal/source check open. |
| 85 / `q_085.webp` | Uneven/wavy road surface | Rough, bumpy road ahead | **Consistent** | Keyed answer describes the rough surface. |
| 86 / `q_086.webp` | Road surface with a pronounced dip | Dip in road ahead | **Consistent** | English “dip ahead” is terse; image and key are aligned. |
| 87 / `q_087.webp` | Vehicle with curved skid marks | Slow down, beware of skidding; do not brake hard | **Consistent** | Keyed safety advice matches the skid-warning symbol. |
| 88 / `q_088.webp` | Vehicle with stones/debris flying from the road surface | Risk of flying loose stones ahead | **Consistent** | Distinct from Q89’s falling-rocks-from-slope symbol. |
| 89 / `q_089.webp` | Rock face/cliff with rocks falling onto the road | Falling rocks possible ahead | **Consistent** | Keyed answer matches the falling-rock hazard. |
| 90 / `q_090.webp` | Opening bridge over water, with bridge leaves raised | Opening bridge ahead | **Consistent** | Image depicts an opening/drawbridge warning symbol. |

**Batch result:** Q75–Q90 visually compared; no definitive image-to-key mismatch found in this batch. This does not mean every legal nuance or translation is fully validated. Continue with Q91–Q117, prioritizing directional/road-marking symbols and the previously flagged translation issues at Q94 and Q114. No question JSON, translations, answer keys, image files, image mappings, runtime code, main branch, or live deployment changed.


### Direct visual comparison — traffic signs Q91–Q117 (2026-10-24)

The original assets Q91–Q117 were opened and compared against their Thai/English/Myanmar option text and current keyed answers. This establishes visual observations for the current files only; it does not independently certify every legal interpretation. No question data, translations, answer keys, assets, or mappings were changed.

| ID / asset | Observed image | Current keyed answer | Visual assessment / action |
| --- | --- | --- | --- |
| 91 / `q_091.webp` | Main route with lane/path shifting to the opposite side around a central obstruction | Change lane according to the sign symbol | **Broadly consistent**, though “change lane” may be less precise than following the lane shift/route indicated. Verify official sign terminology before editing. |
| 92 / `q_092.webp` | Main road and frontage road depicted with arrows showing frontage traffic joining the main route | Frontage-road drivers prepare to merge into the main road | **Consistent** with the depicted merge direction. |
| 93 / `q_093.webp` | Main road and parallel/frontage road with an exit from the main route | Main-road drivers prepare to exit to frontage road | **Consistent** with the depicted exit direction. Myanmar uses a different frontage-road term from Q92; standardization remains a translation task. |
| 94 / `q_094.webp` | Main road continues straight; side road branches in from the left | Side road joins from the left ahead | **Image/key consistent; Myanmar wording concern confirmed.** The keyed English meaning matches the symbol, but Myanmar says a junction is on the left without explicitly stating that the side road joins the main road. Candidate translation refinement, not applied. |
| 95 / `q_095.webp` | Opposing traffic flows around a central island/divider | Junction without traffic island ahead | **Potential mismatch / source needs checking.** The asset visibly includes a central island/divider between opposing directions, while the keyed answer explicitly says a junction *without* a traffic island. Do not change the key yet; verify whether this diagram represents a different traffic arrangement or whether the answer/options are mismapped. High priority. |
| 96 / `q_096.webp` | U-turn arrow with turn directed to the right | U-turn ahead on the right | **Consistent.** |
| 97 / `q_097.webp` | U-turn arrow with turn directed to the left | U-turn ahead on the left | **Consistent.** |
| 98 / `q_098.webp` | Opposing arrows: one direction up, opposing direction down | Beware of oncoming traffic | **Consistent.** |
| 99 / `q_099.webp` | Three-colour traffic signal | Prepare to follow traffic signals | **Consistent.** |
| 100 / `q_100.webp` | Thai “ให้ทาง” (give way) inverted-triangle sign with forward arrow | Prepare to yield at a yield sign | **Consistent.** Myanmar’s reference to yielding to a vehicle ahead may be too narrow; the obligation is to yield as required by the sign/right-of-way situation, not only to a vehicle directly ahead. Translation refinement candidate. |
| 101 / `q_101.webp` | Pedestrian crossing sign | Slow down and watch for pedestrians | **Consistent.** |
| 102 / `q_102.webp` | Children/schoolchildren warning symbol | School zone ahead, watch for children | **Consistent.** Myanmar conveys children but can be clearer that this is a school zone ahead. |
| 103 / `q_103.webp` | General warning sign with Thai word “อันตราย” (“danger”) | Slow down and be cautious of hazards ahead | **Broadly consistent**, but the sign itself is generic; it does not identify the specific examples in the option. Confirm whether the question intends a generic hazard sign or a more specific official sign. |
| 104 / `q_104.webp` | Two arrows pointing down-left and down-right, indicating traffic may pass either side of an obstruction | Follow the indicated direction | **Partially aligned but too vague.** The symbol specifically indicates passing on either side/choosing an allowed side around an obstruction; the keyed wording should be checked against the Thai official description. |
| 105 / `q_105.webp` | Temporary/work-zone style diagram with arrows indicating traffic alternates through narrowed lanes; Thai text says “สลับกันไป” | Alternate / merging traffic | **Consistent.** Myanmar “အလှည့်ကျမောင်းနှင်ပါ” is understandable; consider a more explicit alternating/one-at-a-time instruction if the official source supports it. |
| 106 / `q_106.webp` | Right-bending curve arrow | Curve ahead to the right | **Consistent.** |
| 107 / `q_107.webp` | Blue expressway/motorway symbol | Expressway starts | **Likely consistent**, but the graphic alone may represent an expressway facility rather than explicitly indicate its beginning; confirm official sign identity. |
| 108 / `q_108.webp` | Blue pedestrian-crossing sign with a pedestrian on a marked crossing | Slow down and stop for pedestrians | **Symbol/question broadly consistent**, but the sign image alone is a crossing indication; a duty to stop depends on the actual crossing situation and applicable rules. Keep wording safety-qualified. |
| 109 / `q_109.webp` | Illustrated road approach with a clearly visible red octagonal Thai STOP sign and stop line | Stop and wait for crossing traffic | **Safety action is compatible but explanation is incomplete.** A STOP sign calls for a complete stop even if no crossing traffic is visible; keyed wording should be checked so it does not imply stopping is required only when crossing traffic exists. Image is an illustrative scene rather than a simple sign icon. High-priority wording/source review. |
| 110 / `q_110.webp` | Photographic road scene with a visible white edge line along the left side | Road edge line | **Broadly consistent**, but the asset is a full road photograph rather than an isolated road-marking diagram. Ensure the line is visible enough on mobile and that the question points learners to the relevant marking. |
| 111 / `q_111.webp` | Diagram of transverse markings at an intersection, including a broken give-way line and solid transverse line(s) | Stop before stop/give-way line to let pedestrians cross | **Partially consistent; wording combines distinct markings and pedestrian duty.** Confirm each line’s meaning and the legal condition for stopping/yielding before treating the answer as a universal rule. |
| 112 / `q_112.webp` | Winding-road arrow begins by curving to the right | Winding road starting on the right; keep left | **Consistent** with the sign direction. |
| 113 / `q_113.webp` | Two road-layout diagrams showing hatched safety areas/painted islands | Safety zone or traffic-island markings | **Consistent.** Myanmar is generic; consider a specific term for painted safety zone/traffic island after checking the official glossary. |
| 114 / `q_114.webp` | Broken white transverse line at an intersection approach | Slow down; stop before give-way line if vehicles/pedestrians are crossing | **Marking/key broadly consistent.** Myanmar’s “if vehicles or pedestrians are present/ahead” broadens English “are crossing”; translation concern confirmed, candidate refinement not applied. |
| 115 / `q_115.webp` | Railway-crossing warning sign seen from a vehicle approaching tracks | Slow down and prepare to stop | **Consistent.** |
| 116 / `q_116.webp` | Falling-rocks warning sign beside a rock face | Slow down and drive with extra caution | **Consistent.** |
| 117 / `q_117.webp` | Photographic divided road with transverse rumble-strip markings before the junction/approach | Drive with caution | **Broadly related but weakly specific.** The image depicts rumble strips in a road scene, while the keyed response is generic. Check the intended learning objective and whether the asset should instead be a clear close-up of the marking; also review reuse rights for the photo. |

**Highest-priority findings from Q91–Q117:** Q95 appears to conflict with the keyed phrase “without traffic island” because the image shows a central island/divider; verify source and mapping before any edit. Q109 should state that a STOP sign requires a complete stop, not only a stop when cross-traffic is visible. Q94 and Q114 have the previously identified Myanmar meaning-loss/broadening issues. Q100, Q104, and Q111 need wording/context checks. No fixes have been applied pending source verification and owner approval.

**Traffic-sign visual review status:** Q75–Q117 (43 images) have now been opened and compared with the current keyed options. This is not a claim that every legal nuance or image licence has been verified. The audit branch contains documentation updates only; main, runtime code, question JSON, answer keys, image assets/mappings, and the live deployment remain untouched.


### Official-source follow-up — priority/road-marking questions (2026-10-24)

Checked Thai regulatory references after the visual pass:

- The Thai Ministry of Transport / Office of Transport and Traffic Policy and Planning lists official traffic-sign manuals, including manuals for intersection signs and traffic signals: https://www.otp.go.th/post/view/2098
- The Thai highway traffic-sign regulation text describes the STOP sign as requiring a stop before the crossing road or stop line, and the GIVE WAY sign as requiring yielding to vehicles or pedestrians on the crossing road before proceeding safely: https://lawplayer.com/th/act/ocs-%E0%B8%970006-2B-0027/section/chapter-1
- The same regulation’s road-marking section describes a give-way line as a broken white transverse line requiring drivers to slow and yield to vehicles or pedestrians on the crossing road; it distinguishes this from the stop line and pedestrian crossing: https://lawplayer.com/th/act/ocs-%E0%B8%970006-2B-0027/section/chapter-2

Implications for the current question bank:

1. **Q109 is a confirmed content-risk candidate.** The current image is a STOP-sign scene, but the keyed English says “Stop and wait for crossing traffic,” which may imply stopping is conditional on seeing traffic. The regulation states that the STOP sign requires stopping before the crossing road or stop line, then waiting for crossing traffic/pedestrians to pass when present. Recommend revising the explanation to explicitly say “Come to a complete stop at the stop line; yield to crossing traffic/pedestrians, then proceed only when safe.” Do not change runtime data in this documentation-only audit phase.
2. **Q114 is a confirmed Myanmar precision issue.** The English conditional refers to vehicles/pedestrians crossing, while Myanmar currently says they merely “are present/ahead.” Recommended Myanmar meaning: “အရှိန်လျှော့ပါ။ ရှေ့ဖြတ်လမ်းပေါ်တွင် ယာဉ် သို့မဟုတ် လမ်းလျှောက်သူ ဖြတ်သန်းနေပါက လမ်းပေးမျဉ်းမတိုင်မီ ရပ်ပါ။” This is a candidate wording, not yet applied.
3. **Q111 requires a careful rewrite/source match.** The image shows several transverse lines, including a broken line and solid line(s), while the keyed option bundles “stop line or give-way line” and a pedestrian-crossing duty. Official descriptions distinguish stop lines, give-way lines, and pedestrian crossings; verify the intended Thai diagram and question before changing the answer.
4. **Q100’s core keyed meaning is supported.** The official definition of GIVE WAY applies to vehicles or pedestrians on the crossing road, not only to a vehicle directly ahead. The English is a short “prepare to yield” paraphrase; Myanmar can be broadened from “give priority to the vehicle ahead” to “give way to vehicles/pedestrians on the priority/crossing road when required.”
5. **Q95 remains unresolved.** The current symbol appears to show a divided route/central island, while the keyed answer says “junction without traffic island.” The official manuals index confirms that intersection-sign manuals exist, but the exact official diagram for this particular symbol has not yet been positively matched. Keep it flagged; do not guess or change the answer key.

This is a documentation-only source review. No runtime content was modified. Treat the LawPlayer regulation pages as an accessible transcription of the regulation and prefer the official manuals/legal gazette for final sign-by-sign certification.


### Q95 — image/key contradiction confirmed by direct image inspection (2026-10-24)
- Re-opened `public/exam_images/q_095.webp` from this audit branch. The warning-sign graphic visibly shows two directional arrows splitting around a central raised/painted-island-shaped obstruction. The current keyed English answer says “junction without traffic island ahead,” and the Thai answer also says “ทางร่วมไม่มีเกาะ” (junction without an island). These descriptions conflict with the image's obvious central island/obstruction cue; this is now a **high-confidence image-to-answer wording mismatch**, not merely an uncertain visual impression.
- **Do not silently change the answer key yet.** The precise standardized Thai sign name and intended maneuver (e.g., a junction/traffic island configuration versus passing an obstruction on either side) still require matching the symbol to the official Department of Highways / OTP sign catalogue. Record as high priority for source-matched correction; likely candidates must not be presented as confirmed.
- Official source trail: OTP publishes the Thai Traffic Signs Standard and Manual and related junction-use manuals: https://www.otp.go.th/post/view/2098 and https://www.doh.go.th/content/201. These confirm the appropriate authoritative catalogues to use, but the exact Q95 symbol label has not yet been positively identified from the accessible search results.
- Scope: audit documentation only. No question data, answer key, translation, image, image mapping, main branch, or live deployment changed.


### Q95 — official Thai sign standard match found (2026-10-24)
- **Resolution of the prior uncertainty:** the official Department of Highways *คู่มือมาตรฐานป้ายจราจร* search extract identifies warning sign **ต.49 (ป้ายเตือนสิ้นสุดทางคู่ / end of divided road)** as two opposing-direction arrows with the median/island symbol **below** the arrows. The Q95 image has that same salient arrangement: the island-like shape is below the two arrows. The manual says it warns that the divided road ends ahead and the route becomes a road without a median separating opposing traffic.
- Official source: DOH manual PDF/search result, https://www.doh.go.th/content/download/174663 (search extract contains chapter 3.18.2, ต.49). The DOH standards index lists *คู่มือมาตรฐานป้ายจราจร (ปรับปรุง 2561)*: https://www.doh.go.th/content/201.
- **Mismatch confirmed:** current Q95 Thai keyed text says “ทางร่วมไม่มีเกาะ” (junction without an island); English says “junction without traffic island ahead”; Myanmar similarly says “လမ်းဆုံ ... အလယ်ကျွန်းမပါ”. This is not the official sign meaning for the pictured T.49 sign. Candidate correction for later authorized content-fix phase: describe the **end of a divided road / median ahead ends, opposing traffic will no longer be separated by a median**, and retain the appropriate slow-down/keep-left warning only if confirmed by the exact exam/manual wording. Do not phrase it as a junction unless a separate source supports that interpretation.
- Confidence: high for the sign family and mismatch (symbol structure and official manual description align); exact final exam wording and any required answer option edits should still be checked against the full manual page/diagram before changing runtime data.
- Scope: audit documentation only. No question data, answer key, translation, image, image mapping, main branch, or live deployment changed.


## Visual audit: Q1–Q45 image-to-key consistency (2026-10-24)
Images were opened directly from `public/exam_images/q_001.webp` through `q_045.webp` and compared with the keyed English answer. This is a visual consistency pass, not a full legal/source validation.

### High-priority image/content concerns
- **Q14 — image does not show the claimed restriction.** Key says “No stopping and no parking for all types of vehicles,” but the image is a top-down illustration of a car alongside a curb/sidewalk, with no no-stopping/no-parking sign or restriction marking. The illustration cannot teach the actual sign meaning and may mislead users into thinking curbside parking itself indicates the prohibition. Replace with a properly licensed, accurately matching sign image in a later content-fix phase, or remove the image if no trustworthy asset is available.
- **Q1 — image is a branded lane-marking illustration, not a traffic sign.** It depicts a car alongside a solid yellow line with a dashed yellow line on the opposite side and contains a visible “thaidriveexam.com” watermark/logo. The keyed answer (“Do not overtake into the right lane”) may relate to the markings, but the artwork's intended lane position and applicable Thai rule need explicit confirmation. Flag asset provenance/reuse rights and image-to-rule clarity before release; do not reuse or modify the image based on assumptions.
- **Q22 — likely answer specificity mismatch.** Image shows the road narrowing at a bridge (two inward-facing side profiles), while the key says to watch for oncoming traffic from the other side of the bridge. The graphic itself signals a narrow bridge, not specifically an oncoming vehicle. Review the official Thai sign name and expected driver action; avoid treating the added oncoming-traffic statement as established by the image alone.
- **Q13 — extra action may be unsupported by the sign.** Image depicts a steep uphill grade marked 8%; the key additionally says to watch for oncoming traffic. The sign alone supports a steep uphill warning, but not necessarily the oncoming-traffic clause. Validate the official sign description and simplify the key if the extra instruction is not supported.
- **Q7 — image is only an unlabelled inverted triangle outline.** Key gives a conditional instruction about stopping before a give-way line. Since the image does not show a give-way line and differs from Q8's explicit Thai “ให้ทาง” sign, verify that the outline-only symbol is an intentional source image for this exact question.

### Other visual observations
- Q2 restriction-ending symbol, Q3 cattle warning, Q4 mandatory right direction, Q5 no-entry, Q6 solid/dashed lane-marking illustration, Q8 explicit GIVE WAY sign, Q9 road survey/works, Q10 U-turn point, Q11 no-left-turn, Q12 STOP, Q15 roundabout, Q16 merge from right, Q17 winding road, Q18 left detour, Q19 no horn, Q20 divided-road/median warning, Q21 pedestrians-only, Q23 lane arrows, Q24 railway crossing, Q25 right detour, Q26 2.5 m width restriction, Q27 side road from right, Q28 left lane closed, Q29 road narrows on left, Q30 keep left, Q31 no motorcycles, Q32 dashed lane marking, Q33 no left turn/U-turn, Q34 train crossing warning, Q35 no-overtaking notice, Q36 10-ton restriction, Q37 steep downhill, Q38 mandatory left turn, Q39 no stopping, Q40 low-flying aircraft, Q41 mandatory right turn, Q42 stop line, Q43 machinery/roadworks, Q44 straight only, and Q45 STOP ahead are broadly compatible with their keyed concepts at a first visual pass.
- Some questions use generic illustrations or road-marking crops rather than the exact standardized sign/real-world scene; this should be distinguished from authentic official exam artwork. Confirm source/provenance and exact legal wording separately.

### Scope and safety
- Documentation only: no question data, answer keys, Myanmar translations, images, mappings, main branch, or live deployment changed.


### Additional visual audit: Q46–Q60 (2026-10-24)
- **Q59 — high-priority sign/answer mismatch.** The image shows a red upward arrow beside a dark downward arrow inside a circular sign: the conventional meaning is priority over oncoming traffic / oncoming traffic must give way, not “Stop and give way to oncoming traffic.” The image contains no STOP instruction. Confirm the exact Thai sign label in the official sign manual, then correct the keyed English/Myanmar/Thai content and any distractors only in an authorized fix phase.
- **Q47 — lane-marking image is underspecified for the keyed answer.** The image shows two directional arrows and a dashed lane divider; keyed answer says “Stay in lane, no straddling, overtaking allowed.” The dashed line generally indicates a permitted lane change when safe, but “stay in lane/no straddling” may not be the precise meaning of this graphic. Match to the official Thai road-marking manual before release.
- **Q46 — branded/watermarked illustration.** The rumble-strip graphic visibly contains a “thaidriveexam.com” watermark/logo. The key (“Rumble strips”) broadly matches the pictured road marking, but provenance/licensing and removal/replacement with a properly licensed source asset should be resolved.
- Q48 no overtaking, Q49 no right U-turn, Q50 no left U-turn, Q51 no right turn, Q52 no changing to right lane, Q53 no right turn/U-turn, Q54 no motor vehicles, Q55 no trucks, Q56 no motorcycles or motor vehicles, Q57 no parking, Q58 50 km/h limit, and Q60 mandatory one-way left are broadly consistent with the visible symbols in this visual pass.
- Scope remains documentation only: no question data, answer keys, translations, images, mappings, main branch, or live deployment changed.


### Additional visual audit: Q61–Q74 (2026-10-24)
- **Q67 — likely sign/answer mismatch, high priority.** The image is a blue mandatory/informational circular sign containing a bus pictogram. The keyed answer is “Do not overtake into the bus lane.” The pictogram more directly identifies a bus-only/bus-lane designation; it does not visually show an overtaking prohibition. Check the official Thai sign catalogue and the question's source before changing the key.
- **Q61 — direction wording may be too broad.** The arrow points diagonally down-right (pass/keep to the right of an obstruction), while the key says “Keep right” without context. Verify the intended mandatory-direction sign and make the wording specific to the pictured arrow/obstruction if warranted.
- **Q70 — watermark/provenance concern.** Yellow crisscross box marking image contains visible “www.thaidriveexam.com” watermark/logo. Key describes no stopping in the yellow box except when waiting to turn right. The general concept is recognizable, but asset licensing/source and precise Thai rule exceptions should be validated.
- Q62 keep left or right, Q63 turn left or right, Q64 straight or left, Q65 straight or right, Q66 roundabout, Q68 three-occupant/HOV lane marker, Q69 motorcycle lane, Q71 roadworks, Q72 sharp left curve, Q73 sharp right curve, and Q74 side road from left are broadly compatible with the visible symbols in this visual pass.
- Scope remains documentation only: no question data, answer keys, translations, images, mappings, main branch, or live deployment changed.


## Correction to Q95 assessment — official OTP manual takes precedence (2026-10-25)
- **Retract the previous claim that Q95 is mismatched.** The directly accessible official OTP manual states under section 3.23.2, “ป้ายสิ้นสุดทางคู่” (sign ต.49), that the sign means the road ahead becomes a junction/road section without a median or other separator, and advises slowing down, keeping close to the left edge, and taking extra care. It describes the yellow diamond with two opposing arrows and the island symbol below the arrows — matching the Q95 image and the current keyed Thai/English answer.
- Authoritative evidence: OTP official PDF https://www.otp.go.th/uploads/tiny_uploads/OTPStandard/1-1-SafetyTransport01.pdf (search extract section 3.23.2); OTP standards index https://www.otp.go.th/post/view/2098.
- Therefore, **Q95 should not be treated as a confirmed image/key mismatch**. Earlier notes in this document that called Q95 a high-confidence mismatch or suggested “end of divided road” contradicting “junction without traffic island” are superseded by this correction. The concept “end of divided road” is the sign name; its stated driver-facing meaning is indeed that the road ahead becomes a junction/road without a traffic island/divider. Keep a note to reconcile terminology if needed, but do not change the current key on the basis of the earlier mistaken assessment.
- Scope: documentation only. No runtime data, answer keys, translations, images, mappings, main branch, or live deployment changed.


## Official-source resolution: Q59 (and cross-check of Q67) — 2026-10-25

### Q59 — current answer confirmed; remove the mismatch flag
- The official OTP traffic-sign manual, section 2.2.3 “ป้ายให้รถสวนทางมาก่อน,” describes the exact symbol: circular white sign with red border, red upward arrow on the left, black downward arrow on the right. It requires drivers to stop at the sign and wait for oncoming traffic to pass. The current keyed answer “Stop and give way to oncoming traffic” and Thai answer are therefore correct in substance. The prior visual-only concern that the sign showed no STOP instruction was incorrect: the sign itself carries the mandatory stop-and-wait meaning even without a separate octagonal STOP sign.
- Official source: https://www.otp.go.th/uploads/tiny_uploads/OTPStandard/1-1-SafetyTransport01.pdf (section 2.2.3); Department of Highways manual https://www.doh.go.th/content/download/174663 (section 2.3.3, sign บ.3).
- Status: Q59 is **not a confirmed mismatch**. Consider only a minor clarity improvement to English (“Stop at the sign and wait for oncoming traffic to pass”) and Myanmar, if needed, in a separately authorized fix phase; do not change runtime data during this audit.

### Q67 — bus-lane symbol is likely correctly interpreted as a lane designation, not an overtaking prohibition
- Official Thai traffic-sign regulation text identifies “ช่องเดินรถประจำทาง” (bus lane) as a lane designated for buses (sign บ.49). Q67's image is a blue circular sign with a bus pictogram, while the current answer says “Do not overtake into the bus lane.” That answer describes a maneuver prohibition rather than what the symbol itself denotes. This is a **likely image-to-key mismatch** pending confirmation that the specific image is indeed the standard bus-lane sign and not a contextual sign used alongside a separate rule.
- Official source for the sign meaning: https://lawplayer.com/th/article/pythainlp_579fece4bc124c0b/p0-0011 (item บ.49). The OTP and DOH manuals should be used to verify the exact standard pictogram before changing content.
- Scope: documentation only. No question data, answer keys, translations, images, mappings, main branch, or live deployment changed.


## Visual audit: image-based traffic-law questions Q121–Q190 (2026-10-25)
Images were directly opened for Q121, Q122, Q124, Q155, Q161, Q164, Q166, Q167, Q184, Q186, Q188, Q189, and Q190. This is a visual consistency/provenance pass; right-of-way priority still needs complete road-rule context and official validation.

- **Common asset-provenance concern:** the inspected diagrams visibly contain a “thaidriveexam.com” watermark/logo. This appears on multiple law-question images (including Q121/Q122/Q124/Q155/Q161/Q164/Q166/Q167/Q184/Q186/Q188/Q189/Q190). Before monetized public release, confirm permission/licensing and provenance for these assets; a watermark alone does not establish reuse rights.
- **Q121:** image shows a red vehicle entering a major road beside a GIVE WAY sign and a blue vehicle on the major road. Key says Vehicle B because it is on the major road. Broadly consistent with yielding to the major road, but confirm the road geometry and approach direction in the source.
- **Q122:** four vehicles approach an intersection with no visible STOP/GIVE WAY signs. Key says wait for vehicle B. The image alone does not make the applicable priority rule explicit enough to independently validate the unique order. Require official intersection-priority rule/source context or annotate the rule before treating the answer as verified.
- **Q124/Q161:** T-intersection-style diagrams show a red vehicle approaching the main road and a blue vehicle on the cross road; key selects Vehicle B. Broadly plausible, but the graphic and lane markings are stylized and watermarked; source/rule validation remains needed.
- **Q155:** diagram depicts a motorcycle and two cars on a divided-by-markings road; key identifies Vehicle B. Need the full question text and precise lane/priority context to validate; image alone is insufficient.
- **Q164:** a vehicle approaches a GIVE WAY sign at a cross road. Key says stop and wait for the vehicle on the crossing road. The sign generally requires yielding, but not necessarily a mandatory full stop when the crossing road is clear. Review whether the question's situation depicts a vehicle that must be yielded to; if so the response can be appropriate, but do not teach that GIVE WAY always requires stopping.
- **Q166:** four-way intersection with dashed lane markings; key says stop to let vehicles on the left pass first. The diagram does not show traffic signs or signals, so the assumed priority rule must be explicitly sourced/validated.
- **Q167:** STOP sign is visible for the red vehicle's approach, and the diagram shows turning paths. Key selects the red car. The STOP sign requires a stop, but the right-of-way outcome depends on the complete movement sequence and other traffic; verify the full stem and official rule before treating the selected vehicle as established solely by the image.
- **Q184/Q186:** intersection diagrams show turning movements, with a yellow/blue vehicle selected as priority. The diagrams use stylized lane geometry and are watermarked; exact right-of-way rule and full stem need validation before final approval.
- **Q188:** diagram shows a vehicle crossing hatched markings and entering traffic; key says turn left and make a U-turn at the U-turn point. The picture appears to depict a lane-crossing/turning manoeuvre, but it does not clearly establish a lawful U-turn point. Validate the full stem and the road marking against the official rule.
- **Q189:** diagram shows a red car stopped alongside a solid curb-side line while other cars are parked. Key says “Cannot park in any case.” The image alone does not establish the exact prohibition zone or exceptions; verify the source and avoid absolute wording unless the underlying law supports it.
- **Q190:** pedestrian is on a marked crossing ahead of two cars; key says the vehicle behind cannot overtake the vehicle in front. This is a plausible safety rule, but the visual cue primarily shows a pedestrian crossing and vehicles approaching/near the crossing. Verify that the stem explicitly asks about overtaking and that the exact rule matches this scene.

### Current visual-audit coverage
- Traffic-sign image series Q1–Q117: directly inspected and audit notes recorded, with official-source follow-ups and corrections where available.
- Other image-based questions: started with Q121–Q190; many additional image questions remain in Safe Driving and Accident Prediction ranges and must still be inspected before the full image audit can be called complete.
- No question data, answer keys, translations, images, mappings, main branch, or live deployment changed.


## Visual audit: selected Safe Driving scenarios Q195–Q299 (2026-10-25)
Directly opened images for Q195, Q200, Q206, Q211, Q218, Q266, Q271, Q288, Q292, Q296, Q297, Q298, and Q299 and compared the visible scene to the current keyed English answer. This is not yet a complete audit of all image-bearing Safe Driving questions.

- **Asset provenance:** multiple scenes carry a visible “thaidriveexam.com” watermark/logo (including Q195, Q200, Q206, Q211, Q218, Q266, Q271, Q288, Q296–Q299). Confirm asset ownership/licensing before AdSense/public release; do not assume a watermark grants permission.
- Q195 four-way junction: key says stop for oncoming traffic before turning right. The scene has several vehicles at an intersection but no explicit sign/signal visible; full stem and right-of-way rule must establish which vehicle moves first.
- Q200: driver-view scene shows vehicle ahead signalling/turning right; key says slow down and give way. Broadly consistent as cautious driving, but wording “give him the go-ahead” is awkward English and should be reviewed in the language audit.
- Q206 and Q211: intersection diagrams with vehicles turning/crossing; keys instruct yielding to the other vehicle(s). These are plausible but rely on unstated right-of-way assumptions; validate from full stem and Thai rule before marking verified.
- Q218: green traffic signal, pedestrians at the left crossing, and a truck approaching; key says wait in a position to turn until safe. The image does not make the precise intended turn/traffic conflict entirely obvious at this resolution; retain as context-dependent until full stem is checked.
- Q266: STOP sign and stop-line marking are clearly shown. Key says stop behind the line and move forward slowly for better visibility; plausible when visibility is obstructed, but confirm the stem actually describes limited visibility.
- Q271: lane-changing scene with several vehicles; key says let the car with its right-turn signal go first. The image alone does not clearly show which vehicle is signalling or the relevant conflict; source/stem validation needed.
- Q288: emergency ambulance with active lights in an intersection; key says stop and wait for the ambulance. Safety-consistent; wording should make clear to yield safely without blocking its route, rather than stopping in a hazardous position.
- Q292: pedestrians at the crossing and double yellow curb-side lines; key says give way to pedestrians crossing. The visual shows pedestrians near the crossing but not necessarily already in the carriageway; wording may need to say slow/prepare to stop and yield when they cross or are entering.
- Q296: large truck approaching a roundabout; key says keep distance. Broadly plausible but the image shows an entry approach rather than a clear following-distance situation; confirm the full stem.
- Q297: vehicle waiting to enter a crossroad while traffic approaches from both sides; key says let both left and right cars go first. Need exact road-priority context and full stem to verify this unique order.
- Q298: two vehicles travel in the same direction with a dashed lane divider and a curved path shown for the white vehicle; key selects “white car.” Image does not clearly identify the question's decision criterion without the stem; hold for text/visual joint review.
- Q299: pedestrian crossing ahead and pedestrians walking near the crossing; key says slow down and prepare to stop. Broadly consistent with a cautious approach.

- No image/key contradiction is declared confirmed in this batch from image-only inspection. These notes are pending joint review with the full question stems and official rules.
- Scope: documentation only. No question data, answer keys, translations, images, mappings, main branch, or live deployment changed.


## Visual audit: selected image-based questions outside Traffic Signs (2026-10-25)
Directly opened the image assets for the listed questions in Traffic Laws and Safe Driving and compared the depicted scenario with the current English keyed answer. This is a first-pass visual consistency check, not a complete rule/legal review.

### Asset provenance and consistency concerns
- **Watermark is widespread:** the directly inspected Safe Driving assets Q195, Q200, Q206, Q211, Q288, Q292, Q296–Q299, Q304, Q314, Q318, Q328, Q409–Q413, Q415–Q416, and Q440 visibly include a “thaidriveexam.com” watermark/logo. Other traffic-sign assets Q1, Q46, and Q70 also show the same branding. Audit the provenance, reuse permission, and whether this branding is authorized before release/AdSense review; do not crop or remove watermarks without rights confirmation.
- **Q414 — answer text has a terminology/translation defect.** English keyed answer: “Look in the side mirror and signal to turn right. and change channels when safe”. “Change channels” is not correct driving terminology; likely intended to mean change lanes when safe, but confirm against Thai source before editing. Myanmar/Thai equivalents should be checked together.
- **Q355 — scenario/action alignment needs review.** Image shows a yellow car stopped at a green traffic light alongside a large vehicle. Keyed answer was not available in the image itself and should be checked against the exact question/options; avoid assuming the correct response from the picture alone.
- **Q195 — image is a four-way intersection with red car approaching from the bottom, yellow car from the top, and white car entering from the right.** The keyed answer says the red car should stop to allow oncoming traffic before turning right. This is plausible only if the intended movement and priority relationship match the diagram; retain as context-sensitive and verify the stem plus Thai traffic priority rule before treating as confirmed.
- **Q271 — image depicts a red car angled across a lane among queued vehicles, with other cars around it.** The keyed answer “Stop the car and let the car with the right turn signal on first” is not self-evident from the illustration alone. Verify the question stem and vehicle labels against the image before release.
- **Q318 — image shows a row of parked vehicles and a red arrow pointing toward oncoming traffic/road space.** Key says parked cars may open their doors; plausible hazard concept, but ensure the arrow points to the door-opening hazard and does not suggest a different overtaking action.
- **Q374 — image highlights the right A-pillar blind area.** Key says use extra care when entering curves and intersections. This is broader than the image’s direct lesson (A-pillar can obscure pedestrians/vehicles); consider making the specific obstruction risk explicit after checking the stem.
- **Q440 — image shows a truck signaling right with another truck ahead/left.** Key says keep distance and wait for the large vehicle to move in a certain direction; the phrase is vague and should identify the truck’s wide turn/swinging path only if the stem supports it.
- Q200, Q206, Q211, Q218, Q266, Q288, Q292, Q296–Q299, Q304, Q314, Q316, Q328, Q354–Q355, Q409–Q413, Q415–Q416 were visually opened; most broadly depict the maneuver or hazard in the keyed concept, but the image alone is not sufficient to verify the exact right-of-way rule without reading each stem and all options.

### Scope
- Audit documentation only. No question data, answer keys, Myanmar translations, images, image mappings, main branch, or live deployment changed.


## Official-source resolution: Q67 bus sign — mismatch confirmed (2026-10-25)
- The official Department of Highways *คู่มือมาตรฐานป้ายจราจร* explicitly defines sign บ.49, a blue circle with a white bus pictogram, as “ช่องเดินรถที่กำหนดไว้สำหรับรถโดยสารประจำทาง” — a lane designated for buses. Source: https://doh.go.th/uploads/tinymce/service/bid/doc_bid/manual1.pdf, section 2.5.6, page 2-28; OTP official sign/manual index: https://www.otp.go.th/post/view/2098.
- Q67 image is the same blue circular sign with a white bus pictogram. Current keyed answer “Do not overtake into the bus lane” describes a prohibition on overtaking into a lane, not the meaning of the pictured sign. **Confirmed image-to-answer mismatch.** Candidate correct meaning is “Bus lane / lane reserved for buses.” Confirm all question stem and distractors, and the Thai/Myanmar translations, in a separately authorized fix phase; do not edit runtime question data during this audit.
- Scope: documentation only; no question JSON, answer key, translations, image assets, main branch, or live deployment changed.


### Visual audit: selected Traffic Laws diagram questions Q121–Q190 (2026-10-25)
Directly opened the question images listed below and compared their visible layout with the current keyed answer. Most images contain the same “thaidriveexam.com” watermark/logo, so asset provenance remains a release concern.
- **Q121:** give-way sign is clearly shown for vehicle A; key says B is on the major road. Broadly plausible, but diagram's stop/yield line and approach should be kept intact in any replacement asset.
- **Q122:** four vehicles approach a crossroad; no visible priority signs. Key says “Wait for vehicle B to pass first.” The image alone does not uniquely establish that priority order; needs explicit stem assumptions/current Thai intersection priority rule.
- **Q124:** T-junction with B on the horizontal road and A on the vertical approach; key says Vehicle B. Plausible, but verify the question's stated priority rule.
- **Q155/Q161:** two-vehicle intersection diagrams with yellow/blue/red labels; image alone is not enough to validate key without stem and road hierarchy. Keep for context review rather than mark confirmed.
- **Q164:** give-way sign appears beside the green vehicle at a crossing-road entry; keyed action to stop and wait for crossing-road traffic is broadly consistent, although the sign means yield and a full stop is only required when needed.
- **Q166:** crossroad diagram with four labeled cars; key says stop to let vehicles on the left pass first. Priority order cannot be safely verified from the image alone without the exact stem/road type.
- **Q167:** stop sign is visible and the red car's path is drawn across the intersection; key says red car. Verify the full stem and right-of-way rule because the picture includes a separate yellow car turning and does not by itself establish all priority assumptions.
- **Q184:** red car is turning into the main road while yellow car approaches from the top; key says yellow car. Plausible, but confirm road-priority context from the stem.
- **Q186:** arrows show two turning paths crossing at a junction; key says blue car. Requires stem/context validation; do not infer right-of-way from colors alone.
- **Q188:** merge/turning scenario at a divided multi-lane road; key says turn left then make a U-turn at a U-turn point. The image depicts a left-side vehicle turning into the road and another vehicle on the main road, but does not itself show a U-turn bay. Review image relevance against the stem.
- **Q189:** red car is positioned parallel to the curb among parked cars with hazard/indicator lights; key says “Cannot park in any case.” The image does not visibly show a sign or marking explaining a blanket prohibition; verify the stem and applicable legal condition before using this key.
- **Q190:** a pedestrian is crossing at a zebra crossing while cars queue behind a yellow line; key says the vehicle behind cannot overtake. The image depicts a crossing and queued cars, but the exact legal reason for no overtaking should be explicit in the stem.
- All listed findings are provisional visual checks, not legal conclusions. Scope is documentation only; no question content, answer key, translation, image, mapping, main branch, or live deployment changed.


### Visual audit: selected Vehicle Maintenance and Accident Prediction images (2026-10-25)
- **Q540 — high-priority image/key mismatch.** Image clearly shows a warning sign with a vehicle descending a steep grade and a supplementary Thai plate advising use of a low gear. Current keyed answer is “Ahead the road is curved and level.” The pictured hazard is a steep descent, not a level road/curve. Confirm the exact stem and official sign meaning, then correct image or answer in a later authorized content-fix phase.
- **Q556 — answer typo/label issue.** Current keyed English is “Rod B,” while the image labels vehicles A/B/C and shows vehicle B as the large truck. Likely intended “Vehicle B”; verify source language before changing.
- Q497 image shows a dashboard coolant-temperature/overheat warning gauge, broadly consistent with the keyed answer “The machine is very hot (Over Heat),” though English should use “The engine is overheating.” Do not change in this audit-only phase.
- Q533 image shows a multi-lane road with a pickup and truck ahead; keyed answer says slow down to give way to the pickup. Needs question-stem review to ensure the pickup's trajectory/priority is actually depicted.
- Q535 shows night traffic stopped at red lights with a bus in the left lane; keyed answer says “Bus inserted into left lane.” This does not appear clearly supported by the static scene, which shows the bus already beside queued traffic. Review stem/image temporal implication.
- Q536 shows a green car following closely behind a truck; key says “The truck driver may speed up the vehicle.” The image alone cannot establish this future prediction; check the actual prompt/context and avoid overclaiming if the behavior is not inferable.
- Q538/Q558 show a car with A/B/C labels for windshield/door/rear pillars; Q546 depicts dense community traffic; Q548 shows a pickup and roadworks barriers; Q555 shows a truck maneuvering among parked vehicles; Q561 shows a car adjacent to a truck; Q568 shows a truck in slow traffic. Their keyed concepts need stem-level review; this pass did not establish a definitive image/key mismatch for those items.
- These assets also show “thaidriveexam.com” watermarks in most road-scene images. Check provenance and rights before release.
- Scope: documentation only; no question data, answer keys, translations, images, mappings, main branch, or live deployment changed.

## Visual-audit milestone and current status (2026-10-25)

### Coverage milestone
- The first-pass visual audit has now opened all **173 image assets referenced by the 598-question bank**: traffic-sign assets Q1–Q117 plus all image-referenced items in Traffic Laws, Safe Driving, Vehicle Maintenance, and Accident Prediction (the remaining 56 image-bearing question records). Each image-bearing question has received a direct image inspection in this pass; some scenario images still require a stem/options-level check before a legal or answer-key conclusion can be made.
- This milestone means **visual inspection coverage is complete**, not that all 598 questions have passed final legal, translation, licensing, and answer-key verification. Several issues remain unresolved and are listed below.

### Superseding corrections to earlier provisional notes
- **Q95:** The previous mismatch flag is withdrawn. The official OTP manual explains sign ต.49 (“สิ้นสุดทางคู่”) as a divided road ending, ahead becoming a road/junction without a median or separator. This matches the current key's driver-facing meaning “junction without traffic island ahead.” Do not change Q95 based on the earlier visual-only flag.
- **Q59:** The previous mismatch flag is withdrawn. Official OTP/DOH manuals identify the red-up/black-down arrow sign as “give oncoming traffic priority”; the current answer “Stop and give way to oncoming traffic” is correct in substance.
- **Q67:** Mismatch remains confirmed. DOH manual sign บ.49 is a blue circle with white bus pictogram meaning “bus lane / lane designated for buses”; current key “Do not overtake into the bus lane” does not state the pictured sign's meaning. Correct only in a separately authorized content-fix phase.

### Highest-priority follow-up items after visual coverage
1. Q14 — image depicts a curbside car, not the no-stopping/no-parking sign/rule in the key.
2. Q22 and Q13 — image cues may not support all extra clauses in the keyed answer; verify official sign wording.
3. Q67 — confirmed bus-lane sign/key mismatch.
4. Q540 — image depicts a steep descent and supplementary low-gear instruction; key says “Ahead the road is curved and level.”
5. Q109/Q114/Q111/Q100 — STOP/give-way/road-marking wording or distinction needs source-aligned correction/review.
6. Q414 — “change channels when safe” is incorrect driving English; likely “change lanes,” pending source confirmation.
7. Q556 — “Rod B” appears to be a typo for “Vehicle B,” pending source confirmation.
8. Branded watermark/provenance: Q1, Q46, Q70 and many Safe Driving/scenario assets display “thaidriveexam.com.” Verify ownership/licensing and reuse permission before release; do not remove marks without rights confirmation.

### Audit boundaries
- No runtime question content, answer keys, Myanmar translations, images, mappings, main branch, or live deployment was changed. This branch contains documentation only. Image rights, exact legal-source mapping, and unresolved scenario questions remain release gates.


## Official-source confirmation: Q540 steep descent (2026-10-25)
- The official Department of Highways traffic-sign manual identifies ต.34 as “ป้ายเตือนทางลงลาดชัน” (steep descent ahead). Its meaning is to slow down and keep left; for particularly hazardous grades a supplementary “ใช้เกียร์ต่ำ” (use low gear) sign may be installed. Source: DOH traffic-sign manual, section 3.13.2, https://doh.go.th/uploads/tinymce/service/bid/doc_bid/manual1.pdf; an accessible manual extract reproduces the same description at https://fliphtml5.com/smohf/fwvn/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3/101/.
- Q540's image depicts a steep downhill warning sign and a supplementary low-gear instruction, whereas the current keyed answer says “Ahead the road is curved and level.” This is now a **source-supported high-confidence mismatch**. Exact final correction should be checked against the question stem and all options in the authorized content-fix phase; do not alter runtime content in this audit.
- Q14's image/key concern remains unresolved: the visual is a curbside car scene, not the standard no-stopping/no-parking symbol. It should not be considered an adequate sign-teaching image unless the full stem explains the depicted context.


## Source-record review: high-priority wording and safety items (2026-10-25)

The following records were retrieved from the branch's actual question-bank JSON files. This check confirms the current stored text and keyed option; it does not authorize runtime edits. These items are now classified as follows:

### Q540 — verified incorrect, awaiting owner approval
- **File / image:** `src/data/questions_accident_prediction.json`; `/exam_images/accident/1000000000535.webp`.
- **Exact English stem:** “From the picture, drivers predict accidents and what they should be careful of.”
- **Current keyed answer:** “Ahead the road is curved and level.”
- **Evidence:** The pictured steep-descent warning sign with a supplementary low-gear plate is identified by the Department of Highways traffic-sign manual as a steep descent ahead; the current answer does not describe that hazard.
- **Proposed action:** Recheck the image against all options and repair the question/image/answer set as a unit. Do not simply replace the answer without checking whether the image or stem was also sourced incorrectly.
- **Confidence:** High that the current image and keyed answer conflict; exact intended option remains subject to the full source review.

### Q531 — safety-critical incorrect answer, awaiting owner approval
- **File:** `src/data/questions_accident_prediction.json`.
- **Exact English stem:** “Which event, when predicted in advance, has the greatest risk of road accidents?”
- **Current keyed answer:** “When you come across a three-way intersection Fix it by honking your horn and accelerating to take a turn first.”
- **Finding:** This instructs the learner to honk and accelerate to take priority at an intersection. That is unsafe advice and is not an acceptable defensive-driving instruction.
- **Proposed action:** Verify the Thai source and original intended option; then correct or replace the unsafe keyed answer only after owner approval. Do not infer the intended replacement from the current mistranslated English alone.
- **Confidence:** High that the displayed keyed advice is unsafe as written; original source intent still needs validation.

### Q581 — verified meaning reversal in English and Myanmar, awaiting owner approval
- **File:** `src/data/questions_accident_prediction.json`.
- **Exact English stem:** “Which of the following is correct for driving at night?”
- **Current keyed option:** Thai “ขับให้ช้ากว่าปกติหรือไม่เร็วกว่าสายตาที่มองเห็น”; English “Drive slower than normal or faster than you can see.”; Myanmar “ပုံမှန်ထက် နှေးနှေး သို့မဟုတ် သင်မြင်နိုင်သည်ထက် ပိုမြန်အောင် မောင်းနှင်ပါ။”
- **Finding:** The English and Myanmar reverse the safe-driving limit in the second clause. Night-driving advice should never tell drivers to go faster than they can see safely.
- **Proposed action:** Check the original Thai phrase and propose an aligned rendering of “do not drive faster than you can see/stop safely”; retain current data until approval.
- **Confidence:** High that the English/Myanmar keyed text is unsafe and contradictory; confirm exact Thai phrasing before final copy.

### Q589 — likely translation/content corruption, awaiting source recovery
- **File:** `src/data/questions_accident_prediction.json`.
- **Current keyed Thai option:** “ใช้สายตาให้เคลื่อนไหวและไม่จดจ่ออยู่ที่จุดใดจุดหนึ่ง” (move the eyes and do not fixate on one point).
- **Current English:** “Use your eyes to move and not focus on one point.”
- **Current Myanmar:** “သင့်မျက်လုံးများကို ရွေ့လျားရန် အသုံးပြုပြီး အချက်တစ်ချက်ကို အာရုံစိုက်ပါ။”
- **Finding:** Myanmar says to focus on one point, which contradicts the Thai/English. Correct the meaning only after approval; a natural candidate should express scanning the road and not staring fixedly at one point.
- **Confidence:** High for the Thai–Myanmar contradiction; exact preferred learner wording pending review.

### Q414 — verified English terminology and translation defect, awaiting owner approval
- **File / image:** `src/data/questions_safe_driving.json`; `/exam_images/safe/1000000000524.webp`.
- **Current keyed English:** “Look in the side mirror and signal to turn right. and change channels when safe”
- **Current keyed Myanmar:** “ဘေးမှန်ကိုကြည့်ကာ ညာဘက်ကွေ့ရန် အချက်ပြပါ။ ဘေးကင်းသောအခါတွင် ချန်နယ်များကို ပြောင်းပါ။”
- **Finding:** “Change channels” and “ချန်နယ်များကို ပြောင်းပါ” are not road-lane terminology. Thai source says to check the side mirror, signal right, and change lanes when safe.
- **Proposed English:** “Check the side mirror, signal right, and change lanes when it is safe.”
- **Proposed Myanmar:** “ဘေးကြည့်မှန်ကို စစ်ဆေးပြီး ညာဘက်အချက်ပြပါ။ ဘေးကင်းမှသာ လမ်းကြောပြောင်းပါ။”
- **Confidence:** High for the terminology defect; verify image/stem context before final approval.

### Q556 — verified translation/terminology defect, awaiting owner approval
- **File / image:** `src/data/questions_accident_prediction.json`; `/exam_images/accident/1000000000551.webp`.
- **Current keyed Thai:** “คัน B” (vehicle/car B in this context).
- **Current English:** “Rod B”; **current Myanmar:** “ကြိမ်လုံး B”.
- **Finding:** “Rod” / “ကြိမ်လုံး” is a mistranslation of the vehicle label.
- **Proposed English:** “Vehicle B” (or “Car B” if consistent with the diagram and surrounding options).
- **Proposed Myanmar:** “ယာဉ် B” (or “ကား B” if the diagram consistently labels cars).
- **Confidence:** High that current translations are wrong; choose one standardized label after reviewing the image and category glossary.

### Audit status after this source-record check
- Direct visual inspection of all 173 image-bearing questions remains complete as a first-pass milestone.
- This pass has confirmed the exact stored records for Q414, Q531, Q540, Q556, Q581, and Q589 and upgraded the above findings from informal notes to source-record-backed review items.
- **No runtime question data, answer keys, translations, images, image mappings, main branch, or live deployment were changed.** Proposed fixes await owner approval as required by the audit policy.
- Next: retrieve the exact Q67 traffic-sign record and its options, inspect Q14's full stem/options, then continue official-source verification of the remaining safety-critical and legal items.


## Follow-up: stem/options-level review of Q13, Q14, Q22, Q67, Q100, Q109, Q111, Q114 (2026-10-25)

This pass retrieved the actual question records and all four answer options from `src/data/questions.json` at audit branch head `8c1672a40fbb87c9a7c34df8c60b3ea074348d1b`. The data below is review evidence only; no runtime records were changed.

### Q14 — refine the earlier image concern
- The actual English stem is **“What does the red-and-white curb marking mean?”** and the keyed Thai answer is “ห้ามหยุดห้ามจอดรถทุกชนิด”; English: “No stopping and no parking for all types of vehicles.”
- This is more specific than the prior note, which described the scene as a curbside car without explaining that the question explicitly asks about the curb marking. Therefore the previous conclusion that the image necessarily fails to show the claimed rule is **not fully established from the earlier note alone**. Re-open the actual image at full resolution and check whether the red-and-white curb marking is visibly present and legible. If it is absent or unclear, replace/remove the image; if clearly depicted, retain the image but verify the rule against an official Thai source.
- Myanmar key: “မည်သည့်ယာဉ်မျှ လုံးဝမရပ်ရ၊ ယာဉ်မရပ်နားရ”. Check whether the distinction between stopping and parking is naturally and precisely conveyed.

### Q13 — exact keyed option
- Stem: “When encountering this sign, what should the driver do?”
- Keyed Thai option combines slowing down, watching for oncoming traffic, and “ทางข้างหน้าเป็นทางขึ้นลาดชัน” (steep uphill ahead). English and Myanmar reproduce both the oncoming-traffic warning and uphill meaning.
- The image was previously described as a steep-uphill grade sign marked 8%. The uphill clause is consistent with that description; the extra oncoming-traffic clause is not proven by the grade symbol alone. Inspect the full image and official sign/lesson source before deciding whether the keyed option combines a general driver action with the sign meaning or adds unsupported content. Status: **needs source/stem validation; not a confirmed wrong answer**.

### Q22 — exact keyed option
- Keyed Thai option says to slow down and watch for vehicles coming from the other side of the bridge; English and Myanmar convey the same idea.
- Prior visual notes describe a narrow-bridge image. A narrow bridge can create a reason to watch for opposing traffic, but the image alone does not prove that the official sign meaning specifically says “oncoming traffic from the other side.” Verify the exact Thai sign class and source text. Status: **plausibility concern, not a confirmed mismatch**.

### Q67 — question asks for driver action, not only sign naming
- Actual stem: “When encountering this sign, what must the driver do?” Keyed Thai: “ห้ามแซงล้ำเข้าไปในช่องเดินรถประจำทาง”; English: “Do not overtake into the bus lane”; Myanmar: “ဘတ်စ်ကားသီးသန့်လမ်းကြောအတွင်းသို့ ကျော်တက်ဝင်ရောက်ခြင်းမပြုရ”.
- The DOH sign manual defines the blue bus pictogram sign บ.49 as a lane designated for buses. That confirms the **sign's designation**, but by itself it does not establish that the keyed driver-action statement is legally wrong in every context. The prior “mismatch confirmed” conclusion should therefore be treated as **overstated pending the exact legal/source context of this exam item**. Verify whether the item is testing the legal consequence of the bus-lane sign or asking the sign's direct meaning. If the latter, the key should state “bus lane / lane designated for buses”; if the former, cite the specific rule/source supporting the no-overtaking instruction. Do not change the answer key yet.

### Q100 — keyed wording precision
- Keyed Thai: “slow down and prepare to yield when reaching the GIVE WAY sign”; English: “Slow down, prepare to yield at yield sign”; Myanmar currently says to give priority to the vehicle ahead when reaching the sign.
- Myanmar narrows the priority recipient to “the vehicle ahead,” while the English is broader. Recommended Myanmar meaning should refer generally to yielding to traffic on the priority/crossing road as required, not exclusively the vehicle directly ahead. Validate final phrasing against the official sign definition.

### Q109 — STOP-line / give-way context
- The keyed Thai says stop and wait for traffic on the crossing road to pass; English says “Stop and wait for crossing traffic.” Myanmar says to stop and let crossing vehicles go first.
- The prior concern about conditional stopping remains valid as a teaching-precision issue: if the image shows a STOP sign, the explanation should make clear that a complete stop is required at the stop line/before the crossing road, and yielding to crossing traffic follows. If the image instead focuses on a give-way marking/line, the exact rule differs. Confirm the actual image and Thai source before rewriting the key.

### Q111 — distinction between line types and pedestrian crossing
- Keyed Thai combines stopping before a stop line or give-way line with letting pedestrians cross first; English and Myanmar carry the same combined instruction.
- The image reportedly contains multiple transverse markings. Confirm that the depicted line type(s) and pedestrian-crossing context actually support the combined answer. Official definitions for stop lines, give-way lines, and pedestrian crossings must not be collapsed into one universal rule. Status: **requires diagram/source match**.

### Q114 — Myanmar condition broadened
- Keyed Thai and English make stopping conditional on other vehicles or pedestrians crossing in front; Myanmar currently says “if there are other vehicles or pedestrians ahead,” which is broader and may imply stopping when they are merely present.
- Recommended Myanmar meaning: “အရှိန်လျှော့ပါ။ ရှေ့ဖြတ်လမ်းပေါ်တွင် ယာဉ် သို့မဟုတ် လမ်းလျှောက်သူ ဖြတ်သန်းနေပါက လမ်းပေးမျဉ်းမတိုင်မီ ရပ်ပါ။” This is a candidate translation for later authorized correction, not applied.

### Audit status / boundaries
- This pass reviewed actual stems, keyed options, and Myanmar strings for the eight records above.
- No question JSON, answer key, translation, image, image mapping, runtime code, main branch, or live deployment changed.
- Statuses are deliberately separated into confirmed mismatch, likely issue, and pending source verification; do not report all eight as confirmed errors.


## Official-source cross-check follow-up (2026-10-25)

This section records what can be supported by the official Thai manuals found in this pass. It does not change runtime question content.

### Q22 — narrow bridge: key supported by official manual
- Official source: Thailand Office of Transport and Traffic Policy and Planning (OTP), *Traffic Sign Standards*, section 3.6, “Narrow Bridge” (ป้ายเตือนสะพานแคบ).
- The manual says the road ahead has a narrow bridge where opposing vehicles cannot pass conveniently, and advises slowing down and watching for oncoming traffic from the other side of the bridge.
- This directly supports the substance of Q22's keyed Thai/English/Myanmar answer. Status: **source-supported; prior concern about the key is withdrawn**, subject to confirming the image is the standard narrow-bridge sign.
- Source: https://www.otp.go.th/uploads/tiny_uploads/OTPStandard/1-1-SafetyTransport01.pdf

### Q540 — steep descent sign: confirmed answer/image mismatch
- Official Department of Highways (DOH) manual section 3.13.2 identifies sign ต.34 as “steep descent ahead”; it advises drivers to slow down and keep left, and says a “use low gear” supplementary sign should accompany particularly hazardous grades.
- The recorded Q540 image is the steep-descent sign with an 8% grade and low-gear supplementary plate, while its keyed answer says “Ahead the road is curved and level.” These meanings do not match.
- Status: **confirmed high-priority mismatch**. Keep the item out of any “verified/correct” claim until its stem, options, and key are corrected against the source. No correction has been applied in this documentation-only commit.
- Source: https://doh.go.th/uploads/tinymce/service/bid/doc_bid/manual1.pdf
- Related DOH manual index: https://www.doh.go.th/content/201

### Q13 — steep uphill sign: partial support only
- The question's key includes both “steep uphill ahead” and “watch for oncoming traffic.” The steep-uphill sign supports the grade warning, but the sign alone does not establish an oncoming-traffic warning.
- Status: **partially supported; verify the full image/context and the source question before accepting the extra clause**. Do not label the whole key confirmed based only on the sign graphic.

### Q14 and Q67 — still unresolved
- Q14: the rule for a red-and-white curb and the visible content of the exact image still need to be checked together. Do not treat the earlier visual description as proof that the marking is absent.
- Q67: the official bus-lane sign definition and the item's action-oriented wording are different questions. Need a source for the claimed prohibition on overtaking into the bus lane before deciding whether the answer is wrong; no mismatch is confirmed in this pass.

### Evidence discipline
- Q22 has official-source support; Q540's earlier mismatch claim is withdrawn pending direct image review; Q13 is only partially supported.
- No question JSON, answer key, translation, image, image mapping, runtime code, main branch, or live deployment was modified.


### Q14 — red-and-white curb rule: rule confirmed, image still to inspect
- An official Thai police-station public-information page states that a red-and-white curb means no stopping or parking for any vehicle within the marked stretch. This supports the substance of the keyed answer.
- Status: **rule supported; image-to-stem match remains pending** because the exact image must visibly show the red-and-white curb marking clearly enough for the user to identify it. The previous note that the image may be a generic car/curb illustration is not sufficient to call the item wrong.
- Source: https://thamuang.kanchanaburi.police.go.th/แถบฟุตบาท-สีไหนจอดได้-สีไหนห้ามจอด/


## Follow-up: official rule cross-check for Q67, Q109, Q111 and Q114 (2026-10-25)

### Q67 — bus-lane sign: sign meaning confirmed; keyed action not yet proven
- OTP's official traffic-sign standard identifies mandatory sign บ.49 as a bus-lane sign: the lane where it is installed is designated for buses, under section 65 of the Land Traffic Act B.E. 2522. It also discusses supplementary signs/time restrictions and road markings.
- Q67's stem asks what the driver must do, while its keyed answer says “Do not overtake into the bus lane.” The sign definition alone does **not** establish that exact prohibition as the direct meaning of the sign.
- Status: **question/key remains unresolved**. If the item is testing the sign's direct meaning, the keyed answer should describe a lane designated for buses. If it is testing a separate driving action, a legal/source basis for “do not overtake into the bus lane” must be documented. Do not change the answer key until the original question source/context is confirmed.
- Official source: https://www.otp.go.th/uploads/tiny_uploads/OTPStandard/1-1-SafetyTransport01.pdf

### Q109 — STOP sign / stop line rule: official rule supports stopping, image context still matters
- DOH's official Traffic Sign Standard manual defines STOP sign บ.1 as requiring the driver to stop before the intersecting road or stop line and wait for vehicles and pedestrians on the crossing road to pass; proceed only when safe and without obstructing the intersection.
- This supports the substance of Q109's keyed answer (“Stop and wait for crossing traffic”) **if the image shows a STOP sign / stop-line-controlled approach**. It would not be appropriate to infer that every give-way line requires a complete stop.
- Status: **conditional source support; verify exact depicted sign/marking**.
- Official source: https://www.doh.go.th/content/download/174663

### Q111 — STOP line and give-way line must not be treated as interchangeable
- DOH's road-marking manual describes a stop line as a solid white transverse line used with controls requiring a stop (such as a STOP sign, traffic signal, or pedestrian crossing). A give-way line is a broken white line requiring drivers to slow and give way to crossing traffic/pedestrians, proceeding when safe.
- Q111's keyed answer combines “stop before the stop line or give-way line” with “let pedestrians cross.” The combined wording risks incorrectly applying a mandatory full stop to a give-way line in all circumstances.
- Status: **confirmed wording precision issue**. Verify the diagram and revise the stem/key to distinguish a mandatory stop from slowing/yielding; no runtime change applied.
- Official source: https://doh.go.th/uploads/tinymce/service/bid/doc_bid/manual5.pdf

### Q114 — Myanmar translation is broader than Thai/English
- Thai/English condition is “if other vehicles or pedestrians are crossing on the crossing road”; Myanmar currently means “if other vehicles or pedestrians are ahead/present.” The translation can instruct stopping when someone is merely present, rather than when crossing traffic triggers the stated condition.
- Candidate meaning for a future authorized correction: “အရှိန်လျှော့ပါ။ ရှေ့ဖြတ်လမ်းပေါ်တွင် ယာဉ် သို့မဟုတ် လမ်းလျှောက်သူ ဖြတ်သန်းနေပါက လမ်းပေးမျဉ်းမတိုင်မီ ရပ်ပါ။”
- Status: **translation discrepancy confirmed against the current Thai/English text; official rule and exact diagram still need checking before publishing a correction**.

### Scope
- This is an evidence note only. No question JSON, answer key, translation, image, image mapping, runtime code, main branch, or live deployment was changed.


## Follow-up: confirmed language/terminology defects from current records (2026-10-25)

### Q414 — English and Myanmar use the wrong word for changing lanes
- Thai keyed option says “เปลี่ยนช่องทางเมื่อปลอดภัย” (change lanes when safe).
- Current English says “change channels when safe”; current Myanmar transliteration/loanword also says “ချန်နယ်များကို ပြောင်းပါ,” which means changing channels rather than traffic lanes.
- Status: **confirmed translation/terminology defect**. The intended meaning is to change traffic lanes when safe. Candidate English phrase: “Check the side mirror, signal right, and change lanes when safe.” Candidate Myanmar should use a natural driving term for changing traffic lanes, not “channels.” The Myanmar wording should be reviewed by a fluent driver/translator before release. Not applied.

### Q556 — “Rod” is a confirmed mistranslation of vehicle/car
- Thai answer options use “คัน B / คัน A,” a classifier referring to vehicle B/A in context.
- Current English says “Rod B” and “Rod A”; Myanmar repeats “ကြိမ်လုံး B/A,” which means a rod/stick rather than a vehicle.
- Status: **confirmed translation defect**. Replace with “Vehicle B / Vehicle A” (or “Car B / Car A” if the image/source confirms these are cars); Myanmar should say “ယာဉ် B / ယာဉ် A” or the verified vehicle type. The correct option identity is not changed by this terminology fix. Not applied.

### Q100 — yield meaning: translation should not restrict priority to “vehicle ahead”
- OTP/DOH priority-sign rules describe yielding to traffic on the crossing/priority road; Q100's Myanmar correct option currently says to give priority to “the vehicle ahead.”
- Status: **Myanmar wording is too narrow compared with the keyed Thai/English meaning**. Candidate meaning: slow down and prepare to give way to traffic on the crossing road/priority road when required. Confirm the exact warning sign depicted and preferred terminology before applying the edit. Not applied.

### Change control
- These are audit findings only. No question JSON, answer key, translation, image, image mapping, runtime code, main branch, or live deployment was modified.


## Follow-up: Thai legal definition and scenario-language findings (2026-10-25)

### Q95 — earlier mismatch concern narrowed after checking the regulation text
- The Thai ministerial regulation published in the Royal Gazette defines warning sign ต.49 “สิ้นสุดทางคู่” as: the road ahead becomes a junction/road without a median or other separator between opposing directions; drivers should keep left.
- Q95's keyed Thai phrase “ทางร่วมไม่มีเกาะ” corresponds closely to that legal definition. This means the key phrase is **not inherently wrong**; the remaining issue is whether the actual Q95 graphic is the official ต.49 sign and whether the English “junction without traffic island” accurately conveys “end of divided road.”
- Status: **text supported by the regulation; exact image-to-sign identification still needs final comparison**. The previous note treating the central-island appearance as a likely contradiction is downgraded, not treated as confirmed error.
- Official Royal Gazette / DOH-hosted regulation PDF: https://network.doh.go.th/km-web/storage/km/articles/กฎกระทรวง-ป้ายจราจร%202563_20220614151840.pdf

### Q100 — Myanmar correct option is too specific
- Current keyed Thai says prepare to give way when reaching the give-way sign; English says “prepare to yield at yield sign.” Myanmar says “give priority to the vehicle ahead.”
- The Myanmar wording narrows the recipient to a vehicle directly ahead, which is not stated in the Thai/English key.
- Status: **confirmed translation scope mismatch**. Candidate meaning: “အရှိန်လျှော့ပါ။ လမ်းပေးဆိုင်းဘုတ်သို့ ရောက်သည့်အခါ လမ်းပေးရန် အသင့်ပြင်ပါ။” This preserves the current key's wording without introducing a new recipient. Not applied.

### Q94 — side-road warning translation loses the side/direction detail
- Correct Thai/English says a side road joins from the left ahead; Myanmar currently says a side junction/branch is ahead, omitting “from the left.”
- Status: **confirmed translation information loss**. Candidate meaning: “အရှိန်လျှော့ပြီး သတိထားမောင်းနှင်ပါ။ ရှေ့ဘက် ဘယ်ဘက်မှ လမ်းခွဲတစ်ခု ပေါင်းဝင်လာမည်။” Confirm sign terminology with a fluent Myanmar road-safety translator before release. Not applied.

### Q533 — “give way” mistranslated as moving toward the pickup
- Thai correct option says “ชะลอรถเพื่อให้ทางรถกระบะ” (slow down to give way to the pickup truck). English says “Slow down to give way to the pickup truck.” Myanmar says “ပစ်ကပ်ထရပ်ကားဆီသို့ အရှိန်လျှော့ပါ” (slow down toward the pickup truck), losing the yielding action.
- Status: **confirmed Myanmar translation error**. Candidate meaning: “ပစ်ကပ်ထရပ်ကားကို လမ်းပေးရန် အရှိန်လျှော့ပါ။” Not applied.

### Q535 — English and Myanmar scenario wording is unclear
- Thai keyed option “รถบัสแทรกเลนซ้าย” means a bus cuts/merges into the left lane. Current English “Bus inserted into left lane” is unnatural; Myanmar “ဘတ်စ်ကားကို ဘယ်ဘက်လမ်းကြားတွင် ထည့်သွင်းထားသည်” reads as someone placing a bus into a lane, not a driving event.
- Status: **confirmed clarity/translation issue**, but check the image and original scenario source before deciding whether the intended event is “bus merges into the left lane” or “bus cuts in.” Not applied.

### Q536 — Myanmar question stem does not express the English task
- English asks “which is not a dangerous event that may happen to Car A?” Myanmar currently reads roughly “in the picture, which can happen to Car A?” and loses the negative “not dangerous” criterion.
- Status: **confirmed high-priority question-stem translation error** because it can reverse how the learner chooses an answer. Candidate meaning: “ပုံအရ ကား A အတွက် ဖြစ်လာနိုင်သည့် အန္တရာယ်ရှိသော အခြေအနေ မဟုတ်သည့်အရာမှာ မည်သည့်အရာနည်း။” Have a fluent reviewer validate naturalness before publishing. Not applied.

### Change control
- All above are audit findings only. No question JSON, answer key, translation, image, image mapping, runtime code, main branch, or live deployment changed.


## Important correction: Q540 record/image identity (2026-10-25)

This correction supersedes earlier audit notes that described “Q540” as a steep-descent traffic-sign question.

- A fresh read of the actual src/data/questions.json record shows question ID 540 is in category accident_prediction, uses image /exam_images/accident/1000000000535.webp, and its keyed answer is “Ahead the road is curved and level.”
- Therefore, the earlier claim that question ID 540 uses a steep-descent sign image and is a confirmed image/key mismatch was caused by conflating the question ID with a separately numbered traffic-sign image asset. **Withdraw the Q540 steep-descent mismatch claim.**
- The steep-descent image/answer observation may refer to a different record/asset and must not be assigned to Q540 unless its exact question record and image mapping are identified.
- Actual Q540 now needs a fresh visual review of its accident-prediction image and all options before its key can be judged.
- This is a material correction to preserve audit accuracy. No runtime data was changed.


## Audit correction — Q540 and Q67 status (2026-10-25)

This note supersedes any older status line in this document that conflicts with the corrections below.

- **Q540: withdraw “confirmed image/key mismatch.”** The actual question record ID 540 is an `accident_prediction` question, image `/exam_images/accident/1000000000535.webp`, keyed answer “Ahead the road is curved and level.” It is not the steep-descent traffic-sign item described in earlier notes. The old Q540 mismatch statement in the “Evidence discipline” paragraph above is stale and must not be used as a current finding. The actual accident-prediction image/key pair still requires direct re-review.
- **Q67: unresolved, not confirmed wrong.** The official source confirms the sign designates a bus lane, but that fact alone does not prove the action wording “Do not overtake into the bus lane” is wrong. Retain the question as pending until the item's source/context and legal basis for the action are verified.
- **Review process limitation:** this continuation could not reopen the raw image assets through the available GitHub/browser fetch path. Therefore it records no new visual judgement for Q540, Q533, Q535, Q536, or Q497. Do not treat the prior first-pass opening milestone as a substitute for question-by-question visual evidence.
- No question data, answers, translations, images, mappings, runtime code, main branch, or live deployment changed.
