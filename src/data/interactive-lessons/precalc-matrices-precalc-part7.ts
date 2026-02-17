export const precalcMatricesPart7Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'matri7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Write system as AX = B where A is…" refer to in precalculus?',
            options: [
              'x_i = det(A_i)/det(A)',
              'Row reduction (augmented matrix) works for any size system',
              'Write system as AX = B where A is coefficient matrix',
              'X = A⁻¹B (if A is invertible)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Write system as AX = B where A is coefficient matrix. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cramer\'s rule:',
            options: [
              'Row reduction (augmented matrix) works for any size system',
              'X = A⁻¹B (if A is invertible)',
              'x_i = det(A_i)/det(A)',
              'Write system as AX = B where A is coefficient matrix'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cramer\'s rule: x_i = det(A_i)/det(A). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'matri7-detail',
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
      id: 'matri7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'matri7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Solution',
            options: ['X = A⁻¹B (if A is invertible)', 'Write system as AX = B where A is coefficient matrix', 'x_i = det(A_i)/det(A)', 'Row reduction (augmented matrix) works for any size system']
          },
          {
            label: 'Cramer\'s rule',
            options: ['X = A⁻¹B (if A is invertible)', 'Row reduction (augmented matrix) works for any size system', 'Write system as AX = B where A is coefficient matrix', 'x_i = det(A_i)/det(A)']
          }
        ],
        correctAnswers: ['X = A⁻¹B (if A is invertible)', 'x_i = det(A_i)/det(A)'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Solution: X = A⁻¹B (if A is invertible). Cramer\'s rule: x_i = det(A_i)/det(A).'
      }
    }
  ]
}
