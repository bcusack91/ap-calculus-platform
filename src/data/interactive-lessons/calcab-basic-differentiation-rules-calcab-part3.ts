export const calcABBasicDiffPart3Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic3-intro',
      type: 'text' as const,
      content: `
# Product Rule

**Part 3 of 7 — Product Rule**

### 1. Product Rule

d/dx[f·g] = f'·g + f·g'

### 2. Remember

the derivative of a product is NOT the product of derivatives

### 3. Keep first times derivative of second, plus derivative of first times keep second

Keep first times derivative of second, plus derivative of first times keep second

### 4. Extend to three functions

(fgh)' = f'gh + fg'h + fgh'
      `
    },
    {
      id: 'basic3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of product rule?',
            options: [
              'Product Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Product Rule: d/dx[f·g] = f\'·g + f·g\''
          },
          {
            question: 'In the context of product rule, which is accurate?',
            options: [
              'Keep first times derivative of second, plus derivative of first times keep second',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Keep first times derivative of second, plus derivative of first times keep second'
          }
        ]
      }
    },
    {
      id: 'basic3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Product Rule**: d/dx[f·g] = f'·g + f·g'
- **Remember**: the derivative of a product is NOT the product of derivatives
- **Keep first times derivative of second, plus derivative of first times keep second**
- **Extend to three functions**: (fgh)' = f'gh + fg'h + fgh'
      `
    },
    {
      id: 'basic3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to product rule?',
            options: [
              '(fgh)\' = f\'gh + fg\'h + fgh\'',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Extend to three functions: (fgh)\' = f\'gh + fg\'h + fgh\''
          }
        ]
      }
    },
    {
      id: 'basic3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Product Rule',
            options: ['d/dx[f·g] = f\'·g + f·g\'', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Remember',
            options: ['the derivative of a product is NOT the product of ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Keep first times derivative of second, plus derivative of first times keep second',
            options: ['Keep first times derivative of second, plus deriva', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[f·g] = f\'·g + f·g\'', 'the derivative of a product is NOT the product of ', 'Keep first times derivative of second, plus deriva'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Product Rule.'
      }
    }
  ]
}
