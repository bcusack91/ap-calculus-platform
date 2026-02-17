export const actIntermAlgPart5Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i5-intro',
      type: 'text' as const,
      content: `
# Sequences & Patterns

**Part 5 of 7 — Sequences & Patterns**

Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d.

Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1).
      `
    },
    {
      id: 'act-i5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Arithmetic sequence" refer to in ACT prep?',
            options: [
              'Find the pattern: look at differences or ratios between terms.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'constant difference d; aₙ = a₁ + (n-1)d.',
              'constant ratio r; aₙ = a₁ · r^(n-1).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Sequences & Patterns, which explains Key Insight?',
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
      id: 'act-i5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find the pattern: look at differences or ratios between terms.

**ACT Tip:** Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).
      `
    },
    {
      id: 'act-i5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Sequences & Patterns, which correctly describes ACT Tip?',
            options: [
              'Find the pattern: look at differences or ratios between terms.',
              'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).',
              'constant difference d; aₙ = a₁ + (n-1)d.',
              'constant ratio r; aₙ = a₁ · r^(n-1).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arithmetic sequence',
            options: ['Find the pattern: look at differences or ratios between terms.', 'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'constant difference d; aₙ = a₁ + (n-1)d.', 'constant ratio r; aₙ = a₁ · r^(n-1).']
          },
          {
            label: 'Geometric sequence',
            options: ['Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'Find the pattern: look at differences or ratios between terms.', 'constant difference d; aₙ = a₁ + (n-1)d.']
          },
          {
            label: 'Key Insight',
            options: ['Find the pattern: look at differences or ratios between terms.', 'constant difference d; aₙ = a₁ + (n-1)d.', 'Sum formulas: arithmetic Sₙ = n(a₁ + aₙ)/2; geometric Sₙ = a₁(1-rⁿ)/(1-r).', 'constant ratio r; aₙ = a₁ · r^(n-1).']
          }
        ],
        correctAnswers: ['constant difference d; aₙ = a₁ + (n-1)d.', 'constant ratio r; aₙ = a₁ · r^(n-1).', 'Find the pattern: look at differences or ratios between terms.'],
        hint1: 'Think about what each concept specifically describes in Sequences & Patterns.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sequences & Patterns describes a specific idea. Arithmetic sequence: constant difference d; aₙ = a₁ + (n-1)d. Geometric sequence: constant ratio r; aₙ = a₁ · r^(n-1). Key Insight: Find the pattern: look at differences or ratios between terms.'
      }
    }
  ]
}
