export const precalcLimitsPart4Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit4-intro',
      type: 'text' as const,
      content: `
# One-Sided Limits

**Part 4 of 7 — One-Sided Limits**

### 1. Left-hand limit

lim(x→c⁻) f(x) — approaching from the left

### 2. Right-hand limit

lim(x→c⁺) f(x) — approaching from the right

### 3. The two-sided limit exists iff both one-sided limits exist and are equal

The two-sided limit exists iff both one-sided limits exist and are equal

### 4. Jump discontinuity

one-sided limits exist but are not equal
      `
    },
    {
      id: 'limit4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of one-sided limits?',
            options: [
              'Left-hand limit',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Left-hand limit: lim(x→c⁻) f(x) — approaching from the left'
          },
          {
            question: 'In the context of one-sided limits, which is accurate?',
            options: [
              'The two-sided limit exists iff both one-sided limits exist and are equal',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The two-sided limit exists iff both one-sided limits exist and are equal'
          }
        ]
      }
    },
    {
      id: 'limit4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Left-hand limit**: lim(x→c⁻) f(x) — approaching from the left
- **Right-hand limit**: lim(x→c⁺) f(x) — approaching from the right
- **The two-sided limit exists iff both one-sided limits exist and are equal**
- **Jump discontinuity**: one-sided limits exist but are not equal
      `
    },
    {
      id: 'limit4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to one-sided limits?',
            options: [
              'one-sided limits exist but are not equal',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Jump discontinuity: one-sided limits exist but are not equal'
          }
        ]
      }
    },
    {
      id: 'limit4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Left-hand limit',
            options: ['lim(x→c⁻) f(x) — approaching from the left', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Right-hand limit',
            options: ['lim(x→c⁺) f(x) — approaching from the right', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'The two-sided limit exists iff both one-sided limits exist and are equal',
            options: ['The two-sided limit exists iff both one-sided limi', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['lim(x→c⁻) f(x) — approaching from the left', 'lim(x→c⁺) f(x) — approaching from the right', 'The two-sided limit exists iff both one-sided limi'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding One-Sided Limits.'
      }
    }
  ]
}
