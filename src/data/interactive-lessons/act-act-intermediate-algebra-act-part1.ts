export const actIntermAlgPart1Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i1-intro',
      type: 'text' as const,
      content: `
# 📋 Intermediate Algebra

**Part 1 of 7 — Quadratic Equations**

Solve by factoring, completing the square, or the quadratic formula.

Discriminant b² - 4ac: positive → 2 real roots, zero → 1, negative → complex.
      `
    },
    {
      id: 'act-i1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes solve by factoring, completing the square, or the quadratic formula?',
            options: [
              'Solve by factoring, completing the square, or the quadratic formula is a key concept for ACT Math',
              'Discriminant b² - 4ac: positive → 2 real roots, zero → 1, negative → complex',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Solve by factoring, completing the square, or the quadratic formula'
          }
        ]
      }
    },
    {
      id: 'act-i1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Vertex form y = a(x - h)² + k reveals the vertex (h, k).

**ACT Tip:** Sum of roots = -b/a; Product of roots = c/a.
      `
    },
    {
      id: 'act-i1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for quadratic equations?',
            options: [
              'Vertex form y = a(x - h)² + k reveals the vertex (h, k)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Vertex form y = a(x - h)² + k reveals the vertex (h, k)'
          }
        ]
      }
    },
    {
      id: 'act-i1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Quadratic Equations:',
            options: ['Solve by factoring, completing the square, or the ', 'Discriminant b² - 4ac: positive → 2 real roots, ze', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Vertex form y = a(x - h)² + k reveals the vertex (', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Solve by factoring, completing the square, or the ', 'Vertex form y = a(x - h)² + k reveals the vertex ('],
        hint1: 'Think about quadratic equations',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Solve by factoring, completing the square, or the quadratic formula. Vertex form y = a(x - h)² + k reveals the vertex (h, k).'
      }
    }
  ]
}
