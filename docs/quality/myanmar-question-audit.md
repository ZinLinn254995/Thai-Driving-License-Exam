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
