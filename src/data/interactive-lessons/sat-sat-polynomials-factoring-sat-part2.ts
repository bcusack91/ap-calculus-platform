export const satPolynomialsPart2Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# Factoring Techniques

**Part 2 of 7 — Factoring Techniques**

GCF first: always factor out the greatest common factor.

Difference of squares: a² - b² = (a + b)(a - b).
      `
    },
    {
      id: 'sat-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes gcf first?',
            options: [
              'GCF first is a fundamental concept in SAT Math',
              'Difference of squares: a² - b² = (a + b)(a - b)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'GCF first: always factor out the greatest common factor'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.

**SAT Tip:** Grouping: for 4-term polynomials, group in pairs and factor each.
      `
    },
    {
      id: 'sat-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for factoring techniques?',
            options: [
              'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b'
          }
        ]
      }
    },
    {
      id: 'sat-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Factoring Techniques:',
            options: ['GCF first: always factor out the greatest common f', 'Difference of squares: a² - b² = (a + b)(a - b)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Trinomials: x² + bx + c = (x + p)(x + q) where pq ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['GCF first: always factor out the greatest common f', 'Trinomials: x² + bx + c = (x + p)(x + q) where pq '],
        hint1: 'Think about factoring techniques',
        hint2: 'Consider the best SAT strategy',
        explanation: 'GCF first: always factor out the greatest common factor. Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.'
      }
    }
  ]
}
