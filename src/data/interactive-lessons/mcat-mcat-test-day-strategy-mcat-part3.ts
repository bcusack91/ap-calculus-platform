export const mcatTestDayPart3Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td3-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 3 of 7 — Study Planning**

### Recommended Study Timeline

| Duration | Approach | Best For |
|----------|---------|----------|
| 3 months | Intensive, full-time | Post-graduation, summer |
| 6 months | Part-time alongside classes | During school year |
| 12 months | Gradual, with classes | Early planners |

### Three Phases of MCAT Prep

**Phase 1 — Content Review** (~40% of study time):
- Textbooks, videos, notes
- Focus on understanding, not memorization
- Build concept maps connecting topics

**Phase 2 — Practice Problems** (~30% of study time):
- Section-bank style questions
- Timed passage practice
- Identify weak areas

**Phase 3 — Full-Length Exams** (~30% of study time):
- Take at least 5-8 full-length practice exams
- Simulate real conditions (timed, no interruptions)
- Review EVERY question (right and wrong)

### Spaced Repetition

- Review material at increasing intervals (1 day, 3 days, 7 days, 14 days)
- Anki flashcards for high-yield facts
- Focus on weakest topics during review sessions`
    },
    {
      id: 'td3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Study Planning** 🎯`,
      exercise: {
        questions: [
          {
            question: `The most effective way to identify weak areas in MCAT prep is:`,
            options: [`Regular practice tests with thorough review of both correct AND incorrect answers`, `Reading textbooks cover to cover`, `Memorizing flashcards only`, `Studying the same topics repeatedly`],
            correctAnswer: 0,
            explanation: `Practice tests reveal what you actually know vs. what you think you know. Reviewing correct answers shows your reasoning was right. Reviewing incorrect answers identifies gaps. Both are equally important for improvement.`
          }
        ]
      }
    },
    {
      id: 'td3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Three phases: Content Review → Practice Problems → Full-Length Exams
- Take 5-8 full-length practice exams under realistic conditions
- Spaced repetition builds long-term retention
- Review EVERY practice question — even ones you got right`
    }
  ]
};
