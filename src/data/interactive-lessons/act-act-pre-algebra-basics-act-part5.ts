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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains PEMDAS?',
            options: [
              'Same for addition and subtraction — left to right.',
              'Nested parentheses: work from the innermost out.',
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
              'Multiplication and division have equal priority — go left to right.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
              'Multiplication and division have equal priority — go left to right.',
              'Nested parentheses: work from the innermost out.',
              'Same for addition and subtraction — left to right.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Same for addition and subtraction — left to right. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
              'Multiplication and division have equal priority — go left to right.',
              'Same for addition and subtraction — left to right.',
              'Nested parentheses: work from the innermost out.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Nested parentheses: work from the innermost out. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PEMDAS',
            options: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Nested parentheses: work from the innermost out.', 'Multiplication and division have equal priority — go left to right.', 'Same for addition and subtraction — left to right.']
          },
          {
            label: 'Key Insight',
            options: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Multiplication and division have equal priority — go left to right.', 'Nested parentheses: work from the innermost out.']
          },
          {
            label: 'ACT Tip',
            options: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Multiplication and division have equal priority — go left to right.', 'Nested parentheses: work from the innermost out.']
          }
        ],
        correctAnswers: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Nested parentheses: work from the innermost out.'],
        hint1: 'Think about what each concept specifically describes in Order of Operations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Order of Operations describes a specific idea. PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Key Insight: Same for addition and subtraction — left to right. ACT Tip: Nested parentheses: work from the innermost out.'
      }
    }
  ]
}
