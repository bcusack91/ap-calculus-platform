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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Absolute convergence" refer to in calculus?',
            options: [
              'Σ|aₙ| converges → Σaₙ converges absolutely',
              'conditionally convergent (Σ1/n diverges)',
              'Σaₙ converges but Σ|aₙ| diverges',
              'Absolute convergence implies convergence (stronger condition)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Absolute convergence: Σ|aₙ| converges → Σaₙ converges absolutely. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Absolute convergence implies…?',
            options: [
              'conditionally convergent (Σ1/n diverges)',
              'Absolute convergence implies convergence (stronger condition)',
              'Σaₙ converges but Σ|aₙ| diverges',
              'Σ|aₙ| converges → Σaₙ converges absolutely'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Absolute convergence implies convergence (stronger condition). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Alternating harmonic series?',
            options: [
              'Absolute convergence implies convergence (stronger condition)',
              'Σaₙ converges but Σ|aₙ| diverges',
              'conditionally convergent (Σ1/n diverges)',
              'Σ|aₙ| converges → Σaₙ converges absolutely'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Alternating harmonic series: conditionally convergent (Σ1/n diverges). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'alter3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Absolute convergence',
            options: ['Σaₙ converges but Σ|aₙ| diverges', 'Σ|aₙ| converges → Σaₙ converges absolutely', 'conditionally convergent (Σ1/n diverges)', 'Absolute convergence implies convergence (stronger condition)']
          },
          {
            label: 'Conditional convergence',
            options: ['conditionally convergent (Σ1/n diverges)', 'Σaₙ converges but Σ|aₙ| diverges', 'Absolute convergence implies convergence (stronger condition)', 'Σ|aₙ| converges → Σaₙ converges absolutely']
          },
          {
            label: 'Alternating harmonic series',
            options: ['Σ|aₙ| converges → Σaₙ converges absolutely', 'Σaₙ converges but Σ|aₙ| diverges', 'Absolute convergence implies convergence (stronger condition)', 'conditionally convergent (Σ1/n diverges)']
          }
        ],
        correctAnswers: ['Σ|aₙ| converges → Σaₙ converges absolutely', 'Σaₙ converges but Σ|aₙ| diverges', 'conditionally convergent (Σ1/n diverges)'],
        hint1: 'Think about what each concept specifically describes in Absolute vs Conditional Convergence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Absolute vs Conditional Convergence describes a specific idea. Absolute convergence: Σ|aₙ| converges → Σaₙ converges absolutely. Conditional convergence: Σaₙ converges but Σ|aₙ| diverges. Alternating harmonic series: conditionally convergent (Σ1/n diverges).'
      }
    }
  ]
}
