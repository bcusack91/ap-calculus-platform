export const calcBCSequencesPart2Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'infin2-intro',
      type: 'text' as const,
      content: `
# Monotonic & Bounded Sequences

**Part 2 of 7 — Monotonic & Bounded Sequences**

### 1. Monotonically increasing

aₙ₊₁ ≥ aₙ for all n

### 2. Monotonically decreasing

aₙ₊₁ ≤ aₙ for all n

### 3. Bounded above

aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n

### 4. Monotone Convergence Theorem

a monotone bounded sequence converges
      `
    },
    {
      id: 'infin2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of monotonic & bounded sequences?',
            options: [
              'Monotonically increasing',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Monotonically increasing: aₙ₊₁ ≥ aₙ for all n'
          },
          {
            question: 'In the context of monotonic & bounded sequences, which is accurate?',
            options: [
              'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Bounded above: aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n'
          }
        ]
      }
    },
    {
      id: 'infin2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Monotonically increasing**: aₙ₊₁ ≥ aₙ for all n
- **Monotonically decreasing**: aₙ₊₁ ≤ aₙ for all n
- **Bounded above**: aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n
- **Monotone Convergence Theorem**: a monotone bounded sequence converges
      `
    },
    {
      id: 'infin2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to monotonic & bounded sequences?',
            options: [
              'a monotone bounded sequence converges',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Monotone Convergence Theorem: a monotone bounded sequence converges'
          }
        ]
      }
    },
    {
      id: 'infin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monotonically increasing',
            options: ['aₙ₊₁ ≥ aₙ for all n', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Monotonically decreasing',
            options: ['aₙ₊₁ ≤ aₙ for all n', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Bounded above',
            options: ['aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['aₙ₊₁ ≥ aₙ for all n', 'aₙ₊₁ ≤ aₙ for all n', 'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Monotonic & Bounded Sequences.'
      }
    }
  ]
}
