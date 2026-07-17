# WAVE 1 HANDOFF — Site-wide LaTeX Notation Conversion

**STATUS: COMPLETE (2026-07-17 afternoon).** Wave 1 is verified and shipped. This file is kept as the
record of what ran and as the playbook for future content passes. Wave 2 (symbolic-equivalence fixes,
worklist `scripts/content-integrity/symbolic_equiv_triaged.json`) runs in segments 2a–2d.

**Post-checkpoint verification results (all done locally, no agents):**
- `npx tsc --noEmit` clean; `npx next build` exit 0; notation rescan 47,179 → ~1,900 residual, all
  deliberate skips (CS `^`=XOR, currency `$`, runtime `${}` generators, rubric `keywords`).
- KaTeX render-validation of all 37,891 newly added spans (`scripts/content-integrity/katex_validate.mjs`):
  22 errors → 19 real fixes applied (chem `P_{O}_{2}`→`P_{O_2}` double-subscripts, physics `v_{2}_{f}`
  subscripts, calc-BC improper-integral split), 3 false positives ($$-display-block mis-pairing in the
  naive checker — real renderer fine).
- Raw-LaTeX-outside-$ sweep found 69 lines in the two AP Calculus competitive banks (authored raw
  pre-Wave-1, further garbled by the converter). Repaired deterministically: transposition/nesting fix
  script, outside-span symbol→unicode downgrade, hand-authored span wrapping (calc-bank), token-run
  wrapper (bc-bank). Detector now 0; ids/correctAnswer/option-counts byte-identical; line counts equal.
- **Renderer contract lesson (important for future passes):** interactive lessons and FRQ pages render
  via ReactMarkdown+remarkMath, where `\$` is a markdown escape (correct for currency). Entrance/exit
  quizzes and competitive banks render via renderRichText, which leaves `\$` literal (visible backslash —
  pre-existing cosmetic on a few stats-bank/word-problem lines; candidate follow-up: escape-aware `\$`
  handling in renderRichText). Never apply one surface's currency convention to the other.
- Pre-existing (baseline) span errors left as noted follow-ups: `\text{J/g·°C}` (`\cdotp` KaTeX gap) and
  `½` in text mode in chem/calc banks — these predate Wave 1 and fall back to raw-text display.

---

## Mission context

Owner greenlight (verbatim): *"Ok. This looks great. Let's do the site wide examination and fix."*
Two-wave plan, shipped as **separate reviewable commits**:

- **Wave 1 (this wave):** convert all plain-text/unicode math notation (`x²`, `√72`, `10^-19`, `H₂SO₄`…)
  to LaTeX `$...$` across all content families, rendered by the existing KaTeX pipelines
  (`renderRichText`/`MathText`). Baseline: **47,179 outside-$ occurrences in 1,213 files**
  (worklist: `scripts/content-integrity/scan_results.json`).
- **Wave 2 (NOT STARTED — do not start until Wave 1 is verified + committed):** fix the **428
  symbolic-equivalence flags** in `scripts/content-integrity/symbolic_equiv_triaged.json`:
  **107 SEVERE** (a distractor is algebraically equal to the keyed answer = real grading defects),
  **212 MINOR** (distractor==distractor), **47 INTENTIONAL** (factor-completely/GCF/EXCEPT pedagogy — skip
  with reasons), + 14 abs-domain caveats, 48 no-key-info. Fix pattern (user-approved on the SAT
  exponents-radicals quiz, commit `2e8e65df`): keep the keyed option text/position untouched; replace the
  equivalent distractor with a distinct plausible misconception; where "Simplify" is ambiguous, add an
  explicit instruction like "Write your answer using positive exponents."

Model quiz for both fix styles: `src/data/entrance-quizzes/sat-exponents-radicals-sat.ts` (already
converted + fixed + user-approved — **excluded from Wave 1 tooling**).

## Workflow run

