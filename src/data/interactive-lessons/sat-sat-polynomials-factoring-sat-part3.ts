export const satPolynomialsPart3Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p3-intro',
      type: 'text' as const,
      content: `
# Polynomial Division

**Part 3 of 7 — Polynomial Division**

Long division: divide polynomials like long division with numbers.

Synthetic division: shortcut when dividing by (x - c).
      `
    },
    {
      id: 'sat-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes long division?',
            options: [
              'Long division is a fundamental concept in SAT Math',
              'Synthetic division: shortcut when dividing by (x - c)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Long division: divide polynomials like long division with numbers'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** The result: dividend = quotient × divisor + remainder.

**SAT Tip:** Useful for simplifying rational expressions.
      `
    },
    {
      id: 'sat-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for polynomial division?',
            options: [
              'The result: dividend = quotient × divisor + remainder',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'The result: dividend = quotient × divisor + remainder'
          }
        ]
      }
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Polynomial Division:',
            options: ['Long division: divide polynomials like long divisi', 'Synthetic division: shortcut when dividing by (x -', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['The result: dividend = quotient × divisor + remain', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Long division: divide polynomials like long divisi', 'The result: dividend = quotient × divisor + remain'],
        hint1: 'Think about polynomial division',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Long division: divide polynomials like long division with numbers. The result: dividend = quotient × divisor + remainder.'
      }
    }
  ]
}
