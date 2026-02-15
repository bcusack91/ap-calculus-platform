export const calcBCEulerAdvPart1Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler1-intro',
      type: 'text' as const,
      content: `
# ∮ Euler Method Advanced

**Part 1 of 7 — Euler's Method Review**

### 1. Euler's Method

yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx

### 2. Linear approximation at each step

follow the tangent line

### 3. Start with initial condition (x₀, y₀)

Start with initial condition (x₀, y₀)

### 4. More steps (smaller Δx) → more accurate, but more computation

More steps (smaller Δx) → more accurate, but more computation
      `
    },
    {
      id: 'euler1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of euler\'s method review?',
            options: [
              'Euler\'s Method',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Euler\'s Method: yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx'
          },
          {
            question: 'In the context of euler\'s method review, which is accurate?',
            options: [
              'Start with initial condition (x₀, y₀)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Start with initial condition (x₀, y₀)'
          }
        ]
      }
    },
    {
      id: 'euler1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Euler's Method**: yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx
- **Linear approximation at each step**: follow the tangent line
- **Start with initial condition (x₀, y₀)**
- **More steps (smaller Δx) → more accurate, but more computation**
      `
    },
    {
      id: 'euler1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to euler\'s method review?',
            options: [
              'More steps (smaller Δx) → more accurate, but more computation',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'More steps (smaller Δx) → more accurate, but more computation'
          }
        ]
      }
    },
    {
      id: 'euler1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Euler\'s Method',
            options: ['yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Linear approximation at each step',
            options: ['follow the tangent line', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Start with initial condition (x₀, y₀)',
            options: ['Start with initial condition (x₀, y₀)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'follow the tangent line', 'Start with initial condition (x₀, y₀)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Euler\'s Method Review.'
      }
    }
  ]
}
