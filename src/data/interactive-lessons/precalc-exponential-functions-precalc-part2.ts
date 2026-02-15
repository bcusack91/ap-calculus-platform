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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of properties of exponential functions?',
            options: [
              'Domain',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Domain: all real numbers; Range: (0, ∞) for positive a'
          },
          {
            question: 'In the context of properties of exponential functions, which is accurate?',
            options: [
              'Exponential functions are always one-to-one',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Exponential functions are always one-to-one'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Domain',
            options: ['all real numbers; Range: (0, ∞) for positive a', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Horizontal asymptote at y = 0 (or y = k for shifts)',
            options: ['Horizontal asymptote at y = 0 (or y = k for shifts', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Exponential functions are always one-to-one',
            options: ['Exponential functions are always one-to-one', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['all real numbers; Range: (0, ∞) for positive a', 'Horizontal asymptote at y = 0 (or y = k for shifts', 'Exponential functions are always one-to-one'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Properties of Exponential Functions.'
      }
    }
  ]
}
