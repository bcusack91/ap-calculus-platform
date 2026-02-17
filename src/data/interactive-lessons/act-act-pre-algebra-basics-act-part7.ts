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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains PEMDAS?',
            options: [
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).',
              'Nested parentheses: work from the innermost out.',
              'Same for addition and subtraction — left to right.',
              'Multiplication and division have equal priority — go left to right.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Same for addition and subtraction — left to right.',
              'Multiplication and division have equal priority — go left to right.',
              'Nested parentheses: work from the innermost out.',
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Same for addition and subtraction — left to right. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes ACT Tip?',
            options: [
              'Nested parentheses: work from the innermost out.',
              'Same for addition and subtraction — left to right.',
              'Multiplication and division have equal priority — go left to right.',
              'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Nested parentheses: work from the innermost out. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PEMDAS',
            options: ['Multiplication and division have equal priority — go left to right.', 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Nested parentheses: work from the innermost out.']
          },
          {
            label: 'Key Insight',
            options: ['Nested parentheses: work from the innermost out.', 'Same for addition and subtraction — left to right.', 'Multiplication and division have equal priority — go left to right.', 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).']
          },
          {
            label: 'ACT Tip',
            options: ['Multiplication and division have equal priority — go left to right.', 'Nested parentheses: work from the innermost out.', 'Same for addition and subtraction — left to right.', 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).']
          }
        ],
        correctAnswers: ['Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).', 'Same for addition and subtraction — left to right.', 'Nested parentheses: work from the innermost out.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Key Insight: Same for addition and subtraction — left to right. ACT Tip: Nested parentheses: work from the innermost out.'
      }
    }
  ]
}
