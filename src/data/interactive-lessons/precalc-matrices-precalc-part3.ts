export const precalcMatricesPart3Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri3-intro',
      type: 'text' as const,
      content: `
# Determinants

**Part 3 of 7 — Determinants**

### 1. 2×2 determinant

|A| = ad - bc for A = [[a,b],[c,d]]

### 2. 3×3 determinant

expand along a row or column using cofactors

### 3. If det(A) = 0, the matrix is singular (no inverse)

If det(A) = 0, the matrix is singular (no inverse)

### 4. Determinant properties

det(AB) = det(A)·det(B)
      `
    },
    {
      id: 'matri3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of determinants?',
            options: [
              '2×2 determinant',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '2×2 determinant: |A| = ad - bc for A = [[a,b],[c,d]]'
          },
          {
            question: 'In the context of determinants, which is accurate?',
            options: [
              'If det(A) = 0, the matrix is singular (no inverse)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If det(A) = 0, the matrix is singular (no inverse)'
          }
        ]
      }
    },
    {
      id: 'matri3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **2×2 determinant**: |A| = ad - bc for A = [[a,b],[c,d]]
- **3×3 determinant**: expand along a row or column using cofactors
- **If det(A) = 0, the matrix is singular (no inverse)**
- **Determinant properties**: det(AB) = det(A)·det(B)
      `
    },
    {
      id: 'matri3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to determinants?',
            options: [
              'det(AB) = det(A)·det(B)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Determinant properties: det(AB) = det(A)·det(B)'
          }
        ]
      }
    },
    {
      id: 'matri3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '2×2 determinant',
            options: ['|A| = ad - bc for A = [[a,b],[c,d]]', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: '3×3 determinant',
            options: ['expand along a row or column using cofactors', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'If det(A) = 0, the matrix is singular (no inverse)',
            options: ['If det(A) = 0, the matrix is singular (no inverse)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['|A| = ad - bc for A = [[a,b],[c,d]]', 'expand along a row or column using cofactors', 'If det(A) = 0, the matrix is singular (no inverse)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Determinants.'
      }
    }
  ]
}
