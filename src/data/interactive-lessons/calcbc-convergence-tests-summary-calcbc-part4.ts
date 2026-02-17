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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Direct Comparison" refer to in calculus?',
            options: [
              'Choose bₙ to be a simpler series you know converges or diverges',
              'This is a common misconception about the topic',
              'aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges',
              'lim(aₙ/bₙ) = c (finite, positive) → same behavior'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Direct Comparison: aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Limit Comparison?',
            options: [
              'aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges',
              'Choose bₙ to be a simpler series you know converges or diverges',
              'aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges',
              'lim(aₙ/bₙ) = c (finite, positive) → same behavior'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Limit Comparison: lim(aₙ/bₙ) = c (finite, positive) → same behavior. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Choose bₙ to be a simpler series you…?',
            options: [
              'lim(aₙ/bₙ) = c (finite, positive) → same behavior',
              'aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges',
              'aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges',
              'Choose bₙ to be a simpler series you know converges or diverges'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Choose bₙ to be a simpler series you know converges or diverges. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'conve4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct Comparison',
            options: ['aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges', 'aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges', 'Choose bₙ to be a simpler series you know converges or diverges', 'lim(aₙ/bₙ) = c (finite, positive) → same behavior']
          },
          {
            label: 'Direct Comparison',
            options: ['aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges', 'lim(aₙ/bₙ) = c (finite, positive) → same behavior', 'Choose bₙ to be a simpler series you know converges or diverges', 'aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges']
          },
          {
            label: 'Limit Comparison',
            options: ['lim(aₙ/bₙ) = c (finite, positive) → same behavior', 'Choose bₙ to be a simpler series you know converges or diverges', 'aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges', 'aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges']
          }
        ],
        correctAnswers: ['aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges', 'aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges', 'lim(aₙ/bₙ) = c (finite, positive) → same behavior'],
        hint1: 'Think about what each concept specifically describes in Comparison Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comparison Tests describes a specific idea. Direct Comparison: aₙ ≤ bₙ and Σbₙ converges → Σaₙ converges. Direct Comparison: aₙ ≥ bₙ and Σbₙ diverges → Σaₙ diverges. Limit Comparison: lim(aₙ/bₙ) = c (finite, positive) → same behavior.'
      }
    }
  ]
}
