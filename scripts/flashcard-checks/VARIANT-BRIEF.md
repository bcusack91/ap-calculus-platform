# Writing FURTHER card-check questions (brief for an author)

You are writing MCAT multiple-choice questions for StudyMondo, a study site. Work in this repo. Do NOT commit, push, or touch any file other than the one output file named in your task.

## Why
Students review flashcards, then take a short quiz ("card check") on the cards they reviewed that day. Every card already has ONE check question. Students meet the same card again and again, and the results screen shows the answer, so one question per card can be memorised. Each card therefore gets further questions; the site asks whichever one the student has seen least recently.

## Inputs for a part `<part>` (looks like `<set>.p2`) in the context folder `SP`
- `SP/<part>-cards.json`: the cards of your part: `front`, `back`, and `firstQuestion` (the question the card already has, with its options and its `correct` option).
- `SP/<set>-existing-questions.json`: every other question students already meet on this topic. Yours must be clearly different from all of them (not a rewording).
- Types: `src/lib/flashcard-check-core.ts` (`CardCheck`, `CardCheckVariants`).

## Step 1: decide each card's kind
- `calc`: the card is something a student uses to CALCULATE a number: an equation, a rearrangement, a unit conversion, a numerical rule or procedure (for example "Write current as an equation", "How do resistors in series add?", "What is the time constant of an RC circuit?"). Write **6** further questions.
- `concept`: everything else: a definition, a symbol or unit, a direction or sign convention, a qualitative comparison, a "what happens if" with no numbers, a common trap stated in words. Write **2** further questions.
- When a card states a quantitative relationship that can fairly be turned into a head-arithmetic problem, call it `calc`. Do not call a card `concept` to save work, and do not force numbers onto a card whose idea is not numerical.

## Step 2: write the further questions
**calc cards (6 more, 7 with the first):** every question is a calculation that uses the card's relationship. Vary them deliberately:
- different numbers in EVERY question, so every question has a different correct answer;
- a different setting each time (devices, the body, the lab, everyday objects);
- across the six, change what is asked: solve for each of the different variables at least once where the equation allows, include one with a unit conversion or a power of ten, and one "by what factor does it change" ratio question if it fits;
- the wrong options come from the card's typical mistakes worked with THIS question's numbers (inverting the ratio, skipping a unit conversion, adding instead of multiplying, forgetting a square, and so on).

**concept cards (2 more, 3 with the first):** the same idea from a clearly different ANGLE than the first question and than each other. Useful angles: classify a newly described case; pick the correct line of working or the one incorrect statement; reverse the direction (given the result, what was the cause); predict what changes when one thing changes; apply it in a different context. The correct answer must be different text from the first question's correct answer.

## Output: one file
`src/data/flashcard-checks/variants/<part>.ts`:

```ts
import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `<set>`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`<the card's front, copied EXACTLY, including {{c1::...}} and $...$>`]: {
    kind: 'calc',
    more: [
      {
        question: r`...`,
        options: [r`...`, r`...`, r`...`, r`...`],
        correctAnswer: 2,
        explanation: r`...`,
      },
      // five more
    ],
  },
}
```
Keys must match the card fronts character for character. JSON escapes backslashes, so `\\Delta` in the JSON is `\Delta` inside the `r` template. A front containing a backtick or `${` cannot go in an `r` template: use a normal quoted string for that key and escape it correctly. Keep the cards' order. Write the file in several passes if it is long (create it with the first cards, then append), so no single write is huge.

## Question rules (the validator enforces most of them)
1. Exactly 4 distinct options, one correct, `correctAnswer` 0–3. No "all/none of the above".
2. NO ANSWER-LENGTH TELL. The four options are about the same length and built on the same frame. The correct option must not be the longest by more than ~15% nor the shortest by more than ~20%.
3. Spread the correct position evenly: over the whole file each of positions 0–3 holds 18–32% of the correct answers, with no pattern inside a card.
4. Every distractor is definitely wrong and the keyed answer unambiguously right. Distractors are the specific wrong answers a confused student would produce.
5. Apply, don't recall: never just restate the card.
6. No calculator: clean numbers, head arithmetic. Work every calculation twice, including unit conversions and powers of ten. Keep significant figures sensible.
7. Self-contained: state every value needed (constants included). Describe any circuit, graph or setup fully in words; no figure is shown. Test THAT card's idea, not another card's.
8. Stay at MCAT level and within what the card and its topic teach. Physically sensible values.
9. `explanation`: 2–4 sentences, at least 80 characters. Why the right answer is right (show the working for a calculation), then what mistake each wrong option comes from. NEVER refer to options by letter or position (they are shuffled): quote or describe them.
10. Style: plain, direct sentences. Exam-neutral: do not write "MCAT" or "AAMC". No em dashes. Math as the cards write it: Unicode for simple things (Ω, μ, ×, ², ⁻¹⁹, Na⁺) or `$...$` KaTeX; both render. In `r` templates write single backslashes for LaTeX.
10a. Standard vocabulary: say "in series" and "in parallel" (never "side by side", "one after another", "between the same two rails" as a stand-in), and use the terms the card uses. Do not reword a question into unusual phrasing just to lower a similarity `warn`; a `warn` on a genuinely different question may stay. (Describing a layout in other words is right only when the question is ASKING the student to identify series or parallel.)
11. Question text at least 30 characters and never identical to the card front.
12. Within one card: no two questions (the first included) share their question text or their correct answer text.
13. If a card is wrong, or too thin to carry its number of fair questions, still write the best fair questions you can and list the card in your report. Never pad with a question whose keyed answer is doubtful.

## Verify before you finish
From the repo root:
```
npx tsx scripts/flashcard-checks/validate-variants.ts <part> "<SP>"
```
Fix every `ERROR` and rerun until it prints `OK`. Look at each `warn` and fix it unless the question is genuinely different. Then re-read every question as a solver: work each from scratch and confirm the keyed option is the only correct one.

## Report (under 150 words)
The validator's final summary line, and a short list of cards where a question may be unfair or the card itself looked wrong.
