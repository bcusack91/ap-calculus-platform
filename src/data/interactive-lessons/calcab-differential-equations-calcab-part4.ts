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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Separate variables?',
            options: [
              'Only works when the DE can be written as g(y)dy = f(x)dx',
              'get all y-terms and dy on one side, all x-terms and dx on the other',
              'Solve for y (if possible) and apply the initial condition',
              '∫g(y)dy = ∫f(x)dx'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Separate variables: get all y-terms and dy on one side, all x-terms and dx on the other. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Solve for y (if possible) and apply the…:',
            options: [
              'Solve for y (if possible) and apply the initial condition',
              'get all y-terms and dy on one side, all x-terms and dx on the other',
              'Only works when the DE can be written as g(y)dy = f(x)dx',
              '∫g(y)dy = ∫f(x)dx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Solve for y (if possible) and apply the initial condition. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Only works when the DE can be written… is correct?',
            options: [
              'Solve for y (if possible) and apply the initial condition',
              'Only works when the DE can be written as g(y)dy = f(x)dx',
              '∫g(y)dy = ∫f(x)dx',
              'get all y-terms and dy on one side, all x-terms and dx on the other'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Only works when the DE can be written as g(y)dy = f(x)dx. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'diffe4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Separate variables',
            options: ['Solve for y (if possible) and apply the initial condition', 'get all y-terms and dy on one side, all x-terms and dx on the other', '∫g(y)dy = ∫f(x)dx', 'Only works when the DE can be written as g(y)dy = f(x)dx']
          },
          {
            label: 'Integrate both sides',
            options: ['Only works when the DE can be written as g(y)dy = f(x)dx', 'Solve for y (if possible) and apply the initial condition', '∫g(y)dy = ∫f(x)dx', 'get all y-terms and dy on one side, all x-terms and dx on the other']
          }
        ],
        correctAnswers: ['get all y-terms and dy on one side, all x-terms and dx on the other', '∫g(y)dy = ∫f(x)dx'],
        hint1: 'Think about what each concept specifically describes in Separation of Variables.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Separation of Variables describes a specific idea. Separate variables: get all y-terms and dy on one side, all x-terms and dx on the other. Integrate both sides: ∫g(y)dy = ∫f(x)dx.'
      }
    }
  ]
}
