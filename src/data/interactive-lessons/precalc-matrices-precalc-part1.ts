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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Matrix" refer to in precalculus?',
            options: [
              'm × n (m rows, n columns)',
              'square, identity (I), zero matrix',
              'a rectangular array of numbers arranged in rows and columns',
              'a_ij (row i, column j)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Matrix: a rectangular array of numbers arranged in rows and columns. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Elements identified by position?',
            options: [
              'a_ij (row i, column j)',
              'a rectangular array of numbers arranged in rows and columns',
              'square, identity (I), zero matrix',
              'm × n (m rows, n columns)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Elements identified by position: a_ij (row i, column j). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Matrix',
            options: ['a_ij (row i, column j)', 'square, identity (I), zero matrix', 'm × n (m rows, n columns)', 'a rectangular array of numbers arranged in rows and columns']
          },
          {
            label: 'Dimension',
            options: ['square, identity (I), zero matrix', 'm × n (m rows, n columns)', 'a rectangular array of numbers arranged in rows and columns', 'a_ij (row i, column j)']
          },
          {
            label: 'Elements identified by position',
            options: ['a rectangular array of numbers arranged in rows and columns', 'm × n (m rows, n columns)', 'a_ij (row i, column j)', 'square, identity (I), zero matrix']
          }
        ],
        correctAnswers: ['a rectangular array of numbers arranged in rows and columns', 'm × n (m rows, n columns)', 'a_ij (row i, column j)'],
        hint1: 'Think about what each concept specifically describes in Matrices.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Matrices describes a specific idea. Matrix: a rectangular array of numbers arranged in rows and columns. Dimension: m × n (m rows, n columns). Elements identified by position: a_ij (row i, column j).'
      }
    }
  ]
}
