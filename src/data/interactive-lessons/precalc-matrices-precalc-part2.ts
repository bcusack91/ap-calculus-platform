export const precalcMatricesPart2Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'matri2-intro',
      type: 'text' as const,
      content: `
# Matrix Operations

**Part 2 of 7 — Matrix Operations**

### 1. Addition/subtraction

add corresponding elements (same dimensions required)

### 2. Scalar multiplication

multiply every element by the scalar

### 3. Matrix multiplication

(AB)_ij = sum of row i of A times column j of B

### 4. AB ≠ BA in general (not commutative)

AB ≠ BA in general (not commutative)
      `
    },
    {
      id: 'matri2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of matrix operations?',
            options: [
              'Addition/subtraction',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Addition/subtraction: add corresponding elements (same dimensions required)'
          },
          {
            question: 'In the context of matrix operations, which is accurate?',
            options: [
              '(AB)_ij = sum of row i of A times column j of B',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Matrix multiplication: (AB)_ij = sum of row i of A times column j of B'
          }
        ]
      }
    },
    {
      id: 'matri2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Addition/subtraction**: add corresponding elements (same dimensions required)
- **Scalar multiplication**: multiply every element by the scalar
- **Matrix multiplication**: (AB)_ij = sum of row i of A times column j of B
- **AB ≠ BA in general (not commutative)**
      `
    },
    {
      id: 'matri2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to matrix operations?',
            options: [
              'AB ≠ BA in general (not commutative)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'AB ≠ BA in general (not commutative)'
          }
        ]
      }
    },
    {
      id: 'matri2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Addition/subtraction',
            options: ['add corresponding elements (same dimensions requir', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Scalar multiplication',
            options: ['multiply every element by the scalar', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Matrix multiplication',
            options: ['(AB)_ij = sum of row i of A times column j of B', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['add corresponding elements (same dimensions requir', 'multiply every element by the scalar', '(AB)_ij = sum of row i of A times column j of B'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Matrix Operations.'
      }
    }
  ]
}
