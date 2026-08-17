# SAT Content Congruence Audit — 2026-08-17

Owner-requested audit: find content that isn't on the digital SAT or isn't
presented the way the SAT presents it. Read-only findings; no fixes applied.
Scan tooling: `scripts/audit-sat-congruence.ts` (rerunnable).

Surfaces scanned: 35 exit-quiz banks, all `sat-sat-*` interactive lessons,
14 competitive banks, entrance quizzes, PSAT unit tests, the diagnostic
generator, and DB content (topic text, flashcards, example problems) for all
33 SAT topics.

## A. Content NOT on the digital SAT (high confidence)

### A1. Complex numbers — an entire vertical (143 hits) — SEVERITY: HIGH
The old paper SAT tested complex numbers; the digital SAT (2024+) dropped
them. We carry a full vertical: `sat-complex-numbers` topic, 40-question
exit-quiz pool, 4 interactive lesson parts, entrance quiz, competitive
questions, flashcards, example problems, and a pre-generated slide deck.
NOT sampled by the diagnostic (confirmed), but reachable everywhere else.
**Decision needed:** retire vs. keep-as-optional ("beyond the SAT" label).

### A2. Probability set/conditional notation (134 hits) — SEVERITY: HIGH
P(A|B), P(A∪B), P(A∩B), "P(not A)" notation across
`sat-probability-two-way-tables` (the topic's own exit-quiz bank),
`sat-statistics-data-interpretation`, `sat-data-statistics`, and the
data/problem-solving lesson parts. The digital SAT tests these CONCEPTS
(including conditional probability!) but always in words from two-way
tables: "If a person is selected at random from those who…". The notation
itself never appears. **Fix shape:** rewrite items as table-based word
problems; keep the underlying skills.

### A3. AP-Stats-level statistics (32 hits) — SEVERITY: MEDIUM
Standard-deviation FORMULA computation (σ = √(Σ(x−x̄)²/n)), expected value
E(X), variance, independence/mutually-exclusive formalism. The SAT treats SD
purely conceptually (which set varies more), never computes it; expected
value is not tested. **Fix shape:** replace with conceptual-SD, margin of
error, and study-design/inference items (which ARE tested and we're light on).

### A4. Logarithms (small but real) — SEVERITY: LOW
`sat-nonlinear-equations-functions` bank has ln/log domain questions (2) and
its overview says it covers "logarithmic" functions. Logs are not on the SAT.

## B. Contamination map (why the pool problems matter)
`generateExitQuiz` pools feed: exit quizzes (grade homework) → slide-deck
polls → flashcard supplements → and the SAT DIAGNOSTIC (samples
sat-probability-two-way-tables, sat-statistics-data-interpretation,
sat-data-statistics, sat-nonlinear-equations-functions). A student's very
first assessment can include P(A|B)/E(X)/ln items. Fixing the pools fixes
every downstream surface (decks/flashcards need one regeneration pass).

## C. Legacy structure — old paper-SAT names — SEVERITY: MEDIUM (cosmetic, visible)
Math categories use retired names: "Heart of Algebra", "Passport to
Advanced Math", "Additional Topics in Math". Digital SAT domains: Algebra ·
Advanced Math · Problem-Solving and Data Analysis · Geometry and
Trigonometry. (R&W categories are already the current four.) Teachers and
students who know the current test will notice.

## D. Style findings
- **30 truly definitional stems** in exit quizzes ("What is the difference
  between direct and indirect textual evidence?", "How do you fix a pronoun
  shift?") — concentrated in R&W banks. Fine as learning checks; not
  SAT-form. They currently grade homework and appear as in-class polls.
- **Competitive math banks**: many bare "What is the area of a rectangle…"
  speed drills. Deliberate for game mode; SAT wraps everything in context.
  Lower priority — flag only if the owner wants game questions SAT-dressed.
- **`sat-reading-bank` (competitive) is the weakest R&W surface**:
  standalone synonym questions ("Which word is a synonym for benevolent?")
  = old-SAT sentence-completion style, plus meta questions ABOUT reading
  strategy. Digital SAT does words-in-context with a passage.
- **Good news:** `sat-vocabulary-context` exit quiz is genuinely
  digital-SAT-style (short passage + precise-word blank). Grammar banks
  align with Standard English Conventions. No law of sines/cosines, no
  permutations/combinations, no matrices anywhere (those hits were false
  positives: "decision matrix" prose, "derivative" as a vocab word — which
  is legitimate SAT vocabulary).

## E. Recommended remediation order (awaiting owner go-ahead)
1. Probability/statistics rewrite (A2+A3): ~4 exit-quiz banks + 6 lesson
   parts → words-from-tables style; delete E(X)/SD-formula items; add
   margin-of-error/study-design items. Diagnostic auto-heals.
2. Complex numbers decision (A1): retire topic (redistribute deck/quiz slots
   to Geometry & Trig, which is thin) or label "beyond the SAT".
3. Log questions out of nonlinear bank (A4) — quick.
4. Category renames to digital SAT domains (C) — display + class-plan labels.
5. R&W: convert the 30 definitional stems to passage-based items;
   `sat-reading-bank` overhaul to words-in-context (largest R&W lift).
6. Regenerate SAT slide decks + rerun flashcard supplement for touched topics.
