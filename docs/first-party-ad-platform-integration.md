# First-party advertising platform integration plan

## Product direction

This site will not integrate Google AdSense. The intended model is a separately managed first-party advertising platform that can serve ads to registered websites, with a Premium entitlement that removes ads for eligible users.

## Current site status

- The former AdSense component has been replaced by a provider-neutral `AdSlot` placement component.
- Ad placements are reserved on Home, Study, and Results views.
- `AdSlot` intentionally renders nothing until the first-party delivery API and publisher integration exist.
- No fake ads, invented publisher IDs, or client-only Premium claims are used.
- Active quiz questions and answer options remain free of ad placements.
- Question, answer, translation, and image data must remain unchanged during ad-platform integration work.

## Proposed platform contract

1. Register each publisher website and its permitted origins.
2. Issue a public site identifier for browser delivery; never expose dashboard credentials or server secrets.
3. Deliver only active, scheduled campaigns allowed for the requested site and placement.
4. Label ads clearly and reserve layout space to reduce content movement.
5. Track aggregate impressions and clicks with basic rate limiting and minimal data collection.
6. Check Premium entitlement through a trusted server-side flow. Never rely on localStorage, query parameters, or a freely editable browser flag.
7. Fail gracefully: if the ad service is unavailable, the learning site must continue to work.

## MVP scope

- One owner/admin account initially.
- Campaign create, edit, pause, schedule, image/text/CTA.
- Registered websites and placement identifiers.
- Read-only delivery API and a small embeddable JavaScript SDK.
- Basic aggregate reporting.
- Premium entitlement integration, with payment provider selected separately before live billing.

Third-party advertiser onboarding, publisher revenue sharing, payouts, and advanced targeting are out of scope for the first MVP.

## Privacy and safety

- Publish a privacy notice that accurately describes the eventual ad and analytics behavior.
- Do not collect sensitive learner information for ad targeting.
- Validate destination URLs and restrict uploaded media types and sizes.
- Apply origin allowlists, API rate limits, and server-side authorization.
- Do not advertise Premium as available until purchase/entitlement verification is actually implemented and tested.

## Release checklist

- [ ] Unit/build/type checks pass.
- [ ] Ad service failure does not break Home, Study, Results, or quiz flows.
- [ ] Active quiz questions and answer choices contain no ad placements.
- [ ] Free entitlement shows eligible first-party ads when the service is configured.
- [ ] Verified Premium entitlement suppresses ad requests and placements.
- [ ] Untrusted client-side Premium flags cannot suppress ads.
- [ ] Production domain, privacy notice, and any consent requirements match the deployed behavior.
- [ ] Confirm no question-bank or traffic-sign asset changes were introduced by this work.
