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
