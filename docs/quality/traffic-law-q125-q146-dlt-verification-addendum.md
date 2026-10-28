# Traffic-law audit addendum — DLT source checks (Q125–Q146)

Branch: `audit/myanmar-question-verification` only  
Scope: documentation-only evidence follow-up. No question data, answer keys, translations, or images changed.

## Evidence checked

### Q136 — motorcycle inspection threshold
- Current Thai stem: `รถจักรยานยนต์ที่มีอายุครบกี่ปีต้องนำไปตรวจสภาพรถก่อนเสียภาษีประจำปี`
- English: “How old must a motorcycle be before it requires an inspection prior to paying annual tax?”
- Myanmar: asks how many years old a motorcycle must be before inspection prior to annual tax.
- Keyed answer: 5 years.
- Official DLT e-service states private motorcycles with service age **over 5 years counted from first registration** must pass inspection before annual tax payment: https://eservice.dlt.go.th/esvapp/esv/ebk/condition/index.jsf
- Finding: the threshold value is supported for the relevant private motorcycle category, but the stem's Thai word `ครบ` (“reached/completed”) can be read as exactly 5 years, whereas DLT's published rule says **over 5 years**. The question wording is ambiguous at the boundary.
- Status: **Answer value supported with wording caveat; do not edit without approval.**

### Q142 — car inspection threshold
- Current Thai stem: `รถยนต์ที่มีอายุครบกี่ปีต้องนำไปตรวจสภาพรถก่อนเสียภาษีประจำปี`
- English asks how old a vehicle must be before mandatory inspection prior to annual tax payment.
- Myanmar asks the age threshold for inspection before annual tax.
- Keyed answer: 7 years.
- Official DLT e-service states applicable private car categories (รย.1, รย.2, รย.3) with service age **over 7 years counted from first registration** must pass inspection before annual tax payment: https://eservice.dlt.go.th/esvapp/esv/ebk/condition/index.jsf
- Finding: the 7-year threshold is supported for those listed vehicle categories, but `ครบกี่ปี` can imply exactly 7 years instead of **over 7 years**. “Vehicle” in the English stem is also broader than the specific DLT categories.
- Status: **Answer value supported with wording/category caveat; do not edit without approval.**

### Q127 — breath alcohol wording and answer units
- Thai stem explicitly asks about alcohol measured in exhaled breath.
- The answer choices use `มิลลิกรัมเปอร์เซ็น` / `mg%`, a blood-alcohol concentration style unit, and the keyed answer is 50 mg%.
- DLT legal material located during this pass mentions a 50 mg% blood-alcohol threshold in a draft legal document, but that does not resolve the stem/options unit mismatch or establish the applicable breath-test conversion for this question: https://legal.dlt.go.th/repository/attachments/486_2021083002.pdf
- Status: **Confirmed internal wording/unit mismatch; correct threshold and intended measurement method remain unverified.** Do not change the key or wording yet.

### Q125 — `การย้ายรถ`
- Current Thai wording literally refers to moving/relocating a vehicle and notifying the registrar within how many days.
- English “moving/transferring” and Myanmar “ယာဉ်ပြောင်းရွှေ့” can conflate relocation with ownership transfer.
- New official-source check: a DLT-hosted copy of the Land Transport Act B.E. 2522 states in section 82 that the transferor and transferee of a registered vehicle must notify the registrar within 15 days **from the date of transfer**: https://gps.dlt.go.th/wp-content/uploads/2025/01/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%87-%E0%B8%9E.%E0%B8%A8.-2522.pdf
- That 15-day rule is for **ownership transfer** (`วันโอน`), not enough to prove the current stem's `การย้ายรถ` (“moving/relocating a vehicle”) wording. The Thai stem may be using the wrong procedure term, while English “transferring” risks implying ownership transfer.
- Status: **Evidence narrows the issue but does not validate the current question as written.** Keep 15 days as a possible answer only for an ownership-transfer question; do not change stem, translation, or key without approval.

