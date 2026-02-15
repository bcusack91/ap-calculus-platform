export const calcABAccumulationPart6Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'accum6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Average value of f on [a,b]',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Average value of f on [a,b]: f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'rectangle with same area as the region under f',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Geometric interpretation: rectangle with same area as the region under f'
          }
        ]
      }
    },
    {
      id: 'accum6-detail',
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
      id: 'accum6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Units of average value are the same as the units of f',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Units of average value are the same as the units of f'
          }
        ]
      }
    },
    {
      id: 'accum6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average value of f on [a,b]',
            options: ['f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Mean Value Theorem for Integrals',
            options: ['f(c) = f_avg for some c in (a,b)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Geometric interpretation',
            options: ['rectangle with same area as the region under f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f_avg = (1/(b-a)) ∫ₐᵇ f(x)dx', 'f(c) = f_avg for some c in (a,b)', 'rectangle with same area as the region under f'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
