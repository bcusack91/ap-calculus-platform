export const calcBCLogisticPart1Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis1-intro',
      type: 'text' as const,
      content: `
# ∮ Logistic Models

**Part 1 of 7 — Logistic Differential Equation**

### 1. dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity

dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity

### 2. When P is small

growth is approximately exponential (kP)

### 3. When P → L

growth slows to zero (1 - P/L → 0)

### 4. This models populations limited by resources

This models populations limited by resources
      `
    },
    {
      id: 'logis1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of logistic differential equation?',
            options: [
              'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity'
          },
          {
            question: 'In the context of logistic differential equation, which is accurate?',
            options: [
              'growth slows to zero (1 - P/L → 0)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'When P → L: growth slows to zero (1 - P/L → 0)'
          }
        ]
      }
    },
    {
      id: 'logis1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity**
- **When P is small**: growth is approximately exponential (kP)
- **When P → L**: growth slows to zero (1 - P/L → 0)
- **This models populations limited by resources**
      `
    },
    {
      id: 'logis1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to logistic differential equation?',
            options: [
              'This models populations limited by resources',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'This models populations limited by resources'
          }
        ]
      }
    },
    {
      id: 'logis1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity',
            options: ['dP/dt = kP(1 - P/L) where k = growth rate, L = car', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'When P is small',
            options: ['growth is approximately exponential (kP)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'When P → L',
            options: ['growth slows to zero (1 - P/L → 0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dP/dt = kP(1 - P/L) where k = growth rate, L = car', 'growth is approximately exponential (kP)', 'growth slows to zero (1 - P/L → 0)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Logistic Differential Equation.'
      }
    }
  ]
}
