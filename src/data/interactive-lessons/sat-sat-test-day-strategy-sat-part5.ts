export const satTestDayStrategyPart5Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds5-intro',
      type: 'text' as const,
      content: `# Strategic Elimination & Guessing

**Part 5 of 7 — When You're Stuck**

### Process of Elimination (POE)
Even if you can't find the right answer, you can often eliminate 2-3 wrong ones:

**Math POE:**
- Estimate — if the answer should be about 50, eliminate 5 and 500
- Check units — answer needs to be in meters? Eliminate non-meter options
- Check sign — expecting a positive answer? Eliminate negatives
- Reasonableness — can a person be 50 feet tall? No.

**R&W POE:**
- **Too extreme** — words like "always", "never", "completely" are usually wrong
- **Half-right** — the choice starts correctly but ends with something unsupported
- **Out of scope** — the choice discusses something the passage never mentions
- **Opposite** — the choice says the opposite of what the passage states

### Guessing Strategy
**There is NO penalty for guessing on the Digital SAT.** Never leave a question blank.

If you can eliminate:
- 0 choices: 25% chance of guessing correctly (still guess!)
- 1 choice: 33% chance
- 2 choices: 50% chance
- 3 choices: 100% (it's the remaining one)

### "Letter of the Day"
If you must guess randomly on multiple questions, pick the same letter for all of them. Statistically, you'll get about 25% right (same as random, but faster).`
    },
    {
      id: 'tds5-q1',
      type: 'quiz' as const,
      question: 'On the Digital SAT, if you cannot solve a problem and have 15 seconds left in the module, you should:',
      options: [
        'Leave it blank — wrong answers are penalized',
        'Guess randomly — there is no penalty for wrong answers',
        'Choose the longest answer — it is usually correct',
        'Choose A — it is the most common correct answer'
      ],
      correctAnswer: 1,
      explanation: 'The Digital SAT has NO wrong-answer penalty. Always guess rather than leaving a question blank. Even a random guess gives you a 25% chance. If you can eliminate even one choice, your odds improve to 33%.'
    },
    {
      id: 'tds5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Advanced Elimination Techniques

### Worked Example 1: Math POE in Action

| Step | Work |
|---|---|
| **Problem** | "A rectangle's area is 84 $cm^{2}$. Its length is 5 more than its width. What is the width?" |
| **Choices** | A) 5 B) 7 C) 12 D) 17 |
| **Estimate** | Width × (width + 5) = 84. Width ≈ $\\sqrt{84}$ ≈ 9. So width < 9. |
| **Eliminate** | C) 12 and D) 17 are too large ❌ |
| **Test B** | $7 \\times 12 = 84$ ✅ |
| **Answer** | B) 7 |

### Worked Example 2: R&W POE Breakdown

| Choice | Analysis | Verdict |
|---|---|---|
| A) "The author enthusiastically endorses the new policy" | "Enthusiastically" is too strong — passage says "cautiously supports" | ❌ Too extreme |
| B) "The author presents evidence both for and against the policy" | Passage only gives supporting evidence | ❌ Half-right |
| C) "The author cautiously supports the policy while noting limitations" | Matches tone and content | ✅ Correct |
| D) "The author discusses immigration reform" | Passage is about education policy | ❌ Out of scope |

### Probability of Correct Guess After Elimination

| Choices Eliminated | Remaining | Probability | Expected Points (out of 4 such Qs) |
|---|---|---|---|
| 0 | 4 | 25% | 1.0 |
| 1 | 3 | 33% | 1.3 |
| 2 | 2 | 50% | 2.0 |
| 3 | 1 | 100% | 4.0 |

### Common Wrong Answer Patterns

| Pattern | Math Example | R&W Example |
|---|---|---|
| Right process, sign error | Answer is $-3$ but $3$ is a choice | — |
| Solves for wrong variable | Asked for $y$, solved for $x$ | — |
| Partial calculation | Finds rate but doesn't multiply by time | — |
| Opposite tone | — | Passage is positive, answer is negative |
| True but irrelevant | — | Statement is true but doesn't answer the question |`
    },
    {
      id: 'tds5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Elimination Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'You can eliminate 2 of 4 answer choices. Your probability of guessing correctly is:',
            options: ['25%', '33%', '50%', '75%'],
            correctAnswer: 2,
            explanation: 'With 2 eliminated, you have 2 remaining choices. Random guess between 2 = 1/2 = 50%.'
          },
          {
            question: 'On the SAT, "Letter of the Day" means:',
            options: ['Always choosing the longest answer', 'Picking the same letter for all random guesses', 'Reading every answer choice carefully', 'Skipping questions you cannot answer'],
            correctAnswer: 1,
            explanation: '"Letter of the Day" is a time-saving strategy: if you must randomly guess on multiple questions, pick the same letter (e.g., C) for all of them. Statistically, you\'ll get ~25% right, same as random but faster.'
          },
          {
            question: 'A Math answer should be positive (you\'re finding a length). Choices are: A) $-8$ B) $3$ C) $8$ D) $15$. Which can you eliminate immediately?',
            options: ['A only', 'A and D', 'B and C', 'None — you need to calculate'],
            correctAnswer: 0,
            explanation: 'Lengths must be positive, so A) $-8$ is impossible. You cannot eliminate D) $15$ just because it\'s large — without calculating, it could be correct.'
          }
        ]
      }
    },
    {
      id: 'tds5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Elimination Quick Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'SAT wrong-answer penalty = [none|−¼ point|−½ point|−1 point]',
          '"Always," "never," "completely" in R&W answers are usually [wrong|correct|neutral|tricky]',
          'If you must guess randomly on 4 questions, the best strategy is [same letter for all|random each time|skip them|alternate A-B-C-D]',
          'Eliminating 1 choice raises your odds from 25% to [33%|50%|75%|100%]'
        ],
        correctAnswers: ['none', 'wrong', 'same letter for all', '33%'],
        hint1: 'The Digital SAT has no penalty for incorrect answers.',
        hint2: 'Extreme language usually overstates what the passage says.',
        hint3: 'Same letter = same expected value as random, but saves time.',
        explanation: 'No penalty → always guess. Extreme words are usually wrong. Same letter is fastest for random guessing. Eliminating 1 of 4 leaves 3 choices = 33%.'
      }
    },
    {
      id: 'tds5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Strategy | Detail |
|---|---|
| Always guess | No penalty — never leave blanks |
| Math POE | Estimate, check sign/units, reasonableness |
| R&W POE | Too extreme, half-right, out of scope, opposite |
| Eliminate 2 | 50% chance of correct guess |
| Letter of the Day | Same letter for all random guesses |
| Common traps | Sign errors, wrong variable, partial calculation |

*Next: The Week Before Test Day →*`
    }
  ]
};
