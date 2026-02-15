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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of analyzing logistic growth?',
            options: [
              'P(t) is an S-shaped (sigmoid) curve',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'P(t) is an S-shaped (sigmoid) curve'
          },
          {
            question: 'In the context of analyzing logistic growth, which is accurate?',
            options: [
              'max rate = kL/4',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'dP/dt is maximized when P = L/2: max rate = kL/4'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to analyzing logistic growth?',
            options: [
              'As t → ∞, P → L (carrying capacity is the horizontal asymptote)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'As t → ∞, P → L (carrying capacity is the horizontal asymptote)'
          }
        ]
      }
    },
    {
      id: 'logis3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'P(t) is an S-shaped (sigmoid) curve',
            options: ['P(t) is an S-shaped (sigmoid) curve', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Inflection point at P = L/2 — growth rate is maximum here',
            options: ['Inflection point at P = L/2 — growth rate is maxim', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'dP/dt is maximized when P = L/2',
            options: ['max rate = kL/4', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['P(t) is an S-shaped (sigmoid) curve', 'Inflection point at P = L/2 — growth rate is maxim', 'max rate = kL/4'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Analyzing Logistic Growth.'
      }
    }
  ]
}
