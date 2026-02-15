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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes permutation (order matters)?',
            options: [
              'Permutation (order matters) is a key concept for ACT Math',
              'Combination (order doesnt matter): nCr = n!/[r!(n-r)!]',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Permutation (order matters): nPr = n!/(n-r)!'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Factorial: n! = n × (n-1) × ... × 2 × 1',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Factorial: n! = n × (n-1) × ... × 2 × 1'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Permutation (order matters): nPr = n!/(n-r)!', 'Combination (order doesn\'t matter): nCr = n!/[r!(n', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Factorial: n! = n × (n-1) × ... × 2 × 1', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Permutation (order matters): nPr = n!/(n-r)!', 'Factorial: n! = n × (n-1) × ... × 2 × 1'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Permutation (order matters): nPr = n!/(n-r)!. Factorial: n! = n × (n-1) × ... × 2 × 1.'
      }
    }
  ]
}
