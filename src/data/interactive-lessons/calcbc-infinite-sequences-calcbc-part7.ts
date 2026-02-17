export const calcBCSequencesPart7Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'infin7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'infin7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ =…?',
            options: [
              'Squeeze theorem is especially useful for oscillating sequences',
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L',
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              '|aₙ| ≤ cₙ → 0 implies aₙ → 0'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Example?',
            options: [
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              'Squeeze theorem is especially useful for oscillating sequences',
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L',
              '|aₙ| ≤ cₙ → 0 implies aₙ → 0'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Example: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infin7-detail',
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
      id: 'infin7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes Squeeze theorem is especially useful…?',
            options: [
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              '|aₙ| ≤ cₙ → 0 implies aₙ → 0',
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L',
              'Squeeze theorem is especially useful for oscillating sequences'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Squeeze theorem is especially useful for oscillating sequences. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Common use',
            options: ['|aₙ| ≤ cₙ → 0 implies aₙ → 0', 'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L', 'Squeeze theorem is especially useful for oscillating sequences', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0']
          },
          {
            label: 'Example',
            options: ['Squeeze theorem is especially useful for oscillating sequences', '|aₙ| ≤ cₙ → 0 implies aₙ → 0', 'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0']
          }
        ],
        correctAnswers: ['|aₙ| ≤ cₙ → 0 implies aₙ → 0', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Common use: |aₙ| ≤ cₙ → 0 implies aₙ → 0. Example: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0.'
      }
    }
  ]
}
