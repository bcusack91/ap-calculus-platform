export const calcBCSeriesPart4Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'infin4-intro',
      type: 'text' as const,
      content: `
# p-Series & Comparison Tests

**Part 4 of 7 — p-Series & Comparison Tests**

### 1. p-series

Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1

### 2. Harmonic series (p=1)

Σ 1/n diverges

### 3. Direct Comparison

if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges

### 4. Limit Comparison

if lim(aₙ/bₙ) = c > 0, both series behave the same
      `
    },
    {
      id: 'infin4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of p-series & comparison tests?',
            options: [
              'p-series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'p-series: Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1'
          },
          {
            question: 'In the context of p-series & comparison tests, which is accurate?',
            options: [
              'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Direct Comparison: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges'
          }
        ]
      }
    },
    {
      id: 'infin4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **p-series**: Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1
- **Harmonic series (p=1)**: Σ 1/n diverges
- **Direct Comparison**: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges
- **Limit Comparison**: if lim(aₙ/bₙ) = c > 0, both series behave the same
      `
    },
    {
      id: 'infin4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to p-series & comparison tests?',
            options: [
              'if lim(aₙ/bₙ) = c > 0, both series behave the same',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Limit Comparison: if lim(aₙ/bₙ) = c > 0, both series behave the same'
          }
        ]
      }
    },
    {
      id: 'infin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'p-series',
            options: ['Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Harmonic series (p=1)',
            options: ['Σ 1/n diverges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Direct Comparison',
            options: ['if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converg', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1', 'Σ 1/n diverges', 'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converg'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding p-Series & Comparison Tests.'
      }
    }
  ]
}
