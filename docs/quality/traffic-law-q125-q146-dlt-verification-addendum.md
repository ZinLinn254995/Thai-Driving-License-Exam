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
- No authoritative source establishing the intended procedure and the 15-day period was confirmed in this pass.
- Status: **Uncertain — source and legal procedure still required.**

### Q129 — parking distance
- Current keyed answer is no more than 25 cm from the curb.
- Existing audit note associates this with Land Traffic Act B.E. 2522, section 54, but the cited page is not an official government publication: https://lawplayer.com/th/act/pythainlp_f36542870dba846f
- Status: **Prior supporting reference exists; primary official legal text still preferred for final verification.**

### Q132 — “most common cause” of accidents
- Thai and English stems make a broad superlative claim; speeding is keyed as the answer.
- No dataset, geography, time period, or official statistical source was verified in this pass.
- Status: **Unverified statistical generalization.**

### Q134 — drink-driving penalty
- The stem asks the penalty when alcohol exceeds the legal limit; the keyed option gives imprisonment up to one year or a 5,000–20,000 baht fine, or both.
- The stem does not state first offence, repeat offence, injury/death, or other circumstances. This pass did not establish the current primary statutory text for all relevant scenarios.
- Status: **Penalty context incomplete; current statutory applicability still needs primary-source verification.**

### Q146 — positioning before a left turn
- Existing audit note links the 30 m answer to section 51, while acknowledging that the stem is a simplified teaching summary.
- The existing cited law page is not an official government publication: https://lawplayer.com/th/act/pythainlp_f36542870dba846f
- Status: **Prior supporting reference exists; primary official legal text and exact applicability remain to be confirmed.**

## Overall result
- Official DLT source directly supports the **over 5 years** motorcycle and **over 7 years** listed private-car inspection thresholds. The quiz stems' “ครบกี่ปี” wording is imprecise at the exact threshold.
- Q127 has a clear question/measurement-unit mismatch, but its correct replacement is not established.
- Q125, Q132, Q134, Q129, and Q146 remain open as described above.
- This addendum records findings only. No quiz content or answer key was changed.
