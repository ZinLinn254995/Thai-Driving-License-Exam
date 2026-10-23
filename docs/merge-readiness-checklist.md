# Merge readiness: first-party advertising preparation

This checklist covers general site-quality work and the transition from the former AdSense-specific preparation to a future first-party advertising platform. It does not authorize merging this branch into `main`.

## Current implementation state

- [x] Remove the Google AdSense component and setup guide.
- [x] Remove AdSense-specific environment variables from `.env.example`.
- [x] Add a provider-neutral `AdSlot` component for Home, Study, and Results placements.
- [x] Keep placements outside active quiz questions, answer options, and timed controls.
- [x] Document the proposed first-party ad platform contract and Premium entitlement requirements.
- [x] Keep the question bank and traffic-sign assets out of scope for this ad-platform transition.
- [ ] Run a reproducible dependency install, typecheck, and production build on the exact branch head; the current Vercel check is failing with the build-rate-limit restriction, and no successful build is confirmed.
- [ ] Add and review a dependency lockfile before relying on repeatable CI installs; `package-lock.json` is absent from this branch, while the workflow currently uses `npm install`.
- [ ] Complete phone-sized smoke testing on the intended public domain.
- [ ] Test malformed/empty quiz input defensively and verify score/result handling when answer and question counts differ.
- [ ] Review all traffic-sign image correctness and licensing separately (intentionally deferred until after the user's merge).
- [x] Verify the index canonical, static-page canonicals, sitemap, and robots.txt use `https://thai-driving-license-exam.vercel.app/` consistently.
- [ ] Review privacy disclosures against actual data collection and future ad behavior.

## Branch audit fixes completed

- [x] Reject malformed history records with impossible score/percentage ranges and reject non-positive bookmark IDs.
- [x] Prevent duplicate exam completion from rapid repeated submission or a timer/submit race.
- [x] Guard result percentage calculation against an empty result set.
- [x] Remove the unrelated `thaidriveexam.com` footer link so the UI does not point away from the configured production domain.

## Before enabling first-party ads

- [ ] Build and deploy the first-party delivery API.
- [ ] Register the publisher site and validate allowed origins.
- [ ] Verify that the browser SDK exposes no admin credentials or server secrets.
- [ ] Implement trusted Premium entitlement checks; do not rely on localStorage or other client-only flags.
- [ ] Test graceful behavior when the ad API is unavailable.
- [ ] Confirm privacy disclosures and applicable consent requirements match actual behavior.

## Release safeguards

- Do not merge into `main` without explicit approval.
- Do not claim ads or Premium are live until the full service and entitlement flow are implemented and tested.
- Do not change question, answer, translation, or traffic-sign data during unrelated advertising work.
- Avoid unnecessary Vercel deployments; validate the branch before requesting a single deliberate deployment.
