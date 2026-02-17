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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Removable discontinuity (hole)" refer to in precalculus?',
            options: [
              'the function oscillates (e.g., sin(1/x) near 0)',
              'limit exists but f(c) ≠ limit or f(c) undefined',
              'limit is ±∞',
              'left and right limits exist but are not equal'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Removable discontinuity (hole): limit exists but f(c) ≠ limit or f(c) undefined. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Infinite discontinuity (vertical asymptote)?',
            options: [
              'limit exists but f(c) ≠ limit or f(c) undefined',
              'the function oscillates (e.g., sin(1/x) near 0)',
              'left and right limits exist but are not equal',
              'limit is ±∞'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Infinite discontinuity (vertical asymptote): limit is ±∞. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Removable discontinuity (hole)',
            options: ['the function oscillates (e.g., sin(1/x) near 0)', 'limit exists but f(c) ≠ limit or f(c) undefined', 'left and right limits exist but are not equal', 'limit is ±∞']
          },
          {
            label: 'Jump discontinuity',
            options: ['left and right limits exist but are not equal', 'the function oscillates (e.g., sin(1/x) near 0)', 'limit is ±∞', 'limit exists but f(c) ≠ limit or f(c) undefined']
          },
          {
            label: 'Infinite discontinuity (vertical asymptote)',
            options: ['left and right limits exist but are not equal', 'the function oscillates (e.g., sin(1/x) near 0)', 'limit exists but f(c) ≠ limit or f(c) undefined', 'limit is ±∞']
          }
        ],
        correctAnswers: ['limit exists but f(c) ≠ limit or f(c) undefined', 'left and right limits exist but are not equal', 'limit is ±∞'],
        hint1: 'Think about what each concept specifically describes in Types of Discontinuities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Types of Discontinuities describes a specific idea. Removable discontinuity (hole): limit exists but f(c) ≠ limit or f(c) undefined. Jump discontinuity: left and right limits exist but are not equal. Infinite discontinuity (vertical asymptote): limit is ±∞.'
      }
    }
  ]
}
