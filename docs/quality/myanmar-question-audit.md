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


### Traffic-sign questions IDs 91–117 — first-pass review

No data edits applied. Items to verify or polish:
- IDs 91–93: “ทางขนาน” is rendered with multiple Myanmar variants (“ဘေးတွဲလမ်း”, “ဘေးလမ်းမ (Frontage road)”). Standardize the term for frontage/service road after checking the sign.
- ID 94, correct option: “ทางร่วมด้านซ้าย” rendered as “လမ်းဆုံလမ်းခွ” without clearly specifying a side road joining from the left; verify sign image and refine if needed.
- ID 101–103: school/pedestrian/children warning options are semantically close but must be matched to the exact sign image; do not infer from text alone.
- ID 105, correct option: “สลับกันไป” is rendered as “အလှည့်ကျမောင်းနှင်ပါ”; confirm the context means alternating one-by-one passage through a narrow section.
- ID 111, correct option: stop line / give-way line terms are better than the earlier “မှတ်တိုင်မျဉ်း” issue, but confirm both terms remain distinct and accurate throughout the bank.
- ID 113, correct option: “เกาะสี” means a painted traffic island/painted area; Myanmar’s “ယာဉ်အသွားအလာခွဲခြားသည့်အမှတ်အသား” may be too general. Confirm the road marking before changing.
- ID 117: “Rumble Strips” is translated descriptively and includes the English term; likely usable, but terminology should be consistent with the site's learner-facing glossary.


### Safe-driving questions IDs 212–241 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 214, correct option: Thai says repeatedly press and release the brake; Myanmar says “စက်ဘီးနင်း” (pedal a bicycle), which is wrong.
- ID 216, correct option: Thai says restart the engine; Myanmar says “အင်ဂျင်အသစ် တပ်ဆင်ပါ” (install a new engine), a clear mistranslation.
- ID 218: image-based right-turn scenario; option 4 is broadly aligned but the image must be checked before confirming.
- ID 221: source stems are fragmented in English and Myanmar; use the complete Thai stem as primary meaning reference, and review every option for clear left-side overtaking exceptions.
- ID 222: source asks for the exception in which a driver may drive on the right or cross the road center; Myanmar phrasing “ဘယ်အခြေအနေမှာမှ ... မောင်းနှင်နိုင်ပါ့မလား” can read as “under what circumstances can’t they?”, so intent needs correction after approval.
- ID 224, correct option: the Myanmar says to wait for pedestrians and vehicles from the right before turning left, but the sentence is awkward and should be clarified.
- ID 228, correct option: “รถเสียหรือรถเกิดอุบัติเหตุ” is rendered as car breakdown or collision, broadly aligned.
- ID 230: stem is awkward in all three languages; Myanmar option 3 is a fragment (“mobile phone while driving”) rather than a complete option. Rewrite only after source meaning is confirmed.
- ID 238, correct option: Thai says release the accelerator and hold the steering wheel firmly; Myanmar says “အရှိန်မြှင့်ပြီး” (accelerate), reversing the instruction. Option 1 also wrongly translates “ถอนคันเร่ง” as accelerating.
- IDs 192–241 still require a full option-by-option pass; this log records only high-confidence issues surfaced in the current sample.


### Safe-driving questions IDs 242–270 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 246, option 1: “ทางบังคับเลี้ยว” means a mandatory-direction route; Myanmar “စတီယာရင်လမ်းကြောင်း” is incorrect.
- ID 250: Thai refers to pulling out from the left shoulder, not exiting the vehicle. The English and Myanmar stems both misread this as “leaving the vehicle,” so source-language correction is needed before the stem is translated accurately.
- ID 251: Thai/English ask which is *not* the correct way to look while driving; Myanmar asks which way is correct, omitting the negation. Option 1 itself correctly describes looking at something unrelated, but stem polarity must be corrected.
- ID 254, option 4: “น้ำหนักบรรทุก” means load/vehicle load, but Myanmar says “ဝန်ဆောင်ခ” (service fee), incorrect.
- ID 255, correct option: “ขอบทาง” (road edge/curb) is translated as “ကန့်လန့်ကာ” (curtain), incorrect. The instruction to angle wheels toward the curb on a downhill slope also needs a natural road-term translation.
- ID 260, correct option: meaning is aligned, though it can be phrased more naturally.
- ID 262: correct option is understandable; the stem is long but semantically aligned.
- ID 264: correct option broadly aligns; wording should be made natural after the full pass.
- ID 268: only “turn on emergency lights” is keyed correct when a vehicle catches fire in a tunnel and cannot continue. This is a possible content/answer-key safety concern, not a translation-only fix; flag for separate factual/official-source review, do not change the key in this pass.
- ID 270: stem and options are broadly understandable, but several distractors are awkwardly translated. Preserve option meaning and key while polishing only after approval.


### Safe-driving questions IDs 271–295 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 271, correct option: Thai says stop and let the vehicle signalling right proceed first; Myanmar says stop and turn on the right indicator, changing the action.
- ID 273: stem “look over/behind yourself” is awkward in Myanmar; better to express checking the rear blind spot, without implying looking at one's own body.
- ID 275, correct option: wording “always make a U-turn at the U-turn point even if far away” is unusual but matches the source; flag for content/answer-key verification, not a translation-only change.
- ID 281: Thai/English ask which is *not* a principle for moving an injured person; Myanmar asks which principle should be followed, omitting the negation.
- ID 293: Thai refers to changing lanes in slow-moving traffic; English and Myanmar specify a “bus lane,” which is not in the Thai stem. Treat as source-language inconsistency and confirm intent before editing.
- ID 294: “ทางรอง” is translated as “အလယ်တန်းလမ်း” (middle/secondary-level road), which is unnatural for a minor/side road; standardize after confirming the road-hierarchy terminology.
- ID 295: source asks about opening a window to let water into a submerged car to equalize pressure. This is safety-critical advice and needs separate factual/source review; do not silently revise the answer key during translation audit.
- ID 271, 281 and 293 are clear translation/source mismatch candidates; hold for approval and preserve answer keys until explicitly authorized.


### Safe-driving questions IDs 296–320 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 297, correct option is image-dependent; verify the intersection illustration before treating the right-of-way answer as confirmed.
- ID 306, correct option: Thai says a vehicle has broken down on the road shoulder; Myanmar says the car has fallen off the shoulder, changing the event.
- ID 308, correct option: source text appears to recommend staying in the car and leaving if the accident victims are strangers. This is a potentially unsafe/content-quality issue; flag for factual/source review rather than changing translation or answer key silently.
- ID 311: stem asks what to do when parking blocks other cars, but keyed option says shift to neutral and do not use the handbrake. This appears contradictory/possibly corrupted source or answer-key content; mark uncertain for separate review.
- ID 312: Thai/English ask what drivers should *not* do after the green signal; Myanmar stem asks what they should do, omitting the negation.
- ID 319, option 3: source says to use high beams to express thanks; translation is literal, but this driving etiquette advice should be fact-checked separately before publication.
- IDs 271–320 continue to show fragmented source English; where Thai is clear, use it as the semantic reference and do not copy the broken English literally.


### Safe-driving questions IDs 321–345 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 321, correct option: Thai “ชนแบบประสานงา” means a head-on collision; Myanmar “ညှိနှိုင်းနေမြဲ” is unrelated/incorrect.
- ID 324 stem: Thai refers to a driver seeing a person standing on the sidewalk about to cross at a crossing; Myanmar says a driver sees another driver, changing who is seen.
- ID 329, option 4: Myanmar text is truncated/incomplete (“ကားမမောင်းခင် Miss K.”); restore only after verifying full source option.
- ID 338, option 2: Thai prohibits overtaking in a dangerous/tight area or no-overtaking zone; Myanmar wording “ကျော်တက်သည့်နေရာများတွင်” can mean “in overtaking areas,” obscuring the prohibition.
- ID 344: Thai `ทางม้าลาย` means pedestrian/zebra crossing; Myanmar literal “မြင်းကျားလမ်းကူး” is unnatural and should use the standard pedestrian-crossing term.
- ID 322, 326, 327, 333–335 and 342 involve emergency response, fatigue, or injured-person movement; translations are broadly readable in this sample but should be reviewed carefully for precise safety meaning. Any source/content issue must be logged separately, not silently fixed as translation.


### Safe-driving questions IDs 346–370 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 350, correct option: “เส้นให้หยุดรถ” (stop line) is translated as “မှတ်တိုင်အနောက်” (behind the bus stop), incorrect.
- ID 352, correct option: Thai says stay calm and get out of the vehicle immediately; Myanmar wording “ငြိမ်ငြိမ်လေးနေပြီး” could imply staying in place, so clarify that the driver should remain calm and evacuate.
- ID 359: another question assumes opening a window to let water into a submerged vehicle to equalize pressure. This is safety-critical content and needs separate source/factual review, not an unapproved translation-only edit.
- ID 365, correct option: Thai says slow down and be ready to stop to let the bicycle proceed first; Myanmar says prepare for the bicycle to stop, reversing the intended action.
- ID 368, correct option: Thai asks to adjust the mirror to avoid glare; Myanmar says set it in a position that does not become dim, which is unclear and should explicitly refer to reducing glare.
- ID 321 head-on collision term, recorded above, remains a high-priority correction candidate.
- ID 348: child restraint and airbag advice is safety-critical; verify source/meaning and vehicle-specific conditions before publication.
- ID 346, 326 and related first-aid questions require a separate factual review for first-aid accuracy; translation audit should not invent or change emergency procedures.


### Safe-driving questions IDs 371–395 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 374, stem: Thai/English ask in which situations A-pillars obstruct visibility; Myanmar is phrased as “is there a situation where ...?”, which is less direct but retains the core meaning.
- ID 376, stem: Thai asks which is *not* the meaning of “appropriate speed”; Myanmar is convoluted and should be simplified while preserving the negative form.
- ID 390: correct option says use the handbrake only to avoid brake-light glare during a night traffic jam. This is potentially unsafe vehicle-control advice; flag for separate factual/source verification, do not silently change the answer key.
- ID 394, correct option: Thai “ความไม่พร้อมของผู้ขับขี่” means the driver's lack of readiness/unpreparedness; Myanmar says “ယာဉ်မောင်း၏ ကြိုတင်ပြင်ဆင်မှု” (driver preparedness), reversing the meaning.
- ID 395: the question concerns what not to do when finding an injured person; answer “move the injured person immediately” is semantically aligned, but the entire first-aid set requires separate safety review.
- IDs 371–395 have no approved edits; continue recording clear mismatches and safety-critical uncertainties.


### Safe-driving questions IDs 396–420 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 399: Thai/English ask which is *not* a result of speeding; Myanmar asks what result speeding causes, omitting the negative.
- ID 404, correct option: Thai says the motorcycle rider may be blown in front of the car by strong wind; Myanmar says “လွင့်စင်သွားနိုင်သည်,” which is vague and should explicitly describe being blown into the car's path.
- ID 408, correct option: source says the safe gap lets the truck driver see your vehicle in the mirror; Myanmar is understandable but awkward.
- ID 411: Thai/English ask what to do first when pulling out of a parking space; Myanmar contains a stray `)` after “as shown in the picture.” Remove only after approval/normalization.
- ID 414 options 2 and 4: “lane” is translated as “ချန်နယ်”; use consistent road-lane terminology.
- ID 419, correct option: source says high beams make the driver ahead and oncoming drivers unable to see clearly; Myanmar says they can see the road clearly, reversing the meaning.
- ID 420, correct option: “ประคองรถเข้าข้างทาง” means guide/bring the vehicle safely to the roadside; Myanmar “ထောက်ပါ” (support/prop up) is incorrect.
- IDs 399, 419, 420 are high-confidence correction candidates. Preserve all keys/images and wait for approval before applying.


### Safe-driving questions IDs 421–440 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 422, stem: Thai says the accelerator pedal is stuck; Myanmar says the driver presses the accelerator, losing the “stuck pedal” condition.
- ID 424, option 2: “traffic lane” is translated as “ချန်နယ်” (channel); standardize road-lane terminology.
- ID 426: “ไหล่ทาง” means road shoulder; Myanmar literal “ပခုံး” means body shoulder, not road shoulder.
- ID 428, correct option: “ไหล่ทางด้านซ้าย” is translated literally as “ဘယ်ဘက်ပခုံးပေါ်”; use road-shoulder terminology, and clarify the instruction to safely move the vehicle onto the left shoulder.
- ID 434: “ไฟต่ำ” means low-beam headlights; Myanmar “ပါဝါနည်း” means low power, incorrect terminology.
- ID 438, correct option: source instructs to release the accelerator/let the vehicle coast and switch on hazard lights; Myanmar is too literal (“let the car flow”) and should be clarified after approval.
- ID 421, correct option: translation is broadly aligned, but ensure the “while the vehicle behind is overtaking you” condition is explicit.


### Vehicle-maintenance questions IDs 466–490 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 472 stem repeats “radiator tank” twice in Myanmar; the source asks why the reservoir should not be filled completely. Remove the duplicated phrase and keep the expansion-space meaning.
- ID 473 stem: Thai asks which system to test after the vehicle has moved about 3–4 meters; Myanmar says “after leaving from a distance of 3 to 4 meters,” making the action unclear. Clarify that the vehicle is moved forward that distance.
- ID 482, option 4: Thai says fill engine oil to the upper mark/level; Myanmar only says to add engine oil always, omitting the specified level.
- ID 469, correct option: “จาระบี” means grease; Myanmar “အဆီပြန်ပါ” is too general and could mean apply oil. Use the appropriate grease term after approval.
- IDs 466, 468, 470, 475–479, 483, 485–490 are broadly aligned in this sample, though terminology should be standardized for engine coolant, reservoir, oil level and tyre tread.
- Safety note: opening a hot radiator cap/filling coolant is represented as an incorrect distractor in ID 466; preserve the key but verify the learning explanation in a separate factual review.


