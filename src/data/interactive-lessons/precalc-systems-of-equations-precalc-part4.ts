export const precalcSystemsPart4Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'syste4-intro',
      type: 'text' as const,
      content: `
# Nonlinear Systems

**Part 4 of 7 — Nonlinear Systems**

### 1. At least one equation is non-linear (quadratic, exponential, etc.)

At least one equation is non-linear (quadratic, exponential, etc.)

### 2. Substitution is often the best method

Substitution is often the best method

### 3. A line and a conic can intersect in 0, 1, or 2 points

A line and a conic can intersect in 0, 1, or 2 points

### 4. Two conics can intersect in up to 4 points

Two conics can intersect in up to 4 points
      `
    },
    {
      id: 'syste4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nonlinear systems?',
            options: [
              'At least one equation is non-linear (quadratic, exponential, etc.)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'At least one equation is non-linear (quadratic, exponential, etc.)'
          },
          {
            question: 'In the context of nonlinear systems, which is accurate?',
            options: [
              'A line and a conic can intersect in 0, 1, or 2 points',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'A line and a conic can intersect in 0, 1, or 2 points'
          }
        ]
      }
    },
    {
      id: 'syste4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **At least one equation is non-linear (quadratic, exponential, etc.)**
- **Substitution is often the best method**
- **A line and a conic can intersect in 0, 1, or 2 points**
- **Two conics can intersect in up to 4 points**
      `
    },
    {
      id: 'syste4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nonlinear systems?',
            options: [
              'Two conics can intersect in up to 4 points',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Two conics can intersect in up to 4 points'
          }
        ]
      }
    },
    {
      id: 'syste4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At least one equation is non-linear (quadratic, exponential, etc.)',
            options: ['At least one equation is non-linear (quadratic, ex', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Substitution is often the best method',
            options: ['Substitution is often the best method', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'A line and a conic can intersect in 0, 1, or 2 points',
            options: ['A line and a conic can intersect in 0, 1, or 2 poi', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['At least one equation is non-linear (quadratic, ex', 'Substitution is often the best method', 'A line and a conic can intersect in 0, 1, or 2 poi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nonlinear Systems.'
      }
    }
  ]
}
