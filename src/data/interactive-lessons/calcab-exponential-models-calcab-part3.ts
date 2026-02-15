export const calcABExpModelsPart3Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'expon3-intro',
      type: 'text' as const,
      content: `
# Exponential Growth Models

**Part 3 of 7 — Exponential Growth Models**

### 1. dy/dt = ky → y = Ce^(kt)

continuous exponential model

### 2. k = growth rate (instantaneous rate proportional to current value)

k = growth rate (instantaneous rate proportional to current value)

### 3. C = initial value y(0)

C = initial value y(0)

### 4. Doubling time = ln(2)/k; half-life = ln(2)/|k|

Doubling time = ln(2)/k; half-life = ln(2)/|k|
      `
    },
    {
      id: 'expon3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of exponential growth models?',
            options: [
              'dy/dt = ky → y = Ce^(kt)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'dy/dt = ky → y = Ce^(kt): continuous exponential model'
          },
          {
            question: 'In the context of exponential growth models, which is accurate?',
            options: [
              'C = initial value y(0)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'C = initial value y(0)'
          }
        ]
      }
    },
    {
      id: 'expon3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **dy/dt = ky → y = Ce^(kt)**: continuous exponential model
- **k = growth rate (instantaneous rate proportional to current value)**
- **C = initial value y(0)**
- **Doubling time = ln(2)/k; half-life = ln(2)/|k|**
      `
    },
    {
      id: 'expon3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential growth models?',
            options: [
              'Doubling time = ln(2)/k; half-life = ln(2)/|k|',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Doubling time = ln(2)/k; half-life = ln(2)/|k|'
          }
        ]
      }
    },
    {
      id: 'expon3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dy/dt = ky → y = Ce^(kt)',
            options: ['continuous exponential model', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'k = growth rate (instantaneous rate proportional to current value)',
            options: ['k = growth rate (instantaneous rate proportional t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'C = initial value y(0)',
            options: ['C = initial value y(0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['continuous exponential model', 'k = growth rate (instantaneous rate proportional t', 'C = initial value y(0)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Exponential Growth Models.'
      }
    }
  ]
}
