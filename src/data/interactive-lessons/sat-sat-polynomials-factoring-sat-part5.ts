export const satPolynomialsPart5Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p5-intro',
      type: 'text' as const,
      content: `
# Polynomial Graphs

**Part 5 of 7 — Polynomial Graphs**

End behavior: determined by leading term (degree and sign of coefficient).

Even degree with positive leading coefficient: both ends up.
      `
    },
    {
      id: 'sat-p5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes End behavior?',
            options: [
              'Odd degree with positive leading coefficient: left down, right up.',
              'Number of real zeros ≤ degree; turns ≤ degree - 1.',
              'determined by leading term (degree and sign of coefficient).',
              'both ends up.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — End behavior: determined by leading term (degree and sign of coefficient). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Polynomial Graphs, which explains Key Insight?',
            options: [
              'Number of real zeros ≤ degree; turns ≤ degree - 1.',
              'Odd degree with positive leading coefficient: left down, right up.',
              'determined by leading term (degree and sign of coefficient).',
              'both ends up.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Odd degree with positive leading coefficient: left down, right up. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Odd degree with positive leading coefficient: left down, right up.

**SAT Tip:** Number of real zeros ≤ degree; turns ≤ degree - 1.
      `
    },
    {
      id: 'sat-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'determined by leading term (degree and sign of coefficient).',
              'both ends up.',
              'Odd degree with positive leading coefficient: left down, right up.',
              'Number of real zeros ≤ degree; turns ≤ degree - 1.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Number of real zeros ≤ degree; turns ≤ degree - 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'End behavior',
            options: ['determined by leading term (degree and sign of coefficient).', 'Number of real zeros ≤ degree; turns ≤ degree - 1.', 'both ends up.', 'Odd degree with positive leading coefficient: left down, right up.']
          },
          {
            label: 'Even degree with positive leading coefficient',
            options: ['both ends up.', 'determined by leading term (degree and sign of coefficient).', 'Number of real zeros ≤ degree; turns ≤ degree - 1.', 'Odd degree with positive leading coefficient: left down, right up.']
          },
          {
            label: 'Key Insight',
            options: ['both ends up.', 'Odd degree with positive leading coefficient: left down, right up.', 'determined by leading term (degree and sign of coefficient).', 'Number of real zeros ≤ degree; turns ≤ degree - 1.']
          }
        ],
        correctAnswers: ['determined by leading term (degree and sign of coefficient).', 'both ends up.', 'Odd degree with positive leading coefficient: left down, right up.'],
        hint1: 'Think about what each concept specifically describes in Polynomial Graphs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polynomial Graphs describes a specific idea. End behavior: determined by leading term (degree and sign of coefficient). Even degree with positive leading coefficient: both ends up. Key Insight: Odd degree with positive leading coefficient: left down, right up.'
      }
    }
  ]
}
