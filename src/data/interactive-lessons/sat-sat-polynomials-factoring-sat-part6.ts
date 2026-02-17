export const satPolynomialsPart6Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

End behavior: determined by leading term (degree and sign of coefficient).

Even degree with positive leading coefficient: both ends up.
      `
    },
    {
      id: 'sat-p6-quiz1',
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
              'determined by leading term (degree and sign of coefficient).',
              'Number of real zeros ≤ degree; turns ≤ degree - 1.',
              'both ends up.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — End behavior: determined by leading term (degree and sign of coefficient). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'Number of real zeros ≤ degree; turns ≤ degree - 1.',
              'Odd degree with positive leading coefficient: left down, right up.',
              'both ends up.',
              'determined by leading term (degree and sign of coefficient).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Odd degree with positive leading coefficient: left down, right up. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Odd degree with positive leading coefficient: left down, right up.

**SAT Tip:** Number of real zeros ≤ degree; turns ≤ degree - 1.
      `
    },
    {
      id: 'sat-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes SAT Tip?',
            options: [
              'both ends up.',
              'Number of real zeros ≤ degree; turns ≤ degree - 1.',
              'Odd degree with positive leading coefficient: left down, right up.',
              'determined by leading term (degree and sign of coefficient).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Number of real zeros ≤ degree; turns ≤ degree - 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'End behavior',
            options: ['determined by leading term (degree and sign of coefficient).', 'both ends up.', 'Number of real zeros ≤ degree; turns ≤ degree - 1.', 'Odd degree with positive leading coefficient: left down, right up.']
          },
          {
            label: 'Even degree with positive leading coefficient',
            options: ['determined by leading term (degree and sign of coefficient).', 'Number of real zeros ≤ degree; turns ≤ degree - 1.', 'Odd degree with positive leading coefficient: left down, right up.', 'both ends up.']
          },
          {
            label: 'Key Insight',
            options: ['Number of real zeros ≤ degree; turns ≤ degree - 1.', 'determined by leading term (degree and sign of coefficient).', 'Odd degree with positive leading coefficient: left down, right up.', 'both ends up.']
          }
        ],
        correctAnswers: ['determined by leading term (degree and sign of coefficient).', 'both ends up.', 'Odd degree with positive leading coefficient: left down, right up.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. End behavior: determined by leading term (degree and sign of coefficient). Even degree with positive leading coefficient: both ends up. Key Insight: Odd degree with positive leading coefficient: left down, right up.'
      }
    }
  ]
}
