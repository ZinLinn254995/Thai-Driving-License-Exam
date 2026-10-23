# Google AdSense setup checklist

This integration is deliberately inactive until the real publisher ID and ad-unit IDs are configured. It does not alter any question, answer, translation, or question image data.

## Required configuration

Add these environment variables in the Vercel project settings for the intended deployment environment:

- VITE_ADSENSE_CLIENT_ID: the publisher ID supplied by AdSense, in the ca-pub-... format.
- VITE_ADSENSE_HOME_SLOT: ad-unit slot ID created in AdSense for the home page.
- VITE_ADSENSE_STUDY_SLOT: ad-unit slot ID created in AdSense for the study page.
- VITE_ADSENSE_RESULT_SLOT: ad-unit slot ID created in AdSense for the result page.

The values are public client-side configuration, not secrets. Do not guess or invent IDs. Leave them blank until the real values are available. Rebuild/redeploy after changing Vercel environment variables.

## Current placement rules

- Home page: below the introduction banner, before the topic cards.
- Study page: between the study controls and the question list.
- Results page: between the action buttons and the review section.
- No ad placement is included inside active quiz questions, answer options, or timed-exam controls.
- When the publisher ID or the relevant slot ID is absent, the component renders nothing and does not load the AdSense script.

## Before enabling ads

1. Review [the content rights and AdSense readiness checklist](./content-rights-and-adsense-readiness.md). In particular, source credit alone does not establish permission to republish third-party questions or images.
2. Apply for and receive approval from Google AdSense for the exact site/domain.
3. Use only the publisher and slot IDs issued by the AdSense account.
4. Check Google AdSense site ownership/verification instructions and the account's current policy status.
5. Publish a valid ads.txt entry using the exact seller details supplied by AdSense. Do not publish a placeholder ads.txt.
6. Confirm consent-management requirements for every audience/region served; use a Google-certified CMP where Google requires one.
7. Review the live privacy policy against the actual ad settings and consent flow.
8. Test on mobile and desktop, check for layout shifts, and confirm that no ad appears in the active quiz flow.
9. Keep the original question bank unchanged and verify its file hashes before/after unrelated UI work if data-integrity proof is required.

Code readiness is not AdSense approval. The site must also satisfy Google's content, rights, navigation, and policy requirements.

## Pre-application smoke-test checklist (no question-bank edits)

Complete these checks on the exact public domain you intend to submit to AdSense. A successful build is not a substitute for a browser test.

- [ ] Open the site in a private/incognito browser window while signed out of any developer tools; confirm the intended public URL loads without a Vercel protection/login screen.
- [ ] On a phone-sized viewport, open every top-level view and confirm content fits the screen without horizontal scrolling or controls covering one another.
- [ ] Start a practice session, select an answer, use next/previous controls where available, and confirm feedback behaves normally.
- [ ] Start and finish a timed exam; confirm the timer, result summary, review actions, and return-to-home action work.
- [ ] Open Study, search by English keyword and question number, filter a topic, toggle Myanmar translations, and bookmark/unbookmark an item.
- [ ] Open History; confirm a saved attempt appears after navigating away and returning, then test the clear-history confirmation/action deliberately.
- [ ] Refresh the app and confirm it recovers without a blank screen or console-level runtime error.
- [ ] Open About, Study Guide, FAQ, Privacy, Disclaimer, and Contact from the public site; confirm each page loads and its navigation links work.
- [ ] Verify the canonical URLs and sitemap host match the exact domain being submitted; do not assume a preview URL and production URL are interchangeable.
- [ ] Keep AdSense variables blank during functional testing unless a real publisher account and slot IDs are ready. Never test with invented IDs or click your own live ads.
- [ ] Record the test date, browser/device, public URL, failures, and fixes. Repeat the checks after the final intended deployment.

These checks intentionally do not alter question text, answers, translations, question ordering, or question-image references. If a test reveals a content-data issue, record it separately for the owner rather than changing the bank in this phase.
