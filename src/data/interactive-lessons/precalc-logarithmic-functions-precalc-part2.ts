export const precalcLogarithmicPart2Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'logar2-intro',
      type: 'text' as const,
      content: `
# Properties of Logarithms

**Part 2 of 7 — Properties of Logarithms**

### 1. Product rule

log_b(MN) = log_b(M) + log_b(N)

### 2. Quotient rule

log_b(M/N) = log_b(M) - log_b(N)

### 3. Power rule

log_b(M^n) = n · log_b(M)

### 4. Change of base

log_b(x) = ln(x)/ln(b) = log(x)/log(b)
      `
    },
    {
      id: 'logar2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Product rule?',
            options: [
              'log_b(M^n) = n · log_b(M)',
              'log_b(M/N) = log_b(M) - log_b(N)',
              'log_b(x) = ln(x)/ln(b) = log(x)/log(b)',
              'log_b(MN) = log_b(M) + log_b(N)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Product rule: log_b(MN) = log_b(M) + log_b(N). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Power rule?',
            options: [
              'log_b(M/N) = log_b(M) - log_b(N)',
              'log_b(M^n) = n · log_b(M)',
              'log_b(x) = ln(x)/ln(b) = log(x)/log(b)',
              'log_b(MN) = log_b(M) + log_b(N)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Power rule: log_b(M^n) = n · log_b(M). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logar2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Product rule**: log_b(MN) = log_b(M) + log_b(N)
- **Quotient rule**: log_b(M/N) = log_b(M) - log_b(N)
- **Power rule**: log_b(M^n) = n · log_b(M)
- **Change of base**: log_b(x) = ln(x)/ln(b) = log(x)/log(b)
      `
    },
    {
      id: 'logar2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to properties of logarithms?',
            options: [
              'log_b(x) = ln(x)/ln(b) = log(x)/log(b)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Change of base: log_b(x) = ln(x)/ln(b) = log(x)/log(b)'
          }
        ]
      }
    },
    {
      id: 'logar2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Product rule',
            options: ['log_b(M/N) = log_b(M) - log_b(N)', 'log_b(MN) = log_b(M) + log_b(N)', 'log_b(x) = ln(x)/ln(b) = log(x)/log(b)', 'log_b(M^n) = n · log_b(M)']
          },
          {
            label: 'Quotient rule',
            options: ['log_b(x) = ln(x)/ln(b) = log(x)/log(b)', 'log_b(M/N) = log_b(M) - log_b(N)', 'log_b(M^n) = n · log_b(M)', 'log_b(MN) = log_b(M) + log_b(N)']
          },
          {
            label: 'Power rule',
            options: ['log_b(M/N) = log_b(M) - log_b(N)', 'log_b(x) = ln(x)/ln(b) = log(x)/log(b)', 'log_b(MN) = log_b(M) + log_b(N)', 'log_b(M^n) = n · log_b(M)']
          }
        ],
        correctAnswers: ['log_b(MN) = log_b(M) + log_b(N)', 'log_b(M/N) = log_b(M) - log_b(N)', 'log_b(M^n) = n · log_b(M)'],
        hint1: 'Think about what each concept specifically describes in Properties of Logarithms.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Properties of Logarithms describes a specific idea. Product rule: log_b(MN) = log_b(M) + log_b(N). Quotient rule: log_b(M/N) = log_b(M) - log_b(N). Power rule: log_b(M^n) = n · log_b(M).'
      }
    }
  ]
}
