export const actCoordGeomPart6Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Translation: shift graph horizontally or vertically.

Reflection: flip over x-axis (negate y) or y-axis (negate x).
      `
    },
    {
      id: 'act-c6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes translation?',
            options: [
              'Translation is a key concept for ACT Math',
              'Reflection: flip over x-axis (negate y) or y-axis (negate x)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Translation: shift graph horizontally or vertically'
          }
        ]
      }
    },
    {
      id: 'act-c6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** f(x) + k: up k; f(x-h): right h.

**ACT Tip:** |f(x)|: reflects negative y-values above x-axis.
      `
    },
    {
      id: 'act-c6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'f(x) + k: up k; f(x-h): right h',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'f(x) + k: up k; f(x-h): right h'
          }
        ]
      }
    },
    {
      id: 'act-c6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Translation: shift graph horizontally or verticall', 'Reflection: flip over x-axis (negate y) or y-axis ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['f(x) + k: up k; f(x-h): right h', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Translation: shift graph horizontally or verticall', 'f(x) + k: up k; f(x-h): right h'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Translation: shift graph horizontally or vertically. f(x) + k: up k; f(x-h): right h.'
      }
    }
  ]
}
