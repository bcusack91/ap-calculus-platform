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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "dy/dt = ky → y = Ce^(kt)" refer to in calculus?',
            options: [
              'Doubling time = ln(2)/k; half-life = ln(2)/|k|',
              'C = initial value y(0)',
              'k = growth rate (instantaneous rate proportional to current value)',
              'continuous exponential model'
            ],
            correctAnswer: 3,
            explanation: 'Correct — dy/dt = ky → y = Ce^(kt): continuous exponential model. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about C = initial value y(0)?',
            options: [
              'k = growth rate (instantaneous rate proportional to current value)',
              'Doubling time = ln(2)/k; half-life = ln(2)/|k|',
              'continuous exponential model',
              'C = initial value y(0)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — C = initial value y(0). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Doubling time = ln(2)/k; half-life =…?',
            options: [
              'Doubling time = ln(2)/k; half-life = ln(2)/|k|',
              'continuous exponential model',
              'k = growth rate (instantaneous rate proportional to current value)',
              'C = initial value y(0)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Doubling time = ln(2)/k; half-life = ln(2)/|k|. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'expon3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dy/dt = ky → y = Ce^(kt)',
            options: ['C = initial value y(0)', 'Doubling time = ln(2)/k; half-life = ln(2)/|k|', 'k = growth rate (instantaneous rate proportional to current value)', 'continuous exponential model']
          },
          {
            label: 'k = growth rate (instantaneous rate…',
            options: ['continuous exponential model', 'C = initial value y(0)', 'Doubling time = ln(2)/k; half-life = ln(2)/|k|', 'k = growth rate (instantaneous rate proportional to current value)']
          },
          {
            label: 'C = initial value y(0)',
            options: ['k = growth rate (instantaneous rate proportional to current value)', 'C = initial value y(0)', 'continuous exponential model', 'Doubling time = ln(2)/k; half-life = ln(2)/|k|']
          }
        ],
        correctAnswers: ['continuous exponential model', 'k = growth rate (instantaneous rate proportional to current value)', 'C = initial value y(0)'],
        hint1: 'Think about what each concept specifically describes in Exponential Growth Models.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Growth Models describes a specific idea. dy/dt = ky → y = Ce^(kt): continuous exponential model. k = growth rate (instantaneous rate proportional to current value). C = initial value y(0).'
      }
    }
  ]
}
