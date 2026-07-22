# StudyMondo — Launch & Teacher-Dashboard Checklist

_Tracks the critical things **you** (the owner) must do outside the code, what's already shipped, and the remaining code tasks Claude can build. Derived from the competitive teacher-dashboard review (June 2026). Study Mondo is now **ad-free** (subscription-funded), which simplifies the district story considerably._

Legend: `[ ]` to do · `[x]` done · 🔴 critical / blocks adoption · 🟠 high · 🟡 medium

---

## 0a. Pre-launch audit criticals — SHIPPED 2026-07-09 (commit 5968683f)

A fresh 9-agent audit (full site + mobile) found 6 critical launch blockers; all fixed + adversarially reviewed:
1. Public internal roadmap page deleted (/improvement-roadmap was live + in sitemap — request removal in Search Console if indexed).
2. Legal template disclaimers removed from Privacy/Terms; contacts → privacy@studymondo.com.
3. Exit-quiz pass no longer 404s (competitive-course-map, 12 divergent slugs fixed).
4. Assignments now reach the gradebook: server-side auto-grading from exit-quiz / competitive / lesson events (assignment-autocomplete lib); client self-grade hole closed; maxAttempts blank = unlimited.
5. TeacherQuizBuilder demoware deleted.
6. Schedule Competition UI removed (no student surface existed).
Remaining from that audit: HIGH tier (join-class callback loss, OG image social proof, report-a-problem, onboarding gaps) + a full mobile batch (match screen unusable on phones, nav scroll, KaTeX on daily-question pages, numeric keyboards) — see the audit report in session history.

## 0. Content-review remediation — SHIPPED 2026-07-01

A 7-dimension end-to-end review ran (overall B‑: strong engine, unfinished finish). P0 + P1 fixes shipped (commits be5c9431, 57175612, eee11650):
- **Removed the demo facade** — deleted 10 fake sample-data components that shipped to real users (fake "Google Classroom connected", fake student leaderboard on every dashboard, fake classroom Groups/Announcements/Challenges, keyword FRQ "grader", no-op "Assign" templates). `/teacher/tools` now shows only the 3 real tools.
- **Copy honesty** — "100% Free" → "$0 to start"; removed unverifiable "Join thousands of students"; dropped "Free … Platform" titles.
- **Content** — de-geographied 94 "case study" lessons (no more "Why do geographers…" in a CS lesson).
- **Teacher self-provisioning** — `/for-teachers` + one-click FREE→TEACHER (no admin needed).
- **Schools UI** — admin can create schools; teachers attach classes → the district rollup can finally populate.
- **UX** — onboarding routing, tool-page breadcrumbs, unified course front-door, differentiated hero, plain-language premium perks.
- **Still open (from the review, not yet done):** wire real Announcements/Groups back into the classroom (were hidden, not rebuilt); gamification depth (Daily Challenge/BattlePass are shallow — deferred); full `/courses/[slug]`→hub redirect (only homepage links unified); printable/PDF class reports.

---

## 1. Owner action items (cannot be done in code)

These need **you** — an account, a signature, a dashboard setting, or a secret. Most are gates: the code is ready (or will be), but it does nothing until you complete these.

### 1a. Add secrets to Vercel (Project → Settings → Environment Variables)
Set these for **Production** (and Preview if you test there). Never commit them to git.

