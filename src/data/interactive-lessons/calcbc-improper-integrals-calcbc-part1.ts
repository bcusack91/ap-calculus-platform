export const calcBCImproperPart1Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'impro1-intro',
      type: 'text' as const,
      content: `
# ∮ Improper Integrals

**Part 1 of 7 — Type I: Infinite Limits**

### 1. Type I

one or both limits of integration are ±∞

### 2. ∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx

∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx

### 3. ∫₋∞^∞ f(x)dx

split at any point c and evaluate both halves

### 4. Both halves must converge for the integral to converge

Both halves must converge for the integral to converge
      `
    },
    {
      id: 'impro1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of type i: infinite limits?',
            options: [
              'Type I',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Type I: one or both limits of integration are ±∞'
          },
          {
            question: 'In the context of type i: infinite limits, which is accurate?',
            options: [
              'split at any point c and evaluate both halves',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫₋∞^∞ f(x)dx: split at any point c and evaluate both halves'
          }
        ]
      }
    },
    {
      id: 'impro1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Type I**: one or both limits of integration are ±∞
- **∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx**
- **∫₋∞^∞ f(x)dx**: split at any point c and evaluate both halves
- **Both halves must converge for the integral to converge**
      `
    },
    {
      id: 'impro1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to type i: infinite limits?',
            options: [
              'Both halves must converge for the integral to converge',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Both halves must converge for the integral to converge'
          }
        ]
      }
    },
    {
      id: 'impro1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Type I',
            options: ['one or both limits of integration are ±∞', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx',
            options: ['∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫₋∞^∞ f(x)dx',
            options: ['split at any point c and evaluate both halves', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['one or both limits of integration are ±∞', '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx', 'split at any point c and evaluate both halves'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Type I: Infinite Limits.'
      }
    }
  ]
}
