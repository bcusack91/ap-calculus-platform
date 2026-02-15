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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of evaluating limits numerically & graphically?',
            options: [
              'Numerical',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Numerical: make a table with x-values approaching c from both sides'
          },
          {
            question: 'In the context of evaluating limits numerically & graphically, which is accurate?',
            options: [
              'If left and right approaches agree, the limit exists',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If left and right approaches agree, the limit exists'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Numerical',
            options: ['make a table with x-values approaching c from both', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Graphical',
            options: ['follow the curve from both sides toward x = c', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'If left and right approaches agree, the limit exists',
            options: ['If left and right approaches agree, the limit exis', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['make a table with x-values approaching c from both', 'follow the curve from both sides toward x = c', 'If left and right approaches agree, the limit exis'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Evaluating Limits Numerically & Graphically.'
      }
    }
  ]
}