### Vehicle-maintenance questions IDs 491–521 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 498, option 1: Thai “สายพานหย่อน” means a loose/slack belt; Myanmar says “the belt is not loose,” reversing the meaning.
- ID 505 stem: Thai/English ask what should *not* be done when an engine-overheating warning appears; Myanmar asks what should be done, omitting the negative. The keyed option says pouring water on the engine, which should also be safety-reviewed.
- ID 513, correct option: Thai “ก้านวัดน้ำมันเครื่อง” means the engine-oil dipstick; Myanmar says “ဆီထည့်ပါ” (add oil), incorrect.
- ID 514, correct option: Thai “ยางรถที่มีลมยางน้อยเกินไป” means tyres with too little air/underinflated; Myanmar says “ဖောင်းနေသော တာယာများ” (inflated tyres), reversing the meaning.
- ID 516 stem: Thai/English prohibit opening the radiator cap when the engine is very hot; Myanmar asks when one should open it, reversing the instruction.
- ID 501, correct option: Thai says drain/remove the wrong fuel immediately; Myanmar says “ချက်ချင်းလွှဲပြောင်းပါ” (transfer immediately), unclear. Clarify the fuel-drain action after approval.
- ID 506: first step for an immovable breakdown is to warn other traffic; Myanmar “အချက်ပြပါ” is vague and should explicitly say warn approaching vehicles.
- ID 511, correct option: broadly aligned but “บนพื้นราบ” should be “level ground,” not just a flat floor; terminology can be polished.
- ID 521, correct option: meaning is broadly aligned, but clarify “lightly apply/tap the brake repeatedly” if that matches the intended source.


### Accident-prediction questions IDs 552–575 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 553, correct option: Thai says turn the steering wheel less than for a right turn; Myanmar is understandable but should state the comparison explicitly and naturally.
- ID 556, options: Thai refers to vehicle B/A; Myanmar uses “ကြိမ်လုံး B/A” (rod/pole), clearly wrong vehicle terminology.
- ID 558 options: A/B/C/D pillar blind spots are translated inconsistently and some are garbled (“ကန်းတိုင်”); preserve the pillar letter but use a clear vehicle-pillar/blind-spot term. Image context required.
- ID 564: side-mirror adjustment options are understandable, but wording around fractions of mirror area can be standardized; verify key and image/context before changing.
- ID 570, correct option: Myanmar sentence is incomplete after “အခြားယာဉ်များနှင့် အကွာအဝေးကို ထိန်းသိမ်းနိုင်သည်”; complete it to express the benefit at any driving speed after approval.
- ID 574, correct option: Thai says check side mirrors, rear-view mirror and blind spots before changing lanes; Myanmar says “နောက်ပြတင်းပေါက်” (rear window) instead of rear-view mirror.
- ID 572 uses “ทางรอง” translated as “အလယ်တန်းလမ်းကြောင်း”; standardize to minor/side road terminology.
- IDs 555, 556, 558 and 568 depend on images; translation text alone cannot validate the answer key or scenario.


### Accident-prediction questions IDs 576–598 — first-pass review

No data edits applied. High-confidence issues and uncertainties:
- ID 578, correct option: Thai “ตั้งลำ” means straighten/align the vehicle after the U-turn; Myanmar says “သင့်လှေကို အမြန်တပ်ဆင်ပါ” (quickly set up your boat), clearly wrong vehicle term.
- ID 579: “flashing yellow light” is rendered as repeated “မှိတ်တုတ်မှိတ်တုတ်” phrases; simplify to a clear flashing yellow signal. Option 3 again uses “မှတ်တိုင်မျဉ်း” for the stop line, which is incorrect/ambiguous.
- ID 588 stem: Thai/English ask which is *not* a factor to decide before overtaking; Myanmar asks which factor should be decided, omitting the negative.
- ID 590, correct option: Thai says lateral clearance gives room to maneuver/avoid hazards without causing an accident; Myanmar currently says it gives the driver room to “practice” and then describes danger, which is unclear and semantically incorrect.
- ID 598: “ถูกทุกข้อ” / “all of the above” is translated as “အားလုံးမှန်ပါတယ်,” broadly aligned, but the answer key depends on interpretation of the intersection scenario; verify source/rule separately.
- IDs 555, 556, 558, 568 and 584 are image/scenario-dependent and need the actual images checked before confirming answer-key mappings.
- IDs 578, 588 and 590 are high-confidence correction candidates. No changes applied pending approval.


### Follow-up source-of-truth investigation — 2026-10-24

- Inspected `scripts/compile_safe_driving.mjs`. It rebuilds IDs 192–440 from `article_22_safe_driving_raw.html` and `scripts/safe_translations_cache.json`, then writes `src/data/questions_safe_driving.json` and merges the results into `src/data/questions.json`.
- The separate safe-driving JSON currently contains stems beginning with a stray `)` (confirmed in IDs 192–194). This is consistent with a source-extraction issue, not simply a Myanmar translation issue.
- The merged `src/data/questions.json` and generated `src/data/questions.ts` were not readable through the GitHub file-content fetch in this pass (empty content returned for these large files). Do not infer they are empty. Runtime import/source-of-truth still needs confirmation from the app's import path and a successful retrieval of the merged records.
- Safe next action: recover/inspect the raw HTML and translation cache, compare the generated merged records field-by-field, and then correct only verified source/translation fields. Do not regenerate the whole bank from an unverified cache, because that could overwrite prior approved fixes or alter answer keys/image mappings.
- No question data, answer keys, images, or runtime files were changed in this follow-up. No deployment was triggered.


### Safe-driving manual review — IDs 199–210 — 2026-10-24

Reviewed each stem and all four options in the separate safe-driving JSON against the Thai and English fields. No question data was changed because the merged runtime source could not be retrieved through the connector and the separate JSON is a generated/stale copy.

High-confidence Myanmar translation corrections to carry forward into the runtime source:
- **ID 199, option 1 (correct):** Thai asks to honk several times before reaching the curve. English is fragmented (“The time before the curve”), and Myanmar is garbled (“ဟွန်း အကြိမ်ကြိမ် ဟွန်း။ မျဉ်းကွေး မရောက်မီအချိန်”). Rebuild from Thai as a natural instruction to sound the horn several times before the curve, but confirm whether this is intentionally the keyed “should not do” answer.
- **ID 201, stem:** confirmed negation reversal. Thai “ไม่ปลอดภัย” and English “unsafe” mean “not safe”; Myanmar currently asks which behavior is safe. Must preserve the negative/unsafe meaning.
- **ID 202, option 1:** Thai/English say driving astride the lane divider; Myanmar “လမ်းဆုံလမ်းခွကို ဖယ်ထားပါ” instead reads like moving away from an intersection. Clear semantic mismatch.
- **ID 203, option 2:** Thai/English describe moving the vehicle involved in the incident; Myanmar reads as moving the vehicle to the incident scene. Direction/meaning is wrong, although this is not the keyed answer.
- **ID 207, option 3 (correct):** Thai “ผู้ขับขี่” means a vehicle driver/operator in this road-safety context; English says “rider”; Myanmar “မြင်းစီးသူ” means horse rider. Clear mismatch; use a road-vehicle driver term.
- **ID 208:** Myanmar uses literal “high beam/high beams” loan wording rather than natural, consistent headlight terminology. Meaning is mostly recoverable; standardize only after selecting the project-wide term.
- **ID 209, stem:** Thai specifies two or more traffic lanes in the same direction and asks what a motorcycle rider must do. Myanmar repeatedly uses “လမ်းသွယ်” (small side road/alley) instead of lane; terminology mismatch.
- **ID 210, option 2:** English is fragmented; Myanmar changes the instruction into a past-tense statement (“then stopped the car immediately”). The source option is an instruction to stay calm, turn on hazard lights, and stop immediately. Non-keyed option, but still needs translation correction.
- **IDs 199–210, stems generally:** the leading ) or ၎) artifacts and fragmented English stems are inherited from the separate generated JSON. Do not remove punctuation or reconstruct missing text by guesswork until compared with the merged bank/source HTML.

Other reviewed items:
- ID 200’s correct option (“slow down and give way”) is broadly aligned in Myanmar.
- ID 204’s correct option “every person” is aligned.
- ID 205’s correct option (adjust speed to the curve/turn) is broadly aligned.
- ID 206’s correct option conveys that the left-turning vehicle should yield to the vehicle turning from the right; the Myanmar wording is awkward but broadly aligned.
- ID 210’s keyed option 1 is broadly aligned with Thai; minor wording polish may be useful.

**Batch result:** IDs 199–210 reviewed at stem-and-option level; no runtime/question data edits. These findings are recorded for correction once the actual combined runtime source can be retrieved and updated without overwriting approved work.


### Safe-driving manual review — IDs 211–225 — 2026-10-24

Reviewed stems and all four options in the separate safe-driving JSON against Thai and English. No question data edits were made; these records are generated and must be reconciled with the runtime bank before correction.

Clear or high-priority Myanmar issues:
- **ID 212, stem:** “လေ့ကျင့်ခန်း clutch ကို ချိတ်ဆက်” style literal loanword wording is understandable but technically awkward. The Thai describes lightly riding/engaging the clutch while driving through water; confirm the intended technique with a reliable driving source before rewriting because the safety instruction is technical.
- **ID 214, correct option 2:** Myanmar says “စက်ဘီးနင်းပြီး ဘရိတ်ကို တလှည့်စီ လွှတ်ပါ” (pedaling a bicycle) for alternating brake pedal application/release. This is a clear translation error; use brake-specific terminology.
- **ID 216, correct option 3:** Thai/English says step on the brake, pull the handbrake, shift to neutral, and restart the engine. English “install a new engine” is clearly mistranslated, while Myanmar currently also says “install a new engine.” This option is marked correct in the data, so the source instruction itself must be checked against an authoritative safety source before treating the procedure as correct.
- **ID 218, option 4 (correct):** Meaning is broadly aligned, but Myanmar phrase “ထိုသို့ပြုလုပ်ရန် ဘေးကင်းသည့်အခါတွင်...” is unnatural. Can be polished after image/scenario review.
- **ID 221, option 2:** Myanmar describes another vehicle passing on the left while on a bridge, but is phrased as if the other vehicle is on the left rather than the driver overtaking it on the left. Meaning/agent is unclear.
- **ID 222, stem:** Myanmar sentence structure reverses/obscures the exception (“ဘယ်အခြေအနေမှာမှ ညာဖက်ကို မောင်းနှင်နိုင်ပါ့မလား”), making the legal question hard to understand. Rephrase from Thai after confirming exact scope.
- **ID 223, option 1 (marked correct):** Thai says “100 metres from the level/flat area at the foot of the bridge,” but the rule and wording are unusual; verify the original source/legal rule before changing either text or answer key.
- **ID 224, option 4 (correct):** Myanmar wording repeats “stop and wait” in a way that obscures the actual action: yield to pedestrians crossing and traffic approaching from the right before proceeding left. Correct the translation after verifying the sign and traffic context.
- **ID 225, stem:** Thai “ถนนรอง” means a secondary/minor road in this context; Myanmar “အလယ်တန်းလမ်း” means something like a middle/secondary-level road and is not natural road terminology. Standardize road hierarchy terms after checking the project glossary.
- **IDs 211–225, stems:** leading ) / ၎) artifacts persist. Do not clean these in the generated copy alone.

Broadly aligned in this sample: ID 211’s keyed yield instruction, ID 213’s adequate sleep, ID 215’s avoid hard/rapid braking in heavy rain, ID 217’s slow down/keep left, ID 219’s correct-lane U-turn when safe, and ID 220’s “do not drink alcohol before departure” answer. These checks do not independently validate the legal correctness of the answer keys.

**Batch result:** IDs 211–225 reviewed; no question data edits or deployment.


### Safe-driving manual review — IDs 226–240 — 2026-10-24

Reviewed stems and all four options in the separate safe-driving JSON against Thai and English. No question data edits were made; the generated copy must be reconciled with the actual runtime bank before corrections.

Clear/high-priority translation findings:
- **ID 230, option 3 (correct):** Thai means using a mobile phone while driving; Myanmar only says “mobile phone while driving” as a noun fragment. Make it a clear action (using a mobile phone while driving).
- **ID 233, stem:** the Thai asks about leaving too much distance from the vehicle ahead; Myanmar says the distance is too far but its sentence is awkward. More importantly, the keyed answer that it causes a traffic jam is counterintuitive and may be source/key error; verify authoritative rationale before changing the key.
- **ID 235, option 3:** Thai/English mean parking where a no-parking sign is posted; Myanmar currently says parking in places where there is no parking sign. This reverses the meaning and is a clear translation error (though not the keyed option).
- **ID 238, option 1:** Thai says release the accelerator, then brake to shift to a lower gear (source phrasing itself may be technically questionable). Myanmar reverses the first action to “accelerate” and also says accelerate the brake; clear meaning reversal. Verify the actual safe-driving procedure before rewriting.
- **ID 238, option 2 (correct):** Thai says release the accelerator and hold the steering wheel firmly while keeping the vehicle steady. Myanmar reverses “release the accelerator” to “accelerate”; clear translation error in the keyed answer.
- **ID 237, stem:** Thai is “when the vehicle breaks down”; Myanmar wording “ကားပျက်ကျရင်” can imply a crash/accident rather than a breakdown. Use a consistent vehicle-breakdown term.
- **ID 229:** Thai describes towing a vehicle whose steering or brakes do not work; Myanmar is broadly aligned but “ဆွဲတင်” suggests lifting/hauling rather than towing. Improve terminology only after checking the exact recovery method.
- **ID 232, option 4:** “Use the heart test” is a literal, meaningless rendering of Thai idiom “ใช้การวัดใจ”; likely a distractor, but preserve the distractor meaning as closely as possible rather than inventing a safety instruction.
- **ID 228, option 1:** Myanmar for fog is `မှိုင်းတွေ`, an unnatural/inaccurate noun choice; use the project’s standard word for fog.
- **ID 226, stem:** Myanmar is understandable but awkward. Keyed option “stop at least 5 metres from the railway” aligns with Thai/English text; independently verify legal/source accuracy if this bank is presented as official exam guidance.
- **IDs 226–240, stems:** stray leading `)` / `၎)` persists, and several English stems are fragments. Do not repair in generated copy alone.

