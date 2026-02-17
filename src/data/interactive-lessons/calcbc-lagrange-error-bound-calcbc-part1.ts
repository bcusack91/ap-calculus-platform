export const calcBCLagrangePart1Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra1-intro',
      type: 'text' as const,
      content: `
# ∮ Lagrange Error Bound

**Part 1 of 7 — Taylor Polynomial Error**

### 1. Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial

Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial

### 2. The remainder tells us how far off our polynomial approximation is

The remainder tells us how far off our polynomial approximation is

### 3. We want |Rₙ(x)| to be small for the approximation to be useful

We want |Rₙ(x)| to be small for the approximation to be useful

### 4. Higher degree → smaller error (generally) near the center

Higher degree → smaller error (generally) near the center
      `
    },
    {
      id: 'lagra1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Rₙ(x) = f(x) - Pₙ(x) is the remainder…?',
            options: [
              'We want |Rₙ(x)| to be small for the approximation to be useful',
              'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial',
              'The remainder tells us how far off our polynomial approximation is',
              'Higher degree → smaller error (generally) near the center'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes We want |Rₙ(x)| to be small for the…:',
            options: [
              'We want |Rₙ(x)| to be small for the approximation to be useful',
              'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial',
              'Higher degree → smaller error (generally) near the center',
              'The remainder tells us how far off our polynomial approximation is'
            ],
            correctAnswer: 0,
            explanation: 'Correct — We want |Rₙ(x)| to be small for the approximation to be useful. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lagra1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial**
- **The remainder tells us how far off our polynomial approximation is**
- **We want |Rₙ(x)| to be small for the approximation to be useful**
- **Higher degree → smaller error (generally) near the center**
      `
    },
    {
      id: 'lagra1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Higher degree → smaller error… is correct?',
            options: [
              'Higher degree → smaller error (generally) near the center',
              'We want |Rₙ(x)| to be small for the approximation to be useful',
              'The remainder tells us how far off our polynomial approximation is',
              'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Higher degree → smaller error (generally) near the center. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rₙ(x) = f(x) - Pₙ(x) is the remainder…',
            options: ['Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial', 'The remainder tells us how far off our polynomial approximation is', 'Higher degree → smaller error (generally) near the center', 'We want |Rₙ(x)| to be small for the approximation to be useful']
          },
          {
            label: 'The remainder tells us how far off our…',
            options: ['We want |Rₙ(x)| to be small for the approximation to be useful', 'Higher degree → smaller error (generally) near the center', 'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial', 'The remainder tells us how far off our polynomial approximation is']
          },
          {
            label: 'We want |Rₙ(x)| to be small for the…',
            options: ['Higher degree → smaller error (generally) near the center', 'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial', 'The remainder tells us how far off our polynomial approximation is', 'We want |Rₙ(x)| to be small for the approximation to be useful']
          }
        ],
        correctAnswers: ['Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial', 'The remainder tells us how far off our polynomial approximation is', 'We want |Rₙ(x)| to be small for the approximation to be useful'],
        hint1: 'Think about what each concept specifically describes in ∮ Lagrange Error Bound.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Lagrange Error Bound describes a specific idea. Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial. The remainder tells us how far off our polynomial approximation is. We want |Rₙ(x)| to be small for the approximation to be useful.'
      }
    }
  ]
}
