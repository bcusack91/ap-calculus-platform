export const calcABLimitsContinuityPart2Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit2-intro',
      type: 'text' as const,
      content: `
# Limit Laws

**Part 2 of 7 — Limit Laws**

### 1. Sum rule

lim[f(x) + g(x)] = lim f(x) + lim g(x)

### 2. Product rule

lim[f(x) · g(x)] = lim f(x) · lim g(x)

### 3. Quotient rule

lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0

### 4. Constant multiple

lim[c · f(x)] = c · lim f(x)
      `
    },
    {
      id: 'limit2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of limit laws?',
            options: [
              'Sum rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Sum rule: lim[f(x) + g(x)] = lim f(x) + lim g(x)'
          },
          {
            question: 'In the context of limit laws, which is accurate?',
            options: [
              'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Quotient rule: lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0'
          }
        ]
      }
    },
    {
      id: 'limit2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Sum rule**: lim[f(x) + g(x)] = lim f(x) + lim g(x)
- **Product rule**: lim[f(x) · g(x)] = lim f(x) · lim g(x)
- **Quotient rule**: lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0
- **Constant multiple**: lim[c · f(x)] = c · lim f(x)
      `
    },
    {
      id: 'limit2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to limit laws?',
            options: [
              'lim[c · f(x)] = c · lim f(x)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Constant multiple: lim[c · f(x)] = c · lim f(x)'
          }
        ]
      }
    },
    {
      id: 'limit2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sum rule',
            options: ['lim[f(x) + g(x)] = lim f(x) + lim g(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Product rule',
            options: ['lim[f(x) · g(x)] = lim f(x) · lim g(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Quotient rule',
            options: ['lim[f(x)/g(x)] = lim f(x) / lim g(x), provided den', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['lim[f(x) + g(x)] = lim f(x) + lim g(x)', 'lim[f(x) · g(x)] = lim f(x) · lim g(x)', 'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided den'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Limit Laws.'
      }
    }
  ]
}
