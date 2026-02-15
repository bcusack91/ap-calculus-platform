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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of end behavior?',
            options: [
              'Even-degree polynomials',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Even-degree polynomials: both ends go the same direction'
          },
          {
            question: 'In the context of end behavior, which is accurate?',
            options: [
              'both ends up',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Positive leading coefficient with even degree: both ends up'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Even-degree polynomials',
            options: ['both ends go the same direction', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Odd-degree polynomials',
            options: ['ends go in opposite directions', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Positive leading coefficient with even degree',
            options: ['both ends up', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['both ends go the same direction', 'ends go in opposite directions', 'both ends up'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding End Behavior.'
      }
    }
  ]
}
