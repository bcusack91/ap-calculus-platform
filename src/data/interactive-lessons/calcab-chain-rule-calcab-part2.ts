export const calcABChainRulePart2Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain2-intro',
      type: 'text' as const,
      content: `
# Nested Functions

**Part 2 of 7 — Nested Functions**

### 1. Identify the outer and inner functions

Identify the outer and inner functions

### 2. Example

d/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴

### 3. Multiple layers

apply chain rule multiple times

### 4. Always differentiate from the outside in

Always differentiate from the outside in
      `
    },
    {
      id: 'chain2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nested functions?',
            options: [
              'Identify the outer and inner functions',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Identify the outer and inner functions'
          },
          {
            question: 'In the context of nested functions, which is accurate?',
            options: [
              'apply chain rule multiple times',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Multiple layers: apply chain rule multiple times'
          }
        ]
      }
    },
    {
      id: 'chain2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Identify the outer and inner functions**
- **Example**: d/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴
- **Multiple layers**: apply chain rule multiple times
- **Always differentiate from the outside in**
      `
    },
    {
      id: 'chain2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nested functions?',
            options: [
              'Always differentiate from the outside in',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Always differentiate from the outside in'
          }
        ]
      }
    },
    {
      id: 'chain2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identify the outer and inner functions',
            options: ['Identify the outer and inner functions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Example',
            options: ['d/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Multiple layers',
            options: ['apply chain rule multiple times', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Identify the outer and inner functions', 'd/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴', 'apply chain rule multiple times'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nested Functions.'
      }
    }
  ]
}
