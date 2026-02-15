export const precalcTrigFunctionsPart3Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo3-intro',
      type: 'text' as const,
      content: `
# Sine & Cosine Functions

**Part 3 of 7 — Sine & Cosine Functions**

### 1. sin θ = y-coordinate on unit circle; cos θ = x-coordinate

sin θ = y-coordinate on unit circle; cos θ = x-coordinate

### 2. Period of sin and cos

2π

### 3. Amplitude

|a| in y = a sin(bx) or y = a cos(bx)

### 4. Domain

all reals; Range: [-1, 1]
      `
    },
    {
      id: 'trigo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sine & cosine functions?',
            options: [
              'sin θ = y-coordinate on unit circle; cos θ = x-coordinate',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'sin θ = y-coordinate on unit circle; cos θ = x-coordinate'
          },
          {
            question: 'In the context of sine & cosine functions, which is accurate?',
            options: [
              '|a| in y = a sin(bx) or y = a cos(bx)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Amplitude: |a| in y = a sin(bx) or y = a cos(bx)'
          }
        ]
      }
    },
    {
      id: 'trigo3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **sin θ = y-coordinate on unit circle; cos θ = x-coordinate**
- **Period of sin and cos**: 2π
- **Amplitude**: |a| in y = a sin(bx) or y = a cos(bx)
- **Domain**: all reals; Range: [-1, 1]
      `
    },
    {
      id: 'trigo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sine & cosine functions?',
            options: [
              'all reals; Range: [-1, 1]',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Domain: all reals; Range: [-1, 1]'
          }
        ]
      }
    },
    {
      id: 'trigo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin θ = y-coordinate on unit circle; cos θ = x-coordinate',
            options: ['sin θ = y-coordinate on unit circle; cos θ = x-coo', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Period of sin and cos',
            options: ['2π', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Amplitude',
            options: ['|a| in y = a sin(bx) or y = a cos(bx)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['sin θ = y-coordinate on unit circle; cos θ = x-coo', '2π', '|a| in y = a sin(bx) or y = a cos(bx)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Sine & Cosine Functions.'
      }
    }
  ]
}
