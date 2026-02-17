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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Interval of convergence?',
            options: [
              'the series converges for |x-a| < R',
              'Always check endpoints separately (may converge at one, both, or neither)',
              'the set of x-values for which the series converges',
              'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Interval of convergence: the set of x-values for which the series converges. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Three cases?',
            options: [
              'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞',
              'the set of x-values for which the series converges',
              'the series converges for |x-a| < R',
              'Always check endpoints separately (may converge at one, both, or neither)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Three cases: R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Always check endpoints separately (may…?',
            options: [
              'Always check endpoints separately (may converge at one, both, or neither)',
              'the set of x-values for which the series converges',
              'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞',
              'the series converges for |x-a| < R'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Always check endpoints separately (may converge at one, both, or neither). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'power2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interval of convergence',
            options: ['Always check endpoints separately (may converge at one, both, or neither)', 'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞', 'the series converges for |x-a| < R', 'the set of x-values for which the series converges']
          },
          {
            label: 'Radius of convergence R',
            options: ['Always check endpoints separately (may converge at one, both, or neither)', 'the set of x-values for which the series converges', 'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞', 'the series converges for |x-a| < R']
          },
          {
            label: 'Three cases',
            options: ['the series converges for |x-a| < R', 'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞', 'Always check endpoints separately (may converge at one, both, or neither)', 'the set of x-values for which the series converges']
          }
        ],
        correctAnswers: ['the set of x-values for which the series converges', 'the series converges for |x-a| < R', 'R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞'],
        hint1: 'Think about what each concept specifically describes in Radius & Interval of Convergence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Radius & Interval of Convergence describes a specific idea. Interval of convergence: the set of x-values for which the series converges. Radius of convergence R: the series converges for |x-a| < R. Three cases: R = 0 (converges only at center), R = ∞ (converges everywhere), 0 < R < ∞.'
      }
    }
  ]
}
