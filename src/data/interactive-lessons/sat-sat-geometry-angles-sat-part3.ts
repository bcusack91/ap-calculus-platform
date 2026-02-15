export const satGeometryPart3Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g3-intro',
      type: 'text' as const,
      content: `
# Circles

**Part 3 of 7 — Circles**

Area = πr²; Circumference = 2πr.

Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².
      `
    },
    {
      id: 'sat-g3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes area = πr²; circumference = 2πr?',
            options: [
              'Area = πr²; Circumference = 2πr is a fundamental concept in SAT Math',
              'Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr²',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Area = πr²; Circumference = 2πr'
          }
        ]
      }
    },
    {
      id: 'sat-g3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Central angle = arc measure.

**SAT Tip:** Inscribed angle = half the intercepted arc.
      `
    },
    {
      id: 'sat-g3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for circles?',
            options: [
              'Central angle = arc measure',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Central angle = arc measure'
          }
        ]
      }
    },
    {
      id: 'sat-g3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Circles:',
            options: ['Area = πr²; Circumference = 2πr', 'Arc length = (θ/360) × 2πr; Sector area = (θ/360) ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Central angle = arc measure', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Area = πr²; Circumference = 2πr', 'Central angle = arc measure'],
        hint1: 'Think about circles',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Area = πr²; Circumference = 2πr. Central angle = arc measure.'
      }
    }
  ]
}
