export const mcatTestDayPart2Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td2-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 2 of 7 — Time Management**

### Pacing Strategy

| Passage Type | Reading | Questions | Total |
|-------------|---------|-----------|-------|
| Science (5-7 questions) | 2-3 min | 1 min each | ~8-9 min |
| CARS (5-7 questions) | 3-4 min | 1-1.5 min each | ~10 min |
| Discrete (standalone) | N/A | ~1 min | ~1 min |

### Time Checkpoints

For a 59-question science section (95 minutes):
- After 5 passages (~25 questions): ~40 minutes used
- After 8 passages (~45 questions): ~70 minutes used
- Last 14 questions (discretes + final passage): ~25 minutes

### When to Move On

Move on if you've spent 2+ minutes on a single question:
1. Eliminate what you can
2. Flag the question
3. Pick your best guess
4. Move on confidently — you can return later

### Flag Strategy

- **Flag**: Any question you're unsure about
- **Don't flag everything**: Only flag questions where you narrowed to 2 choices
- **Review time**: Plan 5-10 minutes at the end for flagged questions
- Often your first instinct is correct — don't change unless you have a clear reason`
    },
    {
      id: 'td2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Time Management** 🎯`,
      exercise: {
        questions: [
          {
            question: `You've been stuck on a question for 2 minutes and can't decide between two answers. The best strategy is:`,
            options: [`Pick your best guess, flag it, and move on — protecting time for remaining questions`, `Keep working until you figure it out`, `Skip it without answering`, `Close your eyes and pick randomly`],
            correctAnswer: 0,
            explanation: `Every question is worth the same amount. Spending 4+ minutes on one hard question costs you easy questions later. Always answer something (no penalty for guessing), flag it, and move on. Your first instinct is often correct.`
          }
        ]
      }
    },
    {
      id: 'td2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- ~8-9 minutes per science passage (reading + questions)
- Never spend more than 2 minutes on a single question
- Always answer before moving on (no penalty for wrong answers)
- Flag judiciously — save 5-10 minutes for review`
    }
  ]
};
