export const satGeometryPart4Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g4-intro',
      type: 'text' as const,
      content: `
# Coordinate Geometry

**Part 4 of 7 — Coordinate Geometry**

Distance: d = √((x₂-x₁)² + (y₂-y₁)²).

Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2).
      `
    },
    {
      id: 'sat-g4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes distance?',
            options: [
              'Distance is a fundamental concept in SAT Math',
              'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Distance: d = √((x₂-x₁)² + (y₂-y₁)²)'
          }
        ]
      }
    },
    {
      id: 'sat-g4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Slope: m = (y₂-y₁)/(x₂-x₁).

**SAT Tip:** Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.
      `
    },
    {
      id: 'sat-g4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for coordinate geometry?',
            options: [
              'Slope: m = (y₂-y₁)/(x₂-x₁)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Slope: m = (y₂-y₁)/(x₂-x₁)'
          }
        ]
      }
    },
    {
      id: 'sat-g4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Coordinate Geometry:',
            options: ['Distance: d = √((x₂-x₁)² + (y₂-y₁)²)', 'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Slope: m = (y₂-y₁)/(x₂-x₁)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Distance: d = √((x₂-x₁)² + (y₂-y₁)²)', 'Slope: m = (y₂-y₁)/(x₂-x₁)'],
        hint1: 'Think about coordinate geometry',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Distance: d = √((x₂-x₁)² + (y₂-y₁)²). Slope: m = (y₂-y₁)/(x₂-x₁).'
      }
    }
  ]
}
