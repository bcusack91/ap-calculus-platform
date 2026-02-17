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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Type I?',
            options: [
              'Both halves must converge for the integral to converge',
              '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx',
              'split at any point c and evaluate both halves',
              'one or both limits of integration are ±∞'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Type I: one or both limits of integration are ±∞. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about ∫₋∞^∞ f(x)dx?',
            options: [
              'Both halves must converge for the integral to converge',
              'one or both limits of integration are ±∞',
              'split at any point c and evaluate both halves',
              '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ∫₋∞^∞ f(x)dx: split at any point c and evaluate both halves. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding ∮ Improper Integrals, which correctly describes Both halves must converge for the…?',
            options: [
              'Both halves must converge for the integral to converge',
              'one or both limits of integration are ±∞',
              '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx',
              'split at any point c and evaluate both halves'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Both halves must converge for the integral to converge. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'impro1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Type I',
            options: ['∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx', 'one or both limits of integration are ±∞', 'split at any point c and evaluate both halves', 'Both halves must converge for the integral to converge']
          },
          {
            label: '∫₋∞^∞ f(x)dx',
            options: ['one or both limits of integration are ±∞', 'Both halves must converge for the integral to converge', 'split at any point c and evaluate both halves', '∫ₐ^∞ f(x)dx = lim(b→∞) ∫ₐᵇ f(x)dx']
          }
        ],
        correctAnswers: ['one or both limits of integration are ±∞', 'split at any point c and evaluate both halves'],
        hint1: 'Think about what each concept specifically describes in ∮ Improper Integrals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Improper Integrals describes a specific idea. Type I: one or both limits of integration are ±∞. ∫₋∞^∞ f(x)dx: split at any point c and evaluate both halves.'
      }
    }
  ]
}
