export const precalcSystemsPart1Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'syste1-intro',
      type: 'text' as const,
      content: `
# 📈 Systems Of Equations

**Part 1 of 7 — Systems of Linear Equations**

### 1. A system

two or more equations with the same variables

### 2. Solution

values that satisfy ALL equations simultaneously

### 3. Consistent system

at least one solution; Inconsistent: no solution

### 4. Dependent system

infinitely many solutions (same line or plane)
      `
    },
    {
      id: 'syste1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of systems of linear equations?',
            options: [
              'A system',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'A system: two or more equations with the same variables'
          },
          {
            question: 'In the context of systems of linear equations, which is accurate?',
            options: [
              'at least one solution; Inconsistent: no solution',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Consistent system: at least one solution; Inconsistent: no solution'
          }
        ]
      }
    },
    {
      id: 'syste1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **A system**: two or more equations with the same variables
- **Solution**: values that satisfy ALL equations simultaneously
- **Consistent system**: at least one solution; Inconsistent: no solution
- **Dependent system**: infinitely many solutions (same line or plane)
      `
    },
    {
      id: 'syste1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to systems of linear equations?',
            options: [
              'infinitely many solutions (same line or plane)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Dependent system: infinitely many solutions (same line or plane)'
          }
        ]
      }
    },
    {
      id: 'syste1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A system',
            options: ['two or more equations with the same variables', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Solution',
            options: ['values that satisfy ALL equations simultaneously', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Consistent system',
            options: ['at least one solution; Inconsistent: no solution', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['two or more equations with the same variables', 'values that satisfy ALL equations simultaneously', 'at least one solution; Inconsistent: no solution'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Systems of Linear Equations.'
      }
    }
  ]
}
