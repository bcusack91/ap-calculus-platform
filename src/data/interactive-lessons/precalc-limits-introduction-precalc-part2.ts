export const precalcLimitsPart2Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit2-intro',
      type: 'text' as const,
      content: `
# Evaluating Limits Numerically & Graphically

**Part 2 of 7 — Evaluating Limits Numerically & Graphically**

### 1. Numerical

make a table with x-values approaching c from both sides

### 2. Graphical

follow the curve from both sides toward x = c

### 3. If left and right approaches agree, the limit exists

If left and right approaches agree, the limit exists

### 4. If they disagree or go to ±∞, the limit does not exist (or is infinite)

If they disagree or go to ±∞, the limit does not exist (or is infinite)
      `
    },
    {
      id: 'limit2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Numerical?',
            options: [
              'If left and right approaches agree, the limit exists',
              'make a table with x-values approaching c from both sides',
              'follow the curve from both sides toward x = c',
              'If they disagree or go to ±∞, the limit does not exist (or is infinite)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Numerical: make a table with x-values approaching c from both sides. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes If left and right approaches agree, the…:',
            options: [
              'follow the curve from both sides toward x = c',
              'make a table with x-values approaching c from both sides',
              'If they disagree or go to ±∞, the limit does not exist (or is infinite)',
              'If left and right approaches agree, the limit exists'
            ],
            correctAnswer: 3,
            explanation: 'Correct — If left and right approaches agree, the limit exists. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Numerical**: make a table with x-values approaching c from both sides
- **Graphical**: follow the curve from both sides toward x = c
- **If left and right approaches agree, the limit exists**
- **If they disagree or go to ±∞, the limit does not exist (or is infinite)**
      `
    },
    {
      id: 'limit2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to evaluating limits numerically & graphically?',
            options: [
              'If they disagree or go to ±∞, the limit does not exist (or is infinite)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'If they disagree or go to ±∞, the limit does not exist (or is infinite)'
          }
        ]
      }
    },
    {
      id: 'limit2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Numerical',
            options: ['follow the curve from both sides toward x = c', 'If left and right approaches agree, the limit exists', 'If they disagree or go to ±∞, the limit does not exist (or is infinite)', 'make a table with x-values approaching c from both sides']
          },
          {
            label: 'Graphical',
            options: ['If left and right approaches agree, the limit exists', 'follow the curve from both sides toward x = c', 'make a table with x-values approaching c from both sides', 'If they disagree or go to ±∞, the limit does not exist (or is infinite)']
          }
        ],
        correctAnswers: ['make a table with x-values approaching c from both sides', 'follow the curve from both sides toward x = c'],
        hint1: 'Think about what each concept specifically describes in Evaluating Limits Numerically & Graphically.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evaluating Limits Numerically & Graphically describes a specific idea. Numerical: make a table with x-values approaching c from both sides. Graphical: follow the curve from both sides toward x = c.'
      }
    }
  ]
}
