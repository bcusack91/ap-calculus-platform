export const satPassportAdvPart1Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p1-intro',
      type: 'text' as const,
      content: `
# 📝 Passport Advanced Math

**Part 1 of 7 — Manipulating Expressions**

Factor, expand, and simplify algebraic expressions.

Rewrite expressions in equivalent forms to reveal information.
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
            question: 'Which statement best describes factor, expand, and simplify algebraic expressions?',
            options: [
              'Factor, expand, and simplify algebraic expressions is a fundamental concept in SAT Math',
              'Rewrite expressions in equivalent forms to reveal information',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Factor, expand, and simplify algebraic expressions'
          }
        ]
      }
    },
    {
      id: 'sat-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Common factor, complete the square, use identities.

**SAT Tip:** SAT may ask "which is equivalent to..." — transform step by step.
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
            question: 'What is a key strategy for manipulating expressions?',
            options: [
              'Common factor, complete the square, use identities',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Common factor, complete the square, use identities'
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
            label: 'Key concept for Manipulating Expressions:',
            options: ['Factor, expand, and simplify algebraic expressions', 'Rewrite expressions in equivalent forms to reveal ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Common factor, complete the square, use identities', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Factor, expand, and simplify algebraic expressions', 'Common factor, complete the square, use identities'],
        hint1: 'Think about manipulating expressions',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Factor, expand, and simplify algebraic expressions. Common factor, complete the square, use identities.'
      }
    }
  ]
}
