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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Example: (-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Squeeze theorem is especially useful for oscillating sequences',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Squeeze theorem is especially useful for oscillating sequences'
          }
        ]
      }
    },
    {
      id: 'infin6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim bₙ = L',
            options: ['If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Common use',
            options: ['|aₙ| ≤ cₙ → 0 implies aₙ → 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Example',
            options: ['(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['If aₙ ≤ bₙ ≤ cₙ and lim aₙ = lim cₙ = L, then lim ', '|aₙ| ≤ cₙ → 0 implies aₙ → 0', '(-1)ⁿ/n → 0 because |(-1)ⁿ/n| = 1/n → 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
