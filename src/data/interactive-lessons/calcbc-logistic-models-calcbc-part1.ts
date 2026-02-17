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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains dP/dt = kP(1 - P/L) where k = growth…?',
            options: [
              'growth is approximately exponential (kP)',
              'This models populations limited by resources',
              'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity',
              'growth slows to zero (1 - P/L → 0)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes When P → L:',
            options: [
              'growth is approximately exponential (kP)',
              'This models populations limited by resources',
              'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity',
              'growth slows to zero (1 - P/L → 0)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — When P → L: growth slows to zero (1 - P/L → 0). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding ∮ Logistic Models, which correctly describes This models populations limited by…?',
            options: [
              'growth is approximately exponential (kP)',
              'This models populations limited by resources',
              'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity',
              'growth slows to zero (1 - P/L → 0)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — This models populations limited by resources. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When P is small',
            options: ['growth slows to zero (1 - P/L → 0)', 'growth is approximately exponential (kP)', 'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity', 'This models populations limited by resources']
          },
          {
            label: 'When P → L',
            options: ['growth slows to zero (1 - P/L → 0)', 'dP/dt = kP(1 - P/L) where k = growth rate, L = carrying capacity', 'growth is approximately exponential (kP)', 'This models populations limited by resources']
          }
        ],
        correctAnswers: ['growth is approximately exponential (kP)', 'growth slows to zero (1 - P/L → 0)'],
        hint1: 'Think about what each concept specifically describes in ∮ Logistic Models.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Logistic Models describes a specific idea. When P is small: growth is approximately exponential (kP). When P → L: growth slows to zero (1 - P/L → 0).'
      }
    }
  ]
}
