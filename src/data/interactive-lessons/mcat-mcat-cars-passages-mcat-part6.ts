export const mcatCarsPsgPart6Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Time Management

**Part 6 of 7 — Time Management**

10 minutes per passage (9 passages x 10 min = 90 min total).

Spend ~4 minutes reading, ~6 minutes answering the ~6 questions.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in time management?',
            options: [
              '10 minutes per passage (9 passages x 10 min = 90 min total)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: '10 minutes per passage (9 passages x 10 min = 90 min total)'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If stuck on a question for >90 seconds, flag it and move on.

**MCAT Tip:** Do all passages — there is no penalty for wrong answers, never leave blanks.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to time management?',
            options: [
              'If stuck on a question for >90 seconds, flag it and move on',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'If stuck on a question for >90 seconds, flag it and move on'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Time Management:',
            options: ['10 minutes per passage (9 passages x 10 min = 90 min total)', 'Spend ~4 minutes reading, ~6 minutes answering the ~6 questi', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['If stuck on a question for >90 seconds, flag it and move on', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['10 minutes per passage (9 passages x 10 min = 90 min total)', 'If stuck on a question for >90 seconds, flag it and move on'],
        hint1: 'Think about time management',
        hint2: 'Consider the MCAT application',
        explanation: '10 minutes per passage (9 passages x 10 min = 90 min total). If stuck on a question for >90 seconds, flag it and move on.'
      }
    }
  ]
}