### Q129 — parking distance
- Current keyed answer is no more than 25 cm from the curb.
- Primary-source follow-up: a copy of the Road Traffic Act B.E. 2522 hosted on a Royal Thai Police metropolitan-station website reproduces section 54, requiring the left side of the vehicle to be parallel and close to the curb/road shoulder at a distance **not exceeding 25 centimetres** (subject to the statutory exceptions in that section): https://chanasongkhram.metro.police.go.th/pdf/%E0%B8%81%E0%B8%A1/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4-%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%ก-2522.pdf
- Finding: **the 25 cm value is supported by the text of section 54**. The question's short wording omits the left-side/parallel positioning and exceptions, but its numeric answer matches the cited law.
- Status: **Answer value supported; no content change made.**

### Q132 — “most common cause” of accidents
- Thai and English stems make a broad superlative claim; speeding is keyed as the answer.
- Official ThaiHealth Foundation (สสส.) reporting on Thailand's 2024 Songkran “seven dangerous days” says speeding accounted for 41.49% of recorded crashes, ahead of drink-driving (22.7%) and cutting in too closely (18.1%): https://www.thaihealth.or.th/%E0%B8%A3%E0%B8%93%E0%B8%A3%E0%B8%87%E0%B8%84%E0%B9%8C-%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%82%E0%B8%B1%E0%B8%9A-%E0%B8%AD%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%86%E0%B8%B2%E0%B8%95%E0%B8%81%E0%B8%A3/
- ThaiHealth reporting on the New Year 2025 holiday period also identifies speeding as the largest reported cause share (38.90%), followed by drink-driving (23.16%) and cutting in too closely (17.96%): https://www.thaihealth.or.th/p/0pkAS2pWR
- Finding: these sources support speeding as the leading **reported cause during the specified holiday monitoring periods**, but do not prove that it is the single most common cause for all Thai road crashes across all periods and datasets. The quiz stem is broader than the evidence.
- Status: **Supported in defined holiday-period statistics; overgeneralized as written.** Do not change the stem or answer key without approval.

### Q134 — drink-driving penalty
- The stem asks the penalty when alcohol exceeds the legal limit; the keyed option gives imprisonment up to one year or a 5,000–20,000 baht fine, or both.
- The stem does not state first offence, repeat offence, injury/death, or other circumstances. A Royal Thai Police-hosted explanation of the 2022 Road Traffic Act amendment describes first-offence penalties as imprisonment up to 1 year and/or a 5,000–20,000 baht fine, while repeat offending within two years has a higher penalty: https://ratchasan.chachoengsao.police.go.th/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9A/
- This supports the keyed penalty as a **first-offence summary**, but the question does not say first offence and does not clarify aggravated circumstances (such as causing injury or death). The cited page is a police-hosted explanation, not the consolidated statutory text itself.
- Status: **Partially corroborated; question context is incomplete and primary statutory wording still needs checking.** Do not change without approval.

### Q146 — positioning before a left turn
- Section 51 of the Road Traffic Act is commonly associated with giving a turn signal in advance; the police-hosted Act copy found in this pass did not establish that a driver must move into the left lane specifically 30 metres before turning left. The 30 m figure may have been conflated with the separate requirement to signal before turning.
- The current question asks about **lane positioning**, not clearly about signalling. The current evidence does not establish that its exact claim is supported by section 51.
- Status: **Potential legal-concept mismatch; exact 30 m lane-positioning requirement remains unverified.** Do not change the answer key without further primary-source checking.

## Overall result
- Official DLT source directly supports the **over 5 years** motorcycle and **over 7 years** listed private-car inspection thresholds. The quiz stems' “ครบกี่ปี” wording is imprecise at the exact threshold.
- Q127 has a clear question/measurement-unit mismatch, but its correct replacement is not established.
- Q125: an official DLT-hosted law supports a 15-day notice period for **ownership transfer**, but not the current “moving/relocating” wording; this is a likely source/terminology mismatch requiring further tracing.
- Q129: section 54 text hosted by a Royal Thai Police station supports the 25 cm answer value.
- Q134: the first-offence penalty is corroborated by a police-hosted explanation, but the question lacks offence context and needs statutory-text checking.
- Q146: possible confusion between 30 m advance signalling and lane positioning; exact claim remains unverified.
- Q132: speeding is the leading reported cause in the specific Songkran 2024 and New Year 2025 holiday statistics found, but the quiz's unqualified “most common” claim is broader than those sources support.
- This addendum records findings only. No quiz content or answer key was changed.
