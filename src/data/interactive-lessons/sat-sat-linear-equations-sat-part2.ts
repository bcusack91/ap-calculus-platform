export const satLinearEquationsPart2Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l2-intro',
      type: 'text' as const,
      content: `
# Solving Multi-Step Equations

**Part 2 of 7 — Solving Multi-Step Equations**

Multi-step equations require multiple operations to isolate x.

Always simplify each side first: distribute and combine like terms.
      `
    },
    {
      id: 'sat-l2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes multi-step equations require multiple operations to isolate x?',
            options: [
              'Multi-step equations require multiple operations to isolate x is a fundamental concept in SAT Math',
              'Always simplify each side first: distribute and combine like terms',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Multi-step equations require multiple operations to isolate x'
          }
        ]
      }
    },
    {
      id: 'sat-l2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Apply inverse operations in reverse order of operations.

**SAT Tip:** Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.
      `
    },
    {
      id: 'sat-l2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for solving multi-step equations?',
            options: [
              'Apply inverse operations in reverse order of operations',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Apply inverse operations in reverse order of operations'
          }
        ]
      }
    },
    {
      id: 'sat-l2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Solving Multi-Step Equations:',
            options: ['Multi-step equations require multiple operations t', 'Always simplify each side first: distribute and co', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Apply inverse operations in reverse order of opera', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Multi-step equations require multiple operations t', 'Apply inverse operations in reverse order of opera'],
        hint1: 'Think about solving multi-step equations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Multi-step equations require multiple operations to isolate x. Apply inverse operations in reverse order of operations.'
      }
    }
  ]
}
