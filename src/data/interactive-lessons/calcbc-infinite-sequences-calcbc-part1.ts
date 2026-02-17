export const calcBCSequencesPart1Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'infin1-intro',
      type: 'text' as const,
      content: `
# ∮ Infinite Sequences

**Part 1 of 7 — Sequences & Convergence**

### 1. Sequence {aₙ}

an ordered list a₁, a₂, a₃, ...

### 2. Convergent

lim(n→∞) aₙ = L (approaches a finite limit)

### 3. Divergent

the limit does not exist or is ±∞

### 4. A sequence converges if and only if the terms get arbitrarily close to L

A sequence converges if and only if the terms get arbitrarily close to L
      `
    },
    {
      id: 'infin1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Sequence {aₙ}?',
            options: [
              'the limit does not exist or is ±∞',
              'A sequence converges if and only if the terms get arbitrarily close to L',
              'lim(n→∞) aₙ = L (approaches a finite limit)',
              'an ordered list a₁, a₂, a₃, ...'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sequence {aₙ}: an ordered list a₁, a₂, a₃, ... The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ∮ Infinite Sequences, which explains Divergent?',
            options: [
              'lim(n→∞) aₙ = L (approaches a finite limit)',
              'A sequence converges if and only if the terms get arbitrarily close to L',
              'the limit does not exist or is ±∞',
              'an ordered list a₁, a₂, a₃, ...'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Divergent: the limit does not exist or is ±∞. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infin1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Sequence {aₙ}**: an ordered list a₁, a₂, a₃, ...
- **Convergent**: lim(n→∞) aₙ = L (approaches a finite limit)
- **Divergent**: the limit does not exist or is ±∞
- **A sequence converges if and only if the terms get arbitrarily close to L**
      `
    },
    {
      id: 'infin1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding ∮ Infinite Sequences, which correctly describes A sequence converges if and only if the…?',
            options: [
              'lim(n→∞) aₙ = L (approaches a finite limit)',
              'the limit does not exist or is ±∞',
              'an ordered list a₁, a₂, a₃, ...',
              'A sequence converges if and only if the terms get arbitrarily close to L'
            ],
            correctAnswer: 3,
            explanation: 'Correct — A sequence converges if and only if the terms get arbitrarily close to L. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sequence {aₙ}',
            options: ['an ordered list a₁, a₂, a₃, ...', 'lim(n→∞) aₙ = L (approaches a finite limit)', 'A sequence converges if and only if the terms get arbitrarily close to L', 'the limit does not exist or is ±∞']
          },
          {
            label: 'Convergent',
            options: ['lim(n→∞) aₙ = L (approaches a finite limit)', 'A sequence converges if and only if the terms get arbitrarily close to L', 'an ordered list a₁, a₂, a₃, ...', 'the limit does not exist or is ±∞']
          },
          {
            label: 'Divergent',
            options: ['A sequence converges if and only if the terms get arbitrarily close to L', 'the limit does not exist or is ±∞', 'an ordered list a₁, a₂, a₃, ...', 'lim(n→∞) aₙ = L (approaches a finite limit)']
          }
        ],
        correctAnswers: ['an ordered list a₁, a₂, a₃, ...', 'lim(n→∞) aₙ = L (approaches a finite limit)', 'the limit does not exist or is ±∞'],
        hint1: 'Think about what each concept specifically describes in ∮ Infinite Sequences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Infinite Sequences describes a specific idea. Sequence {aₙ}: an ordered list a₁, a₂, a₃, ... Convergent: lim(n→∞) aₙ = L (approaches a finite limit). Divergent: the limit does not exist or is ±∞.'
      }
    }
  ]
}
