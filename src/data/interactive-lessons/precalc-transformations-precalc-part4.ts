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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Order of transformations" refer to in precalculus?',
            options: [
              'a controls vertical stretch/reflection; b controls horizontal stretch/reflection',
              'a · f(b(x - h)) + k',
              'horizontal shifts/stretches first, then vertical',
              'h controls horizontal shift; k controls vertical shift'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Order of transformations: horizontal shifts/stretches first, then vertical. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about a controls vertical stretch/reflection;…?',
            options: [
              'h controls horizontal shift; k controls vertical shift',
              'horizontal shifts/stretches first, then vertical',
              'a controls vertical stretch/reflection; b controls horizontal stretch/reflection',
              'a · f(b(x - h)) + k'
            ],
            correctAnswer: 2,
            explanation: 'Correct — a controls vertical stretch/reflection; b controls horizontal stretch/reflection. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Order of transformations',
            options: ['h controls horizontal shift; k controls vertical shift', 'a · f(b(x - h)) + k', 'a controls vertical stretch/reflection; b controls horizontal stretch/reflection', 'horizontal shifts/stretches first, then vertical']
          },
          {
            label: 'General form',
            options: ['horizontal shifts/stretches first, then vertical', 'h controls horizontal shift; k controls vertical shift', 'a controls vertical stretch/reflection; b controls horizontal stretch/reflection', 'a · f(b(x - h)) + k']
          }
        ],
        correctAnswers: ['horizontal shifts/stretches first, then vertical', 'a · f(b(x - h)) + k'],
        hint1: 'Think about what each concept specifically describes in Combining Transformations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Combining Transformations describes a specific idea. Order of transformations: horizontal shifts/stretches first, then vertical. General form: a · f(b(x - h)) + k.'
      }
    }
  ]
}
