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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of horizontal & slant asymptotes?',
            options: [
              'Horizontal asymptote depends on degree comparison of p(x) and q(x)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal asymptote depends on degree comparison of p(x) and q(x)'
          },
          {
            question: 'In the context of horizontal & slant asymptotes, which is accurate?',
            options: [
              'y = (leading coeff of p)/(leading coeff of q)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Degrees equal: y = (leading coeff of p)/(leading coeff of q)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Horizontal asymptote depends on degree comparison of p(x) and q(x)',
            options: ['Horizontal asymptote depends on degree comparison ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Degree of numerator < degree of denominator',
            options: ['y = 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Degrees equal',
            options: ['y = (leading coeff of p)/(leading coeff of q)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Horizontal asymptote depends on degree comparison ', 'y = 0', 'y = (leading coeff of p)/(leading coeff of q)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Horizontal & Slant Asymptotes.'
      }
    }
  ]
}
