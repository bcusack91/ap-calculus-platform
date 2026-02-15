export const calcABAccumulationPart1Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum1-intro',
      type: 'text' as const,
      content: `
# ∫ Accumulation Functions

**Part 1 of 7 — Accumulation Functions**

### 1. F(x) = ∫ₐˣ f(t)dt is an accumulation function

F(x) = ∫ₐˣ f(t)dt is an accumulation function

### 2. F(x) accumulates the net signed area from a to x

F(x) accumulates the net signed area from a to x

### 3. F(a) = 0 (no accumulation at the starting point)

F(a) = 0 (no accumulation at the starting point)

### 4. F is increasing where f > 0, decreasing where f < 0

F is increasing where f > 0, decreasing where f < 0
      `
    },
    {
      id: 'accum1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of accumulation functions?',
            options: [
              'F(x) = ∫ₐˣ f(t)dt is an accumulation function',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'F(x) = ∫ₐˣ f(t)dt is an accumulation function'
          },
          {
            question: 'In the context of accumulation functions, which is accurate?',
            options: [
              'F(a) = 0 (no accumulation at the starting point)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'F(a) = 0 (no accumulation at the starting point)'
          }
        ]
      }
    },
    {
      id: 'accum1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **F(x) = ∫ₐˣ f(t)dt is an accumulation function**
- **F(x) accumulates the net signed area from a to x**
- **F(a) = 0 (no accumulation at the starting point)**
- **F is increasing where f > 0, decreasing where f < 0**
      `
    },
    {
      id: 'accum1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to accumulation functions?',
            options: [
              'F is increasing where f > 0, decreasing where f < 0',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'F is increasing where f > 0, decreasing where f < 0'
          }
        ]
      }
    },
    {
      id: 'accum1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'F(x) = ∫ₐˣ f(t)dt is an accumulation function',
            options: ['F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'F(x) accumulates the net signed area from a to x',
            options: ['F(x) accumulates the net signed area from a to x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'F(a) = 0 (no accumulation at the starting point)',
            options: ['F(a) = 0 (no accumulation at the starting point)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'F(x) accumulates the net signed area from a to x', 'F(a) = 0 (no accumulation at the starting point)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Accumulation Functions.'
      }
    }
  ]
}
