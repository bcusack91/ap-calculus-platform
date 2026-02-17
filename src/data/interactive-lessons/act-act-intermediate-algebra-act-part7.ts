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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Arithmetic sequence?',
            options: [
              'constant ratio r; aₙ = a₁ · r^(n-1).',
              'Find the pattern: look at differences or ratios between terms.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'constant difference d; aₙ = a₁ + (n-1)d.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'constant difference d; aₙ = a₁ + (n-1)d.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'Find the pattern: look at differences or ratios between terms.',
              'constant ratio r; aₙ = a₁ · r^(n-1).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Find the pattern: look at differences or ratios between terms. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'constant ratio r; aₙ = a₁ · r^(n-1).',
              'Find the pattern: look at differences or ratios between terms.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'constant difference d; aₙ = a₁ + (n-1)d.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arithmetic sequence',
            options: ['Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'Find the pattern: look at differences or ratios between terms.', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'constant difference d; aₙ = a₁ + (n-1)d.']
          },
          {
            label: 'Geometric sequence',
            options: ['Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'Find the pattern: look at differences or ratios between terms.', 'constant difference d; aₙ = a₁ + (n-1)d.', 'constant ratio r; aₙ = a₁ · r^(n-1).']
          },
          {
            label: 'Key Insight',
            options: ['constant ratio r; aₙ = a₁ · r^(n-1).', 'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'Find the pattern: look at differences or ratios between terms.', 'constant difference d; aₙ = a₁ + (n-1)d.']
          }
        ],
        correctAnswers: ['constant difference d; aₙ = a₁ + (n-1)d.', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'Find the pattern: look at differences or ratios between terms.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1). Key Insight: Find the pattern: look at differences or ratios between terms.'
      }
    }
  ]
}
