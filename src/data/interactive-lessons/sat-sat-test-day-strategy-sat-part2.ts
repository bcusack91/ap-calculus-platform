export const satTestDayPart2Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t2-intro',
      type: 'text' as const,
      content: `
# Process of Elimination

**Part 2 of 7 — Process of Elimination**

Eliminate wrong answers before guessing.

On math: estimate to eliminate impossible answers.
      `
    },
    {
      id: 'sat-t2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes eliminate wrong answers before guessing?',
            options: [
              'Eliminate wrong answers before guessing is a fundamental concept in SAT Math',
              'On math: estimate to eliminate impossible answers',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate wrong answers before guessing'
          }
        ]
      }
    },
    {
      id: 'sat-t2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** On reading: eliminate answers that are too extreme, unsupported, or opposite.

**SAT Tip:** Usually 2 answers are clearly wrong, leaving a 50/50 guess.
      `
    },
    {
      id: 'sat-t2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for process of elimination?',
            options: [
              'On reading: eliminate answers that are too extreme, unsupported, or opposite',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'On reading: eliminate answers that are too extreme, unsupported, or opposite'
          }
        ]
      }
    },
    {
      id: 'sat-t2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Process of Elimination:',
            options: ['Eliminate wrong answers before guessing', 'On math: estimate to eliminate impossible answers', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['On reading: eliminate answers that are too extreme', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Eliminate wrong answers before guessing', 'On reading: eliminate answers that are too extreme'],
        hint1: 'Think about process of elimination',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Eliminate wrong answers before guessing. On reading: eliminate answers that are too extreme, unsupported, or opposite.'
      }
    }
  ]
}
