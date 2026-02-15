export const calcBCPolarPart2Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar2-intro',
      type: 'text' as const,
      content: `
# Derivatives in Polar

**Part 2 of 7 — Derivatives in Polar**

### 1. For r = f(θ)

dy/dx = (dy/dθ)/(dx/dθ)

### 2. dy/dθ = f'(θ)sin θ + f(θ)cos θ

dy/dθ = f'(θ)sin θ + f(θ)cos θ

### 3. dx/dθ = f'(θ)cos θ - f(θ)sin θ

dx/dθ = f'(θ)cos θ - f(θ)sin θ

### 4. Horizontal tangent

dy/dθ = 0; Vertical tangent: dx/dθ = 0
      `
    },
    {
      id: 'polar2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivatives in polar?',
            options: [
              'For r = f(θ)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For r = f(θ): dy/dx = (dy/dθ)/(dx/dθ)'
          },
          {
            question: 'In the context of derivatives in polar, which is accurate?',
            options: [
              'dx/dθ = f\'(θ)cos θ - f(θ)sin θ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'dx/dθ = f\'(θ)cos θ - f(θ)sin θ'
          }
        ]
      }
    },
    {
      id: 'polar2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For r = f(θ)**: dy/dx = (dy/dθ)/(dx/dθ)
- **dy/dθ = f'(θ)sin θ + f(θ)cos θ**
- **dx/dθ = f'(θ)cos θ - f(θ)sin θ**
- **Horizontal tangent**: dy/dθ = 0; Vertical tangent: dx/dθ = 0
      `
    },
    {
      id: 'polar2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivatives in polar?',
            options: [
              'dy/dθ = 0; Vertical tangent: dx/dθ = 0',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal tangent: dy/dθ = 0; Vertical tangent: dx/dθ = 0'
          }
        ]
      }
    },
    {
      id: 'polar2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For r = f(θ)',
            options: ['dy/dx = (dy/dθ)/(dx/dθ)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'dy/dθ = f\'(θ)sin θ + f(θ)cos θ',
            options: ['dy/dθ = f\'(θ)sin θ + f(θ)cos θ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'dx/dθ = f\'(θ)cos θ - f(θ)sin θ',
            options: ['dx/dθ = f\'(θ)cos θ - f(θ)sin θ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dy/dx = (dy/dθ)/(dx/dθ)', 'dy/dθ = f\'(θ)sin θ + f(θ)cos θ', 'dx/dθ = f\'(θ)cos θ - f(θ)sin θ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivatives in Polar.'
      }
    }
  ]
}
