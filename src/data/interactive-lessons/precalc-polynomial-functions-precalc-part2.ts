export const precalcPolynomialPart2Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn2-intro',
      type: 'text' as const,
      content: `
# End Behavior

**Part 2 of 7 — End Behavior**

### 1. Even-degree polynomials

both ends go the same direction

### 2. Odd-degree polynomials

ends go in opposite directions

### 3. Positive leading coefficient with even degree

both ends up

### 4. Negative leading coefficient with odd degree

left end up, right end down
      `
    },
    {
      id: 'polyn2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Even-degree polynomials" refer to in precalculus?',
            options: [
              'ends go in opposite directions',
              'both ends up',
              'both ends go the same direction',
              'left end up, right end down'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Even-degree polynomials: both ends go the same direction. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Positive leading coefficient with even degree?',
            options: [
              'ends go in opposite directions',
              'both ends go the same direction',
              'both ends up',
              'left end up, right end down'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Positive leading coefficient with even degree: both ends up. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polyn2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Even-degree polynomials**: both ends go the same direction
- **Odd-degree polynomials**: ends go in opposite directions
- **Positive leading coefficient with even degree**: both ends up
- **Negative leading coefficient with odd degree**: left end up, right end down
      `
    },
    {
      id: 'polyn2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to end behavior?',
            options: [
              'left end up, right end down',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Negative leading coefficient with odd degree: left end up, right end down'
          }
        ]
      }
    },
    {
      id: 'polyn2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Even-degree polynomials',
            options: ['left end up, right end down', 'both ends go the same direction', 'both ends up', 'ends go in opposite directions']
          },
          {
            label: 'Odd-degree polynomials',
            options: ['ends go in opposite directions', 'both ends up', 'left end up, right end down', 'both ends go the same direction']
          },
          {
            label: 'Positive leading coefficient with even degree',
            options: ['both ends up', 'left end up, right end down', 'ends go in opposite directions', 'both ends go the same direction']
          }
        ],
        correctAnswers: ['both ends go the same direction', 'ends go in opposite directions', 'both ends up'],
        hint1: 'Think about what each concept specifically describes in End Behavior.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in End Behavior describes a specific idea. Even-degree polynomials: both ends go the same direction. Odd-degree polynomials: ends go in opposite directions. Positive leading coefficient with even degree: both ends up.'
      }
    }
  ]
}
