# Myanmar Question Translation & Official-Source Audit

**Status:** In progress. Questions 1–74 in `src/data/questions_law.json` reviewed; approved Myanmar translation corrections applied on this branch only.
**Audit branch:** `audit/myanmar-question-verification`, now based on merged `main` (base commit `3e4fabd2b55bd685ef2af13d4020dcf6a545d512`).
**Scope:** Compare each Myanmar question stem and every option with the Thai and English source. Do not change answer keys, image mappings, source-language text, or question order during translation review.
**Workflow:** Record proposed corrections first. Apply additional corrections only after user approval.

## Completed batch: Questions 1–25

Approved translation fixes were applied to these records:
- Q1 (ID 118): broadened wording from “must notify/report” to “must take the required action” for a damaged or lost driving licence.
- Q5 (ID 122): clarified options that require waiting until vehicle(s) pass first.
- Q10 (ID 127): clarified the breath-alcohol wording in the stem.
- Q12 (ID 129): clarified the distance from the roadside edge for parking.
- Q22 (ID 139): clarified the penalty question for driving without a licence.

No answer keys, image mappings, Thai/English source text, or question order were changed.

## Deferred translation issue

- Q8 (ID 125): Thai “การย้ายรถ” / English “moving/transferring a vehicle” is ambiguous. The current Myanmar wording may suggest physically moving a vehicle rather than transferring vehicle registration/ownership. Keep unchanged until reviewed separately.

## Completed batch: Questions 26–50

Reviewed Myanmar stems and options against Thai and English. Approved fixes for Q27 (ID 144), Q29 (ID 146), Q41 (ID 158), Q43 (ID 160), Q47 (ID 164), and Q48 (ID 165) were applied in an earlier commit on this branch. Q27 wording should be rechecked in a later quality pass for naturalness and exact alignment.

## Completed batch: Questions 51–74

Reviewed Myanmar stems and options against Thai and English. The following user-approved stem corrections were applied in this branch:
- Q59 (ID 176): simplified the phrasing for a person who cannot speak.
- Q61 (ID 178): corrected the question to ask which condition a person has while being permitted to drive.
- Q68 (ID 185): clarified that the person cannot speak and is also deaf.
- Q69 (ID 186): clarified which vehicle must stop and give way when the blue vehicle exits a side street.

Q52 image-option references (“ပုံ”) still need a separate image-to-option mapping audit. Q8 (ID 125) remains deferred because the source wording is ambiguous.

## Next step

Inventory all other question-bank files in the repository. Continue the full Myanmar translation audit across the remaining question sets, reviewing each stem and every option against Thai and English. Record proposed changes and wait for user approval before editing them.

## Evidence standard

An official law or government manual may support the applicable legal rule, but does not by itself prove that a practice question is an exact official exam question. Do not describe a question as verbatim official material without a matching official source.


## Additional question-bank inventory and uncertainty log — 2026-10-24

### Question-bank files found on the audit branch

- `src/data/questions_law.json`: 74 questions (IDs 118–191); Myanmar translation review completed for this file, with Q8 (ID 125) still deferred for ambiguous source meaning and Q52 image-option mapping needing a separate audit.
- `src/data/questions_safe_driving.json`: 249 questions (IDs 192–440).
- `src/data/questions_maintenance.json`: 81 questions (IDs 441–521).
- `src/data/questions_accident_prediction.json`: 77 questions (IDs 522–598).
- `src/data/questions.json`: expected 117 sign questions according to the existing traffic-sign audit, but the GitHub file fetch returned empty content in this review attempt; retrieve through an alternate route before auditing it.
- `src/data/questions.ts` is the generated/combined bank; the connector also returned empty content for this large file. Do not treat that as an empty file.

### High-priority uncertainty — safe-driving stems IDs 192–440

Initial review found a systematic source/data-integrity issue: the Thai and English stems for questions 192 onward begin with a stray closing parenthesis `)`, and many stems appear to have lost their opening words. Some Myanmar stems preserve the stray punctuation, while others have an unrelated prefix such as `၎)`. This affects the source text itself, not only Myanmar translation. Examples include IDs 192–195 and 197–205. **Do not patch these stems by guessing.** Recover the original complete Thai/English source or compare against a trusted source before editing. Mark this entire set for source recovery and then re-audit each Myanmar stem and option.