Broadly aligned in this sample: ID 227’s keyed presumption of fault for fleeing, ID 228’s keyed broken-down/accident emergency-light option (wording aside), ID 230’s intended answer, ID 231’s negligence proverb, ID 232’s pedestrian-yield answer, ID 234’s high-speed driving in heavy traffic, ID 236’s not using hazard lights throughout a rainy journey, ID 239’s cracked-windshield response, and ID 240’s too-distant seat position causing difficulty controlling the vehicle. These checks do not independently validate answer-key legality or safety correctness.

**Batch result:** IDs 226–240 reviewed; findings recorded only. No question data, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 241–255 — 2026-10-24

Reviewed stems and all four options in the separate safe-driving JSON against Thai and English. No question data edits were made; the generated copy must be reconciled with the actual runtime bank before corrections.

Clear/high-priority Myanmar issues:
- **ID 246, option 1 (keyed correct):** Thai `ทางบังคับเลี้ยว` means a road/route where the direction of travel is compulsory (mandatory turn/direction), but English “Steering path” and Myanmar “စတီယာရင်လမ်းကြောင်း” are literal and misleading. Verify the exact road-sign concept before revising the answer wording.
- **ID 250, stem:** Thai refers to pulling out from the left road shoulder; English says “leaving the vehicle” and Myanmar likewise suggests leaving/exiting a vehicle, not moving off from the shoulder. This changes the driving scenario and is a clear source/translation mismatch.
- **ID 251, stem:** confirmed negation reversal. Thai and English ask which is *not* the correct way to look while driving; Myanmar asks which way *is* correct. This is a high-priority meaning error because the correct answer is the distractor about looking at irrelevant things.
- **ID 254, option 4:** Thai/English mean payload/load weight; Myanmar `ဝန်ဆောင်ခ` means service charge/fee. Clear vocabulary mismatch (not the keyed option).
- **ID 255, option 1 (keyed correct):** Thai `ขอบทาง` is the road edge/curb; Myanmar `ကန့်လန့်ကာ` means a curtain/barrier-like object, not a curb. Clear terminology error in the correct answer.
- **ID 255, option 4:** Thai says straight and parallel to the curb/sidewalk; Myanmar translates this as parallel to an intersection or roadside, losing the intended reference.
- **ID 241, option 1 (correct):** Myanmar `အရန်ကူး` is an unnatural literal term for reversing; prefer the established project term for reversing a vehicle.
- **ID 245, option 1 (correct):** the Myanmar sentence can read as driving the car in front at a suitable distance, rather than driving slowly behind it at a safe following distance. Clarify subject and following distance.
- **ID 247, option 2 (correct):** meaning is understandable but phrasing is incomplete/unnatural; standardize as use a low gear when going both uphill and downhill, subject to source-rule verification.
- **ID 248, option 4:** Thai refers to taking methamphetamine; Myanmar uses a broad transliteration “amphetamine.” The distinction may matter for accuracy; verify whether the source term should be preserved or generalized.
- **IDs 241–255, stems:** leading ) / ၎) artifacts persist. ID 250 additionally has a material scene-description mismatch. Do not clean the generated copy alone.

Broadly aligned in this sample: IDs 242–243 (low gear), 244 (reduce speed while revving slightly as described by the source), 248 (rest adequately), 249 (driver), 252 (increased load weight), and 253 (do not use the handbrake while driving downhill). The technical advice in IDs 244 and 247 has not been independently verified against an authoritative driving source.

**Batch result:** IDs 241–255 reviewed; findings recorded only. No question data, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 256–270 — 2026-10-24

Reviewed stems and all four options in the separate safe-driving JSON against Thai and English. No question data edits were made; this generated copy still needs reconciliation with the runtime bank before edits.

Clear/high-priority Myanmar issues:
- **ID 258, option 3:** English answer is “No”; Myanmar `မရှိ` means “there is none/does not exist,” not a clear yes/no response. Translate as an unambiguous “မဟုတ်ပါ” (or the project’s standard “မဟုတ်ပါဘူး”). Keyed option 4 (“Yes”) is rendered as `ဟုတ်ကဲ့` and is understandable.
- **ID 260, stem/options:** The stem is broadly aligned. Option 4’s source says overtaking may be allowed when the vehicle ahead signals left and slows down; Myanmar is broadly aligned, though the wording could be clearer. Option 1 is the keyed incorrect behavior and its Myanmar meaning is aligned.
- **ID 261, stem:** Thai asks which factor does not need to be considered when assessing an accident; Myanmar says “what does not need to be considered” but is phrased as “nothing needs to be considered,” which may imply no factors at all. Clarify the singular choice structure.
- **ID 264, option 2 (keyed correct):** Myanmar is aligned with the source’s instruction to drive slowly while applying the brakes gradually. However, this is technical advice for water-affected brakes and should be checked against an authoritative safety source before publication as guidance.
- **ID 268, correct option 4:** Source marks “turn on emergency lights” as the answer for a vehicle fire inside a tunnel when it cannot continue. Myanmar accurately translates that option, but the keyed response appears incomplete as emergency advice; verify the full official procedure before presenting this as the sole correct action.
- **ID 269, option 4 (correct):** Thai/English say older pedestrians may misjudge vehicle speed. Myanmar’s phrase `ယာဉ်၏အရှိန်ကို လွဲမှားစေနိုင်` can read as the elderly person causing the vehicle’s speed to be wrong, rather than misjudging it. Rephrase to explicitly say they may misjudge how fast the vehicle is approaching.
- **ID 270, option 2:** The English source is fragmented (“Drive for a short distance. To observe…”); Myanmar follows that unsafe/unclear advice. It is a distractor, not the keyed answer, but should not be rewritten into endorsed guidance without reviewing source intent.
- **ID 256, option 4:** English source has a malformed/illogical explanation about driving fast to avoid being rear-ended; Myanmar faithfully reflects the confusion. Keep as a flagged source-quality issue rather than guessing at intended text.
- **ID 257, option 4:** Thai/English refer to overtaking on the left; Myanmar “ဘယ်ဘက်ခြမ်းက ယာဉ်မောင်းတွေကို မကျော်ပါနဲ့” literally says do not overtake drivers on the left side. It is understandable but should be normalized to “do not overtake on the left” after checking the applicable Thai road rule.
- **ID 259, stem:** Myanmar says “heavy vehicle” rather than “vehicle carrying a heavy load.” The intended load-weight scenario should be made explicit.
- **ID 265, option 2:** Myanmar second-person pronouns and agent are confused; the source describes flashing lights and overtaking, but the option is not keyed. Clarify the actor if retaining this distractor.
- **ID 267, option 2:** The English is a fragment and Myanmar says the brakes stop the car, rather than giving the driver an instruction to brake/stop. It is a distractor but should be grammatically aligned.
- **IDs 256–270, stems:** leading `)` / `၎)` artifacts persist in the generated records. Do not remove them in the generated copy alone.

Broadly aligned in this sample: IDs 256–257’s keyed answer concepts, 259’s increased braking distance under heavy load, 262’s insufficient nighttime visibility, 263’s emergency-light/left-side stopping response, 266’s stop behind the line then edge forward carefully, and 270’s keyed advice to check the medicine label. This linguistic review does not independently validate every answer key or safety rule.

**Batch result:** IDs 256–270 reviewed; findings recorded only. No question data, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 271–285 — 2026-10-24

Compared all stems and options in IDs 271–285 across Thai, English, and Myanmar. This is a language/content audit of the generated safe-driving copy, not independent legal or technical validation. Findings recorded in this audit document only; no question data was changed.

Clear/high-priority translation issues:
- **ID 271, keyed option 4:** Thai/English instruct the yellow car to stop and let the car signaling right go first. Myanmar says to stop and “let the right indicator be turned on first,” losing the give-way action and confusing the vehicle with its signal.
- **ID 273, stem:** Thai/English ask why a motorcyclist should look over/behind their shoulder before turning right. Myanmar reads as “look at oneself from behind,” not check behind for traffic/blind spots.
- **ID 280, keyed option 2:** Thai/English say let vehicles already in the intersection pass first. Myanmar `အရင်ဖြတ်ကျော်ပါစေ` can read as “let them overtake/pass you” ambiguously; use wording clearly meaning allow vehicles already occupying the intersection to proceed first.
- **ID 281, stem:** Confirmed negation reversal. Thai/English ask which is **not** a principle to follow when moving an injured person; Myanmar asks which is a principle that should be followed. The keyed option (“move immediately without assessing symptoms”) is consistent with the negative form, so the Myanmar stem currently undermines the key.
- **ID 284, option 2 (keyed correct):** English “No” is translated as `မရှိ` (“there is none”), not a clear negative answer. Use the established yes/no negative wording such as `မဟုတ်ပါ` consistently with ID 258.
- **ID 276, option 4:** “None” translated as `တစ်ခုမှ` (“not one/none”) is incomplete as a standalone option; normalize it to a natural “မရှိပါ” only if the option remains a “none” response, while preserving the distinction from a yes/no “No.”
- **ID 277, stem:** Myanmar incorrectly makes the truck driver the person who must act (“what should the truck driver do?”). The question asks what **you** should do when following a truck that signals left at an intersection.
- **ID 279, option 1:** Myanmar says bicycle users may get out of their vehicles, an unnatural rendering of getting off a bicycle. This is a distractor, but should still be corrected if the bank is being normalized.
- **ID 282, option 3:** Thai/English say flash lights to get oncoming traffic to give way. Myanmar says to “ignite/light” the lights and has unclear phrasing; it should express flashing headlights, while this unsafe distractor must remain clearly marked incorrect.
- **ID 285, option 3:** Myanmar `ဓာတ်ငွေ့နင်းစက်` is an unnatural literal term for the accelerator pedal; standardize to the project’s chosen term for accelerator.

Additional source/content quality flags:
- **ID 256–285 batch:** Leading `)` / `၎)` artifacts remain in question stems, indicating a generation/cleanup issue; do not patch only the generated output without reconciling its source.
- **ID 272, option 1/2:** Both “park the car” and “stop the car” are translated identically as `ကားရပ်ပါ`; source choices are already close, but Myanmar loses the distinction between parking and stopping.
- **ID 275, keyed option 4:** The intended rule is to use a designated U-turn point even if it is farther away. Myanmar repeats the U-turn term awkwardly but preserves the main idea.
- **ID 283, keyed option 2:** Myanmar retains the English term “low beam” instead of a localized standard term; agree a consistent glossary for low beam/high beam before final language polish.
- **ID 286?** No review performed beyond ID 285 in this batch.

Broadly aligned in this sample: ID 274’s patience around inexperienced drivers; ID 276’s keyed warning that motion-sickness medicine can cause drowsiness/dizziness/blurred vision; ID 278’s alcohol-slowed reaction concept; ID 283’s low-beam concept when traffic is ahead/oncoming; and ID 285’s keyed instruction to hold the steering wheel firmly after a tire blowout. These alignments do not certify that each answer key or procedure is officially correct.

**Batch result:** IDs 271–285 reviewed; translation and source-quality issues documented. No question JSON, answer keys, images, runtime files, `main` branch, or deployment changed.


### Safe-driving manual review — IDs 286–300 — 2026-10-24

Compared all question stems and options across Thai, English, and Myanmar. No question data or answer keys were edited. Some items involve legal or emergency guidance and are flagged for source verification rather than treated as validated advice.

Clear/high-priority language issues:
- **ID 287, option 4:** Thai/English mean “do not overtake at close range / too closely.” Myanmar `အရမ်းမလွန်ပါဘူး` does not convey overtaking and reads roughly like “not too much”; the distractor meaning is lost.
- **ID 288, stem and option 3:** Stem loses the clear situation structure and the reference to the ambulance approaching from the right. Option 3’s Myanmar says to warn “the ambulance that you must go first,” but source option says the driver uses the horn to tell the ambulance they will go first. The keyed option 2 (“stop and wait for the ambulance”) is broadly aligned.
- **ID 289, stem:** Myanmar has a malformed instruction (“turn left ... go onto the main road”) and obscures the intended setup of turning left from a minor road onto a main road while a truck approaches from the right.
- **ID 290, stem:** Myanmar makes it sound as though cars are “included” in the gap rather than another car cutting into the following distance behind the truck. The keyed option 3, increase the following distance again, is broadly aligned.
- **ID 293, stem:** Thai says slow-moving traffic; English and Myanmar incorrectly turn this into a “bus lane.” This changes the scenario.
- **ID 295, stem/options:** The question’s premise and keyed option describe opening the window so water enters the car to equalize pressure after entering water. This is high-risk emergency guidance and should not be presented as an endorsed procedure without authoritative, current emergency-safety verification. Treat as a **source/key safety flag**, not merely a translation fix.
- **ID 300, keyed option 3:** Thai/English mean tailgating and honking to pressure the vehicle ahead on an expressway. Myanmar says something like driving behind “the scene” and repeats the horn awkwardly; rewrite to clearly mean following too closely and honking to pressure the driver ahead.
- **ID 286, option 1:** English says the child wears a seat belt “with an adult”; Myanmar reproduces that ambiguous wording. This is a child passenger-safety/legal question; verify the current Thai rule and proper restraint recommendation before normalizing it. Do not infer that sharing one adult seat belt is safe.
- **ID 298:** Image-based question (“which car must give way”) cannot be validated from the text-only record. Need the associated diagram/image and road-priority context before confirming the keyed white car.
- **ID 297:** Also image-dependent: T-junction layout and priority context are not visible in this JSON record. The answer “give way to both right and left” must be checked against the actual image and applicable rule.

