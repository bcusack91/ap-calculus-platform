export const mcatTestDayPart2Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Study Planning

**Part 2 of 7 — Study Planning**

3-6 month study timeline is typical for most students.

Content review: 1-2 months; Practice passages: 2-3 months; Full-length tests: final month.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in study planning?',
            options: [
              '3-6 month study timeline is typical for most students',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: '3-6 month study timeline is typical for most students'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use spaced repetition (Anki) for high-yield facts and formulas.

**MCAT Tip:** Track your performance by topic to identify and target weak areas.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Strategy related to study planning?',
            options: [
              'Use spaced repetition (Anki) for high-yield facts and formulas',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Use spaced repetition (Anki) for high-yield facts and formulas'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Study Planning:',
            options: ['3-6 month study timeline is typical for most students', 'Content review: 1-2 months; Practice passages: 2-3 months; F', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Use spaced repetition (Anki) for high-yield facts and formul', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['3-6 month study timeline is typical for most students', 'Use spaced repetition (Anki) for high-yield facts and formul'],
        hint1: 'Think about study planning',
        hint2: 'Consider the MCAT application',
        explanation: '3-6 month study timeline is typical for most students. Use spaced repetition (Anki) for high-yield facts and formulas.'
      }
    }
  ]
}
