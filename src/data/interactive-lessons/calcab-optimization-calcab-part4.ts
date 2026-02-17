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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Maximum area enclosed by a fixed…" refer to in calculus?',
            options: [
              'Maximum area enclosed by a fixed perimeter',
              'Minimum surface area for a given volume',
              'Maximizing volume of a box given material constraints',
              'Minimum distance between a point and a curve'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Maximum area enclosed by a fixed perimeter. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Maximizing volume of a box given…?',
            options: [
              'Minimum surface area for a given volume',
              'Maximum area enclosed by a fixed perimeter',
              'Maximizing volume of a box given material constraints',
              'Minimum distance between a point and a curve'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Maximizing volume of a box given material constraints. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Minimum surface area for a given volume?',
            options: [
              'Maximum area enclosed by a fixed perimeter',
              'Minimum surface area for a given volume',
              'Minimum distance between a point and a curve',
              'Maximizing volume of a box given material constraints'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Minimum surface area for a given volume. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'optim4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maximum area enclosed by a fixed…',
            options: ['Minimum distance between a point and a curve', 'Minimum surface area for a given volume', 'Maximizing volume of a box given material constraints', 'Maximum area enclosed by a fixed perimeter']
          },
          {
            label: 'Minimum distance between a point and a…',
            options: ['Minimum distance between a point and a curve', 'Maximum area enclosed by a fixed perimeter', 'Maximizing volume of a box given material constraints', 'Minimum surface area for a given volume']
          },
          {
            label: 'Maximizing volume of a box given…',
            options: ['Minimum surface area for a given volume', 'Maximizing volume of a box given material constraints', 'Minimum distance between a point and a curve', 'Maximum area enclosed by a fixed perimeter']
          }
        ],
        correctAnswers: ['Maximum area enclosed by a fixed perimeter', 'Minimum distance between a point and a curve', 'Maximizing volume of a box given material constraints'],
        hint1: 'Think about what each concept specifically describes in Applied Optimization.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applied Optimization describes a specific idea. Maximum area enclosed by a fixed perimeter. Minimum distance between a point and a curve. Maximizing volume of a box given material constraints.'
      }
    }
  ]
}