Additional wording / source-quality flags:
- **ID 291, stem/options:** Short fragments are understandable, but the English and Myanmar options are list fragments; normalize to parallel noun phrases during a controlled language pass.
- **ID 294, stem:** Myanmar phrase about turning right from the main road to the minor road is awkward, but keyed option 2 (“check whether a vehicle is about to overtake”) is preserved.
- **ID 296, stem:** “a small roundabout” is translated as a small circle, and “driving on the right while signalling left” should be clarified; keyed option 3 (keep distance) is translated correctly.
- **ID 299, stem:** Myanmar omits some “from the picture / entering the crossing area” structure but retains the pedestrian-crossing scenario. Keyed answer 3 (slow down and prepare to stop) is aligned.
- **ID 286–300 stems:** Leading `)` / `၎)` artifacts remain, reinforcing the need to reconcile the generated JSON with its actual source before any bulk cleanup.

Broadly aligned: ID 287’s keyed emergency-lights distractor concept; ID 292’s keyed duty to yield to pedestrians; ID 294’s keyed instruction to check for overtaking traffic before turning; and ID 299’s keyed instruction to slow down and be ready to stop. This batch is a translation/source-quality review only and does not certify the correctness of answer keys or Thai legal requirements.

**Batch result:** IDs 286–300 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, `main` branch, or deployment changed.


### Safe-driving manual review — IDs 301–315 — 2026-10-24

Compared the Thai, English, and Myanmar stems and options for IDs 301–315. This is a documentation-only language/source review; no question data or answer keys were edited.

Clear/high-priority language issues:
- **ID 302, stem:** Thai and English ask what drivers **should not do** when driving over damaged road surfaces. Myanmar instead asks what drivers **should do**, losing the negation. The keyed high-speed option still matches the source’s negative question, but the Myanmar stem can cause a wrong interpretation.
- **ID 304, stem:** The Thai scenario is a bus signalling right to pull out from a bus stop. English is grammatically ambiguous and Myanmar reads as if the learner should switch on their own right indicator. Reword the scenario so the bus is clearly the actor.
- **ID 306, option 2 (keyed):** Thai/English mean a vehicle has broken down while stopped on the road shoulder. Myanmar says the vehicle “fell off” the shoulder, changing the incident.
- **ID 308, option 2 (keyed):** The source says not to merely watch from inside the car and continue driving just because the people involved are strangers. Myanmar does not clearly preserve this action/condition, so the intended unsafe behaviour is obscured.
- **ID 312, stem:** Thai/English ask what drivers **should not do** when the green light permits movement. Myanmar asks what drivers **should do**, reversing the question’s polarity. The keyed option is a horn-pressure behaviour, consistent with the source’s “should not” framing.
- **ID 314, option 3:** English says to drive at the same speed and keep the lights on, but Thai says to use/flash high beams. Myanmar also loses the high-beam action. This is a distractor, but its meaning should remain faithful to the source.

Source/key safety flag:
- **ID 311, keyed option 4:** The keyed option says to leave the transmission in neutral and not use the handbrake when parking in a way that blocks other vehicles. This sounds potentially unsafe if read as general parking advice. Verify the original official question/context and authoritative Thai guidance before treating this as correct or presenting it as endorsed advice. Do not silently change the answer key based only on translation review.

Other terminology and clarity issues:
- **ID 301, stem:** Myanmar is grammatically awkward (“which drivers should not do?”), though the negative question is retained. Keyed option 1 (“honk to chase pedestrians away”) is broadly aligned with the Thai/English distractor meaning.
- **ID 305, option 2 (keyed):** “Adjustable headrest pillow” is rendered as a generic adjustable pillow. Use a consistent technical term for a vehicle head restraint/headrest.
- **ID 307, stem:** The return-after-holidays setup is awkwardly fragmented across English and Myanmar; the core situation (medicine prescribed that affects driving) is preserved. Keyed option 2, let someone else drive, is aligned.
- **ID 309, stem:** English repeats “dizzy,” and Myanmar repeats the dizziness wording; simplify without changing the condition. The keyed instruction to refrain from driving when affected by medication is aligned.
- **ID 310, stem:** The Myanmar term for head restraint is unnatural and can read like a generic “head control/restraint.” Standardize it with ID 305 and other head-restraint items.
- **ID 313, option 1 (keyed):** The intended signal—left indicator, keep left, and reduce speed to allow a following vehicle to overtake—is broadly preserved, but the Myanmar phrase for keeping left is awkward.
- **ID 315, stem/options:** The stem asks which direction(s) drivers must watch, while several distractor options are fragmentary or non-parallel. The keyed answer “front, back, left, right” is preserved in Myanmar.

Source-generation cleanup:
- **IDs 301–315:** Stems continue to contain leading `) ` or `၎)` artifacts. Since the JSON appears generated from another source, reconcile the source and compiler before bulk-cleaning generated output.

Broadly aligned in this sample: ID 303’s keyed reminder to check safety again before crossing an unbarriered railway; ID 305/310’s intended head-restraint purpose; ID 307’s instruction to have someone else drive if prescribed medicine affects driving; ID 309’s instruction not to drive while impaired; ID 313’s overtaking courtesy signal; and ID 314’s keyed instruction to slow down and prepare to stop when a ball rolls out from between parked cars. These observations do not independently certify every answer key or Thai legal/safety rule.

**Batch result:** IDs 301–315 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, `main` branch, or deployment changed.


### Safe-driving manual review — IDs 316–330 — 2026-10-24

Compared Thai, English, and Myanmar wording for IDs 316–330. This batch has several image-dependent items; the JSON text alone does not contain their diagrams. No question data, keys, or images were changed.

Clear/high-priority language issues:
- **ID 321, keyed option 4:** Thai `ชนแบบประสานงา` means a head-on collision. English “a coordinated collision” and Myanmar `ညှိနှိုင်းနေမြဲ` do not convey a collision head-on; this is a substantial translation error in the keyed answer.
- **ID 324, stem and option 4:** The stem’s Myanmar grammar makes the person on the sidewalk sound like the driver rather than a pedestrian preparing to cross. Option 4 is also badly garbled and does not clearly express overtaking a vehicle stopped to let pedestrians cross. The keyed option 3’s intended action—signal the vehicle behind and stop at the crossing—is broadly preserved, but the translation needs careful rewriting.
- **ID 329, option 3 (keyed):** Thai/English describe a person receiving an injectable diabetes medicine and therefore stopping driving. Myanmar says the medicine was injected “for him” and then he stopped, obscuring the subject/action. Because this is medication and fitness-to-drive content, preserve the source meaning and verify the intended medical context rather than improvising advice.
- **ID 320, option 4:** English “No” is translated as Myanmar `မရှိ` (“there is none/does not exist”), not a natural yes/no response. Standardize negative replies as `မဟုတ်ပါ` where the option means “No.”
- **ID 322, stem and option 2:** English/ Myanmar stem is fragmented (“while driving home…”), and option 2 changes from waiting briefly and then slowly driving home to a past-tense statement. The keyed option 4—wait until physically ready to drive—is broadly aligned.
- **ID 327, option 2 (keyed):** The intended action is to slow down and increase the gap from the vehicle ahead so there is enough stopping distance when another vehicle follows too closely. Myanmar wording around “stopping distance” is unnatural and could be read as an already-stopped distance; clarify that this means maintaining enough space to stop safely.

Image/source verification flags:
- **ID 316:** Image-based traffic interaction; the text says a yellow car wants to go straight while another vehicle blocks its path. The keyed “stop and wait” answer cannot be fully validated without the diagram and right-of-way context.
- **ID 318:** Image-based road-position question. The keyed warning that parked cars may open their doors is plausible from the text, but the gray car’s exact position and arrow are needed to confirm the intended hazard.
- **ID 328:** Image-based interaction between a white car signalling right and a red car. The keyed “slow down” answer cannot be fully checked without the diagram and surrounding traffic context.

Safety/source flags:
- **ID 326:** The keyed answer is to contact emergency assistance after securing the scene and checking the engine is off. The other options include moving an injured person or giving them something to drink, both potentially unsafe as general advice. Verify the official source and keep the question from implying unnecessary movement or oral intake for a seriously injured person.
- **ID 323, keyed option 3:** The intended advice for an emergency stop in an ABS-equipped car is to press the brake firmly/fully. The Thai/English says quickly and fully; Myanmar’s “quickly and fully” is broadly aligned but could imply a sudden jab rather than firm sustained pressure. Confirm against current vehicle-manufacturer/road-safety guidance before finalizing the instructional wording.
- **ID 330, stem/key:** The negative question asks which action does **not** help reduce blind spots; the keyed “install high-performance brakes” is logically consistent with the source, while the mirror adjustment and correct seating-position options do help visibility. This is a logic/meaning check, not independent validation of every option.

Other terminology and clarity issues:
- **ID 317:** Myanmar uses a literal “curve/line” phrase for a road bend; normalize the project’s term for a curve. The keyed instruction to reduce speed before entering a curve is preserved.
- **ID 319:** The stem is awkward in both English and Myanmar. The keyed distractor “turn on high beams to show thanks” is preserved as the behaviour not to do; avoid making high-beam flashing sound like an endorsed courtesy signal.
- **ID 325, option 3:** Myanmar makes the warning to people in the area sound like an official announcement; the source says give a warning signal to people nearby. This is a distractor, but should be translated faithfully.
- **ID 330, stem:** “Blind spots” is rendered literally as “blind spots” and may be understandable, but the glossary should use one consistent driver-visibility term.

Source-generation cleanup:
- **IDs 316–330:** Leading `) ` / `၎)` artifacts remain. Reconcile generated data with the source/compiler before attempting a bulk cleanup.

Broadly aligned in this sample: ID 317’s keyed instruction to slow before a curve; ID 320’s keyed “yes, because alcohol slows reactions”; ID 322’s keyed instruction to wait until fit to drive; ID 323’s intended firm emergency braking with ABS; ID 325’s instruction to slow down and increase caution near a school crossing; and ID 327’s principle of increasing the following gap when tailgated. These language observations do not certify every answer key, image-dependent priority decision, or medical/legal rule.

**Batch result:** IDs 316–330 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, `main` branch, or deployment changed.


### Safe-driving manual review — IDs 331–345 — 2026-10-24

Compared Thai, English, and Myanmar wording for IDs 331–345. Cross-checked general safety principles against a Department of Land Transport-linked public driving guide: keep left/pass right, give way to emergency vehicles, avoid excessive speed, do not drink and drive; and the sample exam guide says following distance should allow a safe stop and drivers should signal before changing lanes/overtaking. See https://www.thailand.go.th/public/issue-focus-detail/--383 and https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf. These references do not validate every item/key below. No question data, keys, or images were changed.

Clear/high-priority language issues:
- **ID 335, stem and option 4 (keyed):** The Thai describes carrying an injured person on four interlocked hands as a seat/litter, or using a chair. Myanmar mistranslates the “litter” concept as a pile of rubbish and confuses the hand/seat structure. The keyed option’s intended patient—leg injury, conscious, able to use both arms—is broadly present but should be rewritten by a competent translator.
- **ID 338, option 4 (keyed):** Thai/English mean cutting back in immediately to the left in front of the vehicle just overtaken. Myanmar says to cut “from the front to the left” and does not clearly convey dangerously cutting in front. Preserve the unsafe behaviour clearly as the “should not do” answer.
- **ID 339, option 4 (keyed):** Thai/English mean driving mindfully, strictly following traffic discipline, and showing courtesy/consideration. Myanmar repeats “manners/behaviour” and loses the full sense of consideration for others.
- **ID 343, stem and option 4 (keyed):** The stem is malformed in Myanmar and does not clearly say a driver is making a U-turn into your lane. Option 4’s instruction to slow down and give way is broadly preserved but phrasing is awkward.
- **ID 344, stem:** Myanmar uses a literal “zebra crossing” phrase and awkwardly structures the wheelchair user as being “there”; it should clearly describe a driver approaching/entering a pedestrian crossing and seeing a wheelchair user waiting to cross.
- **ID 345, option 2:** English source is already broken/illogical; Myanmar follows the confusing idea of “in order for an accident to happen.” Do not polish this into an endorsed instruction; preserve as an obviously incorrect distractor or review the source.
- **ID 341, options 1–3:** Myanmar accurately repeats broad discriminatory/overgeneralized claims that people with diabetes, nearsightedness, or HIV cannot drive. These are distractors, but should not be presented elsewhere as true general medical/legal facts. Keep the keyed option’s symptom-based wording distinct and verify current Thai licensing rules before treating this as official medical eligibility guidance.

Safety/source verification flags:
- **ID 333, keyed option 1:** The source says two helpers moving an unconscious injured person is appropriate. This can be unsafe as generalized first-aid advice because unnecessary movement may worsen injury, especially suspected spinal injury. Verify the official curriculum/source and add context before endorsing this as a real-world instruction.
- **ID 335:** Same first-aid transport topic. A hand-seat or chair carry should not be treated as generally safe for an injured person without checking injury type and official first-aid guidance.
- **ID 342, keyed option 2:** The general idea of leaving a larger gap behind a truck for visibility before overtaking is plausible, but the source’s wording “for the best visibility” is broad. The distractor about accelerating to overtake around blind curves is clearly unsafe; do not rewrite it to sound acceptable.
- **ID 340, keyed option 1:** The source says not to mix lubricating oil into fuel. This may depend on engine type and manufacturer instructions; verify the exact engine/vehicle context before presenting it as a universal maintenance rule.
- **ID 341, keyed option 4:** The source says a person with high blood pressure should not drive when symptoms appear. This is a broad health-related claim; retain symptom-based caution and verify the official curriculum, avoiding diagnosis or blanket restrictions.
- **ID 329 reviewed previously:** This batch does not resolve the medical context around injectable diabetes medication; keep that earlier source-verification flag open.

