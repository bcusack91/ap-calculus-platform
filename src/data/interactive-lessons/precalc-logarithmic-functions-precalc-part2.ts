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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of properties of logarithms?',
            options: [
              'Product rule',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Product rule: log_b(MN) = log_b(M) + log_b(N)'
          },
          {
            question: 'In the context of properties of logarithms, which is accurate?',
            options: [
              'log_b(M^n) = n · log_b(M)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Power rule: log_b(M^n) = n · log_b(M)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Product rule',
            options: ['log_b(MN) = log_b(M) + log_b(N)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Quotient rule',
            options: ['log_b(M/N) = log_b(M) - log_b(N)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Power rule',
            options: ['log_b(M^n) = n · log_b(M)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['log_b(MN) = log_b(M) + log_b(N)', 'log_b(M/N) = log_b(M) - log_b(N)', 'log_b(M^n) = n · log_b(M)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Properties of Logarithms.'
      }
    }
  ]
}
