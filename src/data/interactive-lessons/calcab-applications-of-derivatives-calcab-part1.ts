export const calcABDerivAppsPart1Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli1-intro',
      type: 'text' as const,
      content: `
# ∫ Applications Of Derivatives

**Part 1 of 7 — Related Rates**

### 1. Related rates

quantities changing with respect to time, connected by an equation

### 2. Steps

draw a picture, identify variables, write an equation, differentiate with respect to t

### 3. Use the chain rule

d/dt[r²] = 2r · dr/dt

### 4. Substitute known values AFTER differentiating, not before

Substitute known values AFTER differentiating, not before
      `
    },
    {
      id: 'appli1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of related rates?',
            options: [
              'Related rates',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Related rates: quantities changing with respect to time, connected by an equation'
          },
          {
            question: 'In the context of related rates, which is accurate?',
            options: [
              'd/dt[r²] = 2r · dr/dt',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use the chain rule: d/dt[r²] = 2r · dr/dt'
          }
        ]
      }
    },
    {
      id: 'appli1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Related rates**: quantities changing with respect to time, connected by an equation
- **Steps**: draw a picture, identify variables, write an equation, differentiate with respect to t
- **Use the chain rule**: d/dt[r²] = 2r · dr/dt
- **Substitute known values AFTER differentiating, not before**
      `
    },
    {
      id: 'appli1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to related rates?',
            options: [
              'Substitute known values AFTER differentiating, not before',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Substitute known values AFTER differentiating, not before'
          }
        ]
      }
    },
    {
      id: 'appli1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Related rates',
            options: ['quantities changing with respect to time, connecte', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Steps',
            options: ['draw a picture, identify variables, write an equat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use the chain rule',
            options: ['d/dt[r²] = 2r · dr/dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['quantities changing with respect to time, connecte', 'draw a picture, identify variables, write an equat', 'd/dt[r²] = 2r · dr/dt'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Related Rates.'
      }
    }
  ]
}
