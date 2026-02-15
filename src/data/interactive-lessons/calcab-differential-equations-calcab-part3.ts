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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of euler\'s method?',
            options: [
              'Euler\'s Method',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Euler\'s Method: numerical approximation of solutions'
          },
          {
            question: 'In the context of euler\'s method, which is accurate?',
            options: [
              'Start from initial condition (x₀, y₀) and step forward',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Start from initial condition (x₀, y₀) and step forward'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to euler\'s method?',
            options: [
              'Smaller step size Δx gives more accurate approximation (but more steps)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Smaller step size Δx gives more accurate approximation (but more steps)'
          }
        ]
      }
    },
    {
      id: 'diffe3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Euler\'s Method',
            options: ['numerical approximation of solutions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx',
            options: ['yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Start from initial condition (x₀, y₀) and step forward',
            options: ['Start from initial condition (x₀, y₀) and step for', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['numerical approximation of solutions', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Start from initial condition (x₀, y₀) and step for'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Euler\'s Method.'
      }
    }
  ]
}
