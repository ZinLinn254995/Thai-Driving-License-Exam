# Traffic-law audit addendum — Q166–Q170

Branch: `audit/myanmar-question-verification` only  
Scope: sequential review of Thai stems, English/Myanmar alignment, keyed answers, images and credible legal/medical guidance. Documentation only: no question data, answer keys, translations or images changed.

## Q166 — Vehicle A at a four-way intersection

- Thai/English/Myanmar stems align: what should vehicle A do based on the image.
- Image `public/exam_images/law/1000000000347.webp` was fetched from this branch and visually inspected. Red vehicle A approaches from the bottom; blue vehicle B is on A's left; purple vehicle C is on A's right.
- Road Traffic Act section 71(2) says that when vehicles arrive simultaneously and no vehicle is already in the intersection, a driver gives way to the vehicle on their left, except where a major road/minor road priority applies: https://lawplayer.com/th/article/ocs-%E0%B8%880003-1B-0001/m-71
- The keyed choice “stop to let vehicles on the left pass first” is consistent with that rule, assuming simultaneous arrival and no priority-road signs. The drawing alone does not establish road priority signs or exact arrival timing.
- **Status: Answer supported under stated assumptions. No data changed.**

## Q167 — Red and yellow cars at an intersection with stop control

- Thai asks which car has priority when red and yellow want to travel in the same direction and there is a stop signal in both directions. English and Myanmar largely match that wording.
- Image `public/exam_images/law/1000000000359.webp` was fetched from this branch and visually inspected. The red car approaches a clearly visible STOP sign; the yellow car's approach does not visibly show a matching STOP sign.
- Section 22 requires a driver to stop at a red “STOP” sign; section 71 also requires yielding according to intersection priority rules: https://lawplayer.com/th/act/ocs-%E0%B8%880003-1B-0001
- As drawn, the question says both directions have stop control, but the illustration appears to show a stop sign only for the red car. If the yellow car is on the priority road, the keyed answer “red car” is not supported by the drawing; if both directions truly have stop control, additional right-of-way details are missing.
- **Status: MANUAL REVIEW REQUIRED — likely stem/image inconsistency. Do not change the key until the original source/manual is checked.**

## Q168 — Coronary artery disease and driving

- Thai asks whether a patient with coronary artery disease should drive; English and Myanmar align. Key says “should avoid.”
- Medical fitness depends on symptoms and severity. A driving-related cardiovascular fact sheet notes that acute coronary symptoms and cardiac conditions that can cause fainting/loss of consciousness may impair driving; stable and unstable conditions should not be treated identically: https://rosap.ntl.bts.gov/view/dot/68394/dot_68394_DS1.pdf
- Thailand's DLT requires a medical certificate for licence applications/renewals, but the general public-facing guidance found does not establish a blanket rule that every person with coronary artery disease must avoid all driving: https://legal.dlt.go.th/gen2/article/538
- **Status: MANUAL / medical-source review required. “Should avoid” may be a conservative safety answer, but the disease label alone is too broad to verify a universal rule. No data changed.**

## Q169 — Which image shows an incorrect stopping position?

- Thai asks which picture shows an incorrect way to stop a vehicle; English and Myanmar align. The keyed option is option 2.
- All four option images were fetched from this branch and visually inspected:
  - Option 1 (`1000000001474.webp`): car close to the left edge of the road.
  - Option 2 (`1000000001475.webp`): car stopped inside a yellow cross-hatched box junction.
  - Option 3 (`1000000001473.webp`): car stopped on a pedestrian crossing.
  - Option 4 (`1000000001476.webp`): cars in marked parking bays.
- Road Traffic Act section 55 prohibits stopping at a junction, on a pedestrian crossing/footpath, and in other specified locations. The police-hosted English translation lists the relevant prohibited stopping conditions: https://wangnamkhiao.nakhonratchasima.police.go.th/wp-content/uploads/2024/03/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%81-%E0%B8%9E.%E0%B8%A8.-%E0%B9%92%E0%B5%95%E0%B9%92%E0%B9%92eng.pdf
- Both option 2 (yellow box junction) and option 3 (pedestrian crossing) appear to depict prohibited stopping positions. Thus the keyed option 2 may be invalid as a single-answer question unless the original teaching material defines a distinction not apparent in these images.
- **Status: MANUAL REVIEW REQUIRED — multiple apparently incorrect images (options 2 and 3). Do not change the key or images without approval.**

## Q170 — Irregular heartbeat and driving

- Thai asks whether a person with an irregular heartbeat can drive; English and Myanmar align. Key says yes if there are no symptoms affecting vehicle control.
- A driving-related cardiovascular fact sheet notes that arrhythmias associated with presyncope/syncope or loss of consciousness can make driving unsafe, and recommends clinical assessment and controlling symptoms before driving: https://rosap.ntl.bts.gov/view/dot/68394/dot_68394_DS1.pdf
- The keyed answer's symptom-based caveat is more nuanced than a blanket prohibition, but “no symptoms affecting vehicle control” alone may not cover every risk (for example, intermittent episodes or medical advice/restrictions). The source reviewed is not Thai licensing law, so it cannot by itself certify the Thai exam's intended legal answer.
- **Status: MANUAL / medical-source review required. Key is plausible as a general safety principle, but not verified as a complete Thai licensing rule. No data changed.**

## Summary for manual review

- **Q167 — high priority:** image visibly shows a STOP sign for the red car, but not for the yellow car, conflicting with the stem's “both directions” wording.
- **Q168 — medical wording:** avoid treating all coronary artery disease as the same; verify the intended DLT/medical curriculum source.
- **Q169 — high priority:** both option 2 (yellow box junction) and option 3 (pedestrian crossing) appear to show prohibited stopping; single-answer key may be ambiguous.
- **Q170 — medical wording:** arrhythmia risk depends on symptoms, episode risk and clinical assessment; the broad quiz answer is not verified as a Thai legal rule.
- Q166 is supported only with the usual simultaneous-arrival/no-priority-road assumptions.
- **No quiz content, answer keys, Myanmar translations or images were changed. Main was not edited and no deployment was performed.**
