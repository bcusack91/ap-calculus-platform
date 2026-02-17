export const precalcRationalPart3Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio3-intro',
      type: 'text' as const,
      content: `
# Horizontal & Slant Asymptotes

**Part 3 of 7 — Horizontal & Slant Asymptotes**

### 1. Horizontal asymptote depends on degree comparison of p(x) and q(x)

Horizontal asymptote depends on degree comparison of p(x) and q(x)

### 2. Degree of numerator < degree of denominator

y = 0

### 3. Degrees equal

y = (leading coeff of p)/(leading coeff of q)

### 4. Degree of numerator = denominator + 1

slant (oblique) asymptote found by polynomial division
      `
    },
    {
      id: 'ratio3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Horizontal asymptote depends on degree…" refer to in precalculus?',
            options: [
              'y = 0',
              'slant (oblique) asymptote found by polynomial division',
              'y = (leading coeff of p)/(leading coeff of q)',
              'Horizontal asymptote depends on degree comparison of p(x) and q(x)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Horizontal asymptote depends on degree comparison of p(x) and q(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Degrees equal?',
            options: [
              'slant (oblique) asymptote found by polynomial division',
              'Horizontal asymptote depends on degree comparison of p(x) and q(x)',
              'y = 0',
              'y = (leading coeff of p)/(leading coeff of q)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Degrees equal: y = (leading coeff of p)/(leading coeff of q). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ratio3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Horizontal asymptote depends on degree comparison of p(x) and q(x)**
- **Degree of numerator < degree of denominator**: y = 0
- **Degrees equal**: y = (leading coeff of p)/(leading coeff of q)
- **Degree of numerator = denominator + 1**: slant (oblique) asymptote found by polynomial division
      `
    },
    {
      id: 'ratio3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to horizontal & slant asymptotes?',
            options: [
              'slant (oblique) asymptote found by polynomial division',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Degree of numerator = denominator + 1: slant (oblique) asymptote found by polynomial division'
          }
        ]
      }
    },
    {
      id: 'ratio3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Degree of numerator < degree of denominator',
            options: ['y = 0', 'Horizontal asymptote depends on degree comparison of p(x) and q(x)', 'y = (leading coeff of p)/(leading coeff of q)', 'slant (oblique) asymptote found by polynomial division']
          },
          {
            label: 'Degrees equal',
            options: ['slant (oblique) asymptote found by polynomial division', 'y = 0', 'y = (leading coeff of p)/(leading coeff of q)', 'Horizontal asymptote depends on degree comparison of p(x) and q(x)']
          },
          {
            label: 'Degree of numerator = denominator + 1',
            options: ['y = 0', 'y = (leading coeff of p)/(leading coeff of q)', 'Horizontal asymptote depends on degree comparison of p(x) and q(x)', 'slant (oblique) asymptote found by polynomial division']
          }
        ],
        correctAnswers: ['y = 0', 'y = (leading coeff of p)/(leading coeff of q)', 'slant (oblique) asymptote found by polynomial division'],
        hint1: 'Think about what each concept specifically describes in Horizontal & Slant Asymptotes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Horizontal & Slant Asymptotes describes a specific idea. Degree of numerator < degree of denominator: y = 0. Degrees equal: y = (leading coeff of p)/(leading coeff of q). Degree of numerator = denominator + 1: slant (oblique) asymptote found by polynomial division.'
      }
    }
  ]
}
