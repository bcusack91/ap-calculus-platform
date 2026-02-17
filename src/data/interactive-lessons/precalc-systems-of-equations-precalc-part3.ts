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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Three equations in three unknowns" refer to in precalculus?',
            options: [
              'organized elimination using augmented matrices',
              'use elimination or substitution iteratively',
              'Solution is an ordered triple (x, y, z)',
              'Systems may have 0, 1, or infinitely many solutions'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Three equations in three unknowns: use elimination or substitution iteratively. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Solution is an ordered triple (x, y, z)?',
            options: [
              'Solution is an ordered triple (x, y, z)',
              'Systems may have 0, 1, or infinitely many solutions',
              'organized elimination using augmented matrices',
              'use elimination or substitution iteratively'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Solution is an ordered triple (x, y, z). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three equations in three unknowns',
            options: ['use elimination or substitution iteratively', 'Systems may have 0, 1, or infinitely many solutions', 'organized elimination using augmented matrices', 'Solution is an ordered triple (x, y, z)']
          },
          {
            label: 'Row reduction',
            options: ['use elimination or substitution iteratively', 'Systems may have 0, 1, or infinitely many solutions', 'organized elimination using augmented matrices', 'Solution is an ordered triple (x, y, z)']
          }
        ],
        correctAnswers: ['use elimination or substitution iteratively', 'organized elimination using augmented matrices'],
        hint1: 'Think about what each concept specifically describes in Systems of Three Variables.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Systems of Three Variables describes a specific idea. Three equations in three unknowns: use elimination or substitution iteratively. Row reduction: organized elimination using augmented matrices.'
      }
    }
  ]
}
