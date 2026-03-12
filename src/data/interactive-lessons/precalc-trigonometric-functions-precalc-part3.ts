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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes sin θ = y-coordinate on unit circle;…?',
            options: [
              '|a| in y = a sin(bx) or y = a cos(bx)',
              'all reals; Range: [-1, 1]',
              'sin θ = y-coordinate on unit circle; cos θ = x-coordinate',
              '2π'
            ],
            correctAnswer: 2,
            explanation: 'Correct — sin θ = y-coordinate on unit circle; cos θ = x-coordinate. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Amplitude:',
            options: [
              '|a| in y = a sin(bx) or y = a cos(bx)',
              '2π',
              'all reals; Range: [-1, 1]',
              'sin θ = y-coordinate on unit circle; cos θ = x-coordinate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Amplitude: |a| in y = a sin(bx) or y = a cos(bx). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Period of sin and cos',
            options: ['all reals; Range: [-1, 1]', 'sin θ = y-coordinate on unit circle; cos θ = x-coordinate', '2π', '|a| in y = a sin(bx) or y = a cos(bx)']
          },
          {
            label: 'Amplitude',
            options: ['all reals; Range: [-1, 1]', '2π', 'sin θ = y-coordinate on unit circle; cos θ = x-coordinate', '|a| in y = a sin(bx) or y = a cos(bx)']
          },
          {
            label: 'Domain',
            options: ['all reals; Range: [-1, 1]', 'sin θ = y-coordinate on unit circle; cos θ = x-coordinate', '2π', '|a| in y = a sin(bx) or y = a cos(bx)']
          }
        ],
        correctAnswers: ['2π', '|a| in y = a sin(bx) or y = a cos(bx)', 'all reals; Range: [-1, 1]'],
        hint1: 'Think about what each concept specifically describes in Sine & Cosine Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sine & Cosine Functions describes a specific idea. Period of sin and cos: 2π. Amplitude: |a| in y = a sin(bx) or y = a cos(bx). Domain: all reals; Range: [-1, 1].'
      }
    }
  ]
}