Other wording and answer-key observations:
- **ID 331, keyed option 3:** “Reduce speed” is correctly conveyed. The stem is slightly awkward but understandable.
- **ID 332, keyed option 3:** The meaning—maintain safe spacing and allow the following vehicle to overtake—is preserved.
- **ID 334, keyed option 3:** Stop and allow a disabled pedestrian to cross is preserved. Ensure respectful, consistent wording for “person with a disability.”
- **ID 336, keyed option 4:** The meaning is “when your vehicle breaks down or is involved in an accident”; Myanmar says the car “collapses/falls,” which is inaccurate.
- **ID 337, keyed option 1:** Definition of safe speed based on road, weather, and traffic conditions and not endangering others is broadly preserved.
- **ID 340, option 4:** The source says 95-octane fuel cannot replace 91-octane fuel, which may not be universally true across vehicles/fuel specifications. Verify manufacturer/fuel guidance before treating this as a general fact.
- **ID 342, option 4:** English/Thai describe overtaking quickly near a blind curve; Myanmar preserves an unsafe meaning but has an unnatural “blind spots” phrase. Keep clearly incorrect.
- **ID 344, keyed option 2:** “Prepare to stop” is translated accurately.
- **ID 345, keyed option 1:** The precaution-first concept is present, though the Myanmar wording is stiff.

Source-generation cleanup:
- **IDs 331–345:** Leading `) ` / `၎)` artifacts remain. Reconcile generated data with the source/compiler before bulk cleanup.

Broadly aligned in this sample: ID 331’s keyed instruction to reduce speed when a large truck overtakes; ID 332’s advice not to obstruct a lawful overtake; ID 334’s duty to stop for a pedestrian crossing; ID 337’s context-dependent definition of safe speed; and ID 344’s instruction to prepare to stop for a wheelchair user at a crossing. Language review and the public guide do not certify every answer key, image-dependent context, maintenance statement, or medical rule.

**Batch result:** IDs 331–345 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, `main` branch, or deployment changed.


### Safe-driving manual review — IDs 346–360 — 2026-10-24

Compared Thai, English, and Myanmar wording for IDs 346–360. Checked relevant general guidance against the Thai Road Traffic Act's amber-light rule (Section 22) and public Thai first-aid guidance for an unconscious casualty. These references help identify source/key concerns but do not certify every item. Sources: https://www.thailawyers.in.th/code-of-laws/พระราชบัญญัติจราจรทางบก and https://sites.google.com/nfe.go.th/dole-utt-22021/หน่วยการเรียนรู้-11-การปฐมพยาบาล/เรื่องที่-2-วิธีการปฐมพยาบาลกรณีต่าง-ๆ.

Clear/high-priority language issues:
- **ID 348, stem (source mismatch):** Thai says a child restraint that faces toward the vehicle seat/back (rear-facing). English calls it “forward-facing” and Myanmar says “ရှေ့မျက်နှာစာ” (front-facing), so the two translations reverse the restraint orientation. The keyed option says disable the airbag; this is only a narrow condition for a rear-facing restraint in a front seat and must be checked against the vehicle manual. Prefer a rear seat for a child restraint when available; do not present airbag deactivation as a universal instruction.
- **ID 350, keyed option 1:** Thai law says an amber/yellow traffic light means prepare to stop behind the stop line, except a driver who has already crossed the line may proceed. Myanmar translates the stop line as “မှတ်တိုင်” (bus stop/station), not a stop line. The option also states a definite stop without the source's exception. Correct terminology and preserve the legal nuance after checking the official source.
- **ID 353, stem:** Thai asks how to prevent an accident when someone is crossing the road. English and Myanmar split the scenario into an incomplete sentence. The keyed concept—reduce speed—is preserved, but the stem should be a complete question.
- **ID 357, stem:** Thai/English ask what behaviour should be followed while on the road/in traffic; Myanmar says “လမ်းမှာ လျှောက်ရမယ့် အကျင့်” which implies walking on the road, not road-user/driving behaviour. Keyed speed-limit and traffic-sign compliance is broadly preserved.
- **ID 359, source/key safety concern:** The question asks which action is incorrect when a car falls into water, with “try to start the engine” keyed. However, option 1 recommends rolling down a window to let water in to equalize pressure, an oversimplified potentially dangerous escape instruction; the question may contain more than one questionable option. Do not endorse that advice without checking authoritative vehicle-emergency guidance and revising the question/key as needed.
- **ID 360, keyed option 3:** Thai says to let some vehicles exit the alley, alternating with vehicles going straight. Myanmar only says to open the way for cars leaving the alley and then trails off with “cars going straight”; it loses the alternating/turn-taking rule.
- **ID 346, option 2:** English “crime scene” is inappropriate for the general road-incident scene in Thai; Myanmar follows the crime-scene framing. It is a distractor, but should still be translated faithfully.
- **ID 351, option 2:** Myanmar is an awkward present/past-tense fragment rather than a clear instruction to check mirrors periodically.
- **ID 354:** This is image-dependent (“from the picture”). The keyed right-indicator/overtake-when-safe answer is broadly plausible, but cannot be certified without inspecting the actual picture and its traffic context.
- **ID 358, option 1:** Myanmar translates high beams as “အမြင့်တန်းတွေ,” a literal, unclear term. Standardize to the project's clear term for high-beam headlights; the distractor's meaning should remain “keep high beams on all night.”
- **ID 360, stem:** English and Myanmar describe the alley situation in broken fragments and do not clearly establish that the learner is driving straight past a side street while many vehicles wait to emerge.

Safety/source verification flags:
- **ID 346, keyed option 1:** “Check whether breathing is normal” is a useful initial check but incomplete as full first aid for an unconscious casualty. Thai first-aid guidance calls for checking responsiveness and breathing, calling emergency medical services (1669), and CPR if the person is unresponsive and not breathing normally; suspected head/neck/back injury requires care to limit movement. Keep the quiz's concise intended answer distinct from comprehensive real-world emergency instructions.
- **ID 348:** Verify the exact child-seat orientation, vehicle-specific airbag warning, and official curriculum source before altering the answer key.
- **ID 350:** Section 22 of the Thai Road Traffic Act says prepare to stop at the stop line on amber, except if already past the line. The current keyed option's wording is overabsolute; verify official legal text and preserve the exception.
- **ID 359:** Reassess the whole item, not just Myanmar translation, because its non-keyed “let water in to equalize pressure” instruction may be unsafe or incomplete and could make the single-answer key ambiguous.

Other wording and answer-key observations:
- **ID 347, option 1:** Myanmar splits the “familiarize yourself with a vehicle you have never driven before” idea into two fragments. The keyed high-speed-to-arrive-before-dark option is faithfully marked as the unsafe choice.
- **ID 349, keyed option 3:** The small/difficult-to-notice motorcycle concept is preserved; “ပြေးဆွဲ” is not natural wording for motorcycles moving in traffic.
- **ID 352, keyed option 2:** “Stay calm and get out of the car immediately” is broadly conveyed. Review the broader fire-response source if this item is later used as authoritative guidance.
- **ID 355, keyed option 4:** Checking surrounding traffic and proceeding only when safe is broadly aligned.
- **ID 356, stem:** Myanmar wording is grammatically awkward and the “avoiding risky behaviour” clause is detached. Keyed option 4, voluntarily following traffic rules without waiting for police enforcement, is broadly preserved.
- **ID 358, keyed option 2:** Safe following distance sufficient to stop in time is preserved.
- **ID 360, distractors 1, 2 and 4:** Their unsafe intent is broadly preserved, but Myanmar wording should be made complete and clear while retaining them as incorrect options.

Source-generation cleanup:
- **IDs 346–360:** Leading “) ” / “၎)” artifacts remain in source/generated content. Reconcile source/compiler provenance before bulk cleanup; do not edit only the generated JSON.

Broadly aligned in this sample: ID 347's keyed warning against speeding to beat darkness; ID 349's rationale that motorcycles can be hard to see; ID 352's intended instruction to leave a burning vehicle; ID 355's check-surroundings-before-moving rule; ID 356's voluntary compliance with traffic rules; and ID 358's safe following distance. This language review does not certify every key or image-dependent question.

**Batch result:** IDs 346–360 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 361–375 — 2026-10-24

Compared Thai, English, and Myanmar for IDs 361–375. Used the Thailand Department of Land Transport-linked public safe-driving guide as general context; this does not certify every individual answer key. Reference: https://thailand.go.th/public/issue-focus-detail/--383 and DLT guide https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf.

High-priority translation / meaning issues:
- **ID 363, stem:** Thai/English describe a large vehicle signalling left while moving gradually to the right. Myanmar omits/obscures the vehicle's gradual movement to the right and the subject structure, which is essential to the scenario. Keyed answer to keep a safe distance is preserved.
- **ID 365, stem and keyed option 1:** Thai says the bicycle wheel is protruding from a parked car, suggesting a cyclist may emerge. Myanmar says the bicycle wheel is “broken/punctured” (ဘီးပေါက်နေသည်) and option 1 reads as preparing for the bicycle to stop, rather than slowing and preparing to stop to let the bicycle pass. Clear scenario and action error.
- **ID 366, stem:** Thai asks in which situation one should not attempt to overtake a bicycle; English/Myanmar say “under no circumstances,” incorrectly making it an absolute ban. The keyed option “while turning left” remains plausible but the question wording needs to retain the conditional form.
- **ID 367, keyed option 4:** The statement says high beams can be used while following a vehicle because they do not affect the vehicle ahead. Myanmar says “when running behind the car” and retains the false claim, but the wording is awkward. Keep it clearly as the incorrect statement; do not make it sound like endorsed advice.
- **ID 368, keyed option 1:** Thai says adjust the mirror to a position that does not dazzle/glare the driver. Myanmar “မှိန်မသွားစေမယ့်” means roughly “does not become dim,” missing the glare/being dazzled meaning.
- **ID 371, stem:** Thai asks for polite/courteous behaviour while on the road. Myanmar turns this into an incomplete statement rather than a question.
- **ID 372, stem and keyed option 1:** Thai says an obstacle blocks the left lane while oncoming traffic approaches. Myanmar stem makes it sound as though a car merely passes by. Keyed option Myanmar says wait for “traffic congestion” to pass, not oncoming vehicles, losing the right-of-way situation.
- **ID 373, option 4:** Thai/English say bicycles/motorcycles may not notice that you intend to turn. Myanmar changes this to “don't want to look at the bicycle/motorcycle,” which is a different meaning.
- **ID 374, stem:** The Myanmar question becomes an awkward statement about whether A-pillars obstruct visibility rather than asking which situations cause obstruction. Keyed answer “curves and intersections” is aligned.
- **ID 375, keyed option 3:** Thai means other drivers may think the vehicle is travelling fast; Myanmar says “make other drivers understand that the car is driving fast,” an awkward but recognizable statement. Preserve it as the incorrect claim.

Other language / source issues:
- **ID 361, stem:** English and Myanmar retain a leading parenthesis artifact and the English stem is grammatically awkward. The keyed low gear plus gentle braking concept is present; exact downhill-braking guidance should be checked against vehicle/official guidance before presenting as universal.
- **ID 362, option 1 (keyed):** Myanmar's “မှားယွင်းစွာ မောင်းနှင်နေသည့်” is understandable for erratic driving, but “အနီးကပ်အကွာအဝေးတွင် ချဉ်းကပ်ခြင်း သို့မဟုတ် မကျော်ပါနှင့်” is unnatural. Intended safe distance / avoid close overtaking is preserved.
- **ID 364, stem:** The English/ Myanmar question is awkwardly phrased; keyed option 2 preserves the collision-prevention intent but is a fragment rather than a natural explanation.
- **ID 369, stem:** English and Myanmar are understandable but repetitive. Keyed option 1, reduce speed when rain starts, is preserved and aligns with general safe-driving advice.
- **ID 370, options 1 and 2:** Myanmar translations are fragments and do not make the comparison between overtaking time and distance natural. Keyed option 3 (more time and distance when speeds are similar) is preserved.
- **ID 371, option 2 (keyed):** Meaning “do not use the horn to chase pedestrians away” is broadly preserved.
- **ID 372, options 2–4:** Unsafe intent is mostly preserved, though wording is fragmented.
- **ID 375, stem:** “at all times” in the emergency-light question is an awkward framing; keyed distractor intent is retained. Keep emergency lights from being taught as a substitute for turn indicators.

General source cleanup:
- **IDs 361–375:** Leading parenthesis / Myanmar numbering artifacts remain in generated question text. Reconcile source/compiler provenance before bulk cleanup; do not patch only the generated JSON.
- **IDs 361–375:** No images inspected in this batch; this is not a certification of source material or answer keys.

Broadly aligned in this sample: ID 362's keyed advice to slow and keep distance from an erratic driver; ID 363's safe following distance; ID 366's left-turn overtaking hazard; ID 369's reduced speed in rain; ID 373's small-vehicle visibility rationale; and ID 374's A-pillar visibility issue. This language review does not certify every answer key.

**Batch result:** IDs 361–375 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 376–390 — 2026-10-24

Compared Thai, English, and Myanmar for IDs 376–390. Used the Department of Land Transport-linked public safe-driving guide as general context, not as certification of every individual answer key: https://thailand.go.th/public/issue-focus-detail/--383 and https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf.

High-priority translation / meaning issues:
- **ID 376, stem:** Thai asks which is *not* the meaning of “appropriate speed.” English grammar is broken and Myanmar combines the negative with “most correct,” making the task difficult to understand. Keyed option 3 (speed based on personal satisfaction) is preserved as the incorrect definition.
- **ID 382, stem:** Thai asks what road users should predict in addition to other vehicles' movements. English/Myanmar turn this into a repetitive, fragmented “forecasting technique” sentence. Keyed option 1 (predict how road users will move) is preserved.
- **ID 383, stem:** “Road island” in Myanmar is translated literally as an island in the middle of the road. Better use the established term for a central median/divider. Keyed answer says stop without the front of the vehicle entering the opposing lane; broadly preserved.
- **ID 385, stem:** Thai says reversing into a secondary/minor road. Myanmar says “အလယ်တန်းလမ်း” (middle/secondary-grade road), which is not a natural road term. Keyed give-way to pedestrians is preserved.
- **ID 387, stem:** Thai specifically says a *flashing* yellow light beneath a school-area warning sign. English/Myanmar omit or obscure the flashing state. Keyed answer to slow until certain no children are crossing is preserved.
- **ID 388, stem:** Thai says you stopped to eat at a restaurant that serves alcohol before a long drive. Myanmar wording reads as though you did not eat at the restaurant, changing the scenario. Keyed answer not to drink alcohol is clear.
- **ID 390, stem:** Thai/English ask how to avoid brake lights dazzling drivers behind in nighttime congestion. Myanmar says the brake lights should not “become dim” for drivers behind, missing the glare/dazzling concept. The keyed answer “use only the handbrake” is context-dependent and should be verified against the official curriculum/vehicle guidance before presenting as universal; do not teach it as a general replacement for safe braking.

