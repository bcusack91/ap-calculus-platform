# Study Mondo — Manual Review Checklist

A tick-through guide for spot-checking the site after the recent changes. Work top-to-bottom; you don't need to check every course — **sample by template** (one of each kind covers the rest).

## How to use this

**Test in three user states** (use the new admin **View as…** toggle in your profile menu — top-right avatar → "View site as: Admin / Free / Premium"):

- [ ] **Logged-out** (open a private window) — most visitors; sees ads + SEO
- [ ] **Free** (View as → Free)
- [ ] **Premium** (View as → Premium)

**Keep DevTools open**: Console (red = JS error) and Network (filter status ≥ 400 for 500s/404s).

**Time:** P0 ≈ 15 min · P0+P1 ≈ 2–3 hrs · everything ≈ half a day.

---

## P0 — Smoke (≈15 min). If these work, nothing is on fire.

- [ ] `/` homepage loads, no console errors
- [ ] Sign in works; avatar menu opens
- [ ] A course hub loads — `/ap-biology`
- [ ] An interactive lesson loads + renders math — `/topics/photosynthesis/interactive` (or any topic)
- [ ] `/dashboard` loads

---

## P1 — What changed recently (spend your time here)

### NEW: Admin "View as…" toggle
- [ ] Avatar menu shows **View site as: Admin / Free / Premium** (only when logged in as admin)
- [ ] Switch to **Free** → page reloads → you see ads, upgrade CTAs, the AI/analytics gates
- [ ] Switch to **Premium** → ads gone, AI unlimited, analytics unlocked
- [ ] Switch back to **Admin** → normal. (A small "Previewing as…" note shows while overridden.)

### NEW: Premium tier & gates
- [ ] `/pricing` — Premium list shows only **real** perks (ad-free, unlimited AI tutor, advanced analytics, priority support); monthly/annual toggle works
- [ ] `/pricing` → click **Upgrade to Premium** → either goes to Stripe checkout **or** shows a clear message (it no longer does nothing). *Real checkout needs Stripe env vars configured.*
- [ ] `/premium` — reads as a real upsell (not "Everything Is Free")
- [ ] **AI tutor** (View as Free): on a topic page use "Explain differently" 6×; the 6th shows an **upgrade prompt** (free = 5/day)
- [ ] **Advanced analytics** (View as Free): the Six Sigma dashboard shows an **"Upgrade for analytics"** card; (View as Premium) shows the real dashboard
- [ ] **Ads** (View as Free): in production, ad slots are still pending AdSense approval, so you'll see nothing rendered — that's expected (they go live once the AdSense slot env is set)

### NEW: 2nd-diagnostic study-plan gate
- [ ] As a **Free** user, take **one** diagnostic (e.g. `/ap-bio-diagnostic`) → submit → you get the **personalized study plan** ✅
- [ ] Take a **second** diagnostic (any subject) → submit → the study plan section shows a **🔒 Premium paywall** instead
- [ ] As **Premium**, both diagnostics show the full plan
- [ ] *(Known gap: MCAT's diagnostic uses a different remediation flow and is not yet gated — see notes.)*

### Diagnostics end-to-end (exercises the 30 routes fixed last pass)
- [ ] Take any diagnostic → submit → results + score save, no 500 in Network
- [ ] Try one math (`/algebra1-diagnostic`), one AP (`/ap-chem-diagnostic`), one SAT (`/sat-diagnostic`)

### Content rewrites
- [ ] Open 2–3 **OChem** lessons (NMR, alkanes, aldehydes) — `/topics/nmr-spectroscopy/interactive` etc. — math renders, questions work
- [ ] Open 2–3 **AP Bio** lessons (Mendelian genetics, gene regulation)

### Performance / crash fixes
- [ ] **Full-length MCAT exam** (`/mcat-full-length`) → run to the score screen (was a crash-fix target)
- [ ] Lazy-loaded pages load fine: `/sat-diagnostic`, `/mcat-reference`, `/mcat-study-plans`, `/ap-chem-full-exam`, `/sat-grid-in`
- [ ] (Optional) Run **Lighthouse** on `/sat-diagnostic` — perf should be solid

### SEO (can't fully eyeball — use tools)
- [ ] Browser **tab title** on `/ap-bio-frq` and `/ap-stats-unit-tests` = the subject (not the homepage title)
- [ ] Paste a diagnostic or topic URL into **Google Rich Results Test** → Quiz / Breadcrumb schema valid

### Competitive
- [ ] Play one 1v1 match (`/competitive`) — answers don't leak early, scoring works

---

## P2 — Core flows (sane regardless of changes)

- [ ] Signup → onboarding
- [ ] Flashcard review (`/flashcards`)
- [ ] A practice test (`/ap-bio-practice`)
- [ ] Teacher classroom (if you use it)
- [ ] Mobile viewport pass on the homepage + one course hub + one lesson

---

## Notes / known follow-ups
- **MCAT diagnostic** plan-gate not yet wired (bespoke remediation flow).
- **Stripe checkout** requires `STRIPE_SECRET_KEY` / `STRIPE_PREMIUM_PRICE_ID` / `STRIPE_WEBHOOK_SECRET` / `NEXT_PUBLIC_APP_URL` to be set for real payments.
- **Ads** go live only once the AdSense slot env vars are configured (currently dormant by design).
- 4 pre-existing failing unit tests (stripe-webhook, unsubscribe, progress-load, auth-signup mocks) — unrelated to recent work.
- Low-severity `calculateSigmaLevel` off-by-one (cosmetic analytics) — open.

## Free vs Premium (current gates)
| Feature | Free | Premium |
|---|---|---|
| All lessons, topics, diagnostics, practice | ✅ full | ✅ full |
| First diagnostic study plan | ✅ | ✅ |
| 2nd+ diagnostic study plan | 🔒 | ✅ unlimited |
| AI tutor explanations | 5 / day | unlimited |
| Advanced (Six Sigma) analytics | 🔒 | ✅ |
| Ads | shown | hidden |
