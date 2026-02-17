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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Multi-step equations require multiple…?',
            options: [
              'Multi-step equations require multiple operations to isolate x.',
              'Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.',
              'distribute and combine like terms.',
              'Apply inverse operations in reverse order of operations.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Multi-step equations require multiple operations to isolate x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Solving Multi-Step Equations, which explains Key Insight?',
            options: [
              'Multi-step equations require multiple operations to isolate x.',
              'Apply inverse operations in reverse order of operations.',
              'distribute and combine like terms.',
              'Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Apply inverse operations in reverse order of operations. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Solving Multi-Step Equations, which correctly describes SAT Tip?',
            options: [
              'distribute and combine like terms.',
              'Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.',
              'Multi-step equations require multiple operations to isolate x.',
              'Apply inverse operations in reverse order of operations.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-l2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Always simplify each side first',
            options: ['distribute and combine like terms.', 'Multi-step equations require multiple operations to isolate x.', 'Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.', 'Apply inverse operations in reverse order of operations.']
          },
          {
            label: 'Key Insight',
            options: ['Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.', 'Apply inverse operations in reverse order of operations.', 'distribute and combine like terms.', 'Multi-step equations require multiple operations to isolate x.']
          },
          {
            label: 'SAT Tip',
            options: ['Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.', 'Apply inverse operations in reverse order of operations.', 'Multi-step equations require multiple operations to isolate x.', 'distribute and combine like terms.']
          }
        ],
        correctAnswers: ['distribute and combine like terms.', 'Apply inverse operations in reverse order of operations.', 'Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.'],
        hint1: 'Think about what each concept specifically describes in Solving Multi-Step Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Solving Multi-Step Equations describes a specific idea. Always simplify each side first: distribute and combine like terms. Key Insight: Apply inverse operations in reverse order of operations. SAT Tip: Example: 3(2x - 4) + 5 = 23 → 6x - 12 + 5 = 23 → 6x = 30 → x = 5.'
      }
    }
  ]
}
