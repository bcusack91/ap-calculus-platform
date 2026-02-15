export const calcBCParametricPart2Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param2-intro',
      type: 'text' as const,
      content: `
# Derivatives of Parametric Curves

**Part 2 of 7 — Derivatives of Parametric Curves**

### 1. dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t

dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t

### 2. Horizontal tangent

dy/dt = 0 (and dx/dt ≠ 0)

### 3. Vertical tangent

dx/dt = 0 (and dy/dt ≠ 0)

### 4. Slope of tangent at a specific t

evaluate dy/dx at that t
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
            question: 'Which best describes a key concept of derivatives of parametric curves?',
            options: [
              'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t'
          },
          {
            question: 'In the context of derivatives of parametric curves, which is accurate?',
            options: [
              'dx/dt = 0 (and dy/dt ≠ 0)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Vertical tangent: dx/dt = 0 (and dy/dt ≠ 0)'
          }
        ]
      }
    },
    {
      id: 'param2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t**
- **Horizontal tangent**: dy/dt = 0 (and dx/dt ≠ 0)
- **Vertical tangent**: dx/dt = 0 (and dy/dt ≠ 0)
- **Slope of tangent at a specific t**: evaluate dy/dx at that t
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
            question: 'Which concept relates directly to derivatives of parametric curves?',
            options: [
              'evaluate dy/dx at that t',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Slope of tangent at a specific t: evaluate dy/dx at that t'
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
            label: 'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t',
            options: ['dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives wit', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Horizontal tangent',
            options: ['dy/dt = 0 (and dx/dt ≠ 0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Vertical tangent',
            options: ['dx/dt = 0 (and dy/dt ≠ 0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives wit', 'dy/dt = 0 (and dx/dt ≠ 0)', 'dx/dt = 0 (and dy/dt ≠ 0)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivatives of Parametric Curves.'
      }
    }
  ]
}
