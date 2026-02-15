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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes end behavior?',
            options: [
              'End behavior is a fundamental concept in SAT Math',
              'Even degree with positive leading coefficient: both ends up',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'End behavior: determined by leading term (degree and sign of coefficient)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for polynomial graphs?',
            options: [
              'Odd degree with positive leading coefficient: left down, right up',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Odd degree with positive leading coefficient: left down, right up'
          }
        ]
      }
    },
    {
      id: 'sat-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Polynomial Graphs:',
            options: ['End behavior: determined by leading term (degree a', 'Even degree with positive leading coefficient: bot', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Odd degree with positive leading coefficient: left', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['End behavior: determined by leading term (degree a', 'Odd degree with positive leading coefficient: left'],
        hint1: 'Think about polynomial graphs',
        hint2: 'Consider the best SAT strategy',
        explanation: 'End behavior: determined by leading term (degree and sign of coefficient). Odd degree with positive leading coefficient: left down, right up.'
      }
    }
  ]
}
