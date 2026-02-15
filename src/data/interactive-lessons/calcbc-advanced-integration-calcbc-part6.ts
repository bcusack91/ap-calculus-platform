export const calcBCAdvIntegrationPart6Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'advan6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Some functions have no elementary antiderivative

e^(-x²), sin(x)/x, etc.

### 2. Use power series to integrate term by term

Use power series to integrate term by term

### 3. Use numerical methods for definite integrals

Use numerical methods for definite integrals

### 4. These functions are still well-defined — they just can't be written in closed form

These functions are still well-defined — they just can't be written in closed form
      `
    },
    {
      id: 'advan6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Some functions have no elementary antiderivative',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Some functions have no elementary antiderivative: e^(-x²), sin(x)/x, etc.'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Use numerical methods for definite integrals',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use numerical methods for definite integrals'
          }
        ]
      }
    },
    {
      id: 'advan6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Some functions have no elementary antiderivative**: e^(-x²), sin(x)/x, etc.
- **Use power series to integrate term by term**
- **Use numerical methods for definite integrals**
- **These functions are still well-defined — they just can't be written in closed form**
      `
    },
    {
      id: 'advan6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'These functions are still well-defined — they just can\'t be written in closed fo',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'These functions are still well-defined — they just can\'t be written in closed form'
          }
        ]
      }
    },
    {
      id: 'advan6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Some functions have no elementary antiderivative',
            options: ['e^(-x²), sin(x)/x, etc.', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use power series to integrate term by term',
            options: ['Use power series to integrate term by term', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use numerical methods for definite integrals',
            options: ['Use numerical methods for definite integrals', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['e^(-x²), sin(x)/x, etc.', 'Use power series to integrate term by term', 'Use numerical methods for definite integrals'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
