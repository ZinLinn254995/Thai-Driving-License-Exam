# Traffic-law audit addendum — traffic-law source checks (Q125–Q154)

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
- Thai stem asks about alcohol detected by measuring exhaled breath, while the options express the result as `มิลลิกรัมเปอร์เซ็น` / `mg%` (blood-alcohol-equivalent units); the keyed answer is 50 mg%.
- A police-hosted copy of the ministerial regulation on testing drivers for alcohol states that the breath-test device reads the blood-alcohol level in mg%, and that breath results are converted using a coefficient of 2,000. It also states the general blood-test threshold is **over 50 mg%**, with breath results compared against that blood-alcohol standard: https://sichon.nakhonsithammarat.police.go.th/wp-content/uploads/2024/02/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3.pdf
- This means the `mg%` choices are not necessarily a technical unit error: the regulation reports a blood-alcohol-equivalent result from breath testing. However, the stem's phrasing “maximum permissible” and the answer “50 mg%” are imprecise because the general rule is **over 50 mg% is deemed intoxicated**, not “must not exceed 50” in a way that clarifies the boundary; special categories can have lower thresholds. The exact applicability to the source question's intended driver category should be checked.
- Status: **Measurement method clarified; wording/boundary and driver-category caveats remain.** Do not change the key or wording without approval.
- Next evidence needed: locate the currently effective consolidated ministerial rule / Royal Gazette publication and verify whether the source question intends a general private-driver threshold or a special driver category; preserve the question as-is until that scope is established.

### Q125 — `การย้ายรถ`
- Current Thai wording literally refers to moving/relocating a vehicle and notifying the registrar within how many days.
- English “moving/transferring” and Myanmar “ယာဉ်ပြောင်းရွှေ့” can conflate relocation with ownership transfer.
- Stronger DLT legal-source check: the DLT legal repository contains the Road Traffic Act B.E. 2522 text stating that when a vehicle is moved to another locality, the owner must notify the registrar within 15 days from the date of moving. This is distinct from the separate 15-day rule for registered-vehicle ownership transfer: https://legal.dlt.go.th/repository/attachments/428_41.pdf
- The DLT repository also contains the vehicle-registration/tax regulation with a dedicated “การย้ายรถ” (vehicle relocation/transfer to another locality) procedure, supporting that this is a recognized registration process rather than necessarily a sale/ownership transfer: https://legal.dlt.go.th/gen2/app/api/legal-download.php?file=article_20231019_151015_ca929310.pdf
- Finding: the 15-day answer is supported for the Thai stem's intended meaning of moving a vehicle to another locality. The English `moving/transferring` remains ambiguous because “transferring a vehicle” can be read as ownership transfer; the Myanmar wording is broadly compatible with relocation but could be made more precise in a future approved translation pass.
- Status: **15-day answer supported; English wording ambiguity remains.** Do not change question data or translation without approval.

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
- The stem does not state first offence, repeat offence, injury/death, or other circumstances. The Road Traffic Act English text hosted by a Royal Thai Police station reproduces section 160 ter: a section 43(2) drink-driving offence carries imprisonment up to 1 year or a 5,000–20,000 baht fine, or both; where injury or death results, separate higher penalty ranges apply: https://chonburi.tourist.police.go.th/wp-content/uploads/2025/04/6.1-ROAD-TRAFFIC-ACT-B.E.25221979-1.pdf
- Thailand's Senate public information page also summarizes the standard section 160 ter penalty and higher penalties for injury/death and repeat offences: https://www.senate.go.th/view/386/News/Latest/248/TH-TH.html
- Finding: the keyed penalty is supported as the **standard/basic offence penalty**, but the question does not clarify repeat offence or aggravated circumstances (such as causing injury or death). The English PDF is a police-hosted translation, and the Senate page is an explanatory summary rather than the official consolidated Thai statutory text.
- Status: **Penalty value corroborated; question context caveat remains.** Do not change without approval.

### Q146 — positioning before a left turn
- Thai stem asks how many metres before a left turn the driver should be in the left-turn lane; keyed answer is **at least 30 metres**.
- The Road Traffic Act B.E. 2522, section 51(1)(ข), explicitly states that where the road is divided into lanes and a traffic sign permits a left turn, the driver must use the lane designated for left-turning vehicles at least 30 metres before reaching the turn. The same section separately addresses the leftmost bus-lane case: https://lawplayer.com/th/article/ocs-%E0%B8%880003-1B-0001/m-51
- A Royal Thai Police-hosted English translation likewise renders section 51 as requiring the left-turn lane at least 30 metres before the turning point where the stated lane/sign conditions apply: https://wangnamkhiao.nakhonratchasima.police.go.th/wp-content/uploads/2024/03/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%81-%E0%B8%9E.%E0%B8%A8.-%E0%B9%92%E0%B5%95%E0%B5%92%E0%B9%92eng.pdf
- Finding: the **30 m answer is supported** for the law's stated multi-lane/sign conditions. The quiz stem is simplified because it omits those conditions, so it may read as an unconditional rule for every left turn.
- Status: **Answer value supported; stem omits legal context.** No question data changed.


