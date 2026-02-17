export const precalcContinuityPart6Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'conti6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'conti6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Piecewise functions" refer to in precalculus?',
            options: [
              'check continuity at each boundary point',
              'Set left-hand limit = right-hand limit = function value at the boundary',
              'Graph each piece on its defined interval',
              'Solve for parameters to make piecewise functions continuous'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Piecewise functions: check continuity at each boundary point. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Solve for parameters to make piecewise…:',
            options: [
              'check continuity at each boundary point',
              'Graph each piece on its defined interval',
              'Solve for parameters to make piecewise functions continuous',
              'Set left-hand limit = right-hand limit = function value at the boundary'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Solve for parameters to make piecewise functions continuous. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conti6-detail',
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
      id: 'conti6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
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
      id: 'conti6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Piecewise functions',
            options: ['Graph each piece on its defined interval', 'Set left-hand limit = right-hand limit = function value at the boundary', 'Solve for parameters to make piecewise functions continuous', 'check continuity at each boundary point']
          },
          {
            label: 'Set left-hand limit = right-hand limit…',
            options: ['Graph each piece on its defined interval', 'Set left-hand limit = right-hand limit = function value at the boundary', 'Solve for parameters to make piecewise functions continuous', 'check continuity at each boundary point']
          },
          {
            label: 'Solve for parameters to make piecewise…',
            options: ['Solve for parameters to make piecewise functions continuous', 'check continuity at each boundary point', 'Graph each piece on its defined interval', 'Set left-hand limit = right-hand limit = function value at the boundary']
          }
        ],
        correctAnswers: ['check continuity at each boundary point', 'Set left-hand limit = right-hand limit = function value at the boundary', 'Solve for parameters to make piecewise functions continuous'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Piecewise functions: check continuity at each boundary point. Set left-hand limit = right-hand limit = function value at the boundary. Solve for parameters to make piecewise functions continuous.'
      }
    }
  ]
}
