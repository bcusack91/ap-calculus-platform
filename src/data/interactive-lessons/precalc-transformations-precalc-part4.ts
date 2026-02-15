export const precalcTransformationsPart4Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'trans4-intro',
      type: 'text' as const,
      content: `
# Combining Transformations

**Part 4 of 7 — Combining Transformations**

### 1. Order of transformations

horizontal shifts/stretches first, then vertical

### 2. General form

a · f(b(x - h)) + k

### 3. a controls vertical stretch/reflection; b controls horizontal stretch/reflection

a controls vertical stretch/reflection; b controls horizontal stretch/reflection

### 4. h controls horizontal shift; k controls vertical shift

h controls horizontal shift; k controls vertical shift
      `
    },
    {
      id: 'trans4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of combining transformations?',
            options: [
              'Order of transformations',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Order of transformations: horizontal shifts/stretches first, then vertical'
          },
          {
            question: 'In the context of combining transformations, which is accurate?',
            options: [
              'a controls vertical stretch/reflection; b controls horizontal stretch/reflection',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'a controls vertical stretch/reflection; b controls horizontal stretch/reflection'
          }
        ]
      }
    },
    {
      id: 'trans4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Order of transformations**: horizontal shifts/stretches first, then vertical
- **General form**: a · f(b(x - h)) + k
- **a controls vertical stretch/reflection; b controls horizontal stretch/reflection**
- **h controls horizontal shift; k controls vertical shift**
      `
    },
    {
      id: 'trans4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to combining transformations?',
            options: [
              'h controls horizontal shift; k controls vertical shift',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'h controls horizontal shift; k controls vertical shift'
          }
        ]
      }
    },
    {
      id: 'trans4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Order of transformations',
            options: ['horizontal shifts/stretches first, then vertical', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'General form',
            options: ['a · f(b(x - h)) + k', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'a controls vertical stretch/reflection; b controls horizontal stretch/reflection',
            options: ['a controls vertical stretch/reflection; b controls', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['horizontal shifts/stretches first, then vertical', 'a · f(b(x - h)) + k', 'a controls vertical stretch/reflection; b controls'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Combining Transformations.'
      }
    }
  ]
}
