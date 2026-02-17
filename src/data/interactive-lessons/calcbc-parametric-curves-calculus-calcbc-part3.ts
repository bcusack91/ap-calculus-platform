export const calcBCParametricPart3Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param3-intro',
      type: 'text' as const,
      content: `
# Second Derivatives (Parametric)

**Part 3 of 7 — Second Derivatives (Parametric)**

### 1. d²y/dx² = (d/dt[dy/dx])/(dx/dt)

d²y/dx² = (d/dt[dy/dx])/(dx/dt)

### 2. First find dy/dx as a function of t

First find dy/dx as a function of t

### 3. Then differentiate dy/dx with respect to t

Then differentiate dy/dx with respect to t

### 4. Divide by dx/dt to get the second derivative

Divide by dx/dt to get the second derivative
      `
    },
    {
      id: 'param3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes d²y/dx² = (d/dt[dy/dx])/(dx/dt)?',
            options: [
              'd²y/dx² = (d/dt[dy/dx])/(dx/dt)',
              'First find dy/dx as a function of t',
              'Then differentiate dy/dx with respect to t',
              'Divide by dx/dt to get the second derivative'
            ],
            correctAnswer: 0,
            explanation: 'Correct — d²y/dx² = (d/dt[dy/dx])/(dx/dt). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Then differentiate dy/dx with respect…:',
            options: [
              'd²y/dx² = (d/dt[dy/dx])/(dx/dt)',
              'First find dy/dx as a function of t',
              'Then differentiate dy/dx with respect to t',
              'Divide by dx/dt to get the second derivative'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Then differentiate dy/dx with respect to t. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'param3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d²y/dx² = (d/dt[dy/dx])/(dx/dt)**
- **First find dy/dx as a function of t**
- **Then differentiate dy/dx with respect to t**
- **Divide by dx/dt to get the second derivative**
      `
    },
    {
      id: 'param3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Divide by dx/dt to get the second…?',
            options: [
              'd²y/dx² = (d/dt[dy/dx])/(dx/dt)',
              'Divide by dx/dt to get the second derivative',
              'Then differentiate dy/dx with respect to t',
              'First find dy/dx as a function of t'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Divide by dx/dt to get the second derivative. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'param3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd²y/dx² = (d/dt[dy/dx])/(dx/dt)',
            options: ['d²y/dx² = (d/dt[dy/dx])/(dx/dt)', 'Then differentiate dy/dx with respect to t', 'Divide by dx/dt to get the second derivative', 'First find dy/dx as a function of t']
          },
          {
            label: 'First find dy/dx as a function of t',
            options: ['First find dy/dx as a function of t', 'Divide by dx/dt to get the second derivative', 'Then differentiate dy/dx with respect to t', 'd²y/dx² = (d/dt[dy/dx])/(dx/dt)']
          },
          {
            label: 'Then differentiate dy/dx with respect…',
            options: ['d²y/dx² = (d/dt[dy/dx])/(dx/dt)', 'First find dy/dx as a function of t', 'Divide by dx/dt to get the second derivative', 'Then differentiate dy/dx with respect to t']
          }
        ],
        correctAnswers: ['d²y/dx² = (d/dt[dy/dx])/(dx/dt)', 'First find dy/dx as a function of t', 'Then differentiate dy/dx with respect to t'],
        hint1: 'Think about what each concept specifically describes in Second Derivatives (Parametric).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Second Derivatives (Parametric) describes a specific idea. d²y/dx² = (d/dt[dy/dx])/(dx/dt). First find dy/dx as a function of t. Then differentiate dy/dx with respect to t.'
      }
    }
  ]
}
