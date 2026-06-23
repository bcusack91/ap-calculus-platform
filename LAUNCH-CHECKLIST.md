# StudyMondo — Launch & Teacher-Dashboard Checklist

_Tracks the critical things **you** (the owner) must do outside the code, what's already shipped, and the remaining code tasks Claude can build. Derived from the competitive teacher-dashboard review (June 2026)._

Legend: `[ ]` to do · `[x]` done · 🔴 critical / blocks adoption · 🟠 high · 🟡 medium

---

## 1. Owner action items (cannot be done in code)

These need **you** — an account, a signature, a dashboard setting, or a secret. Most are gates: the code is ready (or will be), but it does nothing until you complete these.

### 1a. Add secrets to Vercel (Project → Settings → Environment Variables)
Set these for **Production** (and Preview if you test there). Never commit them to git.

- [x] 🟠 `ANTHROPIC_API_KEY` — **added.** The student AI tutor now uses real Claude (Haiku 4.5), and the new teacher AI flashcard generation is live.
- [ ] 🟠 `STRIPE_SECRET_KEY` — Premium checkout returns HTTP 503 ("checkout isn't switched on yet") until this is set.
- [ ] 🟠 `STRIPE_WEBHOOK_SECRET` — from the Stripe webhook endpoint you create (see 1d).
- [ ] 🟠 `STRIPE_PREMIUM_PRICE_ID` — the monthly price ID (`price_…`) from Stripe.
- [ ] 🟠 `STRIPE_PREMIUM_ANNUAL_PRICE_ID` — the annual price ID; enables the monthly/annual toggle.
- [ ] 🟡 `NEXT_PUBLIC_APP_URL` — your canonical URL (e.g. `https://www.studymondo.com`); used for Stripe redirect URLs.
- [ ] 🟡 `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, `NEXT_PUBLIC_AD_SLOT_IN_ARTICLE`, `NEXT_PUBLIC_AD_SLOT_SIDEBAR` — confirm these are set in prod so ads actually render (and revenue flows).

> After changing env vars in Vercel you must **redeploy** for them to take effect.

### 1b. Sign & publish a Data Privacy Agreement (DPA) — 🔴 the #1 adoption gate
Without a signed DPA + a clear privacy posture, school IT departments **block** the tool and no rostering/grade-passback work matters. This is more existential than any feature for an ad-funded site selling to under-13-heavy classrooms.
- [ ] 🔴 Adopt a standard signable DPA (SDPC / NDPA national template — see privacy.a4l.org).
- [ ] 🔴 Publish a FERPA/COPPA handling statement and decide the **"classroom is ad-free"** policy (public content can stay AdSense-funded; the teacher-assigned/classroom student experience should be ad-free). _Code to suppress ads on classroom/assigned routes is a separate task in §3._
- [ ] 🟡 Confirm with Google AdSense that **personalized ads are disabled for under-13** (ties to the existing `mondo_u13` cookie / age gate). COPPA requirement.

### 1c. Rostering — pick the path, then provision it — 🔴
Roster sync + SSO is table stakes for every district-adopted competitor. **Recommended: use an aggregator** (Edlink or Clever-as-a-service) instead of building Google/Clever/ClassLink/Canvas natively — one integration covers them all and is the only realistic path for a small team.
- [ ] 🔴 Create an **Edlink** (ed.link) or **Clever** developer account and get the API credentials.
- [ ] 🟠 (If going direct to Google Classroom first instead of an aggregator) create a **Google Cloud project**, enable the Classroom API, configure the OAuth consent screen, and get the OAuth client ID/secret. Provide them as Vercel env vars (names TBD when the feature is built).
- [ ] 🟡 Decide rollout order: Google Classroom import first (fastest), aggregator second.

### 1d. Stripe configuration (Stripe Dashboard)
- [ ] 🟠 Create the **Premium** product with a monthly price and an annual price; copy both price IDs into Vercel (see 1a).
- [ ] 🟠 Add a **webhook endpoint** → `https://<your-domain>/api/stripe/webhook`, subscribe to checkout/subscription events, copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
- [ ] 🟡 Test a full checkout in Stripe test mode before going live.

### 1e. Standards data (for standards-mastery reporting — §3)
- [ ] 🟡 Provide or approve the authoritative lists to tag content against: **College Board AP units/skills**, **SAT domains**, **AAMC MCAT content categories**. Claude can draft the mapping; you confirm accuracy before it ships.

---

## 2. ✅ Shipped in code (this session)

All verified: `tsc` clean, production build green. Committed to `main`.

