export const satPolynomialsPart1Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p1-intro',
      type: 'text' as const,
      content: `
# 📝 Polynomials Factoring

**Part 1 of 7 — Polynomial Operations**

Add/subtract polynomials: combine like terms.

Multiply polynomials: distribute each term (FOIL for binomials).
      `
    },
    {
      id: 'sat-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes add/subtract polynomials?',
            options: [
              'Add/subtract polynomials is a fundamental concept in SAT Math',
              'Multiply polynomials: distribute each term (FOIL for binomials)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Add/subtract polynomials: combine like terms'
          }
        ]
      }
    },
    {
      id: 'sat-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Degree of a polynomial: highest power of the variable.

**SAT Tip:** Leading coefficient: coefficient of the highest-degree term.
      `
    },
    {
      id: 'sat-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for polynomial operations?',
            options: [
              'Degree of a polynomial: highest power of the variable',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Degree of a polynomial: highest power of the variable'
          }
        ]
      }
    },
    {
      id: 'sat-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Polynomial Operations:',
            options: ['Add/subtract polynomials: combine like terms', 'Multiply polynomials: distribute each term (FOIL f', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Degree of a polynomial: highest power of the varia', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Add/subtract polynomials: combine like terms', 'Degree of a polynomial: highest power of the varia'],
        hint1: 'Think about polynomial operations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Add/subtract polynomials: combine like terms. Degree of a polynomial: highest power of the variable.'
      }
    }
  ]
}
