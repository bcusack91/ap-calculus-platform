export const calcABDiffEqPart3Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'diffe3-intro',
      type: 'text' as const,
      content: `
# Euler's Method

**Part 3 of 7 — Euler's Method**

### 1. Euler's Method

numerical approximation of solutions

### 2. yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx

yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx

### 3. Start from initial condition (x₀, y₀) and step forward

Start from initial condition (x₀, y₀) and step forward

### 4. Smaller step size Δx gives more accurate approximation (but more steps)

Smaller step size Δx gives more accurate approximation (but more steps)
      `
    },
    {
      id: 'diffe3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Euler\'s Method?',
            options: [
              'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx',
              'Start from initial condition (x₀, y₀) and step forward',
              'numerical approximation of solutions',
              'Smaller step size Δx gives more accurate approximation (but more steps)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Euler\'s Method: numerical approximation of solutions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Start from initial condition (x₀, y₀)…:',
            options: [
              'Start from initial condition (x₀, y₀) and step forward',
              'numerical approximation of solutions',
              'Smaller step size Δx gives more accurate approximation (but more steps)',
              'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Start from initial condition (x₀, y₀) and step forward. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'diffe3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Euler's Method**: numerical approximation of solutions
- **yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx**
- **Start from initial condition (x₀, y₀) and step forward**
- **Smaller step size Δx gives more accurate approximation (but more steps)**
      `
    },
    {
      id: 'diffe3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Smaller step size Δx gives more…?',
            options: [
              'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx',
              'numerical approximation of solutions',
              'Start from initial condition (x₀, y₀) and step forward',
              'Smaller step size Δx gives more accurate approximation (but more steps)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Smaller step size Δx gives more accurate approximation (but more steps). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'diffe3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Euler\'s Method',
            options: ['Start from initial condition (x₀, y₀) and step forward', 'numerical approximation of solutions', 'Smaller step size Δx gives more accurate approximation (but more steps)', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx']
          },
          {
            label: 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx',
            options: ['Smaller step size Δx gives more accurate approximation (but more steps)', 'Start from initial condition (x₀, y₀) and step forward', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'numerical approximation of solutions']
          },
          {
            label: 'Start from initial condition (x₀, y₀)…',
            options: ['Start from initial condition (x₀, y₀) and step forward', 'numerical approximation of solutions', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Smaller step size Δx gives more accurate approximation (but more steps)']
          }
        ],
        correctAnswers: ['numerical approximation of solutions', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Start from initial condition (x₀, y₀) and step forward'],
        hint1: 'Think about what each concept specifically describes in Euler\'s Method.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Euler\'s Method describes a specific idea. Euler\'s Method: numerical approximation of solutions. yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx. Start from initial condition (x₀, y₀) and step forward.'
      }
    }
  ]
}
