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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Make a table of t, x, y values and plot…?',
            options: [
              'Indicate direction with arrows',
              'Make a table of t, x, y values and plot points',
              'Restrict t-domain to show only part of the curve',
              'The same curve can have different parametric representations'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Make a table of t, x, y values and plot points. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Graphing Parametric Curves, which explains The same curve can have different…?',
            options: [
              'Indicate direction with arrows',
              'Make a table of t, x, y values and plot points',
              'The same curve can have different parametric representations',
              'Restrict t-domain to show only part of the curve'
            ],
            correctAnswer: 2,
            explanation: 'Correct — The same curve can have different parametric representations. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Make a table of t, x, y values and plot…',
            options: ['Indicate direction with arrows', 'Make a table of t, x, y values and plot points', 'The same curve can have different parametric representations', 'Restrict t-domain to show only part of the curve']
          },
          {
            label: 'Indicate direction with arrows',
            options: ['Restrict t-domain to show only part of the curve', 'The same curve can have different parametric representations', 'Indicate direction with arrows', 'Make a table of t, x, y values and plot points']
          },
          {
            label: 'The same curve can have different…',
            options: ['Make a table of t, x, y values and plot points', 'The same curve can have different parametric representations', 'Restrict t-domain to show only part of the curve', 'Indicate direction with arrows']
          }
        ],
        correctAnswers: ['Make a table of t, x, y values and plot points', 'Indicate direction with arrows', 'The same curve can have different parametric representations'],
        hint1: 'Think about what each concept specifically describes in Graphing Parametric Curves.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Graphing Parametric Curves describes a specific idea. Make a table of t, x, y values and plot points. Indicate direction with arrows. The same curve can have different parametric representations.'
      }
    }
  ]
}
