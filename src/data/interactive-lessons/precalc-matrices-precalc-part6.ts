export const precalcMatricesPart6Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'matri6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Write system as AX = B where A is…" refer to in precalculus?',
            options: [
              'Row reduction (augmented matrix) works for any size system',
              'X = A⁻¹B (if A is invertible)',
              'x_i = det(A_i)/det(A)',
              'Write system as AX = B where A is coefficient matrix'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Write system as AX = B where A is coefficient matrix. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Cramer\'s rule?',
            options: [
              'X = A⁻¹B (if A is invertible)',
              'x_i = det(A_i)/det(A)',
              'Write system as AX = B where A is coefficient matrix',
              'Row reduction (augmented matrix) works for any size system'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cramer\'s rule: x_i = det(A_i)/det(A). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'matri6-detail',
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
      id: 'matri6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
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
      id: 'matri6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Solution',
            options: ['X = A⁻¹B (if A is invertible)', 'Row reduction (augmented matrix) works for any size system', 'Write system as AX = B where A is coefficient matrix', 'x_i = det(A_i)/det(A)']
          },
          {
            label: 'Cramer\'s rule',
            options: ['Row reduction (augmented matrix) works for any size system', 'x_i = det(A_i)/det(A)', 'Write system as AX = B where A is coefficient matrix', 'X = A⁻¹B (if A is invertible)']
          }
        ],
        correctAnswers: ['X = A⁻¹B (if A is invertible)', 'x_i = det(A_i)/det(A)'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Solution: X = A⁻¹B (if A is invertible). Cramer\'s rule: x_i = det(A_i)/det(A).'
      }
    }
  ]
}
