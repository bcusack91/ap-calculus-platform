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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Identify the outer and inner functions" refer to in calculus?',
            options: [
              'Identify the outer and inner functions',
              'apply chain rule multiple times',
              'Always differentiate from the outside in',
              'd/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Identify the outer and inner functions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Multiple layers?',
            options: [
              'Identify the outer and inner functions',
              'Always differentiate from the outside in',
              'apply chain rule multiple times',
              'd/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Multiple layers: apply chain rule multiple times. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Always differentiate from the outside in is correct?',
            options: [
              'd/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴',
              'Always differentiate from the outside in',
              'apply chain rule multiple times',
              'Identify the outer and inner functions'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Always differentiate from the outside in. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Example',
            options: ['Always differentiate from the outside in', 'apply chain rule multiple times', 'Identify the outer and inner functions', 'd/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴']
          },
          {
            label: 'Multiple layers',
            options: ['apply chain rule multiple times', 'Always differentiate from the outside in', 'd/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴', 'Identify the outer and inner functions']
          }
        ],
        correctAnswers: ['d/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴', 'apply chain rule multiple times'],
        hint1: 'Think about what each concept specifically describes in Nested Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nested Functions describes a specific idea. Example: d/dx[(3x+1)⁵] = 5(3x+1)⁴ · 3 = 15(3x+1)⁴. Multiple layers: apply chain rule multiple times.'
      }
    }
  ]
}
