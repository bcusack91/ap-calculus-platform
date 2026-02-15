export const precalcMatricesPart5Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri5-intro',
      type: 'text' as const,
      content: `
# Solving Systems with Matrices

**Part 5 of 7 — Solving Systems with Matrices**

### 1. Write system as AX = B where A is coefficient matrix

Write system as AX = B where A is coefficient matrix

### 2. Solution

X = A⁻¹B (if A is invertible)

### 3. Cramer's rule

x_i = det(A_i)/det(A)

### 4. Row reduction (augmented matrix) works for any size system

Row reduction (augmented matrix) works for any size system
      `
    },
    {
      id: 'matri5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of solving systems with matrices?',
            options: [
              'Write system as AX = B where A is coefficient matrix',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Write system as AX = B where A is coefficient matrix'
          },
          {
            question: 'In the context of solving systems with matrices, which is accurate?',
            options: [
              'x_i = det(A_i)/det(A)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cramer\'s rule: x_i = det(A_i)/det(A)'
          }
        ]
      }
    },
    {
      id: 'matri5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Write system as AX = B where A is coefficient matrix**
- **Solution**: X = A⁻¹B (if A is invertible)
- **Cramer's rule**: x_i = det(A_i)/det(A)
- **Row reduction (augmented matrix) works for any size system**
      `
    },
    {
      id: 'matri5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to solving systems with matrices?',
            options: [
              'Row reduction (augmented matrix) works for any size system',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Row reduction (augmented matrix) works for any size system'
          }
        ]
      }
    },
    {
      id: 'matri5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Write system as AX = B where A is coefficient matrix',
            options: ['Write system as AX = B where A is coefficient matr', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Solution',
            options: ['X = A⁻¹B (if A is invertible)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Cramer\'s rule',
            options: ['x_i = det(A_i)/det(A)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Write system as AX = B where A is coefficient matr', 'X = A⁻¹B (if A is invertible)', 'x_i = det(A_i)/det(A)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Solving Systems with Matrices.'
      }
    }
  ]
}
