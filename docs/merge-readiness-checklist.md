# Merge readiness: website quality and release preparation

This checklist prioritizes learner safety, content quality, accessibility, reliability, SEO, and release readiness. Google AdSense integration is not a project goal. Monetization is undecided and no advertising platform should be built unless the user explicitly changes that direction. This checklist does not authorize merging this branch into `main`.

## Current implementation state

- [x] Remove the Google AdSense component and setup guide.
- [x] Remove AdSense-specific environment variables from `.env.example`.
- [ ] Run a reproducible dependency install, typecheck, and production build on the exact branch head; the current Vercel check is failing with the build-rate-limit restriction, and no successful build is confirmed.
- [ ] Add and review a dependency lockfile before relying on repeatable CI installs; `package-lock.json` is absent from this branch, while the workflow currently uses `npm install`.
- [ ] Complete phone-sized smoke testing on the intended public domain.
- [x] Add a safe empty-question fallback so an empty quiz pool does not dereference a missing current question.
- [x] Guard option selection and keyboard shortcuts against missing questions or out-of-range option indexes.
- [x] Prevent the global Enter shortcut from advancing a quiz a second time when a focused button already handles Enter natively.
- [x] Reject saved history entries when the percentage or practice-target flag contradicts the stored score/total.
- [ ] Run automated/manual edge-case verification for empty quiz input, timer/submit races, and score/result handling when answer and question counts differ.
- [ ] Review all traffic-sign image correctness and licensing separately (intentionally deferred until after the user's merge).
- [x] Verify the index canonical, static-page canonicals, sitemap, and robots.txt use `https://thai-driving-license-exam.vercel.app/` consistently.
- [ ] Review privacy disclosures against actual data collection and remove assumptions about planned monetization.

## Branch audit fixes completed

- [x] Reject malformed history records with impossible score/percentage ranges and reject non-positive bookmark IDs.
- [x] Keep bookmark UI state unchanged when browser storage rejects a bookmark change; show a clear message instead of pretending the change was saved.
- [x] Notify learners when practice results cannot be persisted to browser history instead of returning a fabricated success-shaped history item.
- [x] Show a clear error if browser storage prevents clearing practice history; keep the visible history unchanged on failure.
- [x] Expose pressed state for bookmark, timed-question flag, and sound toggle controls so assistive technology can identify their current on/off state.
- [x] Expose the selected state of quiz answer options with `aria-pressed` for assistive technology.
- [x] Add accessible dialog semantics and descriptive question/status labels to the quiz navigator and submission confirmation.
- [x] Allow Escape to dismiss the active quiz dialog without letting other quiz shortcuts fire.
- [x] Make history cards wrap long status labels and constrain content width on narrow screens; manual phone-sized smoke testing is still required.
- [x] Prevent duplicate exam completion from rapid repeated submission or a timer/submit race.
- [x] Calculate timed-practice remaining time from an absolute deadline so background-tab timer throttling does not silently extend the 60-minute limit.
- [x] Guard result percentage calculation against an empty result set.
- [x] Align result score and mistake lists with the actual question IDs so stale/mismatched answer entries cannot inflate the score or cause a missing-question crash.
- [x] Normalize final quiz answers against the active question set and recompute correctness from each selected option before showing/saving the result.
- [x] Remove the unrelated `thaidriveexam.com` footer link so the UI does not point away from the configured production domain.
- [x] Correct the FAQ's stale AdSense claim: it now states that no ads are currently shown and the provider-neutral ad placements render nothing.

## Monetization scope

- [x] Record that Google AdSense is not a project goal.
- [x] Do not build an advertising API, publisher registration, ad tracking, or Premium entitlement system without explicit user approval.
- [ ] If the user later chooses a specific revenue model, assess its costs, privacy impact, technical requirements, and effect on the learner experience before implementation.

## Release safeguards

- Do not merge into `main` without explicit approval.
- Do not claim advertising, subscriptions, or Premium are available unless the user explicitly chooses that model and the complete implementation is tested.
- Do not change question, answer, translation, or traffic-sign data during unrelated advertising work.
- Avoid unnecessary Vercel deployments; validate the branch before requesting a single deliberate deployment.
