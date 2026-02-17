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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Euler\'s Method?',
            options: [
              'Start with initial condition (x₀, y₀)',
              'More steps (smaller Δx) → more accurate, but more computation',
              'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx',
              'follow the tangent line'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Euler\'s Method: yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Start with initial condition (x₀, y₀)?',
            options: [
              'More steps (smaller Δx) → more accurate, but more computation',
              'Start with initial condition (x₀, y₀)',
              'follow the tangent line',
              'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Start with initial condition (x₀, y₀). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents More steps (smaller Δx) → more…?',
            options: [
              'More steps (smaller Δx) → more accurate, but more computation',
              'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx',
              'follow the tangent line',
              'Start with initial condition (x₀, y₀)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — More steps (smaller Δx) → more accurate, but more computation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'euler1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Euler\'s Method',
            options: ['Start with initial condition (x₀, y₀)', 'follow the tangent line', 'More steps (smaller Δx) → more accurate, but more computation', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx']
          },
          {
            label: 'Linear approximation at each step',
            options: ['Start with initial condition (x₀, y₀)', 'yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'More steps (smaller Δx) → more accurate, but more computation', 'follow the tangent line']
          }
        ],
        correctAnswers: ['yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx', 'follow the tangent line'],
        hint1: 'Think about what each concept specifically describes in ∮ Euler Method Advanced.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Euler Method Advanced describes a specific idea. Euler\'s Method: yₙ₊₁ = yₙ + f(xₙ, yₙ)·Δx. Linear approximation at each step: follow the tangent line.'
      }
    }
  ]
}
