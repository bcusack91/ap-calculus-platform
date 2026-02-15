export const calcABFreeResponsePart3Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'free-3-intro',
      type: 'text' as const,
      content: `
# Calculator vs No-Calculator Sections

**Part 3 of 7 — Calculator vs No-Calculator Sections**

### 1. Calculator section

use stored integrals and derivatives, graph to find intersections

### 2. No-calculator section

show all algebraic steps

### 3. On calculator problems, write the integral/equation being computed

On calculator problems, write the integral/equation being computed

### 4. Round to 3 decimal places unless otherwise specified

Round to 3 decimal places unless otherwise specified
      `
    },
    {
      id: 'free-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of calculator vs no-calculator sections?',
            options: [
              'Calculator section',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Calculator section: use stored integrals and derivatives, graph to find intersections'
          },
          {
            question: 'In the context of calculator vs no-calculator sections, which is accurate?',
            options: [
              'On calculator problems, write the integral/equation being computed',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'On calculator problems, write the integral/equation being computed'
          }
        ]
      }
    },
    {
      id: 'free-3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Calculator section**: use stored integrals and derivatives, graph to find intersections
- **No-calculator section**: show all algebraic steps
- **On calculator problems, write the integral/equation being computed**
- **Round to 3 decimal places unless otherwise specified**
      `
    },
    {
      id: 'free-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to calculator vs no-calculator sections?',
            options: [
              'Round to 3 decimal places unless otherwise specified',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Round to 3 decimal places unless otherwise specified'
          }
        ]
      }
    },
    {
      id: 'free-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculator section',
            options: ['use stored integrals and derivatives, graph to fin', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'No-calculator section',
            options: ['show all algebraic steps', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'On calculator problems, write the integral/equation being computed',
            options: ['On calculator problems, write the integral/equatio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['use stored integrals and derivatives, graph to fin', 'show all algebraic steps', 'On calculator problems, write the integral/equatio'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Calculator vs No-Calculator Sections.'
      }
    }
  ]
}
