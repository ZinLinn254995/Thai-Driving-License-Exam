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
