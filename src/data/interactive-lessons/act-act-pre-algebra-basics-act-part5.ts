export const actPreAlgebraPart5Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p5-intro',
      type: 'text' as const,
      content: `
# Order of Operations

**Part 5 of 7 — Order of Operations**

PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).

Multiplication and division have equal priority — go left to right.
      `
    },
    {
      id: 'act-p5-quiz1',
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
      id: 'act-p5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Same for addition and subtraction — left to right.

**ACT Tip:** Nested parentheses: work from the innermost out.
      `
    },
    {
      id: 'act-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for order of operations?',
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
      id: 'act-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Order of Operations:',
            options: ['PEMDAS: Parentheses, Exponents, Multiplication/Div', 'Multiplication and division have equal priority — ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Same for addition and subtraction — left to right', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['PEMDAS: Parentheses, Exponents, Multiplication/Div', 'Same for addition and subtraction — left to right'],
        hint1: 'Think about order of operations',
        hint2: 'Consider the best ACT strategy',
        explanation: 'PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Same for addition and subtraction — left to right.'
      }
    }
  ]
}
