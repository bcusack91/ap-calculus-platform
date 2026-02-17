export const actStatProbPart7Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Permutation (order matters): nPr = n!/(n-r)!.

Combination (order doesn't matter): nCr = n!/[r!(n-r)!].
      `
    },
    {
      id: 'act-s7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Permutation (order matters)" refer to in ACT prep?',
            options: [
              'Factorial: n! = n × (n-1) × ... × 2 × 1.',
              'nCr = n!/[r!(n-r)!].',
              'ACT tip: ask "does order matter?" to decide which formula to use.',
              'nPr = n!/(n-r)!.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Permutation (order matters): nPr = n!/(n-r)!. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Factorial: n! = n × (n-1) × ... × 2 × 1.',
              'nPr = n!/(n-r)!.',
              'nCr = n!/[r!(n-r)!].',
              'ACT tip: ask "does order matter?" to decide which formula to use.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Factorial: n! = n × (n-1) × ... × 2 × 1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Factorial: n! = n × (n-1) × ... × 2 × 1.

**ACT Tip:** ACT tip: ask "does order matter?" to decide which formula to use.
      `
    },
    {
      id: 'act-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Factorial: n! = n × (n-1) × ... × 2 × 1.',
              'nPr = n!/(n-r)!.',
              'nCr = n!/[r!(n-r)!].',
              'ACT tip: ask "does order matter?" to decide which formula to use.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: ACT tip: ask "does order matter?" to decide which formula to use. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Permutation (order matters)',
            options: ['nPr = n!/(n-r)!.', 'Factorial: n! = n × (n-1) × ... × 2 × 1.', 'ACT tip: ask "does order matter?" to decide which formula to use.', 'nCr = n!/[r!(n-r)!].']
          },
          {
            label: 'Combination (order doesn\'t matter)',
            options: ['Factorial: n! = n × (n-1) × ... × 2 × 1.', 'nPr = n!/(n-r)!.', 'nCr = n!/[r!(n-r)!].', 'ACT tip: ask "does order matter?" to decide which formula to use.']
          },
          {
            label: 'Key Insight',
            options: ['nCr = n!/[r!(n-r)!].', 'Factorial: n! = n × (n-1) × ... × 2 × 1.', 'ACT tip: ask "does order matter?" to decide which formula to use.', 'nPr = n!/(n-r)!.']
          }
        ],
        correctAnswers: ['nPr = n!/(n-r)!.', 'nCr = n!/[r!(n-r)!].', 'Factorial: n! = n × (n-1) × ... × 2 × 1.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Permutation (order matters): nPr = n!/(n-r)!. Combination (order doesn\'t matter): nCr = n!/[r!(n-r)!]. Key Insight: Factorial: n! = n × (n-1) × ... × 2 × 1.'
      }
    }
  ]
}
