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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to power series?',
            options: [
              'Power series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Power series: Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...'
          },
          {
            question: 'In the context of introduction to power series, which is accurate?',
            options: [
              'Each power series converges for some set of x-values',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Each power series converges for some set of x-values'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to power series?',
            options: [
              'A power series defines a function f(x) within its interval of convergence',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'A power series defines a function f(x) within its interval of convergence'
          }
        ]
      }
    },
    {
      id: 'power1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power series',
            options: ['Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Centered at a (when a=0, it\'s a Maclaurin series form)',
            options: ['Centered at a (when a=0, it\'s a Maclaurin series f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Each power series converges for some set of x-values',
            options: ['Each power series converges for some set of x-valu', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ cₙ(x-a)ⁿ = c₀ + c₁(x-a) + c₂(x-a)² + ...', 'Centered at a (when a=0, it\'s a Maclaurin series f', 'Each power series converges for some set of x-valu'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Power Series.'
      }
    }
  ]
}
