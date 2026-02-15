export const actCoordGeomPart2Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c2-intro',
      type: 'text' as const,
      content: `
# Distance & Midpoint

**Part 2 of 7 — Distance & Midpoint**

Distance: d = √((x₂-x₁)² + (y₂-y₁)²).

Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2).
      `
    },
    {
      id: 'act-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes distance?',
            options: [
              'Distance is a key concept for ACT Math',
              'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Distance: d = √((x₂-x₁)² + (y₂-y₁)²)'
          }
        ]
      }
    },
    {
      id: 'act-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Distance formula is the Pythagorean theorem in disguise.

**ACT Tip:** These formulas are NOT provided on the ACT — memorize them.
      `
    },
    {
      id: 'act-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for distance & midpoint?',
            options: [
              'Distance formula is the Pythagorean theorem in disguise',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Distance formula is the Pythagorean theorem in disguise'
          }
        ]
      }
    },
    {
      id: 'act-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Distance & Midpoint:',
            options: ['Distance: d = √((x₂-x₁)² + (y₂-y₁)²)', 'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Distance formula is the Pythagorean theorem in dis', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Distance: d = √((x₂-x₁)² + (y₂-y₁)²)', 'Distance formula is the Pythagorean theorem in dis'],
        hint1: 'Think about distance & midpoint',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Distance: d = √((x₂-x₁)² + (y₂-y₁)²). Distance formula is the Pythagorean theorem in disguise.'
      }
    }
  ]
}