### Q147 — lights visible at 150 metres
- Thai stem asks how far a vehicle's front or rear lights must be visible to other vehicles; keyed answer is **150 metres**.
- Road Traffic Act B.E. 2522, section 11, states that when illumination is insufficient to see people, vehicles, or obstacles clearly within a distance of at least 150 metres, the driver must turn on the prescribed lights: https://laksong.metro.police.go.th/api-console/public/media/a46c4c2c695fe181be951770868789091.pdf
- Finding: the **150 m figure is supported**, but section 11 is specifically a visibility/insufficient-illumination trigger for turning on lights, not a general standalone requirement that headlights or taillights must always be visible to other vehicles at that distance. The quiz stem paraphrases the statute imprecisely.
- Status: **Numeric value supported; stem's framing needs caution.** No question data changed.

### Q148 — overtaking when visibility is below 60 metres
- Thai stem asks when fog, dust, rain, or smoke prevents seeing the road ahead within what distance; keyed answer is **60 metres**.
- Road Traffic Act B.E. 2522, section 46(3), prohibits overtaking when fog, rain, dust, or smoke makes it impossible to see the road ahead for 60 metres: https://lawplayer.com/th/article/ocs-%E0%B8%880003-1B-0001/m-46
- A Royal Thai Police-hosted English translation states the same 60-metre restriction in section 46(3): https://klangyai.udonthani.police.go.th/images/laws/laws_03_05-07.pdf
- Finding: **the 60 m answer is supported**. English “within what distance” is slightly awkward but the meaning matches the statutory visibility threshold; no Myanmar mismatch identified in this pass.
- Status: **Answer value supported.** No question data changed.


### Q149 — where overtaking is permitted
- Thai stem asks which area allows overtaking; keyed answer is a road surface with markings that permit overtaking.
- Road Traffic Act section 47 prohibits overtaking across the marked centre line or in areas marked as dangerous / requiring caution, with a narrow obstruction-related exception. The official-law text surfaced via the Council of State legal-data source is reproduced here: https://lawplayer.com/th/act/ocs-%E0%B8%880003-1B-0001/section/title-3.chapter-2
- Finding: the keyed choice is directionally consistent with obeying road markings, but the law does not mean that any marking itself grants permission; overtaking must also be safe and not prohibited by other rules (including section 46 restrictions).
- Status: **Likely supported, but wording simplifies the legal conditions.** No question data changed.

### Q150 — where the horn may be used
- Thai stem asks where a sound/horn signal may be used; options include government offices, public parks, schools, and hospitals. The key selects **public parks**.
- Road Traffic Act section 14 says the horn may be used only when necessary or to prevent an accident, and prolonged or excessive repeated sounding is prohibited: https://lawplayer.com/th/article/ocs-%E0%B8%880003-1B-0001/m-14
- The Act also specifically prohibits sounding the horn when entering a hospital or educational institution area, and using the horn to hurry other vehicles (section 43-related prohibitions as reproduced in the statute): https://arnon.site/law/act-traffic-2522?ch=19
- Finding: among the listed options, **public parks is the most plausible intended answer by exclusion**, but the stem misleadingly sounds as if the horn is generally permitted there. The general legal rule is necessity / accident prevention, not “horns are allowed in parks.”
- Status: **Answer plausible by exclusion; question wording is overbroad and should be logged for a future approved content review.** No question data changed.


### Q151 — private-car speed outside municipal areas
- Thai stem asks the maximum speed for a private car outside Bangkok, Pattaya, or municipal areas; keyed answer is **90 km/h**.
- The 2021 ministerial regulation on speed for driving on roadways sets a 90 km/h limit for “other vehicles” outside Bangkok, Pattaya, city/large-town municipalities, and communities under its general-road rule. But separate rules permit higher limits on designated divided highways with a median, and posted signs also matter: https://lawplayer.com/th/act/ocs-%E0%B8%970006-2B-0032
- The Office of the Council of State's official site lists the separate 2021 ministerial regulation for specified national/rural highways, where certain passenger cars can have higher limits: https://www.ocs.go.th/searchlaw/law-index/item/13786
- Finding: **90 km/h is supported as a general-road default outside the listed urban/community areas**, but the question's broad wording does not distinguish ordinary roads from designated highways or posted limits.
- Status: **Answer conditionally supported; road-type caveat needed.** No question data changed.

