export const calcABDerivAppsPart2Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli2-intro',
      type: 'text' as const,
      content: `
# Local Extrema

**Part 2 of 7 — Local Extrema**

### 1. Local maximum

f(c) ≥ f(x) for all x near c

### 2. Local minimum

f(c) ≤ f(x) for all x near c

### 3. Critical points

where f'(c) = 0 or f'(c) is undefined

### 4. Extrema only occur at critical points (within the domain)

Extrema only occur at critical points (within the domain)
      `
    },
    {
      id: 'appli2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of local extrema?',
            options: [
              'Local maximum',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Local maximum: f(c) ≥ f(x) for all x near c'
          },
          {
            question: 'In the context of local extrema, which is accurate?',
            options: [
              'where f\'(c) = 0 or f\'(c) is undefined',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Critical points: where f\'(c) = 0 or f\'(c) is undefined'
          }
        ]
      }
    },
    {
      id: 'appli2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Local maximum**: f(c) ≥ f(x) for all x near c
- **Local minimum**: f(c) ≤ f(x) for all x near c
- **Critical points**: where f'(c) = 0 or f'(c) is undefined
- **Extrema only occur at critical points (within the domain)**
      `
    },
    {
      id: 'appli2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to local extrema?',
            options: [
              'Extrema only occur at critical points (within the domain)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Extrema only occur at critical points (within the domain)'
          }
        ]
      }
    },
    {
      id: 'appli2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Local maximum',
            options: ['f(c) ≥ f(x) for all x near c', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Local minimum',
            options: ['f(c) ≤ f(x) for all x near c', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Critical points',
            options: ['where f\'(c) = 0 or f\'(c) is undefined', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(c) ≥ f(x) for all x near c', 'f(c) ≤ f(x) for all x near c', 'where f\'(c) = 0 or f\'(c) is undefined'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Local Extrema.'
      }
    }
  ]
}