Other wording / answer observations:
- **ID 377, stem:** “Providing correct signal lights when driving into an intersection” is a fragment, not a natural question. Keyed option 1 (signal before left/right turns) is aligned; option 4 should remain a clearly incorrect distractor—hazard lights are not a substitute for turn signals when proceeding straight.
- **ID 378, keyed option 2:** Meaning to slow down to a safe speed is preserved.
- **ID 379, keyed option 1:** “Slow down and look left-right” is preserved, but Myanmar is an imperative fragment; make the instruction natural when editing.
- **ID 380, keyed option 1:** Slow down and observe both directions near a pedestrian crossing is broadly aligned. Ensure the negative scenario (“no one is crossing at the moment”) does not imply speeding up.
- **ID 381, stem and keyed option 2:** Situation is a motorcycle overtaking while oncoming traffic approaches. Myanmar stem is awkward but recognizable; keyed response to reduce speed, keep left and leave space is preserved. Review the exact safe response with official source before rewriting as a universal manoeuvre.
- **ID 384, keyed option 4:** Keeping a larger following distance at night is preserved. Other distractors are recognizable, though “Drive” remains in English in option 2.
- **ID 386, stem:** Myanmar says “which road is unsafe” rather than “which is not a safe way to drive in rain.” Keyed answer not to leave hazard lights on throughout rainfall is preserved and aligns with general advice against unnecessary hazard-light use while moving.
- **ID 389, option 3:** Thai/English say keep the engine running; Myanmar says “install the engine,” not “leave the engine running.” Keyed option 1 (turn off engine while refuelling) is clear.
- **ID 390, other options:** Terms for handbrake and foot brake are understandable, but the question's safety context/key still needs independent validation.

Source-generation cleanup:
- **IDs 376–390:** Leading parenthesis / Myanmar numbering artifacts remain in stems. Reconcile source/compiler provenance before bulk cleanup; do not patch only the generated JSON.
- No image-dependent items were explicitly flagged in this batch; no claim is made that every source/key has been independently validated.

Broadly aligned in this sample: ID 377 use turn signals for turns; ID 378 reduce speed when it feels too fast; ID 380 slow and observe near crossings; ID 384 keep extra following distance at night; ID 386 avoid hazard lights throughout rain; and ID 389 switch the engine off while refuelling. This language review does not certify every answer key.

**Batch result:** IDs 376–390 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 391–405 — 2026-10-24

Compared Thai, English, and Myanmar for IDs 391–405. Checked general context against Thailand's DLT-linked English driving guide and WHO pedestrian-safety evidence. References: https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf and WHO pedestrian safety report https://iris.who.int/bitstream/handle/10665/367419/9789240072497-eng.pdf?sequence=1.

High-priority safety / answer-key concerns:
- **ID 391, keyed option 1:** Says to give way to the vehicle on the right that is already in the roundabout. DLT guidance says drivers should yield to vehicles already in the roundabout; the question/key's extra “on the right” condition may be misleading or too narrow. Verify the exact Thai exam curriculum and ensure it does not contradict the general rule.
- **ID 395, keyed option 2:** “Move the injured person immediately” is the action that should not be done. The intended key is sensible as a general first-aid rule, but the other translations/options are awkward and the item should state the exception clearly: move a casualty only if necessary to protect them from immediate danger or as required for lifesaving care; do not move casually where spinal injury may be suspected.
- **ID 399, stem/key polarity:** Thai asks which is **not** a result of speeding; the keyed option says “can stop the car in time,” a positive outcome. Myanmar stem drops the negative and asks what result occurs because of speeding, reversing the question polarity. High-priority correction candidate; do not change the JSON until source/compiler origin is reconciled.
- **ID 400, keyed option 3:** Claims a pedestrian hit at 30 km/h is likely to be injured but not killed. This risks implying survival is assured. WHO evidence indicates survival is highly likely at around 30 km/h but fatality risk is not zero; the key/distractors should avoid a deterministic promise and must be checked against the official test source.
- **ID 401, keyed option 3:** “Overtaking is strictly prohibited” when a car ahead stops at an unsignalized intersection on a clear road may be the intended safe answer, but it is absolute and the scenario is under-specified. Verify against the original official source before asserting this as a universal legal rule.
- **ID 404, keyed option 1:** Thai says strong wind may blow a motorcyclist in front of the car. Myanmar “လွင့်စင်သွားနိုင်သည်” can sound like being flung away rather than blown/drifted into the vehicle's path. Meaning is approximately conveyed but needs more natural and precise phrasing.

Translation / question-quality issues:
- **ID 392, keyed option 1:** Thai's “continue following behind” in a situation where the rider's direction is unclear is translated simply as “drive behind,” omitting the safety implication to keep a safe distance and avoid overtaking.
- **ID 393, stem:** Thai asks which action a driver should *not* do around a cyclist. Myanmar asks what the driver *should* do, reversing the negative. Keyed option 3 (honking to say hello) remains a negative action, so the polarity mismatch is important.
- **ID 394, keyed option 2:** “Driver's unpreparedness” is translated as “the driver's preparation,” omitting the negative/unprepared state and reversing the concept. The question's claim that this is the single factor with the greatest effect is also broad and needs source verification.
- **ID 396, keyed option 3:** “High and low beams” is rendered as “high and low rows/levels,” an unnatural literal translation; standardize to headlights/high beam/low beam terminology.
- **ID 397, stem:** Both English and Myanmar end with an unfinished “you must…” prompt. Keyed advice not to drive after taking drowsiness-causing medicine is preserved.
- **ID 398, keyed option 4:** Myanmar makes the mirror check an awkward “let's look in the mirror” phrase and does not clearly say to check side and rear mirrors for blind spots before overtaking.
- **ID 400, option 3:** Myanmar says the pedestrian may be injured “but will not die,” stronger and more categorical than English's “likely”; revise to avoid guarantee.
- **ID 402, keyed option 4:** Myanmar conveys caution and readiness to stop, but loses the explicit “be more careful” part somewhat.
- **ID 403, stem:** English/Myanmar are awkward and omit the “when you notice” structure. Keyed instruction to continue behind and not overtake is preserved.
- **ID 405, keyed option 3:** Thai says stop and wait for main-road traffic and pedestrians to pass first. Myanmar wording says to stop the cars on the main road, changing who must stop; correct to yielding/waiting for traffic and pedestrians.

Other broadly aligned items:
- ID 396's keyed answer to test brakes after driving through water is conveyed.
- ID 397's caution against driving after sedating medicine is conveyed.
- ID 398's intention to check mirrors and blind spots before overtaking is present but needs more natural Myanmar.
- ID 402's instruction to approach parked vehicles cautiously and be ready to stop is broadly preserved.
- ID 403's instruction not to overtake a vehicle whose right indicator remains on is preserved.
- ID 405's intended give-way rule is present but the subject/agency is mistranslated.

Source-generation cleanup:
- **IDs 391–405:** Leading parenthesis / Myanmar numbering artifacts remain in stems. Reconcile source/compiler provenance before bulk cleanup; do not patch only the generated JSON.
- No images were audited in this batch. This review does not certify all answer keys.

**Batch result:** IDs 391–405 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 406–420 — 2026-10-24

