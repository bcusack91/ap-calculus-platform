export const precalcContinuityPart7Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'conti7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Piecewise functions

check continuity at each boundary point

### 2. Set left-hand limit = right-hand limit = function value at the boundary

Set left-hand limit = right-hand limit = function value at the boundary

### 3. Solve for parameters to make piecewise functions continuous

Solve for parameters to make piecewise functions continuous

### 4. Graph each piece on its defined interval

Graph each piece on its defined interval
      `
    },
    {
      id: 'conti7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Piecewise functions',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Piecewise functions: check continuity at each boundary point'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'Solve for parameters to make piecewise functions continuous',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Solve for parameters to make piecewise functions continuous'
          }
        ]
      }
    },
    {
      id: 'conti7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Piecewise functions**: check continuity at each boundary point
- **Set left-hand limit = right-hand limit = function value at the boundary**
- **Solve for parameters to make piecewise functions continuous**
- **Graph each piece on its defined interval**
      `
    },
    {
      id: 'conti7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Graph each piece on its defined interval',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Graph each piece on its defined interval'
          }
        ]
      }
    },
    {
      id: 'conti7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Piecewise functions',
            options: ['check continuity at each boundary point', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Set left-hand limit = right-hand limit = function value at the boundary',
            options: ['Set left-hand limit = right-hand limit = function ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Solve for parameters to make piecewise functions continuous',
            options: ['Solve for parameters to make piecewise functions c', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['check continuity at each boundary point', 'Set left-hand limit = right-hand limit = function ', 'Solve for parameters to make piecewise functions c'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
