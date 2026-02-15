export const calcBCConvergenceTestsPart4Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conve4-intro',
      type: 'text' as const,
      content: `
# Comparison Tests

**Part 4 of 7 — Comparison Tests**

### 1. Direct Comparison

aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges

### 2. Direct Comparison

aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges

### 3. Limit Comparison

lim(aₙ/bₙ) = c (finite, positive) → same behavior

### 4. Choose bₙ to be a simpler series you know converges or diverges

Choose bₙ to be a simpler series you know converges or diverges
      `
    },
    {
      id: 'conve4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of comparison tests?',
            options: [
              'Direct Comparison',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Direct Comparison: aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges'
          },
          {
            question: 'In the context of comparison tests, which is accurate?',
            options: [
              'lim(aₙ/bₙ) = c (finite, positive) → same behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Limit Comparison: lim(aₙ/bₙ) = c (finite, positive) → same behavior'
          }
        ]
      }
    },
    {
      id: 'conve4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Direct Comparison**: aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges
- **Direct Comparison**: aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges
- **Limit Comparison**: lim(aₙ/bₙ) = c (finite, positive) → same behavior
- **Choose bₙ to be a simpler series you know converges or diverges**
      `
    },
    {
      id: 'conve4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to comparison tests?',
            options: [
              'Choose bₙ to be a simpler series you know converges or diverges',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Choose bₙ to be a simpler series you know converges or diverges'
          }
        ]
      }
    },
    {
      id: 'conve4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct Comparison',
            options: ['aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Direct Comparison',
            options: ['aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Limit Comparison',
            options: ['lim(aₙ/bₙ) = c (finite, positive) → same behavior', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges', 'aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges', 'lim(aₙ/bₙ) = c (finite, positive) → same behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Comparison Tests.'
      }
    }
  ]
}
