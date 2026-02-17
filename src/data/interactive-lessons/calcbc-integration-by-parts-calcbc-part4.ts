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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Tabular method?',
            options: [
              'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)',
              'list derivatives of u and integrals of dv in columns',
              'Multiply diagonally and sum',
              '+, -, +, -, ...'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Tabular method: list derivatives of u and integrals of dv in columns. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Tabular Integration, which explains Multiply diagonally and sum?',
            options: [
              'Multiply diagonally and sum',
              '+, -, +, -, ...',
              'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)',
              'list derivatives of u and integrals of dv in columns'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Multiply diagonally and sum. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Efficient when u eventually…?',
            options: [
              '+, -, +, -, ...',
              'Multiply diagonally and sum',
              'list derivatives of u and integrals of dv in columns',
              'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tabular method',
            options: ['Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)', '+, -, +, -, ...', 'Multiply diagonally and sum', 'list derivatives of u and integrals of dv in columns']
          },
          {
            label: 'Alternate signs',
            options: ['+, -, +, -, ...', 'Multiply diagonally and sum', 'Efficient when u eventually differentiates to zero (polynomial × eˣ, polynomial × sin x)', 'list derivatives of u and integrals of dv in columns']
          }
        ],
        correctAnswers: ['list derivatives of u and integrals of dv in columns', '+, -, +, -, ...'],
        hint1: 'Think about what each concept specifically describes in Tabular Integration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Tabular Integration describes a specific idea. Tabular method: list derivatives of u and integrals of dv in columns. Alternate signs: +, -, +, -, ...'
      }
    }
  ]
}
