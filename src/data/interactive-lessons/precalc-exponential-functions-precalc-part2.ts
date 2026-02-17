export const precalcExponentialPart2Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon2-intro',
      type: 'text' as const,
      content: `
# Properties of Exponential Functions

**Part 2 of 7 — Properties of Exponential Functions**

### 1. Domain

all real numbers; Range: (0, ∞) for positive a

### 2. Horizontal asymptote at y = 0 (or y = k for shifts)

Horizontal asymptote at y = 0 (or y = k for shifts)

### 3. Exponential functions are always one-to-one

Exponential functions are always one-to-one

### 4. Transformations

f(x) = a · b^(x-h) + k shifts h units right, k units up
      `
    },
    {
      id: 'expon2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Domain?',
            options: [
              'f(x) = a · b^(x-h) + k shifts h units right, k units up',
              'Horizontal asymptote at y = 0 (or y = k for shifts)',
              'Exponential functions are always one-to-one',
              'all real numbers; Range: (0, ∞) for positive a'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Domain: all real numbers; Range: (0, ∞) for positive a. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Properties of Exponential Functions, which explains Exponential functions are always…?',
            options: [
              'Exponential functions are always one-to-one',
              'all real numbers; Range: (0, ∞) for positive a',
              'Horizontal asymptote at y = 0 (or y = k for shifts)',
              'f(x) = a · b^(x-h) + k shifts h units right, k units up'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Exponential functions are always one-to-one. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Domain**: all real numbers; Range: (0, ∞) for positive a
- **Horizontal asymptote at y = 0 (or y = k for shifts)**
- **Exponential functions are always one-to-one**
- **Transformations**: f(x) = a · b^(x-h) + k shifts h units right, k units up
      `
    },
    {
      id: 'expon2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to properties of exponential functions?',
            options: [
              'f(x) = a · b^(x-h) + k shifts h units right, k units up',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Transformations: f(x) = a · b^(x-h) + k shifts h units right, k units up'
          }
        ]
      }
    },
    {
      id: 'expon2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Domain',
            options: ['f(x) = a · b^(x-h) + k shifts h units right, k units up', 'all real numbers; Range: (0, ∞) for positive a', 'Horizontal asymptote at y = 0 (or y = k for shifts)', 'Exponential functions are always one-to-one']
          },
          {
            label: 'Transformations',
            options: ['f(x) = a · b^(x-h) + k shifts h units right, k units up', 'Exponential functions are always one-to-one', 'Horizontal asymptote at y = 0 (or y = k for shifts)', 'all real numbers; Range: (0, ∞) for positive a']
          }
        ],
        correctAnswers: ['all real numbers; Range: (0, ∞) for positive a', 'f(x) = a · b^(x-h) + k shifts h units right, k units up'],
        hint1: 'Think about what each concept specifically describes in Properties of Exponential Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Properties of Exponential Functions describes a specific idea. Domain: all real numbers; Range: (0, ∞) for positive a. Transformations: f(x) = a · b^(x-h) + k shifts h units right, k units up.'
      }
    }
  ]
}
