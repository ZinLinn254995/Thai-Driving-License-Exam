# AdSense Content Provenance Audit

**Audit date:** 2026-10-22  
**Branch:** `seo-adsense-readiness-phase-1`  
**Status:** Monetization blocker — do not submit the site for AdSense review until content rights and factual accuracy are resolved.

## Why this audit exists

Google's AdSense policies require publishers to follow Google Publisher Policies and prohibit copied or low-value replicated content in monetized placements. Google's own guidance says not to copy other sites' content and monetize it without permission or the necessary legal rights. See:
- https://support.google.com/adsense/answer/48182
- https://adsense.googleblog.com/2011/11/policy-tips-creating-unique-and.html
- https://developers.google.com/search/docs/essentials/spam-policies

This is a technical and editorial risk review, not legal advice.

## Known provenance from repository scripts

| Asset/content | Evidence in repository | Current status | Required action |
|---|---|---|---|
| Traffic-sign question set (117 items) | `scripts/merge_all_questions.mjs` names `https://thaidriveexam.com/article-1000000000015` | Reuse permission not verified; factual accuracy not audited | Obtain written permission/license covering reproduction, translation, and monetization, or replace with independently authored, verified items |
| Traffic-law question set (74 items) | `scripts/merge_all_questions.mjs` names `https://thaidriveexam.com/article-1000000000016` | Reuse permission not verified; Thai law may change | Same as above; verify each legal claim against current official DLT / Thai authority materials |
| Safe-driving question set (249 items) | `scripts/compile_safe_driving.mjs` parses `article_22_safe_driving_raw.html`, names `https://thaidriveexam.com/article-1000000000022` | Reuse permission not verified; source answers need expert review | Obtain rights or independently replace; review answer-key extraction and translations |
| Question images | `scripts/download_images.js` downloads image URLs from `thaidriveexam.com`; questions reference paths such as `/exam_images/q_001.webp` | Copyright/license and individual source attribution not verified | Inventory all images; obtain permission or replace with original/appropriately licensed artwork |
| English and Burmese translations | `scripts/compile_safe_driving.mjs` uses Google Translate's unofficial `translate.googleapis.com` endpoint for translation | Translation quality not independently verified; endpoint use is not proof of a content license | Have fluent reviewers check meaning, safety terminology, and correct answers; use supported translation workflow |
| Original learning guides | `public/*-study-guide.html` and `public/burmese-hazard-awareness-guide.html` | Authored for this project; still need factual review | Keep source links for legal/safety claims and review before publication |

## Official-status risk

Thailand's Anti-Fake News Center reported on 9 July 2023, citing the Department of Land Transport, that `thaidriveexam.com` is not the official DLT website. That does **not** establish that every item on that site is incorrect; it means our site must not present that source as an official DLT exam bank.

Reference: https://www.antifakenewscenter.com/นโยบายรัฐบาล-ข่าวสาร/ข่าวปลอม-อย่าแชร์-กรมขนส่งฯ-เปิดให้ทำข้อสอบใบขับขี่ที่เว็บไซต์-www-thaidriveexam-com/

The app must continue to state clearly that it is independent and not affiliated with DLT. Do not call the bank "official", imply endorsement, or guarantee exam success.

## Release gate before AdSense application

- [ ] Permission/license documentation exists for every reused question, translation, and image; **or** the unlicensed material has been removed and replaced.
- [ ] Each retained question has a traceable source and reviewer/status.
- [ ] Thai legal statements and answer keys have been checked against current official resources.
- [ ] Burmese and English translations have been reviewed by fluent readers for safety-critical meaning.
- [ ] Image inventory records origin, creator, license, required attribution, and local asset path.
- [ ] Privacy policy is updated for the actual analytics/advertising configuration before those services are enabled.
- [ ] Production website has been checked on mobile and desktop.
- [ ] Sitemap is submitted in Google Search Console and indexing is monitored.
- [ ] The user has provided their actual AdSense account/publisher details before any publisher-specific code or `ads.txt` is added. Never invent a publisher ID.

## Recommended remediation order

1. Preserve the current question bank as an internal reference, not as proof of reuse rights.
2. Create an asset/question provenance inventory, grouped by category and image usage.
3. Ask the source owner for written permission explicitly covering reproduction, derivative translations, images, online publication, and advertising monetization. Keep the written response/license in project records.
4. If permission cannot be verified, replace the affected material with independently written questions and original/licensed images based on official Thai road-safety and DLT resources. Do not merely paraphrase the source line-by-line.
5. Have a qualified reviewer check answer keys and translations before publishing.
6. Re-run the technical checks and review the preview before considering a production merge.

**Current decision:** SEO and policy pages are useful groundwork, but the site is not yet cleared for AdSense submission because reuse rights and answer accuracy remain unverified.
