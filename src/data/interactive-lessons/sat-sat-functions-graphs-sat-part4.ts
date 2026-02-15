export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f4-intro',
      type: 'text' as const,
      content: `
# Transformations of Functions

**Part 4 of 7 — Transformations of Functions**

f(x) + k: shifts up k units; f(x) - k: shifts down k.

f(x - h): shifts right h units; f(x + h): shifts left h.
      `
    },
    {
      id: 'sat-f4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes f(x) + k?',
            options: [
              'f(x) + k is a fundamental concept in SAT Math',
              'f(x - h): shifts right h units; f(x + h): shifts left h',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'f(x) + k: shifts up k units; f(x) - k: shifts down k'
          }
        ]
      }
    },
    {
      id: 'sat-f4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** af(x): vertical stretch (a > 1) or compression (0 < a < 1).

**SAT Tip:** f(-x): reflects over y-axis; -f(x): reflects over x-axis.
      `
    },
    {
      id: 'sat-f4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for transformations of functions?',
            options: [
              'af(x): vertical stretch (a > 1) or compression (0 < a < 1)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'af(x): vertical stretch (a > 1) or compression (0 < a < 1)'
          }
        ]
      }
    },
    {
      id: 'sat-f4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Transformations of Functions:',
            options: ['f(x) + k: shifts up k units; f(x) - k: shifts down', 'f(x - h): shifts right h units; f(x + h): shifts l', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['af(x): vertical stretch (a > 1) or compression (0 ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['f(x) + k: shifts up k units; f(x) - k: shifts down', 'af(x): vertical stretch (a > 1) or compression (0 '],
        hint1: 'Think about transformations of functions',
        hint2: 'Consider the best SAT strategy',
        explanation: 'f(x) + k: shifts up k units; f(x) - k: shifts down k. af(x): vertical stretch (a > 1) or compression (0 < a < 1).'
      }
    }
  ]
}