- [x] 🟠 `ANTHROPIC_API_KEY` — **added.** Student AI tutor (Haiku 4.5), teacher AI flashcard generation, and AI free-response grading are live.
- [x] 🔴 `RESEND_API_KEY` + verified sending domain — **DONE (owner configured ~early July 2026, tested working).** `SMTP_FROM="Study Mondo <brendan@cusackprep.com>"`, so **cusackprep.com** is the verified Resend domain. Key lives in Vercel prod env only (not in `.env` — correct for a secret). `AUTH_SECRET`/`NEXTAUTH_SECRET` also set. _Verify live state anytime via `/admin` → 🩺 System tab, not this line._
- [ ] 🔴 **Email deliverability (SPF/DKIM/DMARC) — mail lands in SPAM.** As of 2026-07-22, `cusackprep.com` DNS has **no Resend DKIM** (`resend._domainkey` absent), **no Resend return-path** (`send.` subdomain absent), and **no DMARC** (`_dmarc` absent); root SPF is Google-only (`v=spf1 include:_spf.google.com ~all`). Gmail/Yahoo (post-Feb-2024 rules) spam unauthenticated mail. **Fix (all DNS, owner action):** (1) complete Resend → Domains → cusackprep.com verification (adds DKIM + send-subdomain SPF); (2) add `_dmarc` TXT `v=DMARC1; p=none; rua=mailto:brendan@cusackprep.com; fo=1` (start p=none, tighten later); (3) re-verify in Resend + confirm via Gmail "Show original" / mail-tester.com.
- [ ] 🟠 `STRIPE_SECRET_KEY` — Premium checkout returns HTTP 503 ("checkout isn't switched on yet") until this is set. **(Currently in Stripe TEST mode — intentional.)**
- [ ] 🟠 `STRIPE_WEBHOOK_SECRET` — from the Stripe webhook endpoint you create (see 1d).
- [ ] 🟠 `STRIPE_PREMIUM_PRICE_ID` — the monthly price ID (`price_…`) from Stripe.
- [ ] 🟠 `STRIPE_PREMIUM_ANNUAL_PRICE_ID` — the annual price ID; enables the monthly/annual toggle.
- [ ] 🟡 `NEXT_PUBLIC_APP_URL` — your canonical URL (`https://www.studymondo.com`); used for Stripe redirect URLs.

> After changing env vars in Vercel you must **redeploy** for them to take effect.
> _AdSense env vars removed — the site is ad-free now, nothing to configure._

### 1b. Set up the privacy contact inbox — 🟠 NEW (do this first — it's on public pages)
The new `/security` and `/dpa` pages and the DPA request flow route districts to **privacy@studymondo.com**. That address must actually receive mail.
- [ ] 🟠 Create `privacy@studymondo.com` as a forwarding alias to your real inbox (most domain/email hosts do this in a couple of clicks). _Or_ tell Claude to swap the pages to `brendan@cusackprep.com` if you'd rather not set up an alias.

### 1c. Sign a Data Privacy Agreement (DPA) when a district asks — 🔴 the #1 adoption gate
The **pages are now built** (`/security` trust page + `/dpa` request page, linked in the footer). What's left is the human signature side.
- [ ] 🔴 When a district requests it, **sign** their DPA (or the SDPC / NDPA national template — see privacy.a4l.org). The `/dpa` page tells them how to start and what we'll sign.
- [ ] 🟡 (Optional, proactive) Register Study Mondo on the **SDPC** so districts can find/initiate agreements with you. Claude can guide the registration.
- [x] 🟡 ~~Ad-free classroom policy~~ — **moot/done:** the entire site is ad-free, so there's no "ads in the classroom" concern and no COPPA personalized-ads setting to disable.

### 1d. Rostering — pick the path, then provision it — 🔴
Roster sync + SSO is table stakes for district adoption. **Recommended: an aggregator (Edlink)** rather than building Google/Clever/ClassLink/Canvas natively — one integration covers them all. **Interim:** CSV roster import now ships (see §2), so teachers aren't blocked while you set this up.
- [ ] 🔴 Create an **Edlink** (ed.link) developer/sandbox account and get the API credentials → hand them to Claude to build the sync.
- [ ] 🟡 Decide rollout order: Google Classroom import first (fastest via Edlink), the rest after.

