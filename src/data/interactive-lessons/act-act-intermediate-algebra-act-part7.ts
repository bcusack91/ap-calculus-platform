export const actIntermAlgPart7Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d.

Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1).
      `
    },
    {
      id: 'act-i7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes arithmetic sequence?',
            options: [
              'Arithmetic sequence is a key concept for ACT Math',
              'Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d'
          }
        ]
      }
    },
    {
      id: 'act-i7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find the pattern: look at differences or ratios between terms.

**ACT Tip:** Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).
      `
    },
    {
      id: 'act-i7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Find the pattern: look at differences or ratios between terms',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Find the pattern: look at differences or ratios between terms'
          }
        ]
      }
    },
    {
      id: 'act-i7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Arithmetic sequence: constant difference d; aₙ = a', 'Geometric sequence: constant ratio r; aₙ = a₁ · r^', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Find the pattern: look at differences or ratios be', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Arithmetic sequence: constant difference d; aₙ = a', 'Find the pattern: look at differences or ratios be'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. Find the pattern: look at differences or ratios between terms.'
      }
    }
  ]
}
