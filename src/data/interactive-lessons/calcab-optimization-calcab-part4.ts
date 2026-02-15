export const calcABOptimizationPart4Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim4-intro',
      type: 'text' as const,
      content: `
# Applied Optimization

**Part 4 of 7 — Applied Optimization**

### 1. Maximum area enclosed by a fixed perimeter

Maximum area enclosed by a fixed perimeter

### 2. Minimum distance between a point and a curve

Minimum distance between a point and a curve

### 3. Maximizing volume of a box given material constraints

Maximizing volume of a box given material constraints

### 4. Minimum surface area for a given volume

Minimum surface area for a given volume
      `
    },
    {
      id: 'optim4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of applied optimization?',
            options: [
              'Maximum area enclosed by a fixed perimeter',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Maximum area enclosed by a fixed perimeter'
          },
          {
            question: 'In the context of applied optimization, which is accurate?',
            options: [
              'Maximizing volume of a box given material constraints',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Maximizing volume of a box given material constraints'
          }
        ]
      }
    },
    {
      id: 'optim4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Maximum area enclosed by a fixed perimeter**
- **Minimum distance between a point and a curve**
- **Maximizing volume of a box given material constraints**
- **Minimum surface area for a given volume**
      `
    },
    {
      id: 'optim4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applied optimization?',
            options: [
              'Minimum surface area for a given volume',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Minimum surface area for a given volume'
          }
        ]
      }
    },
    {
      id: 'optim4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maximum area enclosed by a fixed perimeter',
            options: ['Maximum area enclosed by a fixed perimeter', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Minimum distance between a point and a curve',
            options: ['Minimum distance between a point and a curve', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Maximizing volume of a box given material constraints',
            options: ['Maximizing volume of a box given material constrai', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Maximum area enclosed by a fixed perimeter', 'Minimum distance between a point and a curve', 'Maximizing volume of a box given material constrai'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Applied Optimization.'
      }
    }
  ]
}
