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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of inverse matrices?',
            options: [
              'A⁻¹ exists only if det(A) ≠ 0',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'A⁻¹ exists only if det(A) ≠ 0'
          },
          {
            question: 'In the context of inverse matrices, which is accurate?',
            options: [
              'AA⁻¹ = A⁻¹A = I (identity matrix)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'AA⁻¹ = A⁻¹A = I (identity matrix)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A⁻¹ exists only if det(A) ≠ 0',
            options: ['A⁻¹ exists only if det(A) ≠ 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'For 2×2',
            options: ['A⁻¹ = (1/det(A))[[d,-b],[-c,a]]', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'AA⁻¹ = A⁻¹A = I (identity matrix)',
            options: ['AA⁻¹ = A⁻¹A = I (identity matrix)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['A⁻¹ exists only if det(A) ≠ 0', 'A⁻¹ = (1/det(A))[[d,-b],[-c,a]]', 'AA⁻¹ = A⁻¹A = I (identity matrix)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Inverse Matrices.'
      }
    }
  ]
}
