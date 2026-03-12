export const mcatTestDayPart6Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td6-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 6 of 7 — Score Improvement & Practice Exam Analysis**

### How to Review Practice Exams

For EVERY question (right and wrong), ask:

1. **Why is the right answer right?** Understand the reasoning
2. **Why is each wrong answer wrong?** Identify the trap
3. **Did I use passage info or outside knowledge?** Know the question type
4. **What content gap does this reveal?** Add to study list

### Tracking Your Progress

Keep a log for each practice exam:
- **Score by section**: Identify strongest and weakest sections
- **Score by topic**: Find specific content gaps (e.g., "I miss 60% of operon questions")
- **Error type**: Content gap? Misread question? Ran out of time? Careless mistake?

### Error Categories

| Error Type | Fix |
|-----------|-----|
| Content gap | Study the topic, make flashcards |
| Misread question | Practice reading question stems carefully |
| Time pressure | Do timed passage practice |
| Careless mistake | Slow down on "easy" questions, double-check |
| Test anxiety | Practice under simulated conditions |

### Score Plateaus

If your score stops improving:
- Focus on weakest topic areas (biggest point gains)
- Do more practice passages, fewer content reviews
- Analyze error patterns — are you making the same mistakes?
- Take a day off — rest can improve performance`
    },
    {
      id: 'td6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Score Improvement** 🎯`,
      exercise: {
        questions: [
          {
            question: `You consistently get questions right when reviewing them calmly but miss them during timed practice. Your main issue is:`,
            options: [`Time pressure and test anxiety — practice more under timed, simulated conditions`, `A content gap`, `Bad luck`, `The questions are unfair`],
            correctAnswer: 0,
            explanation: `If you can answer correctly without time pressure, you have the knowledge. The issue is performance under pressure. The fix: more timed practice under real conditions, deep breathing strategies, and building familiarity with the time constraints.`
          }
        ]
      }
    },
    {
      id: 'td6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Review EVERY practice question — right AND wrong
- Categorize errors: content, misread, time pressure, careless, anxiety
- Track scores by section AND topic to find specific gaps
- At a plateau? Focus on weakest areas for biggest point gains`
    }
  ]
};
