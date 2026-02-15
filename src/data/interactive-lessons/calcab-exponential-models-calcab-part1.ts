export const calcABExpModelsPart1Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'expon1-intro',
      type: 'text' as const,
      content: `
# ∫ Exponential Models

**Part 1 of 7 — Derivatives of eˣ and ln(x)**

### 1. d/dx[eˣ] = eˣ — the exponential function is its own derivative

d/dx[eˣ] = eˣ — the exponential function is its own derivative

### 2. d/dx[e^(g(x))] = e^(g(x)) · g'(x) (chain rule)

d/dx[e^(g(x))] = e^(g(x)) · g'(x) (chain rule)

### 3. d/dx[ln(x)] = 1/x for x > 0

d/dx[ln(x)] = 1/x for x > 0

### 4. d/dx[ln(g(x))] = g'(x)/g(x) (chain rule)

d/dx[ln(g(x))] = g'(x)/g(x) (chain rule)
      `
    },
    {
      id: 'expon1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivatives of eˣ and ln(x)?',
            options: [
              'd/dx[eˣ] = eˣ — the exponential function is its own derivative',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[eˣ] = eˣ — the exponential function is its own derivative'
          },
          {
            question: 'In the context of derivatives of eˣ and ln(x), which is accurate?',
            options: [
              'd/dx[ln(x)] = 1/x for x > 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[ln(x)] = 1/x for x > 0'
          }
        ]
      }
    },
    {
      id: 'expon1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[eˣ] = eˣ — the exponential function is its own derivative**
- **d/dx[e^(g(x))] = e^(g(x)) · g'(x) (chain rule)**
- **d/dx[ln(x)] = 1/x for x > 0**
- **d/dx[ln(g(x))] = g'(x)/g(x) (chain rule)**
      `
    },
    {
      id: 'expon1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivatives of eˣ and ln(x)?',
            options: [
              'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)'
          }
        ]
      }
    },
    {
      id: 'expon1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[eˣ] = eˣ — the exponential function is its own derivative',
            options: ['d/dx[eˣ] = eˣ — the exponential function is its ow', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)',
            options: ['d/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[ln(x)] = 1/x for x > 0',
            options: ['d/dx[ln(x)] = 1/x for x > 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[eˣ] = eˣ — the exponential function is its ow', 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)', 'd/dx[ln(x)] = 1/x for x > 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivatives of eˣ and ln(x).'
      }
    }
  ]
}
