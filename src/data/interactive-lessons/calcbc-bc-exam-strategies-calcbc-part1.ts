export const calcbcExamStrategyPart1Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str1-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 1 of 7 — Exam Structure & Time Management**

### AP Calculus BC Format

| Section | Questions | Time | Calculator? |
|---------|-----------|------|-------------|
| MC Part A | 30 | 60 min | No |
| MC Part B | 15 | 45 min | Yes |
| FRQ 1-2 | 2 | 30 min | Yes |
| FRQ 3-6 | 4 | 60 min | No |

### Time Strategy

- MC: ~2 min per question (skip and return)
- FRQ: ~15 min each (show ALL work)
- No penalty for guessing on MC`
    },
    {
      id: 'str1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exam Format** 🎯',
      exercise: {
        questions: [
          {
            question: 'What percentage of the BC exam is calculator-active?',
            options: ['About 40% (Part B MC + FRQ 1-2)', 'About 50%', 'About 25%', 'About 75%'],
            correctAnswer: 0,
            explanation: 'Calculator: 45 min MC + 30 min FRQ = 75 min out of ~195 min total, roughly 38-40%.'
          }
        ]
      }
    },
    {
      id: 'str1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Know the format. Time yourself. Show all work on FRQs.`
    }
  ]
};
