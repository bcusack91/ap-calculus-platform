export const calcABDerivAppsPart4Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli4-intro',
      type: 'text' as const,
      content: `
# First & Second Derivative Tests

**Part 4 of 7 — First & Second Derivative Tests**

### 1. First Derivative Test

f' changes sign from + to - at c → local max; - to + → local min

### 2. Second Derivative Test

if f'(c)=0 and f''{c} < 0 → local max; f''{c} > 0 → local min

### 3. If f''{c} = 0, the second derivative test is inconclusive

If f''{c} = 0, the second derivative test is inconclusive

### 4. Create a sign chart for f' to determine increasing/decreasing intervals

Create a sign chart for f' to determine increasing/decreasing intervals
      `
    },
    {
      id: 'appli4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of first & second derivative tests?',
            options: [
              'First Derivative Test',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'First Derivative Test: f\' changes sign from + to - at c → local max; - to + → local min'
          },
          {
            question: 'In the context of first & second derivative tests, which is accurate?',
            options: [
              'If f\'\'{c} = 0, the second derivative test is inconclusive',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If f\'\'{c} = 0, the second derivative test is inconclusive'
          }
        ]
      }
    },
    {
      id: 'appli4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **First Derivative Test**: f' changes sign from + to - at c → local max; - to + → local min
- **Second Derivative Test**: if f'(c)=0 and f''{c} < 0 → local max; f''{c} > 0 → local min
- **If f''{c} = 0, the second derivative test is inconclusive**
- **Create a sign chart for f' to determine increasing/decreasing intervals**
      `
    },
    {
      id: 'appli4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to first & second derivative tests?',
            options: [
              'Create a sign chart for f\' to determine increasing/decreasing intervals',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Create a sign chart for f\' to determine increasing/decreasing intervals'
          }
        ]
      }
    },
    {
      id: 'appli4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'First Derivative Test',
            options: ['f\' changes sign from + to - at c → local max; - to', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Second Derivative Test',
            options: ['if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If f\'\'{c} = 0, the second derivative test is inconclusive',
            options: ['If f\'\'{c} = 0, the second derivative test is incon', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f\' changes sign from + to - at c → local max; - to', 'if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 ', 'If f\'\'{c} = 0, the second derivative test is incon'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding First & Second Derivative Tests.'
      }
    }
  ]
}
