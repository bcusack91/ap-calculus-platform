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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Solve by factoring, completing the…" refer to in ACT prep?',
            options: [
              'positive → 2 real roots, zero → 1, negative → complex.',
              'Solve by factoring, completing the square, or the quadratic formula.',
              'Sum of roots = -b/a; Product of roots = c/a.',
              'Vertex form y = a(x - h)² + k reveals the vertex (h, k).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Solve by factoring, completing the square, or the quadratic formula. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Sum of roots = -b/a; Product of roots = c/a.',
              'Solve by factoring, completing the square, or the quadratic formula.',
              'positive → 2 real roots, zero → 1, negative → complex.',
              'Vertex form y = a(x - h)² + k reveals the vertex (h, k).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Vertex form y = a(x - h)² + k reveals the vertex (h, k). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Sum of roots = -b/a; Product of roots = c/a.',
              'positive → 2 real roots, zero → 1, negative → complex.',
              'Solve by factoring, completing the square, or the quadratic formula.',
              'Vertex form y = a(x - h)² + k reveals the vertex (h, k).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Sum of roots = -b/a; Product of roots = c/a. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Discriminant b² - 4ac',
            options: ['Vertex form y = a(x - h)² + k reveals the vertex (h, k).', 'Sum of roots = -b/a; Product of roots = c/a.', 'Solve by factoring, completing the square, or the quadratic formula.', 'positive → 2 real roots, zero → 1, negative → complex.']
          },
          {
            label: 'Key Insight',
            options: ['Vertex form y = a(x - h)² + k reveals the vertex (h, k).', 'Sum of roots = -b/a; Product of roots = c/a.', 'Solve by factoring, completing the square, or the quadratic formula.', 'positive → 2 real roots, zero → 1, negative → complex.']
          },
          {
            label: 'ACT Tip',
            options: ['Vertex form y = a(x - h)² + k reveals the vertex (h, k).', 'positive → 2 real roots, zero → 1, negative → complex.', 'Solve by factoring, completing the square, or the quadratic formula.', 'Sum of roots = -b/a; Product of roots = c/a.']
          }
        ],
        correctAnswers: ['positive → 2 real roots, zero → 1, negative → complex.', 'Vertex form y = a(x - h)² + k reveals the vertex (h, k).', 'Sum of roots = -b/a; Product of roots = c/a.'],
        hint1: 'Think about what each concept specifically describes in Intermediate Algebra.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intermediate Algebra describes a specific idea. Discriminant b² - 4ac: positive → 2 real roots, zero → 1, negative → complex. Key Insight: Vertex form y = a(x - h)² + k reveals the vertex (h, k). ACT Tip: Sum of roots = -b/a; Product of roots = c/a.'
      }
    }
  ]
}