### 1e. Microsoft SSO (optional) — code scaffold is DONE, needs an Azure app
The Microsoft "Continue with Microsoft" sign-in is **wired but inactive** until you provide credentials.
- [ ] 🟡 In **Azure Portal → Microsoft Entra ID → App registrations**, register an app. Redirect URI: `https://www.studymondo.com/api/auth/callback/microsoft-entra-id`. Then set in Vercel:
  - `AUTH_MICROSOFT_ENTRA_ID_ID` (Application/client ID)
  - `AUTH_MICROSOFT_ENTRA_ID_SECRET` (client secret value)
  - `AUTH_MICROSOFT_ENTRA_ID_ISSUER` (optional — pin to one tenant; omit for any work/school account)
  - `NEXT_PUBLIC_MICROSOFT_SSO_ENABLED=true` (shows the button) → redeploy.
- _Ask Claude for the exact click-by-click Azure walkthrough when you're ready._

### 1f. Authorize the class-sections DB change — ✅ done
- [x] 🟡 Owner authorized the additive `Classroom.section` column; applied to prod (verified text/nullable, rows unchanged) and the sections/period UI shipped (see §2).

### 1g. Standards data — ✅ done
- [x] 🟡 Standards taxonomy approved (35 courses, 229 standards) and **shipped** — standards-mastery is live (see §2).

---

## 2. ✅ Shipped in code

All verified: `tsc` clean, production build green. Committed to `main`.

### This session (district-readiness — Batch B, commit 6b7017ac)
- [x] **Class sections/periods** — additive nullable `Classroom.section` (applied to prod + migration file committed). "Section / period" field in the create modal and Settings; shown in the classroom list + header; included in CSV/JSON export. Adversarially reviewed (completeness / correctness / security) before ship.

