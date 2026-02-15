export const satGeometryPart2Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g2-intro',
      type: 'text' as const,
      content: `
# Triangles

**Part 2 of 7 — Triangles**

Pythagorean theorem: a² + b² = c² (right triangles).

Special right triangles: 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).
      `
    },
    {
      id: 'sat-g2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes pythagorean theorem?',
            options: [
              'Pythagorean theorem is a fundamental concept in SAT Math',
              'Special right triangles: 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Pythagorean theorem: a² + b² = c² (right triangles)'
          }
        ]
      }
    },
    {
      id: 'sat-g2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Triangle inequality: sum of any two sides > third side.

**SAT Tip:** Similar triangles: corresponding sides proportional, angles equal.
      `
    },
    {
      id: 'sat-g2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for triangles?',
            options: [
              'Triangle inequality: sum of any two sides > third side',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Triangle inequality: sum of any two sides > third side'
          }
        ]
      }
    },
    {
      id: 'sat-g2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Triangles:',
            options: ['Pythagorean theorem: a² + b² = c² (right triangles', 'Special right triangles: 30-60-90 (x, x√3, 2x) and', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Triangle inequality: sum of any two sides > third ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Pythagorean theorem: a² + b² = c² (right triangles', 'Triangle inequality: sum of any two sides > third '],
        hint1: 'Think about triangles',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Pythagorean theorem: a² + b² = c² (right triangles). Triangle inequality: sum of any two sides > third side.'
      }
    }
  ]
}
