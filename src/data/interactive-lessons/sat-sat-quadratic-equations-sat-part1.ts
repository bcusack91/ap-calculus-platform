export const satQuadraticsPart1Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q1-intro',
      type: 'text' as const,
      content: `
# 📝 Quadratic Equations

**Part 1 of 7 — Quadratic Form & Factoring**

Standard form: ax² + bx + c = 0.

Factoring: find two numbers that multiply to ac and add to b.
      `
    },
    {
      id: 'sat-q1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes standard form?',
            options: [
              'Standard form is a fundamental concept in SAT Math',
              'Factoring: find two numbers that multiply to ac and add to b',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Standard form: ax² + bx + c = 0'
          }
        ]
      }
    },
    {
      id: 'sat-q1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.

**SAT Tip:** Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.
      `
    },
    {
      id: 'sat-q1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for quadratic form & factoring?',
            options: [
              'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s'
          }
        ]
      }
    },
    {
      id: 'sat-q1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Quadratic Form & Factoring:',
            options: ['Standard form: ax² + bx + c = 0', 'Factoring: find two numbers that multiply to ac an', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Zero product property: if (x - r)(x - s) = 0, then', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Standard form: ax² + bx + c = 0', 'Zero product property: if (x - r)(x - s) = 0, then'],
        hint1: 'Think about quadratic form & factoring',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Standard form: ax² + bx + c = 0. Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.'
      }
    }
  ]
}
