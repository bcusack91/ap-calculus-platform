export const precalcParametricPart2Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'param2-intro',
      type: 'text' as const,
      content: `
# Graphing Parametric Curves

**Part 2 of 7 — Graphing Parametric Curves**

### 1. Make a table of t, x, y values and plot points

Make a table of t, x, y values and plot points

### 2. Indicate direction with arrows

Indicate direction with arrows

### 3. The same curve can have different parametric representations

The same curve can have different parametric representations

### 4. Restrict t-domain to show only part of the curve

Restrict t-domain to show only part of the curve
      `
    },
    {
      id: 'param2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of graphing parametric curves?',
            options: [
              'Make a table of t, x, y values and plot points',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Make a table of t, x, y values and plot points'
          },
          {
            question: 'In the context of graphing parametric curves, which is accurate?',
            options: [
              'The same curve can have different parametric representations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The same curve can have different parametric representations'
          }
        ]
      }
    },
    {
      id: 'param2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Make a table of t, x, y values and plot points**
- **Indicate direction with arrows**
- **The same curve can have different parametric representations**
- **Restrict t-domain to show only part of the curve**
      `
    },
    {
      id: 'param2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to graphing parametric curves?',
            options: [
              'Restrict t-domain to show only part of the curve',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Restrict t-domain to show only part of the curve'
          }
        ]
      }
    },
    {
      id: 'param2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Make a table of t, x, y values and plot points',
            options: ['Make a table of t, x, y values and plot points', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Indicate direction with arrows',
            options: ['Indicate direction with arrows', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'The same curve can have different parametric representations',
            options: ['The same curve can have different parametric repre', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Make a table of t, x, y values and plot points', 'Indicate direction with arrows', 'The same curve can have different parametric repre'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Graphing Parametric Curves.'
      }
    }
  ]
}
