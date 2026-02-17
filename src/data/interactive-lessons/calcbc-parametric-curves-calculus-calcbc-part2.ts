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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes dy/dx = (dy/dt)/(dx/dt) — ratio of…?',
            options: [
              'evaluate dy/dx at that t',
              'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t',
              'dx/dt = 0 (and dy/dt ≠ 0)',
              'dy/dt = 0 (and dx/dt ≠ 0)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Derivatives of Parametric Curves, which explains Vertical tangent?',
            options: [
              'dx/dt = 0 (and dy/dt ≠ 0)',
              'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t',
              'evaluate dy/dx at that t',
              'dy/dt = 0 (and dx/dt ≠ 0)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Vertical tangent: dx/dt = 0 (and dy/dt ≠ 0). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Derivatives of Parametric Curves, which correctly describes Slope of tangent at a specific t?',
            options: [
              'dy/dt = 0 (and dx/dt ≠ 0)',
              'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t',
              'dx/dt = 0 (and dy/dt ≠ 0)',
              'evaluate dy/dx at that t'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Slope of tangent at a specific t: evaluate dy/dx at that t. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Horizontal tangent',
            options: ['dx/dt = 0 (and dy/dt ≠ 0)', 'evaluate dy/dx at that t', 'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t', 'dy/dt = 0 (and dx/dt ≠ 0)']
          },
          {
            label: 'Vertical tangent',
            options: ['dy/dt = 0 (and dx/dt ≠ 0)', 'evaluate dy/dx at that t', 'dx/dt = 0 (and dy/dt ≠ 0)', 'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t']
          },
          {
            label: 'Slope of tangent at a specific t',
            options: ['dy/dt = 0 (and dx/dt ≠ 0)', 'dy/dx = (dy/dt)/(dx/dt) — ratio of derivatives with respect to t', 'evaluate dy/dx at that t', 'dx/dt = 0 (and dy/dt ≠ 0)']
          }
        ],
        correctAnswers: ['dy/dt = 0 (and dx/dt ≠ 0)', 'dx/dt = 0 (and dy/dt ≠ 0)', 'evaluate dy/dx at that t'],
        hint1: 'Think about what each concept specifically describes in Derivatives of Parametric Curves.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivatives of Parametric Curves describes a specific idea. Horizontal tangent: dy/dt = 0 (and dx/dt ≠ 0). Vertical tangent: dx/dt = 0 (and dy/dt ≠ 0). Slope of tangent at a specific t: evaluate dy/dx at that t.'
      }
    }
  ]
}
