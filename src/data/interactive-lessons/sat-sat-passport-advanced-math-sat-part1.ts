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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Factor, expand, and simplify algebraic…?',
            options: [
              'Factor, expand, and simplify algebraic expressions.',
              'SAT may ask "which is equivalent to..." — transform step by step.',
              'Common factor, complete the square, use identities.',
              'Rewrite expressions in equivalent forms to reveal information.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Factor, expand, and simplify algebraic expressions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Passport Advanced Math, which explains Key Insight?',
            options: [
              'Common factor, complete the square, use identities.',
              'SAT may ask "which is equivalent to..." — transform step by step.',
              'Rewrite expressions in equivalent forms to reveal information.',
              'Factor, expand, and simplify algebraic expressions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Common factor, complete the square, use identities. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Passport Advanced Math, which correctly describes SAT Tip?',
            options: [
              'SAT may ask "which is equivalent to..." — transform step by step.',
              'Common factor, complete the square, use identities.',
              'Rewrite expressions in equivalent forms to reveal information.',
              'Factor, expand, and simplify algebraic expressions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: SAT may ask "which is equivalent to..." — transform step by step. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Factor, expand, and simplify algebraic expressions.', 'SAT may ask "which is equivalent to..." — transform step by step.', 'Common factor, complete the square, use identities.', 'Rewrite expressions in equivalent forms to reveal information.']
          },
          {
            label: 'SAT Tip',
            options: ['SAT may ask "which is equivalent to..." — transform step by step.', 'Factor, expand, and simplify algebraic expressions.', 'Common factor, complete the square, use identities.', 'Rewrite expressions in equivalent forms to reveal information.']
          }
        ],
        correctAnswers: ['Common factor, complete the square, use identities.', 'SAT may ask "which is equivalent to..." — transform step by step.'],
        hint1: 'Think about what each concept specifically describes in Passport Advanced Math.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Passport Advanced Math describes a specific idea. Key Insight: Common factor, complete the square, use identities. SAT Tip: SAT may ask "which is equivalent to..." — transform step by step.'
      }
    }
  ]
}
