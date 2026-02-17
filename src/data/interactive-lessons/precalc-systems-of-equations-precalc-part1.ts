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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "A system" refer to in precalculus?',
            options: [
              'values that satisfy ALL equations simultaneously',
              'at least one solution; Inconsistent: no solution',
              'infinitely many solutions (same line or plane)',
              'two or more equations with the same variables'
            ],
            correctAnswer: 3,
            explanation: 'Correct — A system: two or more equations with the same variables. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Consistent system?',
            options: [
              'at least one solution; Inconsistent: no solution',
              'two or more equations with the same variables',
              'values that satisfy ALL equations simultaneously',
              'infinitely many solutions (same line or plane)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Consistent system: at least one solution; Inconsistent: no solution. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A system',
            options: ['infinitely many solutions (same line or plane)', 'two or more equations with the same variables', 'values that satisfy ALL equations simultaneously', 'at least one solution; Inconsistent: no solution']
          },
          {
            label: 'Solution',
            options: ['infinitely many solutions (same line or plane)', 'two or more equations with the same variables', 'at least one solution; Inconsistent: no solution', 'values that satisfy ALL equations simultaneously']
          },
          {
            label: 'Consistent system',
            options: ['infinitely many solutions (same line or plane)', 'two or more equations with the same variables', 'at least one solution; Inconsistent: no solution', 'values that satisfy ALL equations simultaneously']
          }
        ],
        correctAnswers: ['two or more equations with the same variables', 'values that satisfy ALL equations simultaneously', 'at least one solution; Inconsistent: no solution'],
        hint1: 'Think about what each concept specifically describes in Systems Of Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Systems Of Equations describes a specific idea. A system: two or more equations with the same variables. Solution: values that satisfy ALL equations simultaneously. Consistent system: at least one solution; Inconsistent: no solution.'
      }
    }
  ]
}