### This session (district-readiness — Batch A, commit 389f361c)
- [x] **CSV roster import** — `POST /api/teacher/classrooms/[id]/import-roster` + a Students-tab **Import students** modal (paste or upload CSV of `email` or `name,email`). Links existing accounts or pre-creates minimal verified accounts (claimable via the student's school Google/Microsoft login); never alters an existing account's role/name/password. Interim bridge until Edlink (1d).
- [x] **Security & Student Data Privacy page** (`/security`) — FERPA/COPPA posture, AI data handling, subprocessor list, retention, breach response. Footer-linked.
- [x] **DPA page** (`/dpa`) — how districts request a signed agreement (SDPC National DPA + state exhibits). Footer-linked.
- [x] **Microsoft Entra ID (Azure AD) SSO** — env-gated provider + sign-in button with the same OAuth account-link protection as Google. Inactive until 1e env vars are set.
- [x] **Terms cleanup** — removed stale "child-directed advertising" language (now ad-free).

### Previous session (standards + SEO, commit a9948530)
- [x] **Standards-mastery** — new **🎯 Standards** classroom tab: class mastery grouped by official AP unit / SAT domain / MCAT content category, with exam weightings. Code-mapped from seeded categories (no manual tagging, no migration).
- [x] **SEO E-E-A-T** — named reviewer + last-reviewed date + article metadata on all ~200 tool pages; unique per-subject bodies on the thinnest families (score-predictor / practice / study-plans).

### Earlier this cycle (teacher dashboard)
- [x] Auth guard on `GET /api/teacher/content`; edit/unassign assignments; multi-topic assignments; grade override API; **writable Gradebook tab**; archive classroom; **auto-remediation** panel; **live-game** Start button; fresh-data-on-focus; **AI free-response grading**; **assign a flashcard set to a class**; **teacher flashcard sets** (AI + import + manual). _(Two additive prod migrations applied + verified: `Assignment.flashcardSetId`, `FlashcardSet`/`FlashcardSetCard`.)_

---

## 3. Remaining code tasks (Claude can build — prioritized)

Sequenced: adoption gates → trust → differentiation → lock-in. _(blocked)_ = needs an owner action from §1.

- [ ] 🔴 **Google Classroom / Clever / ClassLink roster sync** — _(blocked on 1d Edlink creds)_. Turns CSV-import + self-join into one-click district rostering.
- [x] 🟡 **Class sections/periods** — ✅ shipped (see §2, commit 6b7017ac).
- [x] 🟡 **Co-teacher support** — ✅ shipped (commit 1b242b08). Owner adds co-teachers by email (Settings); co-teachers view/teach (roster, assignments, gradebook, per-submission grading, analytics, curriculum, announcements) but not settings/archive/manage-co-teachers/competitive-grants (owner-only). Separate `ClassroomCoTeacher` table (applied to prod) so co-teachers never pollute student rosters/analytics. Adversarially auth-reviewed; 5 findings fixed.
- [x] 🟡 **Per-district admin rollup** — ✅ shipped (commit 3d98ba15). Admin → Districts tab, groups by School.district. (Populates as schools set their district + students join.)
- [x] 🟡 **Evidence-of-impact reporting** — ✅ shipped (commit 3d98ba15). Admin → Impact tab: diagnostic improvement, usage→mastery, mastery distribution, weekly completions.
- [x] 🟡 **Finish SEO staging** — ✅ done (commit dec98378): unique bodies on unit-tests (21) + daily-question/FRQ (53 wrapped), and grade8-math/prealgebra daily-question gated out of `sitemap.ts` (still thin).
- [x] 🟡 **Parent/guardian progress emails** — ✅ **SHIPPED 2026-07-09 (commit 630bd4b3).** `User.guardianEmail` column applied to prod (2831 rows untouched); local Docker column applied 2026-07-22. Student adds a guardian email on their profile (GuardianEmailCard) → **double opt-in** (`/api/guardian-confirm`, EmailSubscriber.verified) → weekly cron (`/api/cron/parent-digest`, Sundays 15:00 UTC, `requireCronSecret`) sends to confirmed guardians of active students; unsubscribe + rate-limit included. **Owner action: ensure `CRON_SECRET` is set in Vercel or NO crons fire** (verify via /admin 🩺 System tab).
- [ ] 🟢 **Competition-system unification** — DEFERRED. An explorer scoped it at **3–5 days** (cross-mode reporting + launching a scheduled comp into a live lobby), not the "minor polish" it sounded like. The cheap slice (a "Launch live" button on a scheduled comp) is ~1–2 days if you want just that later.
- [ ] 🟢 **Per-student question randomization** — _(deferred — low value-to-risk)_. Threading `studentId` through the match engine (~20 call sites) is high regression risk for marginal gain.

### Deferred big bets (don't start until there's real teacher adoption)
- Native LTI 1.3 (NRPS + AGS 2.0) + Clever/ClassLink certification — months of work + ongoing cert; the aggregator (1d) is the realistic substitute.
- Predictive AP/SAT/MCAT scaled-score bands — needs a validated model; a wrong prediction destroys teacher trust.

---

## 4. Suggested order
1. **§1b privacy inbox** (~2 minutes; it's already on public pages). Your email is Microsoft 365 via GoDaddy — easiest path is a GoDaddy alias (productivity.godaddy.com → Admin → Email aliases → Add Alias → "privacy"), or a free shared mailbox if 2+ people should read it.
2. ~~§1f sections OK~~ ✅ done — sections shipped.
3. **§1d Edlink** — reasonable to DEFER (production ~$499+/mo on a 12-mo commit; building/testing is free). CSV import + self-join bridge the gap now.
4. **§1c DPA** signature when a district asks (pages are live). You don't host a document — districts initiate; sign their SDPC National DPA, e-sign where allowed.
5. **§1e Microsoft SSO** — DEFER until a Microsoft-shop district needs direct SSO (K-12 is Google-dominant and aggregators broker Microsoft logins anyway).
6. **§1a Stripe** live-mode when you're ready to actually charge.

_Last updated: 2026-06-28. Source: teacher-dashboard competitive review (vs. AP Classroom, Khan/Khanmigo, Albert.io, IXL, DeltaMath, Quizizz, Kahoot, Edpuzzle, Quizlet/Knowt, Formative, Desmos, Google Classroom/Canvas)._
