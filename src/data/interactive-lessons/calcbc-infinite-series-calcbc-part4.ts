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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains p-series?',
            options: [
              'Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1',
              'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges',
              'Σ 1/n diverges',
              'if lim(aₙ/bₙ) = c > 0, both series behave the same'
            ],
            correctAnswer: 0,
            explanation: 'Correct — p-series: Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of p-Series & Comparison Tests, which explains Direct Comparison?',
            options: [
              'if lim(aₙ/bₙ) = c > 0, both series behave the same',
              'Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1',
              'Σ 1/n diverges',
              'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Direct Comparison: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Limit Comparison?',
            options: [
              'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges',
              'Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1',
              'if lim(aₙ/bₙ) = c > 0, both series behave the same',
              'Σ 1/n diverges'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Limit Comparison: if lim(aₙ/bₙ) = c > 0, both series behave the same. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'infin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'p-series',
            options: ['if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges', 'if lim(aₙ/bₙ) = c > 0, both series behave the same', 'Σ 1/n diverges', 'Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1']
          },
          {
            label: 'Harmonic series (p=1)',
            options: ['if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges', 'Σ 1/n diverges', 'Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1', 'if lim(aₙ/bₙ) = c > 0, both series behave the same']
          },
          {
            label: 'Direct Comparison',
            options: ['Σ 1/n diverges', 'Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1', 'if lim(aₙ/bₙ) = c > 0, both series behave the same', 'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges']
          }
        ],
        correctAnswers: ['Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1', 'Σ 1/n diverges', 'if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges'],
        hint1: 'Think about what each concept specifically describes in p-Series & Comparison Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in p-Series & Comparison Tests describes a specific idea. p-series: Σ 1/nᵖ converges if p > 1, diverges if p ≤ 1. Harmonic series (p=1): Σ 1/n diverges. Direct Comparison: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges.'
      }
    }
  ]
}
