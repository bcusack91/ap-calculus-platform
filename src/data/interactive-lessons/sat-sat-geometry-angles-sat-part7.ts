export const satGeometryPart7Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Rectangular prism: V = lwh, SA = 2(lw + lh + wh).

Cylinder: V = πr²h, SA = 2πr² + 2πrh.
      `
    },
    {
      id: 'sat-g7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes rectangular prism?',
            options: [
              'Rectangular prism is a fundamental concept in SAT Math',
              'Cylinder: V = πr²h, SA = 2πr² + 2πrh',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Rectangular prism: V = lwh, SA = 2(lw + lh + wh)'
          }
        ]
      }
    },
    {
      id: 'sat-g7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Cone: V = (1/3)πr²h.

**SAT Tip:** Sphere: V = (4/3)πr³, SA = 4πr².
      `
    },
    {
      id: 'sat-g7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Cone: V = (1/3)πr²h',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Cone: V = (1/3)πr²h'
          }
        ]
      }
    },
    {
      id: 'sat-g7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Rectangular prism: V = lwh, SA = 2(lw + lh + wh)', 'Cylinder: V = πr²h, SA = 2πr² + 2πrh', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Cone: V = (1/3)πr²h', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Rectangular prism: V = lwh, SA = 2(lw + lh + wh)', 'Cone: V = (1/3)πr²h'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Rectangular prism: V = lwh, SA = 2(lw + lh + wh). Cone: V = (1/3)πr²h.'
      }
    }
  ]
}
