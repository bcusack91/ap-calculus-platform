export const calcABExpModelsPart4Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'expon4-intro',
      type: 'text' as const,
      content: `
# Logistic Growth

**Part 4 of 7 — Logistic Growth**

### 1. Logistic model

dP/dt = kP(1 - P/L) where L is carrying capacity

### 2. Solution

P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀

### 3. Population grows fastest at P = L/2 (inflection point)

Population grows fastest at P = L/2 (inflection point)

### 4. As t → ∞, P → L (population approaches carrying capacity)

As t → ∞, P → L (population approaches carrying capacity)
      `
    },
    {
      id: 'expon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Logistic model" refer to in calculus?',
            options: [
              'dP/dt = kP(1 - P/L) where L is carrying capacity',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              'Population grows fastest at P = L/2 (inflection point)',
              'As t → ∞, P → L (population approaches carrying capacity)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Logistic model: dP/dt = kP(1 - P/L) where L is carrying capacity. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Logistic Growth, which explains Population grows fastest at P = L/2…?',
            options: [
              'Population grows fastest at P = L/2 (inflection point)',
              'dP/dt = kP(1 - P/L) where L is carrying capacity',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              'As t → ∞, P → L (population approaches carrying capacity)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Population grows fastest at P = L/2 (inflection point). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Logistic model**: dP/dt = kP(1 - P/L) where L is carrying capacity
- **Solution**: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀
- **Population grows fastest at P = L/2 (inflection point)**
- **As t → ∞, P → L (population approaches carrying capacity)**
      `
    },
    {
      id: 'expon4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about As t → ∞, P → L (population approaches… is correct?',
            options: [
              'Population grows fastest at P = L/2 (inflection point)',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              'As t → ∞, P → L (population approaches carrying capacity)',
              'dP/dt = kP(1 - P/L) where L is carrying capacity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — As t → ∞, P → L (population approaches carrying capacity). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'expon4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Logistic model',
            options: ['P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'As t → ∞, P → L (population approaches carrying capacity)', 'dP/dt = kP(1 - P/L) where L is carrying capacity', 'Population grows fastest at P = L/2 (inflection point)']
          },
          {
            label: 'Solution',
            options: ['dP/dt = kP(1 - P/L) where L is carrying capacity', 'Population grows fastest at P = L/2 (inflection point)', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'As t → ∞, P → L (population approaches carrying capacity)']
          }
        ],
        correctAnswers: ['dP/dt = kP(1 - P/L) where L is carrying capacity', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀'],
        hint1: 'Think about what each concept specifically describes in Logistic Growth.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Logistic Growth describes a specific idea. Logistic model: dP/dt = kP(1 - P/L) where L is carrying capacity. Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀.'
      }
    }
  ]
}
