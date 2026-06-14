export const mcatTestDayPart4Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td4-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 4 of 7 — Guessing & Elimination Strategies**

### Process of Elimination (POE)

The #1 strategy for difficult MCAT questions:

1. **Read the question stem carefully** — what is ACTUALLY being asked?
2. **Eliminate obviously wrong answers** (usually 1-2 can be eliminated quickly)
3. **Compare remaining choices** — what's the KEY difference between them?
4. **Choose the BEST answer** — not just a correct statement, but one that answers the question

### Common Wrong Answer Traps

| Trap | Description | How to Spot |
|------|------------|------------|
| Too specific | Correct for one detail but misses the big picture | Mentions only one part of a complex answer |
| Too broad | Technically true but not specific enough | Very general statement |
| Opposite | Reverses the correct relationship | Double-check cause/effect direction |
| Out of scope | True statement but not relevant to the passage | Doesn't connect to the experiment/passage |
| Extreme | Uses absolutes (always, never, all, none) | Look for qualifying language |

### 50/50 Strategy

When stuck between two choices:
- Re-read the question stem (often reveals which answer actually addresses the question)
- Check if one answer requires an assumption not supported by the passage
- Go with the less extreme/more nuanced option
- When in doubt, go with your first instinct`
    },
    {
      id: 'td4-worked',
      type: 'text' as const,
      content: `### Worked Example — The Math Behind "Always Guess"

The MCAT has **no penalty for wrong answers**, so a blank and a wrong answer score the same: zero. That single fact drives every guessing decision.

**Step 1 — Compute the value of a blind guess.** With 4 choices, a random pick is right $\\frac{1}{4} = 25\\%$ of the time. Over the ~20 hardest questions you might otherwise leave blank, that's about $0.25 \\times 20 = 5$ extra correct answers — for free.

**Step 2 — Compute the value of eliminating one choice.** Knock out one option and a guess among the remaining three is right $\\frac{1}{3} \\approx 33\\%$ of the time. Eliminate two and you're at $\\frac{1}{2} = 50\\%$. Every elimination measurably raises your expected score.

**Step 3 — Apply the rule in real time.** Down to two choices with the clock running? Guessing yields a 50% expected gain on that item versus 0% if you stall and run out of time elsewhere. **Lock in a choice, flag it, move on.**

**Step 4 — Never leave a blank.** In the final 30 seconds of a section, fill in *every* unanswered question with a single "guess letter." Even pure-random fills convert ~25% of those blanks into points at zero risk.

**Takeaway:** Because there's no penalty, the expected value of answering is always positive. Eliminate what you can to push your odds from 25% upward, but **answer everything, every time**.`
    },
    {
      id: 'td4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Elimination** 🎯`,
      exercise: {
        questions: [
          {
            question: `When choosing between two remaining answer choices on the MCAT, the BEST strategy is:`,
            options: [`Re-read the question stem to see which answer actually addresses what was asked`, `Always pick C`, `Choose the longer answer`, `Pick the first one you read`],
            correctAnswer: 0,
            explanation: `Most 50/50 mistakes happen because you're answering the wrong question. Re-reading the question stem often reveals one answer addresses the actual question while the other is a true statement about a different concept.`
          },
          {
            question: `On a four-option question with no penalty for wrong answers, the expected value of a pure blind guess is:`,
            options: [`About a 25% chance of a point — always better than leaving it blank`, `Zero, the same as a blank`, `Negative, because wrong answers are penalized`, `100%, because something must be right`],
            correctAnswer: 0,
            explanation: `With four choices, a random guess is correct ~25% of the time, and there is no penalty, so the expected value is positive. A blank scores zero, so you should never leave a question unanswered.`
          },
          {
            question: `Eliminating two of the four choices before guessing changes your odds of a correct answer to about:`,
            options: [`50% (a guess between the two remaining choices)`, `25%`, `33%`, `It does not change the odds`],
            correctAnswer: 0,
            explanation: `Removing two wrong options leaves two, so a guess is right ~50% of the time. Each elimination raises expected value: one out → ~33%, two out → 50%.`
          }
        ]
      }
    },
    {
      id: 'td4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Spotting Trap Answers** 🎯`,
      exercise: {
        questions: [
          {
            question: `An answer reads "This process never occurs in eukaryotic cells." The absolute word "never" most likely signals:`,
            options: [`An extreme-language trap — biological absolutes are usually wrong`, `A correct answer, because it is precise`, `An out-of-scope statement`, `A too-broad statement that is still correct`],
            correctAnswer: 0,
            explanation: `Absolutes like "never," "always," "all," and "none" rarely survive MCAT scrutiny because biology is full of exceptions. Favor qualified, nuanced wording unless the passage explicitly supports the absolute.`
          },
          {
            question: `A choice is factually true but describes a concept the question never asked about. This is the:`,
            options: [`Out-of-scope trap`, `Opposite trap`, `Extreme-language trap`, `Too-specific trap`],
            correctAnswer: 0,
            explanation: `An out-of-scope answer is a true statement that simply does not address the stem or connect to the passage. Matching the answer to exactly what was asked filters these out.`
          },
          {
            question: `Two answer choices state opposite cause-and-effect directions. The best defense against the "opposite" trap is to:`,
            options: [`Re-check which variable drives which, confirming the direction against the passage or your knowledge`, `Pick whichever is listed first`, `Assume the longer one is right`, `Choose the more extreme wording`],
            correctAnswer: 0,
            explanation: `Opposite traps reverse a relationship to catch hasty readers. Verifying the causal direction (which variable is independent, which is dependent) against the source distinguishes the correct statement from its mirror image.`
          }
        ]
      }
    },
    {
      id: 'td4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Process of Elimination is the #1 MCAT strategy
- There is NO penalty for guessing — a blind guess is worth ~25%, so never leave blanks
- Each elimination raises your odds: one out → ~33%, two out → 50%
- Common traps: too specific, too broad, opposite, out of scope, extreme
- When stuck 50/50: re-read the question stem and confirm direction`
    }
  ]
};
