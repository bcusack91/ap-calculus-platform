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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "d/dx[eˣ] = eˣ — the exponential…" refer to in calculus?',
            options: [
              'd/dx[eˣ] = eˣ — the exponential function is its own derivative',
              'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)',
              'd/dx[ln(x)] = 1/x for x > 0',
              'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — d/dx[eˣ] = eˣ — the exponential function is its own derivative. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about d/dx[ln(x)] = 1/x for x > 0?',
            options: [
              'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)',
              'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)',
              'd/dx[eˣ] = eˣ — the exponential function is its own derivative',
              'd/dx[ln(x)] = 1/x for x > 0'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[ln(x)] = 1/x for x > 0. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about d/dx[ln(g(x))] = g\'(x)/g(x) (chain rule) is correct?',
            options: [
              'd/dx[eˣ] = eˣ — the exponential function is its own derivative',
              'd/dx[ln(x)] = 1/x for x > 0',
              'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)',
              'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[ln(g(x))] = g\'(x)/g(x) (chain rule). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'expon1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[eˣ] = eˣ — the exponential…',
            options: ['d/dx[ln(x)] = 1/x for x > 0', 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)', 'd/dx[eˣ] = eˣ — the exponential function is its own derivative', 'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)']
          },
          {
            label: 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x)…',
            options: ['d/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)', 'd/dx[eˣ] = eˣ — the exponential function is its own derivative', 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)', 'd/dx[ln(x)] = 1/x for x > 0']
          },
          {
            label: 'd/dx[ln(x)] = 1/x for x > 0',
            options: ['d/dx[ln(x)] = 1/x for x > 0', 'd/dx[ln(g(x))] = g\'(x)/g(x) (chain rule)', 'd/dx[eˣ] = eˣ — the exponential function is its own derivative', 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)']
          }
        ],
        correctAnswers: ['d/dx[eˣ] = eˣ — the exponential function is its own derivative', 'd/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule)', 'd/dx[ln(x)] = 1/x for x > 0'],
        hint1: 'Think about what each concept specifically describes in Exponential Models.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Models describes a specific idea. d/dx[eˣ] = eˣ — the exponential function is its own derivative. d/dx[e^(g(x))] = e^(g(x)) · g\'(x) (chain rule). d/dx[ln(x)] = 1/x for x > 0.'
      }
    }
  ]
}
