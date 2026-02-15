export const calcBCAlternatingPart3Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alter3-intro',
      type: 'text' as const,
      content: `
# Absolute vs Conditional Convergence

**Part 3 of 7 — Absolute vs Conditional Convergence**

### 1. Absolute convergence

Σ|aₙ| converges → Σaₙ converges absolutely

### 2. Conditional convergence

Σaₙ converges but Σ|aₙ| diverges

### 3. Absolute convergence implies convergence (stronger condition)

Absolute convergence implies convergence (stronger condition)

### 4. Alternating harmonic series

conditionally convergent (Σ1/n diverges)
      `
    },
    {
      id: 'alter3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of absolute vs conditional convergence?',
            options: [
              'Absolute convergence',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Absolute convergence: Σ|aₙ| converges → Σaₙ converges absolutely'
          },
          {
            question: 'In the context of absolute vs conditional convergence, which is accurate?',
            options: [
              'Absolute convergence implies convergence (stronger condition)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Absolute convergence implies convergence (stronger condition)'
          }
        ]
      }
    },
    {
      id: 'alter3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Absolute convergence**: Σ|aₙ| converges → Σaₙ converges absolutely
- **Conditional convergence**: Σaₙ converges but Σ|aₙ| diverges
- **Absolute convergence implies convergence (stronger condition)**
- **Alternating harmonic series**: conditionally convergent (Σ1/n diverges)
      `
    },
    {
      id: 'alter3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to absolute vs conditional convergence?',
            options: [
              'conditionally convergent (Σ1/n diverges)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Alternating harmonic series: conditionally convergent (Σ1/n diverges)'
          }
        ]
      }
    },
    {
      id: 'alter3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Absolute convergence',
            options: ['Σ|aₙ| converges → Σaₙ converges absolutely', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Conditional convergence',
            options: ['Σaₙ converges but Σ|aₙ| diverges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Absolute convergence implies convergence (stronger condition)',
            options: ['Absolute convergence implies convergence (stronger', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ|aₙ| converges → Σaₙ converges absolutely', 'Σaₙ converges but Σ|aₙ| diverges', 'Absolute convergence implies convergence (stronger'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Absolute vs Conditional Convergence.'
      }
    }
  ]
}
