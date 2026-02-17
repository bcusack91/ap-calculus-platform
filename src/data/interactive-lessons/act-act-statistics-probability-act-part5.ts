export const actStatProbPart5Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s5-intro',
      type: 'text' as const,
      content: `
# Combinations & Permutations

**Part 5 of 7 — Combinations & Permutations**

Permutation (order matters): nPr = n!/(n-r)!.

Combination (order doesn't matter): nCr = n!/[r!(n-r)!].
      `
    },
    {
      id: 'act-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Permutation (order matters)" refer to in ACT prep?',
            options: [
              'nCr = n!/[r!(n-r)!].',
              'nPr = n!/(n-r)!.',
              'ACT tip: ask "does order matter?" to decide which formula to use.',
              'Factorial: n! = n × (n-1) × ... × 2 × 1.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Permutation (order matters): nPr = n!/(n-r)!. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'nPr = n!/(n-r)!.',
              'nCr = n!/[r!(n-r)!].',
              'ACT tip: ask "does order matter?" to decide which formula to use.',
              'Factorial: n! = n × (n-1) × ... × 2 × 1.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Factorial: n! = n × (n-1) × ... × 2 × 1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Factorial: n! = n × (n-1) × ... × 2 × 1.

**ACT Tip:** ACT tip: ask "does order matter?" to decide which formula to use.
      `
    },
    {
      id: 'act-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Combinations & Permutations, which correctly describes ACT Tip?',
            options: [
              'nCr = n!/[r!(n-r)!].',
              'nPr = n!/(n-r)!.',
              'ACT tip: ask "does order matter?" to decide which formula to use.',
              'Factorial: n! = n × (n-1) × ... × 2 × 1.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: ACT tip: ask "does order matter?" to decide which formula to use. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Permutation (order matters)',
            options: ['nCr = n!/[r!(n-r)!].', 'nPr = n!/(n-r)!.', 'ACT tip: ask "does order matter?" to decide which formula to use.', 'Factorial: n! = n × (n-1) × ... × 2 × 1.']
          },
          {
            label: 'Combination (order doesn\'t matter)',
            options: ['ACT tip: ask "does order matter?" to decide which formula to use.', 'Factorial: n! = n × (n-1) × ... × 2 × 1.', 'nPr = n!/(n-r)!.', 'nCr = n!/[r!(n-r)!].']
          },
          {
            label: 'Key Insight',
            options: ['ACT tip: ask "does order matter?" to decide which formula to use.', 'nPr = n!/(n-r)!.', 'nCr = n!/[r!(n-r)!].', 'Factorial: n! = n × (n-1) × ... × 2 × 1.']
          }
        ],
        correctAnswers: ['nPr = n!/(n-r)!.', 'nCr = n!/[r!(n-r)!].', 'Factorial: n! = n × (n-1) × ... × 2 × 1.'],
        hint1: 'Think about what each concept specifically describes in Combinations & Permutations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Combinations & Permutations describes a specific idea. Permutation (order matters): nPr = n!/(n-r)!. Combination (order doesn\'t matter): nCr = n!/[r!(n-r)!]. Key Insight: Factorial: n! = n × (n-1) × ... × 2 × 1.'
      }
    }
  ]
}
