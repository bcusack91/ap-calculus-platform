# Writing card-check questions (brief for an author)

You are writing MCAT multiple-choice questions for StudyMondo, a study site. Work in this repo. Do NOT commit, push, or touch any file other than the output file(s) named in your task.

## What a card check is
Students review flashcards, then take a short quiz on the cards they reviewed that day. The purpose is to catch students who press "Good" on a card because they recognise the answer but cannot actually use it. So write ONE question per card that makes the student APPLY the card's idea in a new concrete situation. Never just restate the card.

## Inputs for a set `<set>` (a topic slug) in the context folder `SP`
- `SP/<set>-cards.json`: the cards (`front`, `back`). Some fronts are fill-in-the-blank ("cloze") cards: the hidden answers are written `{{c1::answer}}`. Test the fact that is hidden.
- `SP/<set>-existing-questions.json`: every question students already meet on this topic. Yours must be CLEARLY DIFFERENT from all of them: a different scenario, different numbers, not a rewording.
- Type: `src/lib/flashcard-check-core.ts` (`CardCheck`).

## Output: one file per set
`src/data/flashcard-checks/topics/<set>.ts`:

```ts
import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `<set>`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`<the card's front, copied EXACTLY, including {{c1::...}} and $...$>`]: {
    question: r`...`,
    options: [r`...`, r`...`, r`...`, r`...`],
    correctAnswer: 2,
    explanation: r`...`,
  },
}
```
Keys must match the card fronts character for character. JSON escapes backslashes, so `\\Delta` in the JSON is `\Delta` inside the `r` template. A front containing a backtick or `${` cannot go in an `r` template: use a normal quoted string for that key and escape it correctly. If two cards have the same front, write one entry. Keep the cards' order.

## Question rules (the validator enforces most of them)
1. Exactly 4 distinct options, one correct, `correctAnswer` 0–3. No "all/none of the above".
2. NO ANSWER-LENGTH TELL. The four options must be about the same length and built on the same frame. The correct option must not be the longest by more than ~15% nor the shortest by more than ~20%.
3. Spread the correct position evenly: each of positions 0–3 holds 18–32% of the correct answers in the file. No pattern.
4. Distractors are the specific wrong answers a confused student would produce (the card's common trap: wrong sign, wrong unit conversion, inverse relationship flipped, confusing two similar terms, and so on). Every distractor must be definitely wrong and the keyed answer unambiguously right.
5. Apply, don't recall. Definition or symbol card: ask something that needs the idea in use (classify a described case, pick the correct line of working, predict what changes). Equation card: give numbers, or "what happens if X doubles". Method card: a short scenario where the method step decides the answer.
6. No calculator: clean numbers, head arithmetic. Double-check every calculation.
7. Self-contained: state every value needed (constants included). Describe any circuit, graph or setup fully in words; no figure is shown. Test THAT card's idea, not another card's.
8. Stay at MCAT level and within what the card and its topic teach.
9. `explanation`: 2–4 sentences, at least 80 characters. Why the right answer is right, then what mistake each wrong option comes from. NEVER refer to options by letter or position (they are shuffled): quote or describe them.
10. Style: plain, direct sentences. Exam-neutral: do not write "MCAT" or "AAMC". No em dashes. Math as the cards write it: Unicode for simple things (Ω, μ, ×, ², ⁻¹⁹, Na⁺) or `$...$` KaTeX; both render. In `r` templates write single backslashes for LaTeX.
11. Question text at least 30 characters and never identical to the card front.
12. If a card is wrong, a duplicate of another, or too thin to build a fair question on, still write the best fair question you can and list the card in your report.

## Verify before you finish
From the repo root, for each set:
```
npx tsx scripts/flashcard-checks/validate.ts <set> "<SP>"
```
Fix every `ERROR` and rerun until it prints `OK`. Look at each `warn` and fix it unless the question is genuinely different. Then re-read every question as a solver: work each from scratch and confirm the keyed option is the only correct one.

## Report (under 150 words)
The validator's final summary line for each set, and a short list of cards where the question may be unfair or the card itself looked wrong.
