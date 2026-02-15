export const calcABChainRulePart4Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain4-intro',
      type: 'text' as const,
      content: `
# Chain Rule with Exponentials & Logs

**Part 4 of 7 — Chain Rule with Exponentials & Logs**

### 1. d/dx[eᵘ] = eᵘ · u' — the exponential function times the derivative of the exponent

d/dx[eᵘ] = eᵘ · u' — the exponential function times the derivative of the exponent

### 2. d/dx[ln(u)] = u'/u = (1/u) · u'

d/dx[ln(u)] = u'/u = (1/u) · u'

### 3. d/dx[aᵘ] = aᵘ · ln(a) · u' for any base a > 0

d/dx[aᵘ] = aᵘ · ln(a) · u' for any base a > 0

### 4. d/dx[log_a(u)] = u'/(u · ln(a))

d/dx[log_a(u)] = u'/(u · ln(a))
      `
    },
    {
      id: 'chain4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of chain rule with exponentials & logs?',
            options: [
              'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent'
          },
          {
            question: 'In the context of chain rule with exponentials & logs, which is accurate?',
            options: [
              'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0'
          }
        ]
      }
    },
    {
      id: 'chain4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[eᵘ] = eᵘ · u' — the exponential function times the derivative of the exponent**
- **d/dx[ln(u)] = u'/u = (1/u) · u'**
- **d/dx[aᵘ] = aᵘ · ln(a) · u' for any base a > 0**
- **d/dx[log_a(u)] = u'/(u · ln(a))**
      `
    },
    {
      id: 'chain4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to chain rule with exponentials & logs?',
            options: [
              'd/dx[log_a(u)] = u\'/(u · ln(a))',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[log_a(u)] = u\'/(u · ln(a))'
          }
        ]
      }
    },
    {
      id: 'chain4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent',
            options: ['d/dx[eᵘ] = eᵘ · u\' — the exponential function time', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[ln(u)] = u\'/u = (1/u) · u\'',
            options: ['d/dx[ln(u)] = u\'/u = (1/u) · u\'', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0',
            options: ['d/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[eᵘ] = eᵘ · u\' — the exponential function time', 'd/dx[ln(u)] = u\'/u = (1/u) · u\'', 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Chain Rule with Exponentials & Logs.'
      }
    }
  ]
}