Compared Thai, English, and Myanmar wording for IDs 406–420. Checked general safe-driving context against the Thailand DLT-linked English driving guide (https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf) and Thailand government guidance on yielding to emergency vehicles (https://www.thailand.go.th/public/guide-book-detail/--383). This was a language and plausibility review, not a full independent certification of answer keys.

High-priority translation / safety concerns:
- **ID 408, keyed option 3:** The stated reason for a safe following distance behind a truck is “so the truck driver can see your vehicle in the mirror.” This may be a weak or misleading rationale: the key safety reasons include visibility, blind spots, stopping distance and reaction time. The DLT-linked guide recommends increased following distance, and ThaiHealth guidance cites truck blind spots and a four-second gap. Verify the original test source before changing the answer key.
- **ID 409, image-dependent key:** The keyed answer says the green car goes first, but the question explicitly depends on a picture and the image was not inspected in this batch. Do not certify the key without checking the actual diagram, road priority/signals and vehicle positions.
- **ID 410, keyed option 4:** The intended action is to yield to the approaching fire engine before turning. Myanmar translation “မီးသတ်ကား လာစောင့်ပြီးမှ အလှည့်” is unnatural and can read like waiting for the fire engine to come/wait; rewrite to clearly say wait for the fire engine to pass, then turn. The stem is also unfinished in English and Myanmar.
- **ID 411, image-dependent key:** “Check safety on the right” is keyed as the first action when leaving a parking space. The scene/image and complete safety checks were not verified; do not treat the keyed answer as fully validated without inspecting the image and source.
- **ID 413, keyed option 2:** Myanmar says to wait for the car ahead to move, then “ကျော်ဖြတ်မောင်းလို့ရတယ်” (“can pass/overtake”), which could be understood as overtaking rather than proceeding through the intersection once space clears. Rewrite to say proceed only when there is enough room to clear the intersection without blocking it.
- **ID 414, keyed option 2:** “Change lanes” is mistranslated as changing “channels” (ချန်နယ်များ). Use lane/traffic-lane terminology; “turn right signal” should be phrased as using the right turn indicator, not as turning right.
- **ID 418, stem:** “Rear-end collision” is rendered as “နောက်စေ့ကို တိုက်မိခြင်း,” which sounds like hitting the back of a head rather than a vehicle collision. Use a natural term for a collision into the rear of the vehicle ahead.
- **ID 419, keyed option 2:** High-priority semantic reversal. English says high beams make the road less clear for the driver ahead and oncoming drivers; Myanmar says it causes a “clear view” (“ရှင်းလင်းပြတ်သားသော မြင်ကွင်း”), reversing the effect. Correct the negative/clarity wording before using this item for learning.
- **ID 420, stem and keyed option 2:** Myanmar “ကားပျက်ကျပါက” may imply a crash/collapse rather than a vehicle breaking down. The keyed instruction “ကားကို လမ်းဘေးသို့ ထောက်ပါ” means prop/support the car toward the roadside, not maneuver/pull it over. Rewrite as safely move/pull the vehicle to the roadside and switch on hazard lights. DLT-linked guidance similarly advises parking on the shoulder/left side in a safe area and using hazard lights when broken down.

Other language / question-quality findings:
- **ID 406, stem:** “an area to improve the road surface” is an unnatural translation of a roadwork/road-surface repair area. Translate as an area where roadworks or surface repairs are underway. Keyed response to slow down and drive carefully is preserved.
- **ID 407, option 2:** “ตรวจดูว่าถนนรองว่าง” means check whether the secondary road is clear; Myanmar “အလယ်တန်းလမ်းကို အခမဲ့စစ်ဆေးရန်” incorrectly says to check it “for free.” This distractor needs translation correction even though it is not keyed.
- **ID 412, option 1:** Myanmar says lights “flash” when approaching, but the wording is unnatural; keyed response to allow a bus signalling to leave the stop to pull out first is preserved. Verify the exact legal context before presenting it as a universal priority rule.
- **ID 415, keyed option 1:** Thai/English mean slow down until the cyclist has passed the turning point/turning path. Myanmar “စက်ဘီးကွေ့ပြီးသည်အထိ” sounds like waiting until the bicycle itself turns. Clarify that the driver should slow and allow the cyclist to clear the left-turn path before turning.
- **ID 416, keyed option 4:** The give-way instruction is broadly preserved, but “vehicles turning out” is vague without the diagram. Confirm image context before certifying the exact priority rule.
- **ID 417, keyed option 2:** Meaning that the horn may be used when necessary to warn others in an emergency is broadly preserved. Wording should emphasize a brief warning when needed, not indiscriminate honking.
- **ID 418, option 3:** English distractor “Braking the car that couldn't separate in time” is unclear and may be a malformed source translation; compare with the Thai original before editing.
- **ID 420, option 3:** English says “stood up to hitchhike,” which does not faithfully convey standing in the road and waving traffic down; likely a source translation defect, not just Myanmar translation.

Broadly aligned in this sample: ID 406 reduce speed at road repairs; ID 407 check for overtaking vehicles before turning right; ID 410 yield to the fire engine; ID 412 let the bus leave first; ID 415 avoid turning across a cyclist's path; ID 417 use the horn as a necessary warning; and ID 420 move a broken-down vehicle off the roadway if safe and use hazard lights. These alignments do not certify all keys.

Source-generation cleanup:
- **IDs 406–420:** Leading punctuation/numbering artifacts remain in question stems. Reconcile raw source and compiler/cache provenance before bulk cleanup; do not patch generated JSON only.
- IDs **409 and 411** depend on images. No images were inspected in this batch; their answer keys remain unverified pending visual review.

**Batch result:** IDs 406–420 reviewed. Findings recorded in audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


### Safe-driving manual review — IDs 421–435 — 2026-10-24

Compared Thai, English, and Myanmar text for IDs 421–435. Checked selected safety context against Thailand's DLT-linked English driving guide (https://safedrivedlt.com/wp-content/uploads/2025/06/Driving-EN-010468_compressed.pdf) and Thailand government safe-driving guidance (https://thailand.go.th/public/issue-focus-detail/--383). This is a language and plausibility audit; not every answer key is independently certified.

High-priority safety / answer-key concerns:
- **ID 422, keyed option 2:** The proposed response to a stuck accelerator is to use the tip of the foot to lever the pedal up. This may be difficult or unsafe depending on the vehicle and situation, and should not be taught as the sole universal response without checking the official source. The stem Myanmar says “if you happen to press the accelerator” rather than “if the accelerator pedal gets stuck,” weakening the emergency scenario. Verify source and provide safe, vehicle-appropriate emergency instructions before treating this key as validated.
- **ID 423, keyed option 2:** The question states that blanket-assisted movement is unsuitable for a patient with a back injury. The general concern about spinal injury is sensible, but casualty movement depends on immediate danger, trained assistance and technique; the item is too categorical without its original first-aid source. Myanmar stem reads as “not suitable for patients in any area,” a malformed universal statement. Verify source before changing the key.
- **ID 427, keyed option 2:** Intended action is to stop/yield so pedestrians can cross at a crossing. Myanmar says “stop the cars” rather than clearly directing the driver to stop their own vehicle and give way. Correct the subject/agency.
- **ID 428, keyed option 4:** The general instruction to stay calm, move to the left shoulder if the vehicle remains drivable, and turn on hazard lights aligns with the DLT-linked guide. Myanmar “မီးမှိတ်တုတ်မှိတ်တုတ်မှိတ်တုတ်” repeats “flashing” awkwardly and the “shoulder” term is literal/body-part wording. Rewrite using natural terms for the road shoulder and hazard warning lights.
- **ID 432, keyed option 2:** Thai says check right side mirror and rear-view mirror, signal right, and pull out when safe. English incorrectly says “Get out of the car,” and Myanmar says “ကားထဲမှ ဆင်းပါ” (get out of the car), reversing the intended manoeuvre. High-priority translation error; say move/pull away from the curb when safe, not exit the vehicle.
- **ID 434, keyed option 2:** Thai says use low-beam headlights in heavy traffic on wet roads with water spray. English says “low power,” and Myanmar says “ပါဝါနည်း” (low power), confusing headlight setting with electrical power. Use “low-beam headlights” consistently. Verify whether the described scenario and key match the official curriculum.

Other translation / question-quality findings:
- **ID 421, keyed option 3:** The incorrect practice is overtaking while a vehicle behind is about to overtake you. Myanmar preserves the broad meaning but is awkward and could be clearer as “နောက်ကယာဉ်က သင့်ကို ကျော်တက်ရန် စတင်နေချိန်တွင် သင်က ထပ်မံကျော်တက်ခြင်း”.
- **ID 424, keyed option 1:** Myanmar translates “traffic lanes” as generic “လမ်းများ” and “lights” without specifying the turn indicator. Say check mirrors, signal the intended lane change, and change lanes only when safe.
- **ID 425, keyed option 2:** Blind-spot definition is broadly preserved. The Myanmar term “ကန်းကွက်” is understandable but should be standardized across the site as a vehicle blind spot / area not visible in mirrors.
- **ID 426, stem and keyed option 3:** “ไหล่ทาง” means the road shoulder, but Myanmar/English literal phrasing (“shoulder” / “ပခုံး”) is wrong or confusing. Translate the question as asking what the road shoulder is for, and describe a vehicle breakdown as “ကားပျက်သည့်အခါ”.
- **ID 429, stem:** Literal “look over their shoulders” has been carried into Myanmar in a way that can sound like looking over the physical shoulder without explaining the blind-spot check. Keyed reason to check the vehicle blind spot is preserved.
- **ID 430, keyed option 3:** Resting/sleeping or stretching at a rest stop is broadly preserved, but Myanmar’s second clause repeats rest rather than explicitly preserving “stretch.” Prefer clear guidance to stop in a safe place and rest/sleep before continuing if drowsy.
- **ID 431, stem/key:** The question claims drivers should not drive parallel with a particular vehicle type and keys trucks. Myanmar follows the English, but the statement is overbroad without scenario/context (for example, prolonged driving beside a truck and blind spots). Verify the official source and clarify rather than present an absolute rule.
- **ID 433, stem:** “Emergency vehicle with siren on and running behind” is unnatural in both English and Myanmar. Rewrite as an emergency vehicle approaching from behind with its siren sounding. Keyed action to make way is broadly preserved; don't imply an immediate lane change to the right in every road layout.
- **ID 435, stem and keyed option 2:** Thai/English mean the driver is about to turn and sees pedestrians crossing; Myanmar reads as if the car is already turning and pedestrians are crossing. The intended instruction to wait until pedestrians have passed before turning is preserved but should be phrased naturally.

Broadly aligned in this sample: ID 421 do not overtake when unsafe; ID 424 check mirrors and signal before changing lanes; ID 425 identify blind spots; ID 429 check blind spots before changing lanes; ID 430 stop and rest when drowsy; ID 433 give way to emergency vehicles; ID 435 wait for pedestrians before turning. This alignment does not certify every answer key.

Source-generation cleanup:
- **IDs 421–435:** Leading punctuation / numbering artifacts remain in stems. Reconcile raw source and compiler/cache provenance before bulk cleanup; do not patch generated JSON only.
- No images were audited in this batch. Image-dependent context or unverified legal/first-aid claims should remain flagged until checked against the original question source and relevant diagram.

**Batch result:** IDs 421–435 reviewed. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


### Vehicle-maintenance manual review — IDs 441–455 — 2026-10-24

The safe-driving bank ends at ID 440; this batch begins the separate `src/data/questions_maintenance.json` bank. Compared Thai, English and Myanmar text for IDs 441–455. Checked basic vehicle-preparation points against Thailand Department of Disaster Prevention and Mitigation / government guidance on tire condition, brakes, coolant, battery and wipers: https://www.thailand.go.th/public/index.php/issue-focus-detail/------7- and https://www.prd.go.th/th/content/category/detail/id/35/iid/244478. This is a translation and plausibility audit, not a complete mechanical-safety certification.

High-priority safety / source-validation concerns:
- **ID 438, keyed option 3:** After a tire bursts, the key says to let the car roll and be ready to turn on hazard lights. The Myanmar translation “ကားကို စီးဆင်းပါစေ” is unnatural and could imply letting the vehicle drift without control. A safe answer should emphasize holding the steering wheel firmly, avoiding abrupt braking/steering, easing off the accelerator and slowing gradually in a controlled manner, then moving to a safe place when possible. Verify the original official source before changing the answer key.
- **ID 442, keyed option 4:** Pressing the engine belt with fingers is presented as the basic tension check, but the stem omits a critical safety condition: the engine must be switched off and secured before touching a belt. This needs source validation and a clear warning; never inspect a moving belt by hand.
- **ID 441, keyed option 1 and ID 443:** Adding distilled water is applicable to serviceable flooded lead-acid batteries that require maintenance, not all modern sealed/maintenance-free batteries. Preserve the exam's intended answer only with a note to follow the vehicle/battery manufacturer instructions; do not imply all batteries can be topped up.
- **ID 444, keyed option 3:** The coolant reservoir level should be between the marked minimum and maximum when checked according to the owner's manual, generally with the engine cool. The key's meaning is broadly aligned but should not imply opening a hot cooling system.
- **ID 453, keyed option 4:** Disconnecting the negative terminal first is generally correct for conventional negative-ground vehicles, but battery procedures can vary by vehicle (especially hybrids/EVs). Add manufacturer-instruction context if this is used as practical guidance.
- **ID 454, keyed option 2:** “Red warning lights should not appear while driving” is an oversimplified generalization. Red warning indicators usually signal a potentially serious condition requiring prompt attention, but exact indicators and safe response differ by vehicle; verify original curriculum and avoid implying every red indicator has identical meaning.

Translation / question-quality findings:
- **ID 442, stem and option 2:** Stem is a fragment (“Basic inspection… How should I check?”). English option 2 invents “install a sound machine,” whereas Thai says start the engine and listen to the belt noise. Myanmar follows the incorrect English translation. This distractor is materially mistranslated and must be aligned to Thai.
- **ID 444, keyed option 3:** Myanmar says “the high and low criteria specified beside the tank” but does not clearly say the coolant level must lie between MIN and MAX marks. Make the range explicit.
- **ID 445, keyed option 2:** The instruction not to use the clutch while driving down a steep slope is preserved. Myanmar uses the literal “တောင်စောင်း” (mountain slope), which can be understood but is less precise than a steep downhill road; the question wording should be checked against the official manual.
- **ID 446, stem:** “Expired tires” is not quite the same as worn/aged tires. Cracks along the sidewall/edge can be a sign of aging or damage but do not alone define every expired tire; clarify whether the question concerns aged tires or visible tire damage. Myanmar is broadly aligned.
- **ID 447, keyed option 2:** Correctly says to use a tire-pressure gauge. Other Myanmar distractors are terse/awkward but not key-reversing.
- **ID 448, keyed option 3:** “Clutch released quickly causes jerking and engine stall” is preserved; Myanmar “လှုပ်ပြီး ပိတ်သွား” is vague. Prefer “ကားတုန်ခါပြီး အင်ဂျင်ရပ်သွားနိုင်သည်.”
- **ID 449, keyed option 4:** Meaning that not fully depressing the clutch can cause gear noise is preserved, but Myanmar wording “ဂီယာကို ဆူညံအောင်လုပ်ပါ” sounds like an instruction to make noise rather than an effect. Rephrase as “ဂီယာပြောင်းချိန်တွင် ဂီယာမှ ဆူညံသံထွက်နိုင်သည်.”
- **ID 450, keyed option 4:** Tire tread wearing faster from turning the steering wheel while stationary is conveyed, but Myanmar literal “တာယာနင်းခြင်း” is unnatural; use tire tread / tread wear terminology. Verify that the intended vehicle type and steering system match the source.
- **ID 451, keyed option 3:** Testing brakes after driving through floodwater is broadly consistent with common guidance, but the answer should not imply testing in a way that risks traffic; test gently at low speed only when safe. The stem and translations are broadly aligned.
- **ID 452, keyed option 4:** Stop in a safe place and call a mechanic when there is a burning smell, weak acceleration and poor A/C cooling is preserved. Myanmar is understandable; the symptoms are a warning to stop safely rather than continue driving.
- **ID 454, stem:** English and Myanmar awkwardly ask what color the dashboard warning lights are, then add that the color should not appear while driving. The intended question is likely which warning-light color indicates a serious fault; rewrite only after checking the source.
- **ID 455, keyed option 2:** Checking the windshield wipers before rainy-season driving is preserved. Myanmar “လေကာမှန် wiper” is understandable but should use consistent windshield-wiper terminology.

Broadly aligned in this sample: ID 441 use the specified level for distilled water where the battery is serviceable; ID 443 use distilled water where required; ID 444 keep coolant between the marked limits; ID 447 use a pressure gauge; ID 451 check the brakes after water exposure in a safe way; ID 452 stop safely and call a mechanic for abnormal symptoms; ID 455 check the wipers before rainy-season driving. These observations do not certify all answer keys.

Source-generation / terminology notes:
- Standardize Myanmar automotive terms for battery terminals, engine belt, clutch, tire tread, coolant reservoir, windshield wiper and warning indicator; avoid leaving English words such as “Clutch” where a consistent Burmese term can be provided.
- No images were required or audited in this batch.
- Do not patch generated JSON alone; reconcile source/compiler/cache provenance before changing source text or answer keys.

**Batch result:** IDs 441–455 reviewed in the vehicle-maintenance bank. Findings added to audit notes only; no question JSON, answer keys, images, runtime files, main branch, or deployment changed.


## Vehicle-maintenance bank — IDs 456–470

Review scope: compared Thai source, English and Myanmar stems/options, and existing `isCorrect` markers. Safety-critical or source-dependent answer-key concerns are recorded for later verification; this pass does not change questions.

- **ID 456, keyed option 3 — safety-critical answer-key concern:** A sudden hard brake in a non-ABS vehicle can lock wheels and cause a skid/loss of steering control, but “the car will spin” is not a reliable inevitable outcome. The English and Myanmar options translate the Thai key, yet the keyed outcome is too deterministic and could teach the wrong expectation. Verify against the originating official question/source before changing the key; the practical safety guidance should emphasize avoiding abrupt braking and maintaining control.
- **ID 457, keyed option 4:** The Myanmar symptom description is understandable. However, “steering becomes heavy and the car tilts” is not universal for every tire blowout; symptoms depend on which tire fails and circumstances. Treat as a simplified exam answer, not definitive diagnostic advice.
- **ID 458, keyed option 3:** Keyed advice to reduce speed and pull over is directionally safe, but add the condition “when safe” and do not attempt to close the hood while moving. Myanmar option 1 mistranslates “swerve/pull the car to the roadside” as pushing the car onto the roadside; rewrite the distractor accurately if source edits are later approved.
- **ID 459, keyed option 2:** Myanmar wording is awkward (“pull the belt quickly, then the belt must be locked”). A sharp tug can be one retractor-lock check, but it is not a complete seat-belt inspection. Clarify that this is a quick function check and check the belt/buckle/retractor per vehicle guidance.
- **ID 460 — critical stem contradiction / translation reversal:** Thai asks about shifting into reverse before the vehicle has fully stopped. English says “while the car is still stationary,” which means it has stopped and contradicts the Thai. Myanmar likewise says “while the car is parked/stopped,” also reversing the intended condition. The keyed answer about transmission wear is associated with the Thai meaning, so do not change the key based on the current English/Myanmar wording; correct the stem translations after source verification.
- **ID 461, keyed option 2:** The sequence is overly prescriptive and may not fit every vehicle (manual vs automatic, push-button start, interlocks, and manufacturer procedures). Myanmar “လက်ဘရိတ်ကိုတပ်ပါ” and “ကလစ်ကိုလှမ်းဆွဲပါ” are unnatural. Prefer neutral wording such as apply the parking brake, select the manufacturer-required safe gear/position, and follow the owner’s manual. Verify the intended vehicle type before revising the keyed sequence.
- **ID 462, keyed option 4:** The Myanmar translation faithfully repeats the English “protective film,” but that phrase is misleading. Fresh rain can mix with oil, dust and road residue and reduce tire grip; do not imply the water film is protective. Review the source wording and explain reduced traction more accurately.
- **ID 463, keyed option 2:** Brake test after moving a few metres is plausible only in a safe, clear area at very low speed. Add this condition if the question is revised; the current stem does not mention traffic or site safety.
- **ID 464, keyed option 3:** The checklist translation is broadly aligned. Standardize “lubricating oil” as engine oil if that is what the Thai source intends; “ချောဆီ” is broader than the likely intended fluid.
- **ID 465, keyed option 2 — Myanmar instruction unclear:** The answer intends to dry wet brakes by driving slowly and applying/releasing the brakes gently several times, but Myanmar says to “drive the brake lightly,” which is not natural or precise. Rephrase as gently applying and releasing the brake pedal several times while moving slowly, only where the road is clear and it is safe to do so.
- **ID 466, keyed option 1 — important safety qualifier:** Stopping safely and letting the engine cool is correct in principle. Explicitly warn not to open a hot radiator/coolant cap or pour water onto a hot engine because pressurized coolant can cause severe burns; the current wrong options could otherwise be read as routine alternatives without an explanation.
- **ID 467, keyed option 3:** Low front-tire pressure can contribute to abnormal tire wear and increased fuel consumption, but the stem/answer are simplified and do not state that the effects depend on the degree of underinflation and vehicle conditions. Myanmar is understandable; improve English grammar (“low front-tire pressure”).
- **ID 468, keyed option 2:** Checking tire pressure when tires are cold is aligned with standard guidance. Myanmar is clear.
- **ID 469, keyed option 3 — answer-key/source verification required:** “Wash with warm water and apply grease” may be an oversimplified or incomplete procedure for battery-terminal corrosion; the appropriate cleaning method depends on the type of residue and battery/vehicle instructions. The phrase “acid stains” is also imprecise. Verify the originating source and safe battery-cleaning procedure before treating this as authoritative.
- **ID 470, keyed option 1:** Filling the coolant reservoir between the minimum and maximum marks is broadly aligned with public Thai vehicle-readiness guidance. Specify checking/filling only when the engine is cool and following the vehicle manual. Myanmar is broadly aligned.

Source cross-checks: Thailand's public-relations guidance says the coolant reservoir should be at the specified level and not too low or overfilled; the Department of Disaster Prevention and Mitigation's vehicle checklist calls for checking tire condition/pressure, brakes, coolant and wipers. Bridgestone Thailand's tire-blowout guidance advises holding the steering wheel firmly, avoiding sudden braking, allowing speed to fall and pulling over safely. Sources: https://www.prd.go.th/th/content/category/detail/id/9/iid/244275 ; https://www.thailand.go.th/public/issue-focus-detail/------7-?hl=th ; https://www.bridgestone.co.th/th/tire-clinic/drivers-essential/cause-of-tire-blowout

**Batch result:** IDs 456–470 reviewed. No question JSON, answer keys, images, runtime files, main branch, or deployment changed. IDs 456, 460, 462, 465 and 469 are higher-priority follow-up items; IDs 458, 459, 461, 463 and 466 need safety/wording refinement. No images were required or audited in this batch.


## Vehicle-maintenance bank — IDs 471–485

Review scope: compared Thai source, English and Myanmar stems/options, and existing `isCorrect` markers. Findings are audit-only; safety-critical answer-key questions are not changed without checking the originating source.

- **ID 471, keyed option 1:** Correct principle: use the fuel grade/octane required or permitted by the vehicle manufacturer. Myanmar leaves “octane” in English and uses “ဓာတ်ငွေ့” (gas/gas vapour) where “လောင်စာဆီ/ဓာတ်ဆီ” is intended; revise to natural fuel terminology. Avoid implying that a higher octane grade always prevents damage or improves performance.
- **ID 472 — stem and technical wording issue:** Thai asks why the coolant reservoir should not be filled completely. English is vague (“Why shouldn't the radiator tank be filled with water?”), and Myanmar duplicates “ရေတိုင်ကီ” and asks why water should not be added at all. The intended concept is leaving expansion space and observing MIN/MAX marks, not avoiding coolant altogether. Rewrite stem and keyed answer with reference to the reservoir’s marked range and vehicle manual.
- **ID 473:** English “After leaving the vehicle approximately 3 to 4 meters” and Myanmar “မီတာမှ 4 မီတာခန့်အကွာမှထွက်ခွာ” are grammatically broken and obscure that the vehicle has moved forward about 3–4 metres. Keyed brake-system test should be performed only in a safe, clear area at very low speed.
- **ID 474 — term mismatch:** Thai “ยาง” in this context means a vehicle tire, but English and Myanmar translate it as “rubber” (raw material). Rephrase as “What is the function of a tire?” / “တာယာ၏ အဓိကလုပ်ဆောင်ချက်က ဘာလဲ။” The keyed traction answer then makes sense.
- **ID 475, keyed option 1:** Low engine-oil level can accelerate engine wear and may cause serious damage. Myanmar is broadly accurate; English distractor “Powerful engine, easy to start” is awkward and should be corrected if the source is later revised.
- **ID 476, keyed option 2:** If the vehicle pulls to one side during braking, the braking system should be inspected promptly; if it happens while driving, slow and stop safely rather than continuing to drive to a workshop. Myanmar is understandable but “ဘရိတ်ကို အုပ်” is less natural than “ဘရိတ်နင်း.”
- **ID 477, keyed option 1:** Anticipating stops and braking smoothly is broadly sound for reducing unnecessary brake wear. Myanmar is aligned. Do not let the phrasing suggest estimating distance alone is enough; maintain safe following distance.
- **ID 478, keyed option 3:** Checking coolant before use is broadly appropriate, but “water in the radiator” should be standardized to coolant/cooling-system level as appropriate to the vehicle. Check only when cool and follow the manual; do not open a hot pressurized cap.
- **ID 479, keyed option 2:** Following the vehicle manual for tire inflation is correct. Ideally specify the manufacturer’s recommended pressure (usually on the vehicle placard/manual) and checking when tires are cold. Myanmar is aligned.
- **ID 480, keyed option 2 — diagnostic limitation:** A weak horn can be a rough clue of low battery power, but horn sound alone is not a reliable battery health test. Label this as a simple preliminary check rather than a definitive test; a proper battery test is needed if a fault is suspected. Myanmar is wordy and unnatural.
- **ID 481 — Myanmar stem polarity is wrong:** English asks which equipment does *not* help braking efficiency; Myanmar says “မည်သည့်ကိရိယာကမှ မကူညီနိုင်ပါ” (“no equipment can help”), changing the question’s meaning. The keyed steering-wheel option is plausible relative to the listed alternatives, but the question’s broad claim that suspension, gears and tires “increase brake efficiency” needs source/technical review.
- **ID 482 — answer-key ambiguity / terminology:** The keyed option says not to fill the coolant reservoir with groundwater, which is reasonable; however, the distractor “always fill engine oil to the top level” is ambiguous because topping up to the upper dipstick mark can be correct, while overfilling is not. “Distilled water in the battery” applies only to serviceable flooded batteries that require it, not sealed maintenance-free batteries. The stem may have more than one questionable option depending on interpretation; verify the source and intended vehicle/battery type before changing the key.
- **ID 483 — safety-critical incomplete keyed response:** Smoke from the engine compartment requires stopping at a safe place as soon as possible, switching off the engine, getting occupants away if fire is suspected, and calling emergency assistance as appropriate. “Stay calm and drive to the roadside” is incomplete unless it means only moving the minimum distance necessary to reach a safe stopping place. Myanmar’s “လမ်းဘေးကို မောင်းပါ” is vague; clarify stop safely, not continue driving.
- **ID 484 — technical overstatement:** A tire valve cap primarily keeps dirt/moisture out and may provide a secondary seal; it does not guarantee prevention of air leakage. English and Myanmar repeat the overclaim “prevents air leaks.” Reword the keyed benefit to protect the valve from dirt and contamination, after source verification.
- **ID 485, keyed option 2:** Overinflation can contribute to faster wear in the center of the tread, but pressure should be set to the vehicle manufacturer’s recommendation, not guessed or set from the tire sidewall maximum. Myanmar phrase “တာယာ၏အလယ်ဗဟိုနင်း” is unnatural; use “တာယာနင်းသား အလယ်ပိုင်း ပိုမိုမြန်ဆန်စွာ စားသွားနိုင်သည်.”

Source cross-checks: Thailand's public-relations vehicle-readiness guidance recommends keeping the coolant reservoir within its specified range, not too low or overfilled, and checking tire pressure, brakes and other systems. The Department of Disaster Prevention and Mitigation checklist similarly highlights tire condition/pressure, brakes and sufficient coolant. Sources: https://www.prd.go.th/th/content/category/detail/id/9/iid/244275 ; https://www.thailand.go.th/public/issue-focus-detail/------7-?hl=th

**Batch result:** IDs 471–485 reviewed. No question JSON, answer keys, images, runtime files, main branch, or deployment changed. Highest-priority follow-up: IDs 472, 473, 474, 481, 482, 483 and 484. No images were required or audited in this batch.


## Vehicle-maintenance bank — IDs 486–500

Review scope: compared Thai source, English and Myanmar stems/options, and existing `isCorrect` markers. Image-dependent questions are not certified from text alone.

- **ID 486, keyed option 3 — checking procedure needs qualification:** Engine-oil level should be checked with the vehicle on level ground, engine off, and after waiting the interval specified by the manufacturer; “while the engine is cool” alone is not a universal instruction for every model. Myanmar leaves “oil Level” in English. Clarify the full procedure from the owner's manual rather than teaching a universal cold-engine-only rule.
- **ID 487, keyed option 3:** Insufficient coolant can cause abnormal engine temperature/overheating. Myanmar is broadly accurate; “coolant” should be translated consistently as engine coolant rather than left as an English word when practical.
- **ID 488, keyed option 3:** Distilled water in a battery being low is not generally a direct cause of engine overheating, so the keyed distinction is plausible. Myanmar/English option wording is broken (“distilled water, dry battery”); clarify that this refers only to a serviceable battery requiring electrolyte maintenance, not a sealed battery.
- **ID 489, keyed option 2:** Using a suitable low gear downhill provides engine braking and helps control speed; it should not be described as a substitute for normal brakes. Myanmar “ကား၏လက်ကျန်” mistranslates vehicle stability/balance in option 3, while the keyed answer is understandable.
- **ID 490, keyed option 2:** A temperature gauge at H indicates an abnormally high temperature and possible cooling-system problem. Myanmar is aligned; the English should avoid implying that every instance conclusively proves one specific component has failed.
- **ID 491, keyed option 2:** Radiator/cooling system function is conveyed. English option “Make the car run faster” and Myanmar equivalent are awkward but do not change the key.
- **ID 492, keyed option 2:** Underinflation can contribute to wear at both shoulders of a tire. Myanmar “တာယာနှစ်ဖက်လုံးရှိ နင်းအား” is unnatural; use a phrase meaning the tire tread’s two outer edges/shoulders wear. Actual wear patterns can have multiple causes.
- **ID 493 — answer-key frequency claim needs verification:** “Every time before use” is keyed as the safest tire-pressure-check frequency. Checking before every single use is not a universal manufacturer requirement and is impractical as general advice; established guidance commonly recommends checking regularly (e.g., monthly and before long trips), with tires cold, and following the vehicle manual. Verify the original exam source before retaining this as the uniquely safest answer. Myanmar wording is clear but reproduces the absolute frequency.
- **ID 494, keyed option 3 — safety-critical:** Correct underlying hazard: a hot pressurized cooling system can eject scalding coolant/steam. Myanmar “ရေနွေးက တက်လာနိုင်တယ်” is vague; specify hot coolant/steam may spray out and cause severe burns. Never open the cap while hot.
- **ID 495 — answer-key technical concern:** The key says a defective braking system causes tire-tread wear. Brake defects can contribute to uneven wear in some cases, but alignment, suspension, tire pressure and driving conditions are common factors; the question may be underspecified and the keyed answer should be checked against the original source. Myanmar stem “တာယာနင်းမှု” is not natural for tire tread wear.
- **ID 496, keyed option 2:** Excessive vehicle load can increase fuel consumption. Myanmar is broadly aligned, though English stem “affects fuel consumption” is less precise than asking which condition increases it.
- **ID 497 — image-dependent, not visually audited:** The question asks what the picture shows and keys “engine overheating,” but the actual image was not available in this text-only audit output. Do not certify the answer key or image match until the asset is inspected directly.
- **ID 498 — Myanmar reverses the negative:** Thai and English ask which item is *not* a cause of failure to start. Myanmar says “ကားစမတက်ရတဲ့ အကြောင်းအရင်းက ဘယ်ဟာလဲ” (“which is a cause”), dropping the negative. The keyed “loose/slack belt” is also ambiguous: a loose belt may cause charging/accessory problems, but not all belts prevent starting. Verify the exact belt type and source. Distractor Myanmar translations are also poor (“ခါးပတ်က မလျော့ဘူး” means the belt is not loose; “လောင်စာဆီထဲက” is incomplete).
- **ID 499, keyed option 2:** Harsh acceleration/braking can increase fuel use, but the stem asks for the “greatest” consumption without enough context to guarantee one universal answer. Myanmar option 4 (“အရှိန်” alone) is incomplete. Rephrase the stem/options if the source is verified.
- **ID 500, keyed option 3 — safety issue:** Replacing a leaking fuel/oil line may be the needed repair, but the immediate advice should be to stop safely, switch off the engine, avoid ignition sources, and arrange professional repair rather than continue driving. Thai says “ท่อน้ำมัน” (fuel/oil line depending on context), while English says “oil pipe” and Myanmar “ဆီပိုက်,” leaving the fluid ambiguous. Confirm whether the source means fuel line or engine-oil line before revising.

Source cross-checks: Thai public guidance recommends checking coolant levels and tire condition/pressure as part of vehicle readiness; tire pressure should be set to the vehicle maker's guidance. The earlier source set for vehicle checks is: https://www.prd.go.th/th/content/category/detail/id/9/iid/244275 ; https://www.thailand.go.th/public/issue-focus-detail/------7-?hl=th

**Batch result:** IDs 486–500 reviewed. No question JSON, answer keys, images, runtime files, main branch, or deployment changed. High-priority follow-up: IDs 493, 495, 497, 498 and 500. ID 497 still requires direct image inspection.
