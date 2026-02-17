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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Direct computation?',
            options: [
              'plug in and simplify',
              'if lim f(x) helps find lim aₙ',
              'if f is continuous and aₙ → L, then f(aₙ) → f(L)',
              'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Direct computation: plug in and simplify. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ…?',
            options: [
              'if lim f(x) helps find lim aₙ',
              'plug in and simplify',
              'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0',
              'if f is continuous and aₙ → L, then f(aₙ) → f(L)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Continuous function theorem?',
            options: [
              'if f is continuous and aₙ → L, then f(aₙ) → f(L)',
              'plug in and simplify',
              'if lim f(x) helps find lim aₙ',
              'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Continuous function theorem: if f is continuous and aₙ → L, then f(aₙ) → f(L). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct computation',
            options: ['if f is continuous and aₙ → L, then f(aₙ) → f(L)', 'if lim f(x) helps find lim aₙ', 'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0', 'plug in and simplify']
          },
          {
            label: 'L\'Hôpital\'s Rule (applied to a related function)',
            options: ['If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0', 'if lim f(x) helps find lim aₙ', 'plug in and simplify', 'if f is continuous and aₙ → L, then f(aₙ) → f(L)']
          },
          {
            label: 'Continuous function theorem',
            options: ['if lim f(x) helps find lim aₙ', 'plug in and simplify', 'If lim(n→∞) |aₙ| = 0, then lim(n→∞) aₙ = 0', 'if f is continuous and aₙ → L, then f(aₙ) → f(L)']
          }
        ],
        correctAnswers: ['plug in and simplify', 'if lim f(x) helps find lim aₙ', 'if f is continuous and aₙ → L, then f(aₙ) → f(L)'],
        hint1: 'Think about what each concept specifically describes in Limits of Sequences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Limits of Sequences describes a specific idea. Direct computation: plug in and simplify. L\'Hôpital\'s Rule (applied to a related function): if lim f(x) helps find lim aₙ. Continuous function theorem: if f is continuous and aₙ → L, then f(aₙ) → f(L).'
      }
    }
  ]
}