- Run `wf_dbb17591-3f8`, task `whknbof6u` (background Workflow, phases Converter → Convert ×5 → Verify).
- Script archived at `scripts/content-integrity/latex-conversion-workflow.js`.
- Live journal: `~/.claude/projects/-Users-brendancusack-Desktop-AP-Calculus-Website---Ad-Revenue-Based/4be8135c-1de7-4df1-99d2-0a1e85fd5c91/subagents/workflows/wf_dbb17591-3f8/journal.jsonl`
  (each agent's full final report is in the `result` entries; per-agent transcripts `agent-<id>.jsonl` alongside).

## Agent status at checkpoint (all reports pulled from the journal — this IS the teammate progress report)

| Agent | Scope | Status | Result |
|---|---|---|---|
| `afae9327e10f5282f` Converter | authored `latex_convert.py` | **DONE** | Dry-run-only validation: physics2-bank 1824→0, exit-quiz em 919→0, chem lesson 191→0. String-literal-only lexer; code skeleton byte-identical. |
| `a11d47fad138c3e42` | `src/data/competitive-questions/**` | **DONE** | 16/19 files modified; 19,688→816 hits (residual = CS carets + conservative skips). 80-question auto-grade spot-check: ids/options-count/correctAnswer identical to HEAD. tsc exit 0. |
| `a5f86b512a6475961` | entrance-quizzes + diagnostics | **DONE** | entrance-quizzes 2,149→76; diagnostics 1,673→48. `sat-exponents-radicals-sat.ts` confirmed byte-unmodified. tsc clean. |
| `ab5d7711dd247b132` | exit-quizzes + `*-frq/**` | **DONE** | 32 files; 6,397→441. **Caught 3 hazards, all fixed:** (1) FRQ rubric `keywords` arrays restored byte-identical to HEAD (LaTeX would break `answer.includes(kw)` grading); (2) 12 runtime-template SAT/algebra exit-quiz files reverted to HEAD (`${}` interpolation inside `$...$` — converter must skip these); (3) 63 `\$n` newline-eating corruptions fixed (`\n` escape consumed). id/correctIndex/correctAnswer/points byte-identical to HEAD; odd-dollar unbalanced lines = 0. |
| `a7582d876c8fbd113` | mini-boss, daily-question, `*-practice`, mcat, **ap-reference-sheets.ts (hand)** | **DONE** | 48 auto files (946→~1, 200→0, 508→13, 129→5) + hand-rewrote `ap-reference-sheets.ts` AND updated `src/components/ReferenceSheetModal.tsx` (both `<li>` sites now render via MathText/KaTeX). KaTeX `throwOnError` validation: 365 spans, 0 errors. Mini-boss `correctAnswer` strings still byte-match their `isCorrect:true` option. tsc exit 0. |
| `a5857ab860ee854df` | `src/data/interactive-lessons/**` | **DONE** | 877 files, +7375/−7375 (1:1 lines); 14,857→279. Typed-answer guard: 47 `correctAnswer`/`acceptableAnswers` lines in input-box sections reverted to plain originals so free-text grading matches learner input (plan: `scripts/content-integrity/typed_revert_plan.json`). 162 dropdown answers re-verified against options. 2 corruptions found+fixed (nested `$`, `\n`-eaten). Skeleton byte-identical on all 877. tsc 0 errors. |
| `acb6d1bdba799fe2e` Verify | full rescan + tsc + spot-checks | **RUNNING at checkpoint** (started 12:54) | Result will land in journal.jsonl / task `whknbof6u` notification. If it never completes: re-run verification manually (commands below). |

**Combined expected residual:** ~1,660 of 47,179 (~96.5% cleared), all *deliberate* skips:
CS `^`=XOR (csp/csa), currency `$`, code-generator files, tokens the converter refuses to
partial-rewrite (whole-token-or-nothing rule). Residuals are safe — they render as before.

## Files changed (working tree, uncommitted at checkpoint time)

`git status` snapshot (1,128 entries): `scripts/content-integrity/wave1-artifacts/git-status-snapshot.txt`.
Summary:
- ~1,110 modified content files under `src/data/**` (competitive-questions, interactive-lessons,
  exit-quizzes, *-frq, entrance-quizzes, diagnostics, mini-boss, *-practice, *-daily-question,
  mcat, ap-reference-sheets.ts).
- `src/components/ReferenceSheetModal.tsx` — now renders formulas via MathText (agent a7582…).
- `src/components/DynamicInteractiveLessonRenderer.tsx` — **my pre-wave edit** (quiz explanation now
  `<MathText inline text={quiz.explanation} />` + import). Rides with the Wave 1 commit.
- Pre-existing untracked files (prisma/migrations/*, scripts/find-currency-collisions.ts,
  scripts/validate-lesson-grading.ts, src/app/api/email|notes|user/preferences, src/app/improvement-roadmap/,
  `src/data/precalculus-diagnostic 2.ts`) — **pre-date this wave, deliberately left uncommitted**.
  Note `precalculus-diagnostic 2.ts` is a stray duplicate that also got converted; harmless, tsc-clean.

## Toolchain (all in `scripts/content-integrity/`)

- `latex_convert.py` — the vetted converter. CLI: `--family <substr> | --files <substrs>`, `--dry-run`
  (default; `--write` to modify), `--diff`, `--examples`, `--scan-json <path>`. Safety design documented
  in the Converter agent's journal report. **Known gaps for future runs** (already compensated by hand):
  must skip FRQ rubric `keywords:` arrays, template literals building `$...$` via `${}`, and must not eat
  `\n`/`\t` escape letters.
- `math_notation_scan.py` + `scan_results.json` — notation scanner + Wave 1 baseline worklist (47,179).
- `scan_symbolic_equiv.py` + `symbolic_equiv_triaged.json` (+ raw `symbolic_equiv_results.json`) —
  sympy equivalence scanner + **the Wave 2 worklist**.
- `answer_audit.py`, `typed_revert.py` (+ `typed_revert_plan.json`), `dollar_parity.py`, `dd_check2/3.py`,
  `restore_keywords.py`, `struct_check.py`, `final_check.py`, `find_broken.py` — agents' verification/repair helpers.
- `wave1-artifacts/` — dry-run + write logs (il_dryrun/il_write), exit/frq diffs, scan progress,
  git-status snapshot. Can be deleted after Wave 1 ships.

## REMAINING WORK (in order)

1. **Wait for / reconcile the Verify agent** (`acb6d1bdba799fe2e`, task `whknbof6u`). Read its report from
   the journal. If it found breakage, fix before committing further.
2. **Manual verification (run regardless):**
   ```bash
   find .next -name "* 2.ts" -delete 2>/dev/null   # stray-dup tsc gotcha
   npx tsc --noEmit                                 # must be clean
   npx next build                                   # run as background task; 10-min Bash timeout will kill it inline
   python3 scripts/content-integrity/math_notation_scan.py   # residual should be ~1,660, all in skip categories
   git diff --name-only | grep -v '^src/data/' | grep -v scripts/content-integrity
   #   → should show ONLY the 2 component files listed above
   ```
   Spot-check in browser: an interactive lesson (chemistry electron config), a competitive bank question,
   an exit quiz, an FRQ page, the reference-sheet modal, and one SAT runtime-template quiz (should be unchanged).
3. **Finalize commit:** amend/replace the WIP checkpoint commit (see below) with the real Wave 1 commit
   message, then push. **The WIP checkpoint commit was NOT pushed.**
4. **Then Wave 2** (spec at top). Fix SEVERE first, re-run `scan_symbolic_equiv.py`, tsc + build,
   separate commit/push.

## Checkpoint commit

A WIP checkpoint commit labeled `WIP CHECKPOINT (not verified — do not deploy)` was created on `main`
**without pushing**, so all agent work is recoverable. Options on resume:
- Verify passed → `git commit --amend` with the real message (or soft-reset and recommit) → push.
- Verify failed → fix on top, squash into one clean Wave 1 commit → push.
- Catastrophic → `git reset --hard 2e8e65df` returns to the last pushed, user-approved state.

## Unresolved concerns

- Verify agent outcome unknown at checkpoint (everything above is per-agent self-verification; each ran
  tsc + structural checks independently and all were green).
- `npx next build` has NOT yet run over the union of all agents' changes.
- One agent observed transient tsc errors in `ReferenceSheetModal.tsx` mid-flight; the owning agent's
  final state reported tsc exit 0 — re-check with the union tsc run.
- Renderer verification for `ap-reference-sheets.ts` was KaTeX-in-node, not a browser; eyeball the modal.

## Standing constraints (verbatim from session)

- Commit/push to `main` is authorized (standing). NEVER print secret values (`.env` has prod Neon creds).
- Prod DB schema changes need explicit per-action authorization. (Not relevant to Waves 1–2 — data-only.)
- Commit trailer: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
