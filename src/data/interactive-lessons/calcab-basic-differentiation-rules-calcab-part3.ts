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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Product Rule?',
            options: [
              '(fgh)\' = f\'gh + fg\'h + fgh\'',
              'd/dx[f·g] = f\'·g + f·g\'',
              'the derivative of a product is NOT the product of derivatives',
              'Keep first times derivative of second, plus derivative of first times keep second'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Product Rule: d/dx[f·g] = f\'·g + f·g\'. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Keep first times derivative of second,…:',
            options: [
              'Keep first times derivative of second, plus derivative of first times keep second',
              'the derivative of a product is NOT the product of derivatives',
              '(fgh)\' = f\'gh + fg\'h + fgh\'',
              'd/dx[f·g] = f\'·g + f·g\''
            ],
            correctAnswer: 0,
            explanation: 'Correct — Keep first times derivative of second, plus derivative of first times keep second. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Extend to three functions?',
            options: [
              'Keep first times derivative of second, plus derivative of first times keep second',
              '(fgh)\' = f\'gh + fg\'h + fgh\'',
              'd/dx[f·g] = f\'·g + f·g\'',
              'the derivative of a product is NOT the product of derivatives'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Extend to three functions: (fgh)\' = f\'gh + fg\'h + fgh\'. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Product Rule',
            options: ['Keep first times derivative of second, plus derivative of first times keep second', '(fgh)\' = f\'gh + fg\'h + fgh\'', 'd/dx[f·g] = f\'·g + f·g\'', 'the derivative of a product is NOT the product of derivatives']
          },
          {
            label: 'Remember',
            options: ['(fgh)\' = f\'gh + fg\'h + fgh\'', 'the derivative of a product is NOT the product of derivatives', 'd/dx[f·g] = f\'·g + f·g\'', 'Keep first times derivative of second, plus derivative of first times keep second']
          },
          {
            label: 'Extend to three functions',
            options: ['Keep first times derivative of second, plus derivative of first times keep second', 'd/dx[f·g] = f\'·g + f·g\'', 'the derivative of a product is NOT the product of derivatives', '(fgh)\' = f\'gh + fg\'h + fgh\'']
          }
        ],
        correctAnswers: ['d/dx[f·g] = f\'·g + f·g\'', 'the derivative of a product is NOT the product of derivatives', '(fgh)\' = f\'gh + fg\'h + fgh\''],
        hint1: 'Think about what each concept specifically describes in Product Rule.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Product Rule describes a specific idea. Product Rule: d/dx[f·g] = f\'·g + f·g\'. Remember: the derivative of a product is NOT the product of derivatives. Extend to three functions: (fgh)\' = f\'gh + fg\'h + fgh\'.'
      }
    }
  ]
}
