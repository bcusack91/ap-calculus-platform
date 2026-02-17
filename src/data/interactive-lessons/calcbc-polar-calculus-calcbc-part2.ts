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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "For r = f(θ)" refer to in calculus?',
            options: [
              'dy/dθ = f\'(θ)sin θ + f(θ)cos θ',
              'dy/dx = (dy/dθ)/(dx/dθ)',
              'dy/dθ = 0; Vertical tangent: dx/dθ = 0',
              'dx/dθ = f\'(θ)cos θ - f(θ)sin θ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — For r = f(θ): dy/dx = (dy/dθ)/(dx/dθ). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about dx/dθ = f\'(θ)cos θ - f(θ)sin θ?',
            options: [
              'dy/dθ = f\'(θ)sin θ + f(θ)cos θ',
              'dy/dθ = 0; Vertical tangent: dx/dθ = 0',
              'dy/dx = (dy/dθ)/(dx/dθ)',
              'dx/dθ = f\'(θ)cos θ - f(θ)sin θ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — dx/dθ = f\'(θ)cos θ - f(θ)sin θ. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Derivatives in Polar, which correctly describes Horizontal tangent?',
            options: [
              'dy/dx = (dy/dθ)/(dx/dθ)',
              'dy/dθ = 0; Vertical tangent: dx/dθ = 0',
              'dy/dθ = f\'(θ)sin θ + f(θ)cos θ',
              'dx/dθ = f\'(θ)cos θ - f(θ)sin θ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Horizontal tangent: dy/dθ = 0; Vertical tangent: dx/dθ = 0. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'polar2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For r = f(θ)',
            options: ['dy/dθ = f\'(θ)sin θ + f(θ)cos θ', 'dy/dθ = 0; Vertical tangent: dx/dθ = 0', 'dy/dx = (dy/dθ)/(dx/dθ)', 'dx/dθ = f\'(θ)cos θ - f(θ)sin θ']
          },
          {
            label: 'Horizontal tangent',
            options: ['dy/dθ = 0; Vertical tangent: dx/dθ = 0', 'dy/dθ = f\'(θ)sin θ + f(θ)cos θ', 'dx/dθ = f\'(θ)cos θ - f(θ)sin θ', 'dy/dx = (dy/dθ)/(dx/dθ)']
          }
        ],
        correctAnswers: ['dy/dx = (dy/dθ)/(dx/dθ)', 'dy/dθ = 0; Vertical tangent: dx/dθ = 0'],
        hint1: 'Think about what each concept specifically describes in Derivatives in Polar.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivatives in Polar describes a specific idea. For r = f(θ): dy/dx = (dy/dθ)/(dx/dθ). Horizontal tangent: dy/dθ = 0; Vertical tangent: dx/dθ = 0.'
      }
    }
  ]
}
