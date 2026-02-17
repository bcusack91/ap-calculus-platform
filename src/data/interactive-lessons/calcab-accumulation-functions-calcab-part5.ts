export const calcABAccumulationPart5Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum5-intro',
      type: 'text' as const,
      content: `
# Average Value of a Function

**Part 5 of 7 — Average Value of a Function**

### 1. Average value of f on [a,b]

f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx

### 2. Mean Value Theorem for Integrals

f(c) = f_avg for some c in (a,b)

### 3. Geometric interpretation

rectangle with same area as the region under f

### 4. Units of average value are the same as the units of f

Units of average value are the same as the units of f
      `
    },
    {
      id: 'accum5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Average value of f on [a,b]?',
            options: [
              'rectangle with same area as the region under f',
              'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx',
              'f(c) = f_avg for some c in (a,b)',
              'Units of average value are the same as the units of f'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average value of f on [a,b]: f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Average Value of a Function, which explains Geometric interpretation?',
            options: [
              'Units of average value are the same as the units of f',
              'f(c) = f_avg for some c in (a,b)',
              'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx',
              'rectangle with same area as the region under f'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Geometric interpretation: rectangle with same area as the region under f. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'accum5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Average value of f on [a,b]**: f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx
- **Mean Value Theorem for Integrals**: f(c) = f_avg for some c in (a,b)
- **Geometric interpretation**: rectangle with same area as the region under f
- **Units of average value are the same as the units of f**
      `
    },
    {
      id: 'accum5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Average Value of a Function, which correctly describes Units of average value are the same as…?',
            options: [
              'Units of average value are the same as the units of f',
              'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx',
              'rectangle with same area as the region under f',
              'f(c) = f_avg for some c in (a,b)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Units of average value are the same as the units of f. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'accum5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average value of f on [a,b]',
            options: ['f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'f(c) = f_avg for some c in (a,b)', 'rectangle with same area as the region under f', 'Units of average value are the same as the units of f']
          },
          {
            label: 'Mean Value Theorem for Integrals',
            options: ['rectangle with same area as the region under f', 'Units of average value are the same as the units of f', 'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'f(c) = f_avg for some c in (a,b)']
          },
          {
            label: 'Geometric interpretation',
            options: ['rectangle with same area as the region under f', 'f(c) = f_avg for some c in (a,b)', 'Units of average value are the same as the units of f', 'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx']
          }
        ],
        correctAnswers: ['f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'f(c) = f_avg for some c in (a,b)', 'rectangle with same area as the region under f'],
        hint1: 'Think about what each concept specifically describes in Average Value of a Function.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Average Value of a Function describes a specific idea. Average value of f on [a,b]: f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx. Mean Value Theorem for Integrals: f(c) = f_avg for some c in (a,b). Geometric interpretation: rectangle with same area as the region under f.'
      }
    }
  ]
}