- [x] **Security:** added the missing TEACHER/ADMIN auth guard to `GET /api/teacher/content` (was unauthenticated).
- [x] **Edit an assignment** — new `PUT /api/teacher/classrooms/[id]/assignments/[assignmentId]` + an **Edit** button that reopens the modal pre-filled.
- [x] **Unassign an assignment** — new `DELETE …/[assignmentId]` (soft-deactivate, grades preserved) + an **Unassign** button. Deactivated assignments now hidden from both teacher and student views.
- [x] **Multi-topic assignments** — the create/edit modal now lets you add several topics (chips), exposing the `topicSlugs[]` capability the backend already supported.
- [x] **Grade override (API)** — `PUT …/submissions/[id]/feedback` now also accepts a numeric `score` (0–1) and marks the submission completed.
- [x] **Writable gradebook UI** — new **Gradebook** tab in the classroom: click any cell to set/clear a 0–100% score. Upserts via `PUT /api/teacher/gradebook` (works even for students with no submission row yet); averages/letter grades recompute on save. Also fixed the old raw-score display bug.
- [x] **Archive a classroom** — Settings → Danger Zone → **Archive Classroom** (wires the existing soft-deactivate).
- [x] **Auto-remediation** — the classroom **Performance** tab now shows a "Suggested remediation" panel: topics where students didn't pass the exit quiz, grouped by topic (with a "must redo unit" count), excluding topics already assigned. One click assigns a targeted review lesson to the class. No schema change — derived from the exit-quiz data already loaded.
- [x] **Live-game discoverability** — the Competitions tab now has a **▶ Start live game** button that launches a real-time team lobby tied to the classroom and jumps into the control room (the live mode previously lived only under `/teacher/lobby`), with a one-line explainer of live-vs-scheduled.
- [x] **Fresh data on focus** — the classroom page now refetches members/assignments/competitions when the teacher returns to the tab (without clobbering in-progress Settings edits), so stale data doesn't linger after a student joins or submits.
- [x] **Teacher flashcard sets (AI + import + manual)** — Teacher Tools → Flashcard Sets is now real and persisted (new `FlashcardSet`/`FlashcardSetCard` tables, **owned by the teacher** so nothing pollutes global content). Build a set three ways: **generate with AI** (`/api/teacher/flashcard-sets/generate` → Claude Haiku → review/edit before saving), **import/paste** (Quizlet/Knowt-style term/definition lines), or **manually**. Each set is studyable + shareable at `/flashcard-sets/[id]`. **Prod DB migration applied** (prod was `db push`-managed with no migration baseline, so the two additive tables were applied directly — purely additive, existing data untouched, verified 0 rows after).

---

## 3. Remaining code tasks (Claude can build — prioritized)

Sequenced per the review: adoption gates → trust fixes → differentiation → lock-in. Items marked _(blocked)_ need an owner action from §1 first.

- [ ] 🔴 **Google Classroom roster import + "Share to Classroom"** — _(blocked on 1c creds)_. The beachhead that turns code-only self-join into something schools approve.
- [ ] 🔴 **Standards tagging + re-skin the mastery heatmap as standards-mastery** — _(needs 1e lists)_. The one place you out-specialize generalist Khan; analytics plumbing already exists.
- [ ] 🟠 **AI free-response grading** — the second half of teacher AI: grade a student's free-response/FRQ answer against a rubric or ideal answer, returning an editable score + feedback the teacher confirms. (Generation shipped; grading is the remaining piece. Now unblocked — `ANTHROPIC_API_KEY` is set.)
- [ ] 🟡 **Assign a flashcard set to a class** — let a teacher push a saved FlashcardSet to a classroom as a FLASHCARD_REVIEW assignment (needs a small `flashcardSetId` field on Assignment + the student-side review flow). Sharable links work today.
- [ ] 🟡 **Per-student question randomization** — _(deferred — low value-to-risk)_. Option *order* is already randomized per render; the valuable part (different *questions* per student) means threading `studentId` through the core competitive match engine (~20 call sites) — high regression risk on a system we just stabilized, for marginal gain. Recommend leaving as-is unless teachers report collusion.
- [ ] 🟡 **Ad-free classroom** — _(pending 1b policy)_. Suppress AdSense on teacher/assigned-content routes while keeping public content ad-funded.
- [ ] 🟡 **Co-teacher support** — add a `role` (STUDENT/CO_TEACHER) to `ClassroomMember`; lets an owner share roster/gradebook/lobby. Lock-in play — do **after** there's a teacher base.
- [ ] 🟡 **Parent/guardian progress emails** — _(gate behind 1b DPA)_. `guardianEmail` + scheduled email-out from existing `/student-report` data; no parent login (COPPA-light).
- [ ] 🟡 **Sections/periods** — lightweight label on `Classroom` for teachers with multiple sections.
- [ ] 🟢 **Unify the two competition systems (deeper)** — discoverability is done (Start-live-game button); the remaining optional work is letting a *scheduled* competition launch into the live lobby and rolling both into one cross-mode report.

### Deferred big bets (don't start until there's real teacher adoption)
- Native LTI 1.3 (NRPS + AGS 2.0) + Clever/ClassLink certification — months of work + ongoing cert; the aggregator (1c) is the realistic substitute.
- Predictive AP/SAT/MCAT scaled-score bands — needs a validated model; a wrong prediction destroys teacher trust.

---

## 4. Suggested order
1. **§1a env vars** (cheap, unblocks AI + payments immediately).
2. **§1b DPA + ad-free policy** (the real adoption gate).
3. **§1c rostering creds** → then Claude builds Google Classroom import.
4. **§1e standards lists** → then Claude builds standards-mastery.
5. Fill in the §3 trust/lock-in items (writable gradebook, randomization, importer, remediation).

_Last updated: 2026-06-18. Source: teacher-dashboard competitive review (vs. AP Classroom, Khan/Khanmigo, Albert.io, IXL, DeltaMath, Quizizz, Kahoot, Edpuzzle, Quizlet/Knowt, Formative, Desmos, Google Classroom/Canvas)._
