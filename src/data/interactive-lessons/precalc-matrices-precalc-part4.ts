export const precalcMatricesPart4Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri4-intro',
      type: 'text' as const,
      content: `
# Inverse Matrices

**Part 4 of 7 — Inverse Matrices**

### 1. A⁻¹ exists only if det(A) ≠ 0

A⁻¹ exists only if det(A) ≠ 0

### 2. For 2×2

A⁻¹ = (1/det(A))[[d,-b],[-c,a]]

### 3. AA⁻¹ = A⁻¹A = I (identity matrix)

AA⁻¹ = A⁻¹A = I (identity matrix)

### 4. Use row reduction (Gauss-Jordan) for larger matrices

Use row reduction (Gauss-Jordan) for larger matrices
      `
    },
    {
      id: 'matri4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "A⁻¹ exists only if det(A) ≠ 0" refer to in precalculus?',
            options: [
              'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]',
              'Use row reduction (Gauss-Jordan) for larger matrices',
              'A⁻¹ exists only if det(A) ≠ 0',
              'AA⁻¹ = A⁻¹A = I (identity matrix)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — A⁻¹ exists only if det(A) ≠ 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inverse Matrices, which explains AA⁻¹ = A⁻¹A = I (identity matrix)?',
            options: [
              'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]',
              'AA⁻¹ = A⁻¹A = I (identity matrix)',
              'A⁻¹ exists only if det(A) ≠ 0',
              'Use row reduction (Gauss-Jordan) for larger matrices'
            ],
            correctAnswer: 1,
            explanation: 'Correct — AA⁻¹ = A⁻¹A = I (identity matrix). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'matri4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **A⁻¹ exists only if det(A) ≠ 0**
- **For 2×2**: A⁻¹ = (1/det(A))[[d,-b],[-c,a]]
- **AA⁻¹ = A⁻¹A = I (identity matrix)**
- **Use row reduction (Gauss-Jordan) for larger matrices**
      `
    },
    {
      id: 'matri4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse matrices?',
            options: [
              'Use row reduction (Gauss-Jordan) for larger matrices',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Use row reduction (Gauss-Jordan) for larger matrices'
          }
        ]
      }
    },
    {
      id: 'matri4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A⁻¹ exists only if det(A) ≠ 0',
            options: ['AA⁻¹ = A⁻¹A = I (identity matrix)', 'A⁻¹ exists only if det(A) ≠ 0', 'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]', 'Use row reduction (Gauss-Jordan) for larger matrices']
          },
          {
            label: 'For 2×2',
            options: ['Use row reduction (Gauss-Jordan) for larger matrices', 'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]', 'A⁻¹ exists only if det(A) ≠ 0', 'AA⁻¹ = A⁻¹A = I (identity matrix)']
          },
          {
            label: 'AA⁻¹ = A⁻¹A = I (identity matrix)',
            options: ['Use row reduction (Gauss-Jordan) for larger matrices', 'AA⁻¹ = A⁻¹A = I (identity matrix)', 'A⁻¹ exists only if det(A) ≠ 0', 'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]']
          }
        ],
        correctAnswers: ['A⁻¹ exists only if det(A) ≠ 0', 'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]', 'AA⁻¹ = A⁻¹A = I (identity matrix)'],
        hint1: 'Think about what each concept specifically describes in Inverse Matrices.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inverse Matrices describes a specific idea. A⁻¹ exists only if det(A) ≠ 0. For 2×2: A⁻¹ = (1/det(A))[[d,-b],[-c,a]]. AA⁻¹ = A⁻¹A = I (identity matrix).'
      }
    }
  ]
}
