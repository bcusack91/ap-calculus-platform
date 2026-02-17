export const calcBCSequencesPart6Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'infin6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L

If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L

### 2. Common use

|aₙ| ≤ cₙ → 0 implies aₙ → 0

### 3. Example

(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0

### 4. Squeeze theorem is especially useful for oscillating sequences

Squeeze theorem is especially useful for oscillating sequences
      `
    },
    {
      id: 'infin6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ =…?',
            options: [
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              '|aₙ| ≤ cₙ → 0 implies aₙ → 0',
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L',
              'Squeeze theorem is especially useful for oscillating sequences'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Example?',
            options: [
              '|aₙ| ≤ cₙ → 0 implies aₙ → 0',
              'Squeeze theorem is especially useful for oscillating sequences',
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Example: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infin6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L**
- **Common use**: |aₙ| ≤ cₙ → 0 implies aₙ → 0
- **Example**: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0
- **Squeeze theorem is especially useful for oscillating sequences**
      `
    },
    {
      id: 'infin6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Squeeze theorem is especially useful…?',
            options: [
              'Squeeze theorem is especially useful for oscillating sequences',
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              '|aₙ| ≤ cₙ → 0 implies aₙ → 0',
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Squeeze theorem is especially useful for oscillating sequences. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Common use',
            options: ['If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L', 'Squeeze theorem is especially useful for oscillating sequences', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0', '|aₙ| ≤ cₙ → 0 implies aₙ → 0']
          },
          {
            label: 'Example',
            options: ['If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0', 'Squeeze theorem is especially useful for oscillating sequences', '|aₙ| ≤ cₙ → 0 implies aₙ → 0']
          }
        ],
        correctAnswers: ['|aₙ| ≤ cₙ → 0 implies aₙ → 0', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Common use: |aₙ| ≤ cₙ → 0 implies aₙ → 0. Example: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0.'
      }
    }
  ]
}
