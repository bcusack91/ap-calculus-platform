export const actPreAlgebraPart7Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).

Multiplication and division have equal priority — go left to right.
      `
    },
    {
      id: 'act-p7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes pemdas?',
            options: [
              'PEMDAS is a key concept for ACT Math',
              'Multiplication and division have equal priority — go left to right',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)'
          }
        ]
      }
    },
    {
      id: 'act-p7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Same for addition and subtraction — left to right.

**ACT Tip:** Nested parentheses: work from the innermost out.
      `
    },
    {
      id: 'act-p7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Same for addition and subtraction — left to right',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Same for addition and subtraction — left to right'
          }
        ]
      }
    },
    {
      id: 'act-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['PEMDAS: Parentheses, Exponents, Multiplication/Div', 'Multiplication and division have equal priority — ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Same for addition and subtraction — left to right', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['PEMDAS: Parentheses, Exponents, Multiplication/Div', 'Same for addition and subtraction — left to right'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Same for addition and subtraction — left to right.'
      }
    }
  ]
}
