export const precalcSystemsPart3Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'syste3-intro',
      type: 'text' as const,
      content: `
# Systems of Three Variables

**Part 3 of 7 — Systems of Three Variables**

### 1. Three equations in three unknowns

use elimination or substitution iteratively

### 2. Row reduction

organized elimination using augmented matrices

### 3. Solution is an ordered triple (x, y, z)

Solution is an ordered triple (x, y, z)

### 4. Systems may have 0, 1, or infinitely many solutions

Systems may have 0, 1, or infinitely many solutions
      `
    },
    {
      id: 'syste3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of systems of three variables?',
            options: [
              'Three equations in three unknowns',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Three equations in three unknowns: use elimination or substitution iteratively'
          },
          {
            question: 'In the context of systems of three variables, which is accurate?',
            options: [
              'Solution is an ordered triple (x, y, z)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Solution is an ordered triple (x, y, z)'
          }
        ]
      }
    },
    {
      id: 'syste3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Three equations in three unknowns**: use elimination or substitution iteratively
- **Row reduction**: organized elimination using augmented matrices
- **Solution is an ordered triple (x, y, z)**
- **Systems may have 0, 1, or infinitely many solutions**
      `
    },
    {
      id: 'syste3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to systems of three variables?',
            options: [
              'Systems may have 0, 1, or infinitely many solutions',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Systems may have 0, 1, or infinitely many solutions'
          }
        ]
      }
    },
    {
      id: 'syste3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three equations in three unknowns',
            options: ['use elimination or substitution iteratively', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Row reduction',
            options: ['organized elimination using augmented matrices', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Solution is an ordered triple (x, y, z)',
            options: ['Solution is an ordered triple (x, y, z)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['use elimination or substitution iteratively', 'organized elimination using augmented matrices', 'Solution is an ordered triple (x, y, z)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Systems of Three Variables.'
      }
    }
  ]
}
