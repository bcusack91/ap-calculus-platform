export const actPreAlgebraPart6Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).

Multiplication and division have equal priority — go left to right.
      `
    },
    {
      id: 'act-p6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains PEMDAS?',
            options: [
              'Nested parentheses: work from the innermost out.',
              'Multiplication and division have equal priority — go left to right.',
              'Same for addition and subtraction — left to right.',
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
              'Multiplication and division have equal priority — go left to right.',
              'Same for addition and subtraction — left to right.',
              'Nested parentheses: work from the innermost out.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Same for addition and subtraction — left to right. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Same for addition and subtraction — left to right.

**ACT Tip:** Nested parentheses: work from the innermost out.
      `
    },
    {
      id: 'act-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Same for addition and subtraction — left to right.',
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
              'Nested parentheses: work from the innermost out.',
              'Multiplication and division have equal priority — go left to right.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Nested parentheses: work from the innermost out. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PEMDAS',
            options: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Nested parentheses: work from the innermost out.', 'Same for addition and subtraction — left to right.', 'Multiplication and division have equal priority — go left to right.']
          },
          {
            label: 'Key Insight',
            options: ['Nested parentheses: work from the innermost out.', 'Multiplication and division have equal priority — go left to right.', 'Same for addition and subtraction — left to right.', 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).']
          },
          {
            label: 'ACT Tip',
            options: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Nested parentheses: work from the innermost out.', 'Multiplication and division have equal priority — go left to right.']
          }
        ],
        correctAnswers: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Nested parentheses: work from the innermost out.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Key Insight: Same for addition and subtraction — left to right. ACT Tip: Nested parentheses: work from the innermost out.'
      }
    }
  ]
}
