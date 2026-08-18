# MCAT Content Congruence Audit — 2026-08-17

> **STATUS: REMEDIATED (same day, commits 100684ca + follow-ups).**
> F1: exit quizzes now merge the authored competitive bank (181 → ~2,400
> questions; subtopic-tag exact tier + aliases; pull() stem-dedupe).
> F2: 11 duplicate cards deleted, 5 re-homed, 5 survey replacements.
> F3: CARS 12 → 16 passages (+24 questions, keys position-distributed,
> needsReview pending adversarial pass). F5: 20 "refers to:" stems →
> "best describes", LDA + derivative items fixed. PLUS (owner follow-up):
> first 24 cloze-deletion cards seeded ({{c1::}} format, UI pre-existing)
> and deck expanded 880 → 1,322 cards via aligned quiz pools (TARGET=15).
> MCAT slide decks regenerated. F4 (boilerplate textContent) remains open.

Owner-requested audit (companion to SAT-CONTENT-AUDIT.md): are questions
MCAT-style, do flashcards align with their topics, does everything render?
Read-only findings; no fixes applied. Scan tooling:
`scripts/audit-mcat-congruence.ts`, `scripts/verify-mcat-exit-quizzes.ts`
(both rerunnable), plus the existing `verify-mcat-questions.ts` and
`audit-flashcards.ts` replays.

Surfaces: 10 area exit-quiz banks, 12 competitive question files (2,273
questions), 176 interactive lesson files, diagnostic generators, 42 passages
(30 science + 12 CARS), full-length forms, daily question, and DB content
(101 topics, 880 flashcards, example problems).

## Verdict: the MCAT estate is in far better shape than the SAT was

Runtime verification (not file heuristics — actual generation + KaTeX
compilation of every math segment):
- **Rendering: clean.** All 880 MCAT flashcards replay through the real
  render pipeline with zero flags (of 16 platform-wide flags, none are
  MCAT). 1,437 math segments in the competitive bank and every segment in
  the exit-quiz banks compile without error. Lesson files: the flagged
  ampersands are legal `\begin{cases}` alignment — false positives.
- **Question structure: clean.** Every question at runtime has exactly 4
  options and a valid answer index (the MCAT's format). No true/false, no
  "All of the above", no duplicate stems (verify tool). No calculus
  requirement in physics (one conceptual "limit of average velocity" stem —
  acceptable; its explanation name-drops "derivative", could be softened).
- **Style mix: acceptable.** Truly definitional recall stems are ~4-5% of
  both banks; the rest are scenario, computational, or fragment-completion
  stems. Real MCAT discretes include direct-knowledge items, so this mix is
  defensible. A small psych/soc cluster of "X refers to:" drills (~10) and
  one "What does LDA stand for" are the weakest stems.
- **Coverage: strong.** Zero thin flashcard topics (≤3 cards) across all
  101 MCAT topics. Competitive bank: 55 subtopics, all ≥40 questions.

## Findings (ranked)

### F1. Exit quizzes are shallow relative to the competitive bank — HIGH VALUE FIX
The 10 area exit-quiz banks total **181 questions** (~18 per area). After
subtopic filtering (mcat-subtopic-pool), many subtopic exit quizzes serve
3-5 questions — while the competitive bank holds **2,273 KaTeX-verified,
subtopic-tagged questions (≥40 per subtopic)** that exit quizzes never
touch. Since exit quizzes grade homework, gate retakes, and feed slide-deck
polls and flashcard supplements, sourcing them from the competitive pools
(mcat-bank's `pull()` already merges both) would be a ~12x depth upgrade
with zero new authoring. Seeded-regrade caveat applies (in-flight quizzes
fall back to client grading during deploy).

### F2. Sibling-topic flashcard duplication — MODERATE
The subtopic-map classifier cross-checked all 880 cards against their
topics. Most "bleed" is parent/child (CARS strategy cards classified to the
CARS area — fine) or genuine conceptual overlap (carb metabolism ↔
bioenergetics). The real case: **functional-groups holds ~6 carbonyl-
mechanism cards that near-duplicate the carbonyls topic's own cards**
(aldol condensation, keto-enol tautomers, alpha-carbon acidity appear on
BOTH). A student studying both decks reviews near-identical cards twice
(the SRS treats them as unrelated). Smaller overlaps: organelles ↔
membrane-transport/cell-cycle (~6 cards). Fix: replace the duplicated
functional-groups cards with survey-level cards (recognition, naming,
properties) — ~10 card edits total.

### F3. CARS passage inventory is thin — CONTENT GAP
12 CARS passages (6 humanities + 6 social science) back the CARS practice
page. Fine for launch; a serious CARS student exhausts them in 2-3
sessions. The CARS subtopic quizzes deliberately use discrete skill
questions (owner decision, July) — that stands, but passage AUTHORING is
the real CARS depth lever. Science passages: 30 across C/P, B/B, P/S.

### F4. Subtopic lesson text in DB is boilerplate — KNOWN/COSMETIC
The 77 MCAT subtopics' DB textContent is the generic "Why This Matters /
Study Checklist" template (decks strip it since commit ce6e83cf; topic
pages still show it). The real teaching lives in the interactive lessons,
which are substantive. Unchanged from previous findings.

### F5. Minor style items
- "What does LDA stand for?" (competitive, carbonyls) → reword to reaction
  application.
- ~10 psych "X refers to:" recall drills → tolerable in game mode; convert
  opportunistically.
- Instantaneous-velocity explanation mentions "derivative" → soften to
  "slope of the position-time graph".

## Recommended order
1. F1 exit-quiz depth via competitive pools (biggest student impact, no
   authoring).
2. F2 card dedupe (~10 cards, one script).
3. F5 minor stems (minutes).
4. F3 CARS passages (authoring project — schedule separately).
5. F4 optional: replace subtopic boilerplate textContent with real summaries.
