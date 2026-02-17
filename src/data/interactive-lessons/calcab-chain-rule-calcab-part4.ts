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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "d/dx[eᵘ] = eᵘ · u\' — the exponential…" refer to in calculus?',
            options: [
              'd/dx[ln(u)] = u\'/u = (1/u) · u\'',
              'd/dx[log_a(u)] = u\'/(u · ln(a))',
              'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0',
              'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about d/dx[aᵘ] = aᵘ · ln(a) · u\' for any base…?',
            options: [
              'd/dx[log_a(u)] = u\'/(u · ln(a))',
              'd/dx[ln(u)] = u\'/u = (1/u) · u\'',
              'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent',
              'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents d/dx[log_a(u)] = u\'/(u · ln(a))?',
            options: [
              'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0',
              'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent',
              'd/dx[ln(u)] = u\'/u = (1/u) · u\'',
              'd/dx[log_a(u)] = u\'/(u · ln(a))'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[log_a(u)] = u\'/(u · ln(a)). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[eᵘ] = eᵘ · u\' — the exponential…',
            options: ['d/dx[log_a(u)] = u\'/(u · ln(a))', 'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent', 'd/dx[ln(u)] = u\'/u = (1/u) · u\'', 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0']
          },
          {
            label: 'd/dx[ln(u)] = u\'/u = (1/u) · u\'',
            options: ['d/dx[log_a(u)] = u\'/(u · ln(a))', 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0', 'd/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent', 'd/dx[ln(u)] = u\'/u = (1/u) · u\'']
          },
          {
            label: 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base…',
            options: ['d/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent', 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0', 'd/dx[log_a(u)] = u\'/(u · ln(a))', 'd/dx[ln(u)] = u\'/u = (1/u) · u\'']
          }
        ],
        correctAnswers: ['d/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent', 'd/dx[ln(u)] = u\'/u = (1/u) · u\'', 'd/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0'],
        hint1: 'Think about what each concept specifically describes in Chain Rule with Exponentials & Logs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chain Rule with Exponentials & Logs describes a specific idea. d/dx[eᵘ] = eᵘ · u\' — the exponential function times the derivative of the exponent. d/dx[ln(u)] = u\'/u = (1/u) · u\'. d/dx[aᵘ] = aᵘ · ln(a) · u\' for any base a > 0.'
      }
    }
  ]
}
