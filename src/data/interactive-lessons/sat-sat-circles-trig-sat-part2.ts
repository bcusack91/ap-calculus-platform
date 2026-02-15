export const satCirclesTrigPart2Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c2-intro',
      type: 'text' as const,
      content: `
# Arc Length & Sectors

**Part 2 of 7 — Arc Length & Sectors**

Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).

Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).
      `
    },
    {
      id: 'sat-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians)?',
            options: [
              'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians) is a fundamental concept in SAT Math',
              'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians)'
          }
        ]
      }
    },
    {
      id: 'sat-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Convert: radians = degrees × π/180.

**SAT Tip:** SAT gives formulas at the start — know when to use them.
      `
    },
    {
      id: 'sat-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for arc length & sectors?',
            options: [
              'Convert: radians = degrees × π/180',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Convert: radians = degrees × π/180'
          }
        ]
      }
    },
    {
      id: 'sat-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Arc Length & Sectors:',
            options: ['Arc length = (θ/360°) × 2πr (degrees) or s = rθ (r', 'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Convert: radians = degrees × π/180', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Arc length = (θ/360°) × 2πr (degrees) or s = rθ (r', 'Convert: radians = degrees × π/180'],
        hint1: 'Think about arc length & sectors',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians). Convert: radians = degrees × π/180.'
      }
    }
  ]
}
