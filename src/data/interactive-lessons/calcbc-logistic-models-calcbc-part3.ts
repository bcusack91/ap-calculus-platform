export const calcBCLogisticPart3Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis3-intro',
      type: 'text' as const,
      content: `
# Analyzing Logistic Growth

**Part 3 of 7 — Analyzing Logistic Growth**

### 1. P(t) is an S-shaped (sigmoid) curve

P(t) is an S-shaped (sigmoid) curve

### 2. Inflection point at P = L/2 — growth rate is maximum here

Inflection point at P = L/2 — growth rate is maximum here

### 3. dP/dt is maximized when P = L/2

max rate = kL/4

### 4. As t → ∞, P → L (carrying capacity is the horizontal asymptote)

As t → ∞, P → L (carrying capacity is the horizontal asymptote)
      `
    },
    {
      id: 'logis3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "P(t) is an S-shaped (sigmoid) curve" refer to in calculus?',
            options: [
              'Inflection point at P = L/2 — growth rate is maximum here',
              'P(t) is an S-shaped (sigmoid) curve',
              'max rate = kL/4',
              'As t → ∞, P → L (carrying capacity is the horizontal asymptote)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — P(t) is an S-shaped (sigmoid) curve. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes dP/dt is maximized when P = L/2:',
            options: [
              'Inflection point at P = L/2 — growth rate is maximum here',
              'P(t) is an S-shaped (sigmoid) curve',
              'As t → ∞, P → L (carrying capacity is the horizontal asymptote)',
              'max rate = kL/4'
            ],
            correctAnswer: 3,
            explanation: 'Correct — dP/dt is maximized when P = L/2: max rate = kL/4. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logis3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **P(t) is an S-shaped (sigmoid) curve**
- **Inflection point at P = L/2 — growth rate is maximum here**
- **dP/dt is maximized when P = L/2**: max rate = kL/4
- **As t → ∞, P → L (carrying capacity is the horizontal asymptote)**
      `
    },
    {
      id: 'logis3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents As t → ∞, P → L (carrying capacity is…?',
            options: [
              'Inflection point at P = L/2 — growth rate is maximum here',
              'max rate = kL/4',
              'P(t) is an S-shaped (sigmoid) curve',
              'As t → ∞, P → L (carrying capacity is the horizontal asymptote)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — As t → ∞, P → L (carrying capacity is the horizontal asymptote). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'P(t) is an S-shaped (sigmoid) curve',
            options: ['Inflection point at P = L/2 — growth rate is maximum here', 'As t → ∞, P → L (carrying capacity is the horizontal asymptote)', 'max rate = kL/4', 'P(t) is an S-shaped (sigmoid) curve']
          },
          {
            label: 'Inflection point at P = L/2 — growth…',
            options: ['Inflection point at P = L/2 — growth rate is maximum here', 'P(t) is an S-shaped (sigmoid) curve', 'max rate = kL/4', 'As t → ∞, P → L (carrying capacity is the horizontal asymptote)']
          },
          {
            label: 'dP/dt is maximized when P = L/2',
            options: ['P(t) is an S-shaped (sigmoid) curve', 'max rate = kL/4', 'As t → ∞, P → L (carrying capacity is the horizontal asymptote)', 'Inflection point at P = L/2 — growth rate is maximum here']
          }
        ],
        correctAnswers: ['P(t) is an S-shaped (sigmoid) curve', 'Inflection point at P = L/2 — growth rate is maximum here', 'max rate = kL/4'],
        hint1: 'Think about what each concept specifically describes in Analyzing Logistic Growth.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Analyzing Logistic Growth describes a specific idea. P(t) is an S-shaped (sigmoid) curve. Inflection point at P = L/2 — growth rate is maximum here. dP/dt is maximized when P = L/2: max rate = kL/4.'
      }
    }
  ]
}
