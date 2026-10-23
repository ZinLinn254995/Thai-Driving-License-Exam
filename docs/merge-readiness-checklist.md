# Merge readiness: AdSense-oriented site improvements

This checklist is for deciding whether the `work/adsense-readiness-audit` branch can be merged into `main`. A merge does not mean Google AdSense has approved the site.

## Scope preserved in this branch

- [x] Explain that English is the main practice language and Myanmar translations are optional.
- [x] Provide About, Study Guide, FAQ, Privacy, Disclaimer, and Contact pages.
- [x] Add optional AdSense placements outside active quiz questions, answers, and timed controls.
- [x] Keep AdSense disabled when real publisher/slot IDs are absent.
- [x] Document known source-rights and image-license risks.
- [x] Keep the question bank, translations, answers, ordering, and image references out of this phase.

## Merge gates

- [ ] Successful build/test result for the exact latest branch commit. The most recently observed Vercel check failed with a build-rate-limit URL; this is not a passing build and not proof of a code defect.
- [ ] Review the diff from `main` and confirm no `src/data/` changes.
- [ ] Open a public preview or local build on a phone and test Home, Study, Myanmar translation toggle, Practice, Timed Practice, Results, History, bookmarks, and all static pages.
- [ ] Verify canonical URLs, Open Graph URLs, robots.txt, and sitemap all use the exact domain planned for the release.
- [ ] Confirm no placeholder AdSense publisher/slot IDs, placeholder ads.txt seller values, or claim of approval is present.
- [ ] Review the current public content and navigation for usefulness, clarity, and policy compliance.

## Before applying to AdSense (separate from the code merge)

- [ ] Establish rights to reproduce and commercially use the third-party question bank, translations/adaptations, and every image; source attribution alone is insufficient.
- [ ] Verify traffic-sign image identity and license against reliable source records.
- [ ] Configure any consent-management solution required for the audiences/regions served and align the privacy policy with the real configuration.
- [ ] Configure only genuine publisher/slot IDs, add the exact ads.txt seller entry supplied by AdSense, and test without clicking own ads.
- [ ] Apply to Google and wait for the actual site review; technical readiness does not guarantee approval.

## Decision

Do not call this branch merge-ready until the build/test and public-preview gates above are checked. If build capacity is temporarily rate-limited, keep working on static review and retry validation when the platform allows it; do not claim a successful build without evidence.
