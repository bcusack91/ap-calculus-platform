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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of second derivatives (parametric)?',
            options: [
              'd²y/dx² = (d/dt[dy/dx])/(dx/dt)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd²y/dx² = (d/dt[dy/dx])/(dx/dt)'
          },
          {
            question: 'In the context of second derivatives (parametric), which is accurate?',
            options: [
              'Then differentiate dy/dx with respect to t',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Then differentiate dy/dx with respect to t'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to second derivatives (parametric)?',
            options: [
              'Divide by dx/dt to get the second derivative',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Divide by dx/dt to get the second derivative'
          }
        ]
      }
    },
    {
      id: 'param3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd²y/dx² = (d/dt[dy/dx])/(dx/dt)',
            options: ['d²y/dx² = (d/dt[dy/dx])/(dx/dt)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'First find dy/dx as a function of t',
            options: ['First find dy/dx as a function of t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Then differentiate dy/dx with respect to t',
            options: ['Then differentiate dy/dx with respect to t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d²y/dx² = (d/dt[dy/dx])/(dx/dt)', 'First find dy/dx as a function of t', 'Then differentiate dy/dx with respect to t'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Second Derivatives (Parametric).'
      }
    }
  ]
}
