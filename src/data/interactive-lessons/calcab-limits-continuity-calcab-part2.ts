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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Sum rule?',
            options: [
              'lim[f(x) · g(x)] = lim f(x) · lim g(x)',
              'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0',
              'lim[f(x) + g(x)] = lim f(x) + lim g(x)',
              'lim[c · f(x)] = c · lim f(x)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Sum rule: lim[f(x) + g(x)] = lim f(x) + lim g(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Quotient rule?',
            options: [
              'lim[f(x) · g(x)] = lim f(x) · lim g(x)',
              'lim[f(x) + g(x)] = lim f(x) + lim g(x)',
              'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0',
              'lim[c · f(x)] = c · lim f(x)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Quotient rule: lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Constant multiple?',
            options: [
              'lim[c · f(x)] = c · lim f(x)',
              'lim[f(x) + g(x)] = lim f(x) + lim g(x)',
              'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0',
              'lim[f(x) · g(x)] = lim f(x) · lim g(x)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Constant multiple: lim[c · f(x)] = c · lim f(x). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'limit2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sum rule',
            options: ['lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0', 'lim[c · f(x)] = c · lim f(x)', 'lim[f(x) + g(x)] = lim f(x) + lim g(x)', 'lim[f(x) · g(x)] = lim f(x) · lim g(x)']
          },
          {
            label: 'Product rule',
            options: ['lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0', 'lim[c · f(x)] = c · lim f(x)', 'lim[f(x) · g(x)] = lim f(x) · lim g(x)', 'lim[f(x) + g(x)] = lim f(x) + lim g(x)']
          },
          {
            label: 'Quotient rule',
            options: ['lim[c · f(x)] = c · lim f(x)', 'lim[f(x) + g(x)] = lim f(x) + lim g(x)', 'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0', 'lim[f(x) · g(x)] = lim f(x) · lim g(x)']
          }
        ],
        correctAnswers: ['lim[f(x) + g(x)] = lim f(x) + lim g(x)', 'lim[f(x) · g(x)] = lim f(x) · lim g(x)', 'lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0'],
        hint1: 'Think about what each concept specifically describes in Limit Laws.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Limit Laws describes a specific idea. Sum rule: lim[f(x) + g(x)] = lim f(x) + lim g(x). Product rule: lim[f(x) · g(x)] = lim f(x) · lim g(x). Quotient rule: lim[f(x)/g(x)] = lim f(x) / lim g(x), provided denominator ≠ 0.'
      }
    }
  ]
}