### Specific translation concerns observed during the initial safe-driving sample

These are review notes, not applied changes:
- ID 192: option about changing lanes uses “ချန်နယ်” (channel) instead of natural road-lane terminology.
- ID 195: option 3 Myanmar wording incorrectly conveys traffic congestion instead of oncoming straight-moving vehicles.
- ID 196: correct-option wording about holding the steering wheel firmly and turning flexibly is awkward; rephrase only after source confirmation.
- ID 199: Myanmar wording for honking before a curve and for high/low beam warning is unclear.
- ID 201: stem negation is reversed: English asks which driving behavior is unsafe, while Myanmar asks which is safe.
- ID 207: option for Thai `ผู้ขับขี่` / English `rider` is translated as “မြင်းစီးသူ” (horse rider), which is incorrect in this road-driving context.
- ID 210: stem is broadly understandable; options should be checked for naturalness and safety meaning.
- ID 224: the literal “Always turn left” translation may not preserve the intended traffic-sign meaning; verify the sign and rule before revising.
- ID 225: “secondary road” is translated as “အလယ်တန်းလမ်း”; likely road-type mistranslation, but verify the intended Thai road term.
- IDs 192–241 sampled: English stems are also poorly punctuated or fragmented, so English alone cannot always be treated as a reliable source.

### Maintenance questions — initial sample notes

IDs 441–452 were sampled. Most meanings are broadly aligned, but several Myanmar options need natural-language cleanup:
- ID 442, option 2: English source itself says “Install a sound machine” for listening to an engine belt; likely mistranslated English/source text. Confirm Thai meaning before editing Myanmar.
- ID 444, correct option: Myanmar reads like disconnected “high/low standards”; express the level as between the marked MIN/MAX lines after confirming the source.
- ID 445, question stem is understandable, but “Clutch” is left in English; terminology consistency can be improved.
- ID 448, stem’s “ကားကိုစပြီးလုပ်တဲ့အခါ” is unnatural.
- ID 449, “တောက်လျှောက်မနင်း” is ambiguous for “not pressing the clutch all the way”; clarify after review.
- ID 450, correct option wording about tire tread wearing faster is unnatural and potentially misleading.
- IDs 441–452 have not been edited; review the remaining questions and all options before proposing a batch.

### Accident-prediction questions — initial sample notes

IDs 522–533 were sampled. No edits applied. Review concerns:
- ID 524: stem says “ကြိုတင်ခန့်မှန်းထားရင် မတော်တဆမှုတွေ ဖြစ်နိုင်ပါတယ်” and omits the clear “ahead” condition.
- ID 525: both English and Myanmar stems are fragmented/ambiguous; recover the intended question before revising.
- ID 527, correct option: Myanmar “ခရီးသည်တွေ သတိထားပါ” reads as telling passengers to be careful rather than telling the driver to watch for passengers alighting.
- ID 529: stem’s second sentence incorrectly suggests ABS plays an important role “in any situation”; align to Thai after checking intended question.
- ID 531: all options include garbled English source text; correct option text seems semantically risky/unclear. Verify source before translating.
- ID 532: Myanmar stem is only “ရည်ရွယ်ချက်က ဘာလဲ၊” and omits the action “looking far ahead”; restore only after source recovery.
- ID 533, option 3: Myanmar translates traffic lane as traffic congestion; likely mistranslation.

### Process

Continue the full question-by-question review, including every option. Record uncertain source text and translation concerns first; do not change question data, answer keys, images, or order without user approval. Do not claim official exam-source verification without direct evidence. Do not modify `main` or deploy.


### Important source-recovery finding — duplicate data files

