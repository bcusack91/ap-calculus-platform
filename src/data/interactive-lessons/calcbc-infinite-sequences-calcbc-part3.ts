export const calcBCSequencesPart3Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'infin3-intro',
      type: 'text' as const,
      content: `
# Limits of Sequences

**Part 3 of 7 — Limits of Sequences**

### 1. Direct computation

plug in and simplify

### 2. L'Hôpital's Rule (applied to a related function)

if lim f(x) helps find lim aₙ

### 3. If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0

If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0

### 4. Continuous function theorem

if f is continuous and aₙ → L, then f(aₙ) → f(L)
      `
    },
    {
      id: 'infin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of limits of sequences?',
            options: [
              'Direct computation',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Direct computation: plug in and simplify'
          },
          {
            question: 'In the context of limits of sequences, which is accurate?',
            options: [
              'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0'
          }
        ]
      }
    },
    {
      id: 'infin3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Direct computation**: plug in and simplify
- **L'Hôpital's Rule (applied to a related function)**: if lim f(x) helps find lim aₙ
- **If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0**
- **Continuous function theorem**: if f is continuous and aₙ → L, then f(aₙ) → f(L)
      `
    },
    {
      id: 'infin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to limits of sequences?',
            options: [
              'if f is continuous and aₙ → L, then f(aₙ) → f(L)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Continuous function theorem: if f is continuous and aₙ → L, then f(aₙ) → f(L)'
          }
        ]
      }
    },
    {
      id: 'infin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct computation',
            options: ['plug in and simplify', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'L\'Hôpital\'s Rule (applied to a related function)',
            options: ['if lim f(x) helps find lim aₙ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0',
            options: ['If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['plug in and simplify', 'if lim f(x) helps find lim aₙ', 'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Limits of Sequences.'
      }
    }
  ]
}
