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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "2×2 determinant" refer to in precalculus?',
            options: [
              '|A| = ad - bc for A = [[a,b],[c,d]]',
              'expand along a row or column using cofactors',
              'det(AB) = det(A)·det(B)',
              'If det(A) = 0, the matrix is singular (no inverse)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — 2×2 determinant: |A| = ad - bc for A = [[a,b],[c,d]]. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Determinants, which explains If det(A) = 0, the matrix is singular…?',
            options: [
              '|A| = ad - bc for A = [[a,b],[c,d]]',
              'If det(A) = 0, the matrix is singular (no inverse)',
              'det(AB) = det(A)·det(B)',
              'expand along a row or column using cofactors'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If det(A) = 0, the matrix is singular (no inverse). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '2×2 determinant',
            options: ['expand along a row or column using cofactors', '|A| = ad - bc for A = [[a,b],[c,d]]', 'If det(A) = 0, the matrix is singular (no inverse)', 'det(AB) = det(A)·det(B)']
          },
          {
            label: '3×3 determinant',
            options: ['expand along a row or column using cofactors', 'det(AB) = det(A)·det(B)', '|A| = ad - bc for A = [[a,b],[c,d]]', 'If det(A) = 0, the matrix is singular (no inverse)']
          },
          {
            label: 'Determinant properties',
            options: ['det(AB) = det(A)·det(B)', 'expand along a row or column using cofactors', 'If det(A) = 0, the matrix is singular (no inverse)', '|A| = ad - bc for A = [[a,b],[c,d]]']
          }
        ],
        correctAnswers: ['|A| = ad - bc for A = [[a,b],[c,d]]', 'expand along a row or column using cofactors', 'det(AB) = det(A)·det(B)'],
        hint1: 'Think about what each concept specifically describes in Determinants.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Determinants describes a specific idea. 2×2 determinant: |A| = ad - bc for A = [[a,b],[c,d]]. 3×3 determinant: expand along a row or column using cofactors. Determinant properties: det(AB) = det(A)·det(B).'
      }
    }
  ]
}
