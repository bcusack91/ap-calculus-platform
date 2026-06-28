# StudyMondo — Launch & Teacher-Dashboard Checklist

_Tracks the critical things **you** (the owner) must do outside the code, what's already shipped, and the remaining code tasks Claude can build. Derived from the competitive teacher-dashboard review (June 2026). Study Mondo is now **ad-free** (subscription-funded), which simplifies the district story considerably._

Legend: `[ ]` to do · `[x]` done · 🔴 critical / blocks adoption · 🟠 high · 🟡 medium

---

## 1. Owner action items (cannot be done in code)

These need **you** — an account, a signature, a dashboard setting, or a secret. Most are gates: the code is ready (or will be), but it does nothing until you complete these.

### 1a. Add secrets to Vercel (Project → Settings → Environment Variables)
Set these for **Production** (and Preview if you test there). Never commit them to git.

- [x] 🟠 `ANTHROPIC_API_KEY` — **added.** Student AI tutor (Haiku 4.5), teacher AI flashcard generation, and AI free-response grading are live.
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
- [ ] 🟡 **Per-district admin rollup** — a district-scoped view over the existing site-admin analytics. Worth building once there's a pilot district to shape it.
- [ ] 🟡 **Evidence-of-impact reporting** — usage→growth views for districts. Needs real pilot data to be meaningful; stage until there's a cohort.
- [x] 🟡 **Finish SEO staging** — ✅ done (commit dec98378): unique bodies on unit-tests (21) + daily-question/FRQ (53 wrapped), and grade8-math/prealgebra daily-question gated out of `sitemap.ts` (still thin).
- [ ] 🟡 **Parent/guardian progress emails** — `guardianEmail` + scheduled send from existing `/student-report` data; no parent login (COPPA-light).
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
