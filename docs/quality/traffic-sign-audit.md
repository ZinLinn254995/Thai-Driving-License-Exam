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
