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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Completing the square?',
            options: [
              'Move the constant to the other side first.',
              'Add (b/2)² to both sides.',
              'x² + bx + (b/2)² = (x + b/2)².',
              'Vertex form: a(x - h)² + k where (h, k) is the vertex.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Completing the square: x² + bx + (b/2)² = (x + b/2)². The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Add (b/2)² to both sides.',
              'x² + bx + (b/2)² = (x + b/2)².',
              'Vertex form: a(x - h)² + k where (h, k) is the vertex.',
              'Move the constant to the other side first.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Add (b/2)² to both sides. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Completing the Square, which correctly describes SAT Tip?',
            options: [
              'x² + bx + (b/2)² = (x + b/2)².',
              'Vertex form: a(x - h)² + k where (h, k) is the vertex.',
              'Add (b/2)² to both sides.',
              'Move the constant to the other side first.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Vertex form: a(x - h)² + k where (h, k) is the vertex. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Completing the square',
            options: ['Move the constant to the other side first.', 'Add (b/2)² to both sides.', 'Vertex form: a(x - h)² + k where (h, k) is the vertex.', 'x² + bx + (b/2)² = (x + b/2)².']
          },
          {
            label: 'Key Insight',
            options: ['Vertex form: a(x - h)² + k where (h, k) is the vertex.', 'Move the constant to the other side first.', 'x² + bx + (b/2)² = (x + b/2)².', 'Add (b/2)² to both sides.']
          },
          {
            label: 'SAT Tip',
            options: ['Move the constant to the other side first.', 'x² + bx + (b/2)² = (x + b/2)².', 'Vertex form: a(x - h)² + k where (h, k) is the vertex.', 'Add (b/2)² to both sides.']
          }
        ],
        correctAnswers: ['x² + bx + (b/2)² = (x + b/2)².', 'Add (b/2)² to both sides.', 'Vertex form: a(x - h)² + k where (h, k) is the vertex.'],
        hint1: 'Think about what each concept specifically describes in Completing the Square.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Completing the Square describes a specific idea. Completing the square: x² + bx + (b/2)² = (x + b/2)². Key Insight: Add (b/2)² to both sides. SAT Tip: Vertex form: a(x - h)² + k where (h, k) is the vertex.'
      }
    }
  ]
}
