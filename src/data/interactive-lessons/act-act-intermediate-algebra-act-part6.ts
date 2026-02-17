export const actIntermAlgPart6Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d.

Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1).
      `
    },
    {
      id: 'act-i6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Arithmetic sequence" refer to in ACT prep?',
            options: [
              'constant difference d; aₙ = a₁ + (n-1)d.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'Find the pattern: look at differences or ratios between terms.',
              'constant ratio r; aₙ = a₁ · r^(n-1).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'constant difference d; aₙ = a₁ + (n-1)d.',
              'Find the pattern: look at differences or ratios between terms.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'constant ratio r; aₙ = a₁ · r^(n-1).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Find the pattern: look at differences or ratios between terms. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-i6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find the pattern: look at differences or ratios between terms.

**ACT Tip:** Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).
      `
    },
    {
      id: 'act-i6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'constant difference d; aₙ = a₁ + (n-1)d.',
              'constant ratio r; aₙ = a₁ · r^(n-1).',
              'Find the pattern: look at differences or ratios between terms.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arithmetic sequence',
            options: ['constant difference d; aₙ = a₁ + (n-1)d.', 'Find the pattern: look at differences or ratios between terms.', 'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'constant ratio r; aₙ = a₁ · r^(n-1).']
          },
          {
            label: 'Geometric sequence',
            options: ['constant difference d; aₙ = a₁ + (n-1)d.', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'Find the pattern: look at differences or ratios between terms.', 'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).']
          },
          {
            label: 'Key Insight',
            options: ['constant difference d; aₙ = a₁ + (n-1)d.', 'Find the pattern: look at differences or ratios between terms.', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).']
          }
        ],
        correctAnswers: ['constant difference d; aₙ = a₁ + (n-1)d.', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'Find the pattern: look at differences or ratios between terms.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1). Key Insight: Find the pattern: look at differences or ratios between terms.'
      }
    }
  ]
}
