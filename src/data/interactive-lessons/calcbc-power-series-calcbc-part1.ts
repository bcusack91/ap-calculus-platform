export const calcBCPowerSeriesPart1Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'power1-intro',
      type: 'text' as const,
      content: `
# ∮ Power Series

**Part 1 of 7 — Introduction to Power Series**

### 1. Power series

Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...

### 2. Centered at a (when a=0, it's a Maclaurin series form)

Centered at a (when a=0, it's a Maclaurin series form)

### 3. Each power series converges for some set of x-values

Each power series converges for some set of x-values

### 4. A power series defines a function f(x) within its interval of convergence

A power series defines a function f(x) within its interval of convergence
      `
    },
    {
      id: 'power1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Power series?',
            options: [
              'A power series defines a function f(x) within its interval of convergence',
              'Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...',
              'Centered at a (when a=0, it\'s a Maclaurin series form)',
              'Each power series converges for some set of x-values'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Power series: Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ... The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Each power series converges for some…?',
            options: [
              'Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...',
              'A power series defines a function f(x) within its interval of convergence',
              'Each power series converges for some set of x-values',
              'Centered at a (when a=0, it\'s a Maclaurin series form)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Each power series converges for some set of x-values. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'power1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Power series**: Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...
- **Centered at a (when a=0, it's a Maclaurin series form)**
- **Each power series converges for some set of x-values**
- **A power series defines a function f(x) within its interval of convergence**
      `
    },
    {
      id: 'power1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about A power series defines a function f(x)… is correct?',
            options: [
              'Each power series converges for some set of x-values',
              'Centered at a (when a=0, it\'s a Maclaurin series form)',
              'Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...',
              'A power series defines a function f(x) within its interval of convergence'
            ],
            correctAnswer: 3,
            explanation: 'Correct — A power series defines a function f(x) within its interval of convergence. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'power1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power series',
            options: ['Centered at a (when a=0, it\'s a Maclaurin series form)', 'Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'A power series defines a function f(x) within its interval of convergence', 'Each power series converges for some set of x-values']
          },
          {
            label: 'Centered at a (when a=0, it\'s a…',
            options: ['Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'A power series defines a function f(x) within its interval of convergence', 'Centered at a (when a=0, it\'s a Maclaurin series form)', 'Each power series converges for some set of x-values']
          },
          {
            label: 'Each power series converges for some…',
            options: ['Centered at a (when a=0, it\'s a Maclaurin series form)', 'A power series defines a function f(x) within its interval of convergence', 'Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'Each power series converges for some set of x-values']
          }
        ],
        correctAnswers: ['Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'Centered at a (when a=0, it\'s a Maclaurin series form)', 'Each power series converges for some set of x-values'],
        hint1: 'Think about what each concept specifically describes in ∮ Power Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Power Series describes a specific idea. Power series: Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ... Centered at a (when a=0, it\'s a Maclaurin series form). Each power series converges for some set of x-values.'
      }
    }
  ]
}
