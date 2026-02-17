export const calcABAccumulationPart7Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'accum7-quiz1',
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
            question: 'Select the statement that correctly describes Geometric interpretation:',
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
      id: 'accum7-detail',
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
      id: 'accum7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Units of average value are the same as… is correct?',
            options: [
              'rectangle with same area as the region under f',
              'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx',
              'f(c) = f_avg for some c in (a,b)',
              'Units of average value are the same as the units of f'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Units of average value are the same as the units of f. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'accum7-dropdown',
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
            options: ['f(c) = f_avg for some c in (a,b)', 'rectangle with same area as the region under f', 'Units of average value are the same as the units of f', 'f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx']
          },
          {
            label: 'Geometric interpretation',
            options: ['f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'rectangle with same area as the region under f', 'Units of average value are the same as the units of f', 'f(c) = f_avg for some c in (a,b)']
          }
        ],
        correctAnswers: ['f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'f(c) = f_avg for some c in (a,b)', 'rectangle with same area as the region under f'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Average value of f on [a,b]: f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx. Mean Value Theorem for Integrals: f(c) = f_avg for some c in (a,b). Geometric interpretation: rectangle with same area as the region under f.'
      }
    }
  ]
}
