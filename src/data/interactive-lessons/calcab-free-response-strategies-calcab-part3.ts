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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Calculator section?',
            options: [
              'use stored integrals and derivatives, graph to find intersections',
              'show all algebraic steps',
              'Round to 3 decimal places unless otherwise specified',
              'On calculator problems, write the integral/equation being computed'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Calculator section: use stored integrals and derivatives, graph to find intersections. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes On calculator problems, write the…:',
            options: [
              'show all algebraic steps',
              'Round to 3 decimal places unless otherwise specified',
              'On calculator problems, write the integral/equation being computed',
              'use stored integrals and derivatives, graph to find intersections'
            ],
            correctAnswer: 2,
            explanation: 'Correct — On calculator problems, write the integral/equation being computed. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Round to 3 decimal places unless…?',
            options: [
              'use stored integrals and derivatives, graph to find intersections',
              'On calculator problems, write the integral/equation being computed',
              'show all algebraic steps',
              'Round to 3 decimal places unless otherwise specified'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Round to 3 decimal places unless otherwise specified. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'free-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculator section',
            options: ['show all algebraic steps', 'On calculator problems, write the integral/equation being computed', 'Round to 3 decimal places unless otherwise specified', 'use stored integrals and derivatives, graph to find intersections']
          },
          {
            label: 'No-calculator section',
            options: ['Round to 3 decimal places unless otherwise specified', 'On calculator problems, write the integral/equation being computed', 'use stored integrals and derivatives, graph to find intersections', 'show all algebraic steps']
          }
        ],
        correctAnswers: ['use stored integrals and derivatives, graph to find intersections', 'show all algebraic steps'],
        hint1: 'Think about what each concept specifically describes in Calculator vs No-Calculator Sections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Calculator vs No-Calculator Sections describes a specific idea. Calculator section: use stored integrals and derivatives, graph to find intersections. No-calculator section: show all algebraic steps.'
      }
    }
  ]
}
