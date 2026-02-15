export const calcABLimitsContinuityPart4Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit4-intro',
      type: 'text' as const,
      content: `
# Continuity

**Part 4 of 7 — Continuity**

### 1. f is continuous at c if

f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)

### 2. Polynomials are continuous everywhere

Polynomials are continuous everywhere

### 3. Removable discontinuity

the limit exists but doesn't equal f(c)

### 4. Jump and infinite discontinuities are non-removable

Jump and infinite discontinuities are non-removable
      `
    },
    {
      id: 'limit4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of continuity?',
            options: [
              'f is continuous at c if',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f is continuous at c if: f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)'
          },
          {
            question: 'In the context of continuity, which is accurate?',
            options: [
              'the limit exists but doesn\'t equal f(c)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Removable discontinuity: the limit exists but doesn\'t equal f(c)'
          }
        ]
      }
    },
    {
      id: 'limit4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f is continuous at c if**: f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)
- **Polynomials are continuous everywhere**
- **Removable discontinuity**: the limit exists but doesn't equal f(c)
- **Jump and infinite discontinuities are non-removable**
      `
    },
    {
      id: 'limit4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to continuity?',
            options: [
              'Jump and infinite discontinuities are non-removable',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Jump and infinite discontinuities are non-removable'
          }
        ]
      }
    },
    {
      id: 'limit4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f is continuous at c if',
            options: ['f(c) is defined, lim(x→c) f(x) exists, and lim(x→c', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Polynomials are continuous everywhere',
            options: ['Polynomials are continuous everywhere', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Removable discontinuity',
            options: ['the limit exists but doesn\'t equal f(c)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(c) is defined, lim(x→c) f(x) exists, and lim(x→c', 'Polynomials are continuous everywhere', 'the limit exists but doesn\'t equal f(c)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Continuity.'
      }
    }
  ]
}
