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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Content review',
            options: ['Track your performance by topic to identify and target weak areas.', '1-2 months; Practice passages: 2-3 months; Full-length tests: final month.', '3-6 month study timeline is typical for most students.', 'Use spaced repetition (Anki) for high-yield facts and formulas.']
          },
          {
            label: 'Key Insight',
            options: ['3-6 month study timeline is typical for most students.', 'Track your performance by topic to identify and target weak areas.', '1-2 months; Practice passages: 2-3 months; Full-length tests: final month.', 'Use spaced repetition (Anki) for high-yield facts and formulas.']
          },
          {
            label: 'MCAT Tip',
            options: ['Use spaced repetition (Anki) for high-yield facts and formulas.', '1-2 months; Practice passages: 2-3 months; Full-length tests: final month.', 'Track your performance by topic to identify and target weak areas.', '3-6 month study timeline is typical for most students.']
          }
        ],
        correctAnswers: ['1-2 months; Practice passages: 2-3 months; Full-length tests: final month.', 'Use spaced repetition (Anki) for high-yield facts and formulas.', 'Track your performance by topic to identify and target weak areas.'],
        hint1: 'Think about what each concept specifically describes in Study Planning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Study Planning describes a specific idea. Content review: 1-2 months; Practice passages: 2-3 months; Full-length tests: final month. Key Insight: Use spaced repetition (Anki) for high-yield facts and formulas. MCAT Tip: Track your performance by topic to identify and target weak areas.'
      }
    }
  ]
}
