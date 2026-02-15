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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'sat-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['End behavior: determined by leading term (degree a', 'Even degree with positive leading coefficient: bot', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Odd degree with positive leading coefficient: left', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['End behavior: determined by leading term (degree a', 'Odd degree with positive leading coefficient: left'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'End behavior: determined by leading term (degree and sign of coefficient). Odd degree with positive leading coefficient: left down, right up.'
      }
    }
  ]
}
