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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Addition/subtraction" refer to in precalculus?',
            options: [
              'multiply every element by the scalar',
              'AB ≠ BA in general (not commutative)',
              '(AB)_ij = sum of row i of A times column j of B',
              'add corresponding elements (same dimensions required)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Addition/subtraction: add corresponding elements (same dimensions required). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Matrix Operations, which explains Matrix multiplication?',
            options: [
              '(AB)_ij = sum of row i of A times column j of B',
              'multiply every element by the scalar',
              'add corresponding elements (same dimensions required)',
              'AB ≠ BA in general (not commutative)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Matrix multiplication: (AB)_ij = sum of row i of A times column j of B. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Addition/subtraction',
            options: ['multiply every element by the scalar', '(AB)_ij = sum of row i of A times column j of B', 'add corresponding elements (same dimensions required)', 'AB ≠ BA in general (not commutative)']
          },
          {
            label: 'Scalar multiplication',
            options: ['add corresponding elements (same dimensions required)', '(AB)_ij = sum of row i of A times column j of B', 'multiply every element by the scalar', 'AB ≠ BA in general (not commutative)']
          },
          {
            label: 'Matrix multiplication',
            options: ['(AB)_ij = sum of row i of A times column j of B', 'multiply every element by the scalar', 'add corresponding elements (same dimensions required)', 'AB ≠ BA in general (not commutative)']
          }
        ],
        correctAnswers: ['add corresponding elements (same dimensions required)', 'multiply every element by the scalar', '(AB)_ij = sum of row i of A times column j of B'],
        hint1: 'Think about what each concept specifically describes in Matrix Operations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Matrix Operations describes a specific idea. Addition/subtraction: add corresponding elements (same dimensions required). Scalar multiplication: multiply every element by the scalar. Matrix multiplication: (AB)_ij = sum of row i of A times column j of B.'
      }
    }
  ]
}
