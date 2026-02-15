export const calcBCPowerSeriesPart2Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'power2-intro',
      type: 'text' as const,
      content: `
# Radius & Interval of Convergence

**Part 2 of 7 — Radius & Interval of Convergence**

### 1. Interval of convergence

the set of x-values for which the series converges

### 2. Radius of convergence R

the series converges for |x-a| < R

### 3. Three cases

R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞

### 4. Always check endpoints separately (may converge at one, both, or neither)

Always check endpoints separately (may converge at one, both, or neither)
      `
    },
    {
      id: 'power2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of radius & interval of convergence?',
            options: [
              'Interval of convergence',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Interval of convergence: the set of x-values for which the series converges'
          },
          {
            question: 'In the context of radius & interval of convergence, which is accurate?',
            options: [
              'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Three cases: R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞'
          }
        ]
      }
    },
    {
      id: 'power2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Interval of convergence**: the set of x-values for which the series converges
- **Radius of convergence R**: the series converges for |x-a| < R
- **Three cases**: R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞
- **Always check endpoints separately (may converge at one, both, or neither)**
      `
    },
    {
      id: 'power2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to radius & interval of convergence?',
            options: [
              'Always check endpoints separately (may converge at one, both, or neither)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Always check endpoints separately (may converge at one, both, or neither)'
          }
        ]
      }
    },
    {
      id: 'power2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interval of convergence',
            options: ['the set of x-values for which the series converges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Radius of convergence R',
            options: ['the series converges for |x-a| < R', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Three cases',
            options: ['R = 0 (converges only at center), R = ∞ (converges', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['the set of x-values for which the series converges', 'the series converges for |x-a| < R', 'R = 0 (converges only at center), R = ∞ (converges'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Radius & Interval of Convergence.'
      }
    }
  ]
}
