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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of logistic growth?',
            options: [
              'Logistic model',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Logistic model: dP/dt = kP(1 - P/L) where L is carrying capacity'
          },
          {
            question: 'In the context of logistic growth, which is accurate?',
            options: [
              'Population grows fastest at P = L/2 (inflection point)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Population grows fastest at P = L/2 (inflection point)'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to logistic growth?',
            options: [
              'As t → ∞, P → L (population approaches carrying capacity)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'As t → ∞, P → L (population approaches carrying capacity)'
          }
        ]
      }
    },
    {
      id: 'expon4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Logistic model',
            options: ['dP/dt = kP(1 - P/L) where L is carrying capacity', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solution',
            options: ['P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Population grows fastest at P = L/2 (inflection point)',
            options: ['Population grows fastest at P = L/2 (inflection po', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dP/dt = kP(1 - P/L) where L is carrying capacity', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'Population grows fastest at P = L/2 (inflection po'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Logistic Growth.'
      }
    }
  ]
}
