export const precalcContinuityPart2Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'conti2-intro',
      type: 'text' as const,
      content: `
# Types of Discontinuities

**Part 2 of 7 — Types of Discontinuities**

### 1. Removable discontinuity (hole)

limit exists but f(c) ≠ limit or f(c) undefined

### 2. Jump discontinuity

left and right limits exist but are not equal

### 3. Infinite discontinuity (vertical asymptote)

limit is ±∞

### 4. Oscillating discontinuity

the function oscillates (e.g., sin(1/x) near 0)
      `
    },
    {
      id: 'conti2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of types of discontinuities?',
            options: [
              'Removable discontinuity (hole)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Removable discontinuity (hole): limit exists but f(c) ≠ limit or f(c) undefined'
          },
          {
            question: 'In the context of types of discontinuities, which is accurate?',
            options: [
              'limit is ±∞',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Infinite discontinuity (vertical asymptote): limit is ±∞'
          }
        ]
      }
    },
    {
      id: 'conti2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Removable discontinuity (hole)**: limit exists but f(c) ≠ limit or f(c) undefined
- **Jump discontinuity**: left and right limits exist but are not equal
- **Infinite discontinuity (vertical asymptote)**: limit is ±∞
- **Oscillating discontinuity**: the function oscillates (e.g., sin(1/x) near 0)
      `
    },
    {
      id: 'conti2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to types of discontinuities?',
            options: [
              'the function oscillates (e.g., sin(1/x) near 0)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Oscillating discontinuity: the function oscillates (e.g., sin(1/x) near 0)'
          }
        ]
      }
    },
    {
      id: 'conti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Removable discontinuity (hole)',
            options: ['limit exists but f(c) ≠ limit or f(c) undefined', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Jump discontinuity',
            options: ['left and right limits exist but are not equal', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Infinite discontinuity (vertical asymptote)',
            options: ['limit is ±∞', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['limit exists but f(c) ≠ limit or f(c) undefined', 'left and right limits exist but are not equal', 'limit is ±∞'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Types of Discontinuities.'
      }
    }
  ]
}