### Q152 — traffic officer permits a U-turn despite a sign
- Thai stem describes an intersection with a no-U-turn sign where a traffic officer expressly permits the U-turn; keyed answer says follow the officer's instruction.
- Road Traffic Act section 26 states that when the traffic officer controlling a road gives a different traffic signal for safety or convenience, drivers must follow that signal: https://www.royalthaipolice.go.th/downloads/laws/laws_03_05-07.pdf
- Finding: **the principle that a driver's action follows the controlling officer's instruction is supported**. The question's scenario depends on the officer actually authorizing that specific manoeuvre; it is not a general right to ignore signs independently.
- Status: **Answer supported with scenario caveat.** No question data changed.


### Q153 — rear cargo projection limit
- Thai stem is broad: “When carrying cargo, what must the driver comply with?” The keyed answer says a load may project no more than **2.50 metres beyond the rear**.
- Ministerial Regulation No. 4 (B.E. 2522) under the Road Traffic Act sets that 2.50 m limit for specified vehicles, including cars, trailers, school buses, trucks, and passenger-carrying vehicles. For other vehicle types listed in the same regulation, the permitted rear projection can be only **0.50 m**: https://lawplayer.com/th/act/ocs-%E0%B8%970006-2B-0034
- Road Traffic Act section 15 separately requires a red light at night or red flag by day on cargo extending beyond the vehicle body, visible at least 150 metres; that marking rule does not itself make 2.50 m permissible for every vehicle: https://deka.in.th/laws/%E0%B8%880003-1b-0001/15
- Finding: **2.50 m is supported only for the regulation's specified vehicle categories**, while the question gives no vehicle category. The keyed option may be intended for a car/truck, but as written the question overgeneralizes.
- Status: **Conditional answer; vehicle-category caveat required.** Do not change question data without approval.


### Q154 — driving slowly / slower than surrounding traffic
- Thai stem asks how a driver should behave when travelling at low speed; keyed answer is to drive close to the left edge of the road.
- Road Traffic Act section 35 states that a vehicle moving slowly, or slower than other vehicles travelling in the same direction, must be driven as close to the left edge as practicable. The Royal Thai Police-hosted English translation reproduces the same rule: https://royalthaipolice.go.th/downloads/laws/laws_03_05-07.pdf
- Finding: **the keyed answer is supported** by section 35. The stem is simplified but does not appear to change the intended rule.
- Status: **Answer supported.** No question data changed.

## Overall result
- Official DLT source directly supports the **over 5 years** motorcycle and **over 7 years** listed private-car inspection thresholds. The quiz stems' “ครบกี่ปี” wording is imprecise at the exact threshold.
- Q127: official police-hosted regulation clarifies that breath testing can report blood-alcohol-equivalent mg% using a conversion coefficient of 2,000; the original concern is now a wording/boundary/category caveat rather than a confirmed unit error.
- Q125: DLT legal sources support notifying the registrar within 15 days when moving a vehicle to another locality; the English “moving/transferring” remains ambiguous with ownership transfer.
- Q129: section 54 text hosted by a Royal Thai Police station supports the 25 cm answer value.
- Q134: the basic drink-driving penalty is corroborated by the Act's section 160 ter in a police-hosted English translation and by a Senate explanatory page; repeat/aggravated offence context remains absent from the stem.
- Q146: possible confusion between 30 m advance signalling and lane positioning; exact claim remains unverified.
- Q132: speeding is the leading reported cause in the specific Songkran 2024 and New Year 2025 holiday statistics found, but the quiz's unqualified “most common” claim is broader than those sources support.
- Q147: section 11 supports the 150 m figure as a visibility threshold for turning on lights; the question's framing is broader than the statute's exact wording.\n- Q148: section 46(3) supports the 60 m overtaking restriction under fog/rain/dust/smoke conditions.
- Q149: answer is directionally consistent with road markings, but safe overtaking and all other restrictions still apply.
- Q150: public parks is the likely intended choice by exclusion; section 14 does not grant blanket permission to sound the horn in parks.
- Q151: 90 km/h is supported as a general-road default outside listed urban/community areas, but designated highways and posted signs can have different limits.
- Q152: section 26 supports following the controlling traffic officer's different signal, provided the officer actually authorizes the manoeuvre.
- Q153: the 2.50 m rear-load projection limit applies to specified vehicle categories; the question does not identify the vehicle type.
- Q154: section 35 supports keeping a slow-moving vehicle as close to the left edge as practicable.\n- This addendum records findings only. No quiz content or answer key was changed.
