export const precalcTrigFunctionsPart4Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo4-intro',
      type: 'text' as const,
      content: `
# Other Trig Functions

**Part 4 of 7 — Other Trig Functions**

### 1. tan θ = sin θ / cos θ; cot θ = cos θ / sin θ

tan θ = sin θ / cos θ; cot θ = cos θ / sin θ

### 2. sec θ = 1/cos θ; csc θ = 1/sin θ

sec θ = 1/cos θ; csc θ = 1/sin θ

### 3. Period of tan and cot

π

### 4. Tangent is undefined where cos θ = 0

Tangent is undefined where cos θ = 0
      `
    },
    {
      id: 'trigo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of other trig functions?',
            options: [
              'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ'
          },
          {
            question: 'In the context of other trig functions, which is accurate?',
            options: [
              'π',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Period of tan and cot: π'
          }
        ]
      }
    },
    {
      id: 'trigo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **tan θ = sin θ / cos θ; cot θ = cos θ / sin θ**
- **sec θ = 1/cos θ; csc θ = 1/sin θ**
- **Period of tan and cot**: π
- **Tangent is undefined where cos θ = 0**
      `
    },
    {
      id: 'trigo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to other trig functions?',
            options: [
              'Tangent is undefined where cos θ = 0',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Tangent is undefined where cos θ = 0'
          }
        ]
      }
    },
    {
      id: 'trigo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ',
            options: ['tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'sec θ = 1/cos θ; csc θ = 1/sin θ',
            options: ['sec θ = 1/cos θ; csc θ = 1/sin θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Period of tan and cot',
            options: ['π', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'sec θ = 1/cos θ; csc θ = 1/sin θ', 'π'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Other Trig Functions.'
      }
    }
  ]
}
