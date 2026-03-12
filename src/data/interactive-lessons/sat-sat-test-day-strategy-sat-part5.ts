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
    }
  ]
};
