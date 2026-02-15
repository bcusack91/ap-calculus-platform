export const satQuadraticsPart5Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q5-intro',
      type: 'text' as const,
      content: `
# Quadratic Word Problems

**Part 5 of 7 — Quadratic Word Problems**

Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).

Maximum height: find the vertex.
      `
    },
    {
      id: 'sat-q5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes projectile motion?',
            options: [
              'Projectile motion is a fundamental concept in SAT Math',
              'Maximum height: find the vertex',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters)'
          }
        ]
      }
    },
    {
      id: 'sat-q5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** When does it hit the ground? Set h(t) = 0 and solve.

**SAT Tip:** Area problems: set up quadratic from length/width relationships.
      `
    },
    {
      id: 'sat-q5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for quadratic word problems?',
            options: [
              'When does it hit the ground? Set h(t) = 0 and solve',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'When does it hit the ground? Set h(t) = 0 and solve'
          }
        ]
      }
    },
    {
      id: 'sat-q5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Quadratic Word Problems:',
            options: ['Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) ', 'Maximum height: find the vertex', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['When does it hit the ground? Set h(t) = 0 and solv', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) ', 'When does it hit the ground? Set h(t) = 0 and solv'],
        hint1: 'Think about quadratic word problems',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). When does it hit the ground? Set h(t) = 0 and solve.'
      }
    }
  ]
}
