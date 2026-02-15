export const calcABDiffEqPart4Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'diffe4-intro',
      type: 'text' as const,
      content: `
# Separation of Variables

**Part 4 of 7 — Separation of Variables**

### 1. Separate variables

get all y-terms and dy on one side, all x-terms and dx on the other

### 2. Integrate both sides

∫g(y)dy = ∫f(x)dx

### 3. Solve for y (if possible) and apply the initial condition

Solve for y (if possible) and apply the initial condition

### 4. Only works when the DE can be written as g(y)dy = f(x)dx

Only works when the DE can be written as g(y)dy = f(x)dx
      `
    },
    {
      id: 'diffe4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of separation of variables?',
            options: [
              'Separate variables',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Separate variables: get all y-terms and dy on one side, all x-terms and dx on the other'
          },
          {
            question: 'In the context of separation of variables, which is accurate?',
            options: [
              'Solve for y (if possible) and apply the initial condition',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Solve for y (if possible) and apply the initial condition'
          }
        ]
      }
    },
    {
      id: 'diffe4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Separate variables**: get all y-terms and dy on one side, all x-terms and dx on the other
- **Integrate both sides**: ∫g(y)dy = ∫f(x)dx
- **Solve for y (if possible) and apply the initial condition**
- **Only works when the DE can be written as g(y)dy = f(x)dx**
      `
    },
    {
      id: 'diffe4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to separation of variables?',
            options: [
              'Only works when the DE can be written as g(y)dy = f(x)dx',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Only works when the DE can be written as g(y)dy = f(x)dx'
          }
        ]
      }
    },
    {
      id: 'diffe4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Separate variables',
            options: ['get all y-terms and dy on one side, all x-terms an', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Integrate both sides',
            options: ['∫g(y)dy = ∫f(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solve for y (if possible) and apply the initial condition',
            options: ['Solve for y (if possible) and apply the initial co', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['get all y-terms and dy on one side, all x-terms an', '∫g(y)dy = ∫f(x)dx', 'Solve for y (if possible) and apply the initial co'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Separation of Variables.'
      }
    }
  ]
}
