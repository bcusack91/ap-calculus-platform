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
          }
        ]
      }
    },
    {
      id: 'td4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Process of Elimination is the #1 MCAT strategy
- Common traps: too specific, too broad, opposite, out of scope, extreme
- When stuck 50/50: re-read the question stem
- Answer EVERY question — there is no penalty for guessing`
    }
  ]
};
