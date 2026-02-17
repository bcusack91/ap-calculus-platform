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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Monotonically increasing?',
            options: [
              'aₙ₊₁ ≤ aₙ for all n',
              'aₙ₊₁ ≥ aₙ for all n',
              'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n',
              'a monotone bounded sequence converges'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Monotonically increasing: aₙ₊₁ ≥ aₙ for all n. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Monotonic & Bounded Sequences, which explains Bounded above?',
            options: [
              'a monotone bounded sequence converges',
              'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n',
              'aₙ₊₁ ≥ aₙ for all n',
              'aₙ₊₁ ≤ aₙ for all n'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Bounded above: aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Monotone Convergence Theorem is correct?',
            options: [
              'aₙ₊₁ ≥ aₙ for all n',
              'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n',
              'a monotone bounded sequence converges',
              'aₙ₊₁ ≤ aₙ for all n'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Monotone Convergence Theorem: a monotone bounded sequence converges. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Monotonically increasing',
            options: ['aₙ₊₁ ≤ aₙ for all n', 'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n', 'aₙ₊₁ ≥ aₙ for all n', 'a monotone bounded sequence converges']
          },
          {
            label: 'Monotonically decreasing',
            options: ['aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n', 'aₙ₊₁ ≤ aₙ for all n', 'a monotone bounded sequence converges', 'aₙ₊₁ ≥ aₙ for all n']
          },
          {
            label: 'Bounded above',
            options: ['aₙ₊₁ ≤ aₙ for all n', 'aₙ₊₁ ≥ aₙ for all n', 'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n', 'a monotone bounded sequence converges']
          }
        ],
        correctAnswers: ['aₙ₊₁ ≥ aₙ for all n', 'aₙ₊₁ ≤ aₙ for all n', 'aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n'],
        hint1: 'Think about what each concept specifically describes in Monotonic & Bounded Sequences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Monotonic & Bounded Sequences describes a specific idea. Monotonically increasing: aₙ₊₁ ≥ aₙ for all n. Monotonically decreasing: aₙ₊₁ ≤ aₙ for all n. Bounded above: aₙ ≤ M for all n; Bounded below: aₙ ≥ m for all n.'
      }
    }
  ]
}
