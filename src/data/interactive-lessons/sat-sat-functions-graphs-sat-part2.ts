export const satFunctionsPart2Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f2-intro',
      type: 'text' as const,
      content: `
# Domain and Range

**Part 2 of 7 — Domain and Range**

Domain: all possible input (x) values.

Range: all possible output (y) values.
      `
    },
    {
      id: 'sat-f2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes domain?',
            options: [
              'Domain is a fundamental concept in SAT Math',
              'Range: all possible output (y) values',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Domain: all possible input (x) values'
          }
        ]
      }
    },
    {
      id: 'sat-f2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Restrictions: no division by zero, no square root of negatives (for reals).

**SAT Tip:** From a graph: domain is the horizontal extent, range is the vertical extent.
      `
    },
    {
      id: 'sat-f2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for domain and range?',
            options: [
              'Restrictions: no division by zero, no square root of negatives (for reals)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Restrictions: no division by zero, no square root of negatives (for reals)'
          }
        ]
      }
    },
    {
      id: 'sat-f2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Domain and Range:',
            options: ['Domain: all possible input (x) values', 'Range: all possible output (y) values', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Restrictions: no division by zero, no square root ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Domain: all possible input (x) values', 'Restrictions: no division by zero, no square root '],
        hint1: 'Think about domain and range',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Domain: all possible input (x) values. Restrictions: no division by zero, no square root of negatives (for reals).'
      }
    }
  ]
}
