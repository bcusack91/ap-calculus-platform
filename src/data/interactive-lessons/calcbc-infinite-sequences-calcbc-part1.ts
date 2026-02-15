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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sequences & convergence?',
            options: [
              'Sequence {aₙ}',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Sequence {aₙ}: an ordered list a₁, a₂, a₃, ...'
          },
          {
            question: 'In the context of sequences & convergence, which is accurate?',
            options: [
              'the limit does not exist or is ±∞',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Divergent: the limit does not exist or is ±∞'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sequences & convergence?',
            options: [
              'A sequence converges if and only if the terms get arbitrarily close to L',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'A sequence converges if and only if the terms get arbitrarily close to L'
          }
        ]
      }
    },
    {
      id: 'infin1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sequence {aₙ}',
            options: ['an ordered list a₁, a₂, a₃, ...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Convergent',
            options: ['lim(n→∞) aₙ = L (approaches a finite limit)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Divergent',
            options: ['the limit does not exist or is ±∞', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['an ordered list a₁, a₂, a₃, ...', 'lim(n→∞) aₙ = L (approaches a finite limit)', 'the limit does not exist or is ±∞'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Sequences & Convergence.'
      }
    }
  ]
}
