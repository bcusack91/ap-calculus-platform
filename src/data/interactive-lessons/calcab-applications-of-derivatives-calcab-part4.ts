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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes First Derivative Test?',
            options: [
              'Create a sign chart for f\' to determine increasing/decreasing intervals',
              'f\' changes sign from + to - at c → local max; - to + → local min',
              'if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min',
              'If f\'\'{c} = 0, the second derivative test is inconclusive'
            ],
            correctAnswer: 1,
            explanation: 'Correct — First Derivative Test: f\' changes sign from + to - at c → local max; - to + → local min. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of First & Second Derivative Tests, which explains If f\'\'{c} = 0, the second derivative…?',
            options: [
              'if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min',
              'f\' changes sign from + to - at c → local max; - to + → local min',
              'Create a sign chart for f\' to determine increasing/decreasing intervals',
              'If f\'\'{c} = 0, the second derivative test is inconclusive'
            ],
            correctAnswer: 3,
            explanation: 'Correct — If f\'\'{c} = 0, the second derivative test is inconclusive. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding First & Second Derivative Tests, which correctly describes Create a sign chart for f\' to determine…?',
            options: [
              'f\' changes sign from + to - at c → local max; - to + → local min',
              'If f\'\'{c} = 0, the second derivative test is inconclusive',
              'Create a sign chart for f\' to determine increasing/decreasing intervals',
              'if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Create a sign chart for f\' to determine increasing/decreasing intervals. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'First Derivative Test',
            options: ['if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min', 'If f\'\'{c} = 0, the second derivative test is inconclusive', 'f\' changes sign from + to - at c → local max; - to + → local min', 'Create a sign chart for f\' to determine increasing/decreasing intervals']
          },
          {
            label: 'Second Derivative Test',
            options: ['f\' changes sign from + to - at c → local max; - to + → local min', 'If f\'\'{c} = 0, the second derivative test is inconclusive', 'Create a sign chart for f\' to determine increasing/decreasing intervals', 'if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min']
          }
        ],
        correctAnswers: ['f\' changes sign from + to - at c → local max; - to + → local min', 'if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min'],
        hint1: 'Think about what each concept specifically describes in First & Second Derivative Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in First & Second Derivative Tests describes a specific idea. First Derivative Test: f\' changes sign from + to - at c → local max; - to + → local min. Second Derivative Test: if f\'(c)=0 and f\'\'{c} < 0 → local max; f\'\'{c} > 0 → local min.'
      }
    }
  ]
}
