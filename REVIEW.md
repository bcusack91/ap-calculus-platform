# StudyMondo — Launch Checklist

_Updated 2026-06-15. The comprehensive 69-finding code audit and all follow-up code work are **complete and shipped**. This file is now just the focused list of what's left to take the site live. The full per-finding audit detail is preserved in **[REVIEW-audit-archive.md](REVIEW-audit-archive.md)** if you ever need it._

**The code is launch-ready. What remains is almost entirely account/config/legal work that only you can do** — none of it requires more engineering. Work top-down.

---

## ⛔ DO TODAY — blockers to go live

### ⚖️ Legal & child-safety (highest stakes — you serve students as young as ~9)
- [ ] **Attorney review of the Privacy Policy and Terms.** Both are accurate to actual data practices but still carry a "template — review before production" notice. A lawyer must confirm COPPA / CCPA / GDPR adequacy for a minor-serving, ad-supported service.
- [ ] **Decide your COPPA posture for under-13 users.** Code already collects birth year, serves non-personalized + child-directed ads to under-13s, and disables session-replay for them. The open *business/legal* call: require **verifiable parental consent** before an under-13 signs up, or restrict under-13 signups / route them through a teacher or parent account. Settle this with the attorney above.
- [ ] **Confirm child-directed ad treatment is actually enforced at AdSense** (not just signaled client-side) before any ads run on grade 4–8 pages.

### 🔑 Production config & secrets (site is broken or insecure without these)
- [ ] **Rotate every secret currently in plaintext `.env` / `.env.local`** — prod Neon DB URL, `AUTH_SECRET`, any API keys. They've been sitting in the working tree; treat them as compromised and regenerate.
- [ ] **Set the required prod env vars in Vercel** (full annotated list in `.env.example`). The must-haves:
  - `DATABASE_URL` / `DIRECT_URL` (prod Neon)
  - `AUTH_SECRET` **and** `NEXTAUTH_SECRET` (same value) · `NEXTAUTH_URL` = real origin
  - `NEXT_PUBLIC_APP_URL` = `https://www.studymondo.com` — **not** localhost (it's inlined at build time and feeds structured data)
  - `RESEND_API_KEY` (without it, all verify/reset/notification email throws)
  - `UPSTASH_REDIS_REST_URL` / `_TOKEN` (without them, rate-limiting + brute-force lockout fail open)
  - `CRON_SECRET` (without it, every scheduled job 401s)
- [ ] **Verify the Resend sending domain** (SPF/DKIM for `noreply@studymondo.com`) so email doesn't spam-folder.
- [ ] **Set `ADMIN_ALERT_EMAIL_TO`** to your inbox — this is what delivers contact-form messages and funnel alerts to you.

---

## 🟡 IMPORTANT — at launch or right after

### 💳 Payments _(you said you'd handle this last — here are the steps)_
- [ ] Create the Stripe **monthly** price → `STRIPE_PREMIUM_PRICE_ID`, and the **annual** price → `STRIPE_PREMIUM_ANNUAL_PRICE_ID` (the annual toggle on `/pricing` stays hidden until this is set).
- [ ] Configure the Stripe **webhook endpoint** + `STRIPE_WEBHOOK_SECRET`; set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.
- [ ] Live-keys smoke test: checkout → success page → Premium unlocks → customer-portal cancel → access persists to period end.

### 🤖 AI tutor _(your call, soon)_
- [ ] **Make it real or stop advertising it.** "Explain differently" still serves canned template text while `/pricing` sells it as a Premium perk. Recommended: wire it to **Claude Haiku 4.5** (`claude-haiku-4-5`, ~$1 / 1,000 explanations) via the Anthropic SDK, add a per-user daily cap, and send only the topic name (no student PII). Route: `src/app/api/ai/explain/route.ts` (currently targets OpenAI — switching to Anthropic is the clean path). Alternative: remove the claim from `/pricing`.

### 📊 AdSense _(you're open to this)_
- [ ] Set `NEXT_PUBLIC_ADSENSE_CLIENT_ID` + the three ad-slot IDs (`IN_ARTICLE`, `SIDEBAR`, `TOPIC_BOTTOM`). Until then ad slots render empty (no revenue). Pair with the child-directed-treatment blocker above.

---

## ⚪ OPTIONAL — post-launch polish
- [ ] Analytics keys if you want them: `NEXT_PUBLIC_CLARITY_PROJECT_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `SENTRY_DSN` / `NEXT_PUBLIC_SENTRY_DSN`.
- [ ] Low-severity SEO/UX tail (duplicate-content canonical pairs, contact-form dark mode, signup Enter-to-submit, a stray `alert()` — see archive findings #64–69).
- [ ] Quiet the build log: a sweep of ESLint warnings (unused vars, two `no-unused-expressions` in `MCATPassageRunner`).
- [ ] MCAT follow-ups: persist full-length recommendations so a weak result feeds the adaptive study plan (needs a small API, no schema change); retag the two skill-heavy MCAT passages (`cp-orgo-01`, the psych-soc discrete pool) for true variety.
- [ ] `HEALTH_CHECK_SECRET`, the `ADMIN_ALERT_*` escalation/ticket extras, and `CONTENT_DEPTH_WEBHOOK_URL` for richer ops alerting.

---

## ✅ Already done — code-complete, no action needed
_For reference, so you know what's off your plate. All verified with `tsc` + `npm run build`._

- **Security, authorization, data integrity, and scoring** — all 69 audited findings fixed (authz scoping, no SQL injection/SSRF, idempotent Stripe webhook, server-authoritative competitive math, complete account-deletion cascades, etc.). Detail in the archive.
- **Child safety** — under-13 detection via birth year; non-personalized + child-directed ads and no session-replay for minors; the **Google OAuth age-screen bypass is closed** (`BirthYearGate` prompts new OAuth signups *and* legacy accounts before they can use the site).
- **Privacy Policy + Terms** — gaps filled (Subscriptions/Billing/Refunds, Eligibility/Age/Children, birth-year disclosure). _Still needs the attorney sign-off above._
- **Contact form emails the owner** ("priority support" reaches a human) — _delivers once `ADMIN_ALERT_EMAIL_TO` is set above._
- **Truthful copy** — removed the false "video explanations" Premium claim and dead "video tutorials" line.
- **`.env.example`** fully documents all ~25 env vars with a prod-required note.
- **MCAT full-length** — AP-style lesson recommendations after the test (and unhid the diagnostic's recs); reduced within-test question redundancy (per-form ordering, skill de-clustering, broken-up discrete block).
- **Vercel deploys fixed** — emoji social-preview images render on-demand instead of at build time, so a flaky emoji-CDN fetch can no longer fail a deploy.