A later fetch through GitHub's Contents API successfully retrieved `src/data/questions.json` (598 records, IDs 1–598) and `src/data/questions.ts` (auto-generated 598-question bank). Comparing `src/data/questions_safe_driving.json` against the combined `questions.json` by ID showed all 249 safe-driving records have at least one text-field difference. In particular, the combined file has the missing leading words restored in Thai and English stems for IDs 192–440. This suggests the separate safe-driving JSON is a stale or malformed source copy, while the combined bank contains cleaner stems. **Do not blindly copy entire records across files**: IDs 196 and some others still have Myanmar-specific issues, and differences must be field-by-field reviewed. This finding reduces the need to guess the missing Thai/English stem text; use the combined bank as the comparison reference while checking whether it is the actual runtime source.

### Additional sample review notes

- Maintenance IDs 453–465: ID 453 uses “Anode” for the positive terminal in English while the Thai option is “positive terminal”; verify terminology against the Thai source and do not use “anode” as a casual substitute. ID 454 English is fragmented but Thai is clear; Myanmar question repeats the fragmented structure. ID 455 “windshield wiper” option is translated with an untranslated “wiper” loanword, which may be acceptable but needs consistent wording. IDs 458 and 459 have awkward verb phrasing in options; ID 460's stem incorrectly describes the car as still stationary, while Thai says it has not fully stopped—verify the intended state before revising. These are proposed review items only.
- Accident-prediction IDs 534–551: many stems/options in English are fragments; prefer the Thai source when its meaning is clear, and mark the item uncertain when the Thai itself is unclear or image context is necessary. ID 545 contains corrupted counting text (“တစ်ထောင်တစ်ထောင်...”) in Myanmar and needs a careful translation of the three-second following-distance rule. ID 547 Myanmar stem asks “what is the purpose” while Thai/English asks which option is not a purpose (negation mismatch). ID 549 option “ด้านบน” / “top” rendered as “ထိပ်တန်း” is not natural for spatial direction; use an accurate directional term only after context confirmation. ID 551’s option about helping victims translates “ผู้ประสบเหตุ” as “ဒုက္ခသည်များ” (refugees/displaced people), which is incorrect in a road-incident context.
- The combined bank also has translation concerns on IDs 414 and 424 where “lane” is translated as “ချန်နယ်”; ID 201 has a stem negation mismatch; ID 207 option “ผู้ขับขี่” is rendered as “မြင်းစီးသူ”; all remain unedited pending approval.


### Combined 598-question bank: wider screening notes

A broad screening of the combined bank identified likely review candidates, but automated keyword/negation checks produce false positives and are **not** accepted as translation decisions. These candidates must be read against Thai and English individually.

High-confidence semantic mismatches to prioritize:
- ID 201: source asks which driving behavior is unsafe; Myanmar says which behavior is safe (negation reversed).
- ID 207 option “ผู้ขับขี่” is translated as “မြင်းစီးသူ” (horse rider), incorrect in a road-traffic question.
- ID 414 and ID 424 use “ချန်နယ်” for traffic lane in Myanmar options; replace with appropriate road-lane terminology after review.
- ID 536: Thai/English asks which event is *not* dangerous for Car A; Myanmar appears to ask only “which could happen to Car A,” omitting the negation and question meaning.
- ID 547: source asks which is *not* the purpose of accident prediction; Myanmar asks what the purpose is, omitting the negation.
- ID 588: source asks which is *not* a factor to decide before overtaking; Myanmar asks which factor should be decided, reversing the question intent.
- ID 549 option “ด้านบน” / “top” translated as “ထိပ်တန်း” is not an appropriate spatial-position term.
- ID 551 option translates road-incident victims as “ဒုက္ခသည်များ,” which means refugees/displaced people rather than accident victims.

Other potential negation flags from automated screening are not confirmed until manually checked; do not bulk-edit from the screening list. Continue manually reviewing every question stem and all four options, and separately check image-dependent questions against the associated image.


### Traffic-sign questions IDs 1–20 — first-pass translation review

