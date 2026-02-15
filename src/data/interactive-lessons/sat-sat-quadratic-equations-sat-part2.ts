export const satQuadraticsPart2Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q2-intro',
      type: 'text' as const,
      content: `
# Completing the Square

**Part 2 of 7 — Completing the Square**

Completing the square: x² + bx + (b/2)² = (x + b/2)².

Move the constant to the other side first.
      `
    },
    {
      id: 'sat-q2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes completing the square?',
            options: [
              'Completing the square is a fundamental concept in SAT Math',
              'Move the constant to the other side first',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Completing the square: x² + bx + (b/2)² = (x + b/2)²'
          }
        ]
      }
    },
    {
      id: 'sat-q2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Add (b/2)² to both sides.

**SAT Tip:** Vertex form: a(x - h)² + k where (h, k) is the vertex.
      `
    },
    {
      id: 'sat-q2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for completing the square?',
            options: [
              'Add (b/2)² to both sides',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Add (b/2)² to both sides'
          }
        ]
      }
    },
    {
      id: 'sat-q2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Completing the Square:',
            options: ['Completing the square: x² + bx + (b/2)² = (x + b/2', 'Move the constant to the other side first', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Add (b/2)² to both sides', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Completing the square: x² + bx + (b/2)² = (x + b/2', 'Add (b/2)² to both sides'],
        hint1: 'Think about completing the square',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Completing the square: x² + bx + (b/2)² = (x + b/2)². Add (b/2)² to both sides.'
      }
    }
  ]
}
