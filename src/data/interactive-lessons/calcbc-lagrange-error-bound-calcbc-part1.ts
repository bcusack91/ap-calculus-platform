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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of taylor polynomial error?',
            options: [
              'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial'
          },
          {
            question: 'In the context of taylor polynomial error, which is accurate?',
            options: [
              'We want |Rₙ(x)| to be small for the approximation to be useful',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'We want |Rₙ(x)| to be small for the approximation to be useful'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to taylor polynomial error?',
            options: [
              'Higher degree → smaller error (generally) near the center',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Higher degree → smaller error (generally) near the center'
          }
        ]
      }
    },
    {
      id: 'lagra1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of the nth-degree Taylor polynomial',
            options: ['Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The remainder tells us how far off our polynomial approximation is',
            options: ['The remainder tells us how far off our polynomial ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'We want |Rₙ(x)| to be small for the approximation to be useful',
            options: ['We want |Rₙ(x)| to be small for the approximation ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Rₙ(x) = f(x) - Pₙ(x) is the remainder (error) of t', 'The remainder tells us how far off our polynomial ', 'We want |Rₙ(x)| to be small for the approximation '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Taylor Polynomial Error.'
      }
    }
  ]
}
