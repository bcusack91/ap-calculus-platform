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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Vertical shift" refer to in precalculus?',
            options: [
              'Shifts do not change the shape, only the position',
              'horizontal shifts are opposite to the sign inside',
              'f(x - h) moves the graph right (h > 0) or left (h < 0)',
              'f(x) + k moves the graph up (k > 0) or down (k < 0)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Vertical shift: f(x) + k moves the graph up (k > 0) or down (k < 0). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Transformations, which explains Note?',
            options: [
              'horizontal shifts are opposite to the sign inside',
              'Shifts do not change the shape, only the position',
              'f(x - h) moves the graph right (h > 0) or left (h < 0)',
              'f(x) + k moves the graph up (k > 0) or down (k < 0)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Note: horizontal shifts are opposite to the sign inside. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertical shift',
            options: ['f(x - h) moves the graph right (h > 0) or left (h < 0)', 'horizontal shifts are opposite to the sign inside', 'Shifts do not change the shape, only the position', 'f(x) + k moves the graph up (k > 0) or down (k < 0)']
          },
          {
            label: 'Horizontal shift',
            options: ['f(x) + k moves the graph up (k > 0) or down (k < 0)', 'Shifts do not change the shape, only the position', 'horizontal shifts are opposite to the sign inside', 'f(x - h) moves the graph right (h > 0) or left (h < 0)']
          },
          {
            label: 'Note',
            options: ['horizontal shifts are opposite to the sign inside', 'Shifts do not change the shape, only the position', 'f(x) + k moves the graph up (k > 0) or down (k < 0)', 'f(x - h) moves the graph right (h > 0) or left (h < 0)']
          }
        ],
        correctAnswers: ['f(x) + k moves the graph up (k > 0) or down (k < 0)', 'f(x - h) moves the graph right (h > 0) or left (h < 0)', 'horizontal shifts are opposite to the sign inside'],
        hint1: 'Think about what each concept specifically describes in Transformations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transformations describes a specific idea. Vertical shift: f(x) + k moves the graph up (k > 0) or down (k < 0). Horizontal shift: f(x - h) moves the graph right (h > 0) or left (h < 0). Note: horizontal shifts are opposite to the sign inside.'
      }
    }
  ]
}
