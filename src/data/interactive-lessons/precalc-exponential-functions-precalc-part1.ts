export const precalcExponentialPart1Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Functions

**Part 1 of 7 — Exponential Growth & Decay**

### 1. Exponential function

f(x) = a · bˣ where b > 0, b ≠ 1

### 2. b > 1

exponential growth; 0 < b < 1: exponential decay

### 3. Growth factor b = 1 + rate for growth, b = 1 - rate for decay

Growth factor b = 1 + rate for growth, b = 1 - rate for decay

### 4. The y-intercept of f(x) = a · bˣ is the point (0, a)

The y-intercept of f(x) = a · bˣ is the point (0, a)
      `
    },
    {
      id: 'expon1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of exponential growth & decay?',
            options: [
              'Exponential function',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Exponential function: f(x) = a · bˣ where b > 0, b ≠ 1'
          },
          {
            question: 'In the context of exponential growth & decay, which is accurate?',
            options: [
              'Growth factor b = 1 + rate for growth, b = 1 - rate for decay',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Growth factor b = 1 + rate for growth, b = 1 - rate for decay'
          }
        ]
      }
    },
    {
      id: 'expon1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Exponential function**: f(x) = a · bˣ where b > 0, b ≠ 1
- **b > 1**: exponential growth; 0 < b < 1: exponential decay
- **Growth factor b = 1 + rate for growth, b = 1 - rate for decay**
- **The y-intercept of f(x) = a · bˣ is the point (0, a)**
      `
    },
    {
      id: 'expon1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential growth & decay?',
            options: [
              'The y-intercept of f(x) = a · bˣ is the point (0, a)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'The y-intercept of f(x) = a · bˣ is the point (0, a)'
          }
        ]
      }
    },
    {
      id: 'expon1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential function',
            options: ['f(x) = a · bˣ where b > 0, b ≠ 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'b > 1',
            options: ['exponential growth; 0 < b < 1: exponential decay', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Growth factor b = 1 + rate for growth, b = 1 - rate for decay',
            options: ['Growth factor b = 1 + rate for growth, b = 1 - rat', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(x) = a · bˣ where b > 0, b ≠ 1', 'exponential growth; 0 < b < 1: exponential decay', 'Growth factor b = 1 + rate for growth, b = 1 - rat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Exponential Growth & Decay.'
      }
    }
  ]
}
