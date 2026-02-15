export const calcBCIntByPartsPart4Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ4-intro',
      type: 'text' as const,
      content: `
# Tabular Integration

**Part 4 of 7 — Tabular Integration**

### 1. Tabular method

list derivatives of u and integrals of dv in columns

### 2. Alternate signs

+, -, +, -, ...

### 3. Multiply diagonally and sum

Multiply diagonally and sum

### 4. Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)

Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)
      `
    },
    {
      id: 'integ4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of tabular integration?',
            options: [
              'Tabular method',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Tabular method: list derivatives of u and integrals of dv in columns'
          },
          {
            question: 'In the context of tabular integration, which is accurate?',
            options: [
              'Multiply diagonally and sum',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Multiply diagonally and sum'
          }
        ]
      }
    },
    {
      id: 'integ4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Tabular method**: list derivatives of u and integrals of dv in columns
- **Alternate signs**: +, -, +, -, ...
- **Multiply diagonally and sum**
- **Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)**
      `
    },
    {
      id: 'integ4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to tabular integration?',
            options: [
              'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial ',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)'
          }
        ]
      }
    },
    {
      id: 'integ4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tabular method',
            options: ['list derivatives of u and integrals of dv in colum', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Alternate signs',
            options: ['+, -, +, -, ...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Multiply diagonally and sum',
            options: ['Multiply diagonally and sum', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['list derivatives of u and integrals of dv in colum', '+, -, +, -, ...', 'Multiply diagonally and sum'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Tabular Integration.'
      }
    }
  ]
}
