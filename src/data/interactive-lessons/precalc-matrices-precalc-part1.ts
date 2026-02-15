export const precalcMatricesPart1Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri1-intro',
      type: 'text' as const,
      content: `
# 📈 Matrices

**Part 1 of 7 — Matrix Basics**

### 1. Matrix

a rectangular array of numbers arranged in rows and columns

### 2. Dimension

m × n (m rows, n columns)

### 3. Elements identified by position

a_ij (row i, column j)

### 4. Special matrices

square, identity (I), zero matrix
      `
    },
    {
      id: 'matri1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of matrix basics?',
            options: [
              'Matrix',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Matrix: a rectangular array of numbers arranged in rows and columns'
          },
          {
            question: 'In the context of matrix basics, which is accurate?',
            options: [
              'a_ij (row i, column j)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Elements identified by position: a_ij (row i, column j)'
          }
        ]
      }
    },
    {
      id: 'matri1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Matrix**: a rectangular array of numbers arranged in rows and columns
- **Dimension**: m × n (m rows, n columns)
- **Elements identified by position**: a_ij (row i, column j)
- **Special matrices**: square, identity (I), zero matrix
      `
    },
    {
      id: 'matri1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to matrix basics?',
            options: [
              'square, identity (I), zero matrix',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Special matrices: square, identity (I), zero matrix'
          }
        ]
      }
    },
    {
      id: 'matri1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Matrix',
            options: ['a rectangular array of numbers arranged in rows an', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Dimension',
            options: ['m × n (m rows, n columns)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Elements identified by position',
            options: ['a_ij (row i, column j)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['a rectangular array of numbers arranged in rows an', 'm × n (m rows, n columns)', 'a_ij (row i, column j)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Matrix Basics.'
      }
    }
  ]
}
