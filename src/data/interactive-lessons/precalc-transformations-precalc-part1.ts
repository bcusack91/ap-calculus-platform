export const precalcTransformationsPart1Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'trans1-intro',
      type: 'text' as const,
      content: `
# 📈 Transformations

**Part 1 of 7 — Vertical & Horizontal Shifts**

### 1. Vertical shift

f(x) + k moves the graph up (k > 0) or down (k < 0)

### 2. Horizontal shift

f(x - h) moves the graph right (h > 0) or left (h < 0)

### 3. Note

horizontal shifts are opposite to the sign inside

### 4. Shifts do not change the shape, only the position

Shifts do not change the shape, only the position
      `
    },
    {
      id: 'trans1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of vertical & horizontal shifts?',
            options: [
              'Vertical shift',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Vertical shift: f(x) + k moves the graph up (k > 0) or down (k < 0)'
          },
          {
            question: 'In the context of vertical & horizontal shifts, which is accurate?',
            options: [
              'horizontal shifts are opposite to the sign inside',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Note: horizontal shifts are opposite to the sign inside'
          }
        ]
      }
    },
    {
      id: 'trans1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Vertical shift**: f(x) + k moves the graph up (k > 0) or down (k < 0)
- **Horizontal shift**: f(x - h) moves the graph right (h > 0) or left (h < 0)
- **Note**: horizontal shifts are opposite to the sign inside
- **Shifts do not change the shape, only the position**
      `
    },
    {
      id: 'trans1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to vertical & horizontal shifts?',
            options: [
              'Shifts do not change the shape, only the position',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Shifts do not change the shape, only the position'
          }
        ]
      }
    },
    {
      id: 'trans1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertical shift',
            options: ['f(x) + k moves the graph up (k > 0) or down (k < 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Horizontal shift',
            options: ['f(x - h) moves the graph right (h > 0) or left (h ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Note',
            options: ['horizontal shifts are opposite to the sign inside', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(x) + k moves the graph up (k > 0) or down (k < 0', 'f(x - h) moves the graph right (h > 0) or left (h ', 'horizontal shifts are opposite to the sign inside'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Vertical & Horizontal Shifts.'
      }
    }
  ]
}