Most sampled stems and options broadly align across Thai, English, and Myanmar. No data edits applied. Uncertain/review items:
- ID 2, option 2: Thai `ให้ใช้ความเร็ว` is vague and English says “Minimum speed limit applies,” while Myanmar says “drive at the prescribed speed.” Confirm the sign image and intended legal meaning before revising.
- ID 6, correct option: “solid line” is translated as `မျဉ်းဖြောင့်အပိတ်`, an awkward/unclear road-marking term; verify whether it should explicitly mean a solid continuous line that must not be crossed.
- ID 8, correct option: Thai/English refer to giving way to cross traffic, while Myanmar says “ရှေ့လမ်းဆုံရှိ ... ဦးစားပေးလမ်းဖယ်ပေးပါ”; broadly aligned but the road-priority wording may be sharpened after image context review.
- ID 13: the Thai option includes both oncoming traffic and a steep uphill ahead, which seems potentially mixed; check the sign image to ensure the correct option text matches the sign.
- Image-dependent stems throughout IDs 1–20 use generic “this sign / from the image”; translation alone cannot validate whether the actual image and keyed answer match. Image-to-answer audit remains separate.


### Traffic-sign questions IDs 21–45 — first-pass review

No question data was edited. Translation/source concerns recorded for follow-up:
- ID 23, correct option: “ห้ามขับรถผ่านหรือคร่อมเส้น” is rendered as “ယာဉ်ကြောစည်းမျဉ်းကို ဖြတ်ကျော်ခြင်း”; the road marking/line concept is not stated naturally and needs exact sign-context verification.
- ID 26, option 2: Thai/English describe a height clearance below 2.50 m; Myanmar uses `လျှောက်လမ်း` (“walkway/path”), which does not clearly convey vehicle height clearance. Verify sign and rephrase.
- ID 27, correct option: “ทางโทแยกไปทางขวา” is translated as a “လမ်းသွယ်လမ်းခွဲ”; broadly close, but road hierarchy terminology should be standardized.
- ID 32, correct option: Myanmar says changing lanes or overtaking is permitted; confirm the sign image and Thai/English source because the wording may depend on the specific sign.
- ID 42, correct option: `เส้นแนวหยุด` (stop line) is translated as `မှတ်တိုင်မျဉ်း`, which can mean a bus-stop line; use a road-stop-line term after confirmation.
- IDs 21–45 are image-dependent; generic stems cannot validate the sign/image or answer-key mapping. Review the image and correct-option mapping as a separate pass.


### Traffic-sign questions IDs 46–90 — first-pass review

No data edits applied. Items requiring clarification:
- ID 46, correct option: “เส้นชะลอความเร็ว” / speed-reduction markings is rendered as “အရှိန်လျှော့ရန် အမှတ်အသားမျဉ်းများ”; likely understandable, but confirm it refers to transverse speed-reduction markings rather than generic lines.
- ID 52, correct option: Thai/English prohibit changing into the right lane; Myanmar “ညာဘက်လမ်းကြောင်းသို့ မကူးရ” is understandable but should be standardized with the chosen lane-change terminology.
- ID 55, correct option: Thai specifically prohibits trucks of all kinds from entering; Myanmar “ကုန်တင်ယာဉ်များ” is concise and broadly aligned, but verify it retains the “all kinds / entering and exiting” scope.
- ID 57: distinguish “no parking” from “no stopping” consistently. Current option 3 means no parking, option 4 means no stopping; review sign imagery to ensure the answer key matches.
- ID 66, correct option: Myanmar says drivers must keep left around the roundabout and yield to vehicles already inside; broadly aligned, but traffic-flow wording should be checked against the Thai rule/sign.
- ID 70, correct option: the Thai refers to the hatched box area and permits stopping only while waiting to turn right; Myanmar is broadly aligned but the exact exception should be checked against the marking illustration.
- IDs 75–80: technical terms for minor/major roads joining or branching in T/Y shapes are understandable but inconsistent/awkward in Myanmar. Standardize only after reviewing the sign diagrams and Thai road-hierarchy terms.
- ID 87, correct option: Thai says be careful about skidding and do not brake hard; Myanmar is aligned, but “ဘရိတ်ကို ပြင်းထန်စွာ မနင်းပါနှင့်” may be polished for naturalness.
- ID 90, correct option: “สะพานเปิดได้” is rendered as “ဖွင့်ပိတ်နိုင်သော တံတား”; verify that this refers to a movable/opening bridge sign, not merely a bridge with a gate.

Continue image-context verification for these sign questions; do not alter the key or image associations during the translation-only pass.
